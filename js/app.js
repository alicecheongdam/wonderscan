import { calculateResult } from "./diagnostic.js";
import { dimensionsFor, getQuestions, ui } from "./i18n.js";
import { getCharacter, getCharacterUi } from "./characters.js";
import { config } from "./config.js";

/**
 * UI controller only. Diagnostic content lives in quiz-data.js/i18n.js and
 * scoring rules live in diagnostic.js so each concern can be changed alone.
 */
const state = {
  locale: "ko",
  screen: "start",
  path: "preopen",
  selectedPath: null,
  lead: {},
  answers: {},
  questionIndex: 0,
  result: null,
  submissionId: "",
  submissionState: "idle",
  copied: false,
};

const app = document.querySelector("#app");
const byId = (id) => document.getElementById(id);
const template = (id) => document.querySelector(`#${id}`).content.cloneNode(true);
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
const listMarkup = (items) => items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

function mount(fragment) {
  app.replaceChildren(fragment);
  document.documentElement.lang = state.locale;
  document.title = state.locale === "ko" ? "Wonder Lab 바 사전진단" : "Wonder Lab Bar Diagnostic";
  document.querySelectorAll("[data-brand]").forEach((slot) => slot.replaceWith(template("brand-template")));
}

function bindLanguageSwitches() {
  document.querySelectorAll("[data-locale]").forEach((button) => {
    button.classList.toggle("active", button.dataset.locale === state.locale);
    button.closest("[role='group']").setAttribute("aria-label", ui[state.locale].language);
    button.addEventListener("click", () => {
      // Preserve partially completed lead fields when the language changes.
      const leadForm = document.querySelector("#lead-form");
      if (leadForm) state.lead = captureLead(leadForm);
      state.locale = button.dataset.locale;
      if (state.screen === "result") state.result = calculateResult(state.path, state.answers, state.locale);
      render();
    });
  });
}

function applyCopy(root, copy) {
  root.querySelectorAll("[data-copy]").forEach((node) => { node.textContent = copy[node.dataset.copy]; });
  root.querySelectorAll("[data-field]").forEach((node) => { node.textContent = copy.fields[node.dataset.field]; });
}

function captureLead(form) {
  const values = new FormData(form);
  return {
    companyName: values.get("companyName")?.trim() ?? "",
    venueName: values.get("venueName")?.trim() ?? "",
    contactName: values.get("contactName")?.trim() ?? "",
    contactRole: values.get("contactRole") ?? "",
    email: values.get("email")?.trim() ?? "",
    phone: values.get("phone")?.trim() ?? "",
    location: values.get("location")?.trim() ?? "",
    website: values.get("website")?.trim() ?? "",
    consent: values.get("consent") === "on",
    companyFax: values.get("companyFax")?.trim() ?? "",
  };
}

function renderStart() {
  const copy = ui[state.locale];
  const fragment = template("start-template");
  applyCopy(fragment, copy);
  fragment.querySelector("#start-title").innerHTML = copy.startTitle.map(escapeHtml).join("<br>");
  fragment.querySelector("#meta-row").innerHTML = copy.meta.map((item) => `<span>${escapeHtml(item)}</span>`).join("");

  const roleSelect = fragment.querySelector("[name='contactRole']");
  roleSelect.innerHTML = `<option value="">${escapeHtml(copy.placeholders.role)}</option>${copy.roles.map(([value, label]) => `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`).join("")}`;
  const placeholders = { companyName: copy.placeholders.company, venueName: copy.placeholders.venue, contactName: copy.placeholders.name, phone: copy.placeholders.phone, location: copy.placeholders.location };
  Object.entries(placeholders).forEach(([name, value]) => fragment.querySelector(`[name='${name}']`).placeholder = value);

  mount(fragment);
  bindLanguageSwitches();
  const leadForm = byId("lead-form");
  Object.entries(state.lead).forEach(([name, value]) => {
    const control = leadForm.elements.namedItem(name);
    if (!control) return;
    if (control.type === "checkbox") control.checked = Boolean(value);
    else control.value = value;
  });
  document.querySelectorAll("[data-path]").forEach((button) => button.addEventListener("click", () => {
    state.selectedPath = button.dataset.path;
    document.querySelectorAll("[data-path]").forEach((card) => {
      const selected = card.dataset.path === state.selectedPath;
      card.classList.toggle("selected", selected);
      card.setAttribute("aria-pressed", String(selected));
      card.querySelector(".choice-mark").textContent = selected ? "●" : "○";
    });
  }));
  if (state.selectedPath) document.querySelector(`[data-path='${state.selectedPath}']`).click();

  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const lead = captureLead(event.currentTarget);
    const error = byId("form-error");
    if (!state.selectedPath) {
      error.textContent = copy.pathError;
      error.hidden = false;
      return;
    }
    if (!lead.consent) {
      error.textContent = copy.consentError;
      error.hidden = false;
      return;
    }
    state.lead = lead;
    state.path = state.selectedPath;
    state.submissionId = crypto.randomUUID();
    state.questionIndex = 0;
    state.answers = {};
    state.screen = "quiz";
    render();
  });
}

function renderQuiz() {
  const copy = ui[state.locale];
  const dimensions = dimensionsFor(state.locale);
  const questions = getQuestions(state.path, state.locale);
  const question = questions[state.questionIndex];
  const selected = state.answers[question.id];
  const progress = Math.round(((state.questionIndex + 1) / questions.length) * 100);
  const fragment = template("quiz-template");

  fragment.querySelector("#quiz-path").textContent = copy.path[state.path];
  fragment.querySelector("#question-number").textContent = String(state.questionIndex + 1).padStart(2, "0");
  fragment.querySelector("#question-total").textContent = `/ ${questions.length}`;
  const progressTrack = fragment.querySelector("#progress-track");
  progressTrack.setAttribute("aria-label", copy.progress);
  progressTrack.setAttribute("aria-valuenow", progress);
  progressTrack.querySelector("span").style.width = `${progress}%`;
  fragment.querySelector("#progress-copy").textContent = `${progress}% ${copy.complete} · ${dimensions[question.dimension].label}`;
  fragment.querySelector("#question-eyebrow").textContent = question.eyebrow;
  fragment.querySelector("#question-dimension").textContent = dimensions[question.dimension].short;
  fragment.querySelector("#question-title").textContent = question.title;
  fragment.querySelector("#question-help").textContent = question.help;
  const choices = fragment.querySelector("#choices");
  choices.setAttribute("aria-label", question.title);
  choices.innerHTML = question.choices.map((choice, index) => `<button type="button" role="radio" aria-checked="${selected === index}" class="choice ${selected === index ? "selected" : ""}" data-choice="${index}"><span class="choice-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHtml(choice.label)}</span><span class="choice-mark">${selected === index ? "●" : "○"}</span></button>`).join("");
  fragment.querySelector("#exit-quiz").textContent = copy.home;
  fragment.querySelector("#previous-question").textContent = copy.previous;
  fragment.querySelector("#previous-question").disabled = state.questionIndex === 0;
  fragment.querySelector("#next-question span:first-child").textContent = state.questionIndex === questions.length - 1 ? copy.result : copy.next;
  fragment.querySelector("#next-question").disabled = selected === undefined;

  mount(fragment);
  bindLanguageSwitches();
  byId("exit-quiz").addEventListener("click", restart);
  byId("previous-question").addEventListener("click", () => { state.questionIndex -= 1; render(); });
  document.querySelectorAll("[data-choice]").forEach((button) => button.addEventListener("click", () => {
    state.answers[question.id] = Number(button.dataset.choice);
    render();
  }));
  byId("next-question").addEventListener("click", () => {
    if (state.answers[question.id] === undefined) return;
    if (state.questionIndex === questions.length - 1) {
      state.result = calculateResult(state.path, state.answers, state.locale);
      state.submissionState = "sending";
      state.screen = "result";
      render();
      void sendSubmission();
      return;
    }
    state.questionIndex += 1;
    render();
  });
}

function consultationSummary() {
  const copy = ui[state.locale];
  const characterCopy = getCharacterUi(state.locale);
  const character = getCharacter(state.result.primaryDimension, state.locale);
  const result = state.result;
  const priorities = result.priorities.map((item) => `${item.label} ${item.score}${state.locale === "ko" ? "점" : ""}`).join(", ");
  const modules = result.modules.map((item) => item.label).join(", ");
  const characterLine = character ? `${characterCopy.summaryCharacter}: ${character.name}\n` : "";
  return `[${copy.summaryTitle}]\n${copy.labels.company}: ${state.lead.companyName}${state.lead.venueName ? ` · ${state.lead.venueName}` : ""}\n${copy.labels.status}: ${copy.path[state.path]}\n${copy.labels.type}: ${result.profile.code} · ${result.profile.typeName}\n${characterLine}${result.scoreTitle}: ${result.readiness}/100\n${copy.labels.priorities}: ${priorities}\n${copy.labels.paid}: ${modules}\n${copy.labels.recommendation}: Level ${result.level.number} ${result.level.name}\n${copy.labels.route}: ${result.route.label}\n${copy.labels.action}: ${result.profile.quickAction}`;
}

async function copySummary() {
  await navigator.clipboard.writeText(consultationSummary());
  state.copied = true;
  render();
  window.setTimeout(() => { state.copied = false; if (state.screen === "result") render(); }, 1800);
}

function renderSubmissionBanner() {
  const copy = ui[state.locale];
  const banner = byId("submission-banner");
  banner.className = `submission-banner ${state.submissionState}`;
  const content = {
    sending: `<b>${escapeHtml(copy.sendingTitle)}</b><span>${escapeHtml(copy.sendingText)}</span>`,
    sent: `<b>${escapeHtml(copy.sentTitle)}</b><span>${escapeHtml(copy.sentText)}</span>`,
    failed: `<b>${escapeHtml(copy.failedTitle)}</b><span>${escapeHtml(copy.failedText)}</span><button type="button" id="retry-submission">${escapeHtml(copy.retry)}</button>`,
    idle: "",
  };
  banner.innerHTML = content[state.submissionState];
  byId("retry-submission")?.addEventListener("click", () => void sendSubmission());
}

/**
 * Fills the character block. The character is keyed by result.primaryDimension,
 * which the scoring engine already produces, so no diagnostic logic changes.
 * If a character is ever missing the whole section is removed rather than
 * rendered empty.
 */
function renderCharacter(fragment, character, characterCopy) {
  const section = fragment.querySelector(".character-section");
  if (!character) {
    section?.remove();
    return;
  }
  fragment.querySelector("#character-title").textContent = characterCopy.sectionLabel;
  fragment.querySelector("#character-note").textContent = characterCopy.sectionNote;
  fragment.querySelector("#character-code").textContent = character.code;
  fragment.querySelector("#character-name").textContent = character.name;
  fragment.querySelector("#character-tagline").textContent = character.tagline;
  fragment.querySelector("#character-essence").innerHTML = character.essence
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
  fragment.querySelector("#traits-label").textContent = characterCopy.traitsLabel;
  fragment.querySelector("#character-traits").innerHTML = listMarkup(character.traits);
  fragment.querySelector("#principle-label").textContent = characterCopy.principleLabel;
  fragment.querySelector("#character-principle").textContent = character.principle;
  fragment.querySelector("#questions-label").textContent = characterCopy.questionsLabel;
  fragment.querySelector("#questions-note").textContent = characterCopy.questionsNote;
  fragment.querySelector("#character-questions").innerHTML = listMarkup(character.questions);
}

function renderResult() {
  const copy = ui[state.locale];
  const characterCopy = getCharacterUi(state.locale);
  const character = getCharacter(state.result.primaryDimension, state.locale);
  const dimensions = dimensionsFor(state.locale);
  const result = state.result;
  const fragment = template("result-template");
  const orderedScores = result.priorities.concat(Object.entries(result.scores).filter(([dimension]) => !result.priorities.some((item) => item.dimension === dimension)).map(([dimension, score]) => ({ dimension, label: dimensions[dimension].label, score, profile: result.profile })));

  fragment.querySelector("#restart").textContent = copy.restart;
  fragment.querySelector("#copy-summary").textContent = state.copied ? copy.copied : copy.copy;
  fragment.querySelector("#result-kicker").textContent = `${state.lead.companyName} · ${copy.path[state.path]}`;
  // The hero now leads with the character name; the original type name is kept
  // underneath so the existing vocabulary is not lost.
  fragment.querySelector("#type-caption").textContent = character ? characterCopy.typeCaption : "";
  fragment.querySelector("#profile-code").textContent = result.profile.code;
  fragment.querySelector("#profile-name").textContent = character ? character.name : result.profile.typeName;
  fragment.querySelector("#profile-subname").textContent = character ? result.profile.typeName : "";
  fragment.querySelector("#profile-summary").textContent = result.profile.summary;
  renderCharacter(fragment, character, characterCopy);
  const fitBadge = fragment.querySelector("#fit-badge");
  fitBadge.classList.add(result.route.tone);
  fitBadge.querySelector("b").textContent = result.route.label;
  fitBadge.querySelector("span").textContent = result.route.detail;
  fragment.querySelector("#score-ring").style.setProperty("--score", result.readiness);
  fragment.querySelector("#score-ring strong").textContent = result.readiness;
  fragment.querySelector("#score-title").textContent = result.scoreTitle;
  fragment.querySelector("#score-label").textContent = result.scoreLabel;
  fragment.querySelector("#feedback-title").textContent = copy.feedbackTitle;
  fragment.querySelector("#feedback-note").textContent = copy.feedbackNote;
  fragment.querySelector("#terry-feedback").textContent = result.profile.terryFeedback;
  fragment.querySelector("#scores-title").textContent = copy.scoresTitle;
  fragment.querySelector("#scores-note").textContent = copy.scoresNote;
  fragment.querySelector("#priority-title").textContent = copy.priorityTitle;
  fragment.querySelector("#dimension-list").innerHTML = orderedScores.map((item, index) => `<div class="dimension-row"><span>${String(index + 1).padStart(2, "0")}</span><b>${escapeHtml(item.label)}</b><div class="bar"><i style="width:${item.score}%"></i></div><strong>${item.score}</strong></div>`).join("");
  fragment.querySelector("#priority-list").innerHTML = result.priorities.map((item, index) => `<li><span>${index + 1}</span><div><b>${escapeHtml(item.label)}</b><small>${escapeHtml(item.score < 50 ? copy.urgent : item.score < 65 ? copy.priority : copy.room)}</small></div><strong>${item.score}</strong></li>`).join("");
  if (result.redFlags.length) {
    const riskBox = fragment.querySelector("#risk-box");
    riskBox.hidden = false;
    riskBox.querySelector("b").textContent = copy.risks;
    riskBox.querySelector("ul").innerHTML = listMarkup(result.redFlags);
  }
  fragment.querySelector("#swot-title").textContent = copy.swotTitle;
  fragment.querySelector("#swot-note").textContent = copy.swotNote;
  fragment.querySelector("#swot-grid").innerHTML = [["S", copy.swot[0], result.strengths, "green"], ["W", copy.swot[1], result.weaknesses, "red"], ["O", copy.swot[2], result.opportunities, "blue"], ["T", copy.swot[3], result.threats, "amber"]].map(([letter, title, items, tone]) => `<section class="swot-block ${tone}"><header><span>${letter}</span><b>${escapeHtml(title)}</b></header><ul>${listMarkup(items)}</ul></section>`).join("");
  fragment.querySelector("#paid-title").textContent = copy.paidTitle;
  fragment.querySelector("#paid-note").textContent = copy.paidNote;
  fragment.querySelector("#module-grid").innerHTML = result.modules.map((module, index) => `<article><header><span>0${index + 1}</span><small>${escapeHtml(module.profile.code)}</small></header><h3>${escapeHtml(module.label)}</h3><p>${escapeHtml(module.profile.paidScope)}</p><b>${module.score} / 100</b></article>`).join("");
  fragment.querySelector("#free-title").textContent = copy.freeTitle;
  fragment.querySelector("#free-items").innerHTML = listMarkup(copy.freeItems);
  fragment.querySelector("#deep-title").textContent = copy.deepTitle;
  fragment.querySelector("#deep-items").innerHTML = listMarkup(copy.deepItems);
  fragment.querySelector("#recommended-label").textContent = copy.recommended;
  fragment.querySelector("#level-number").textContent = `LEVEL ${result.level.number}`;
  fragment.querySelector("#level-name").textContent = result.level.name;
  fragment.querySelector("#level-korean-name").textContent = result.level.koreanName;
  fragment.querySelector("#level-responsibility").textContent = result.level.responsibility;
  fragment.querySelector("#next-step-label").textContent = copy.nextStep;
  fragment.querySelector("#first-step").textContent = result.level.firstStep;
  fragment.querySelector("#request-copy").textContent = state.copied ? copy.requested : copy.request;
  fragment.querySelector("#disclaimer").textContent = copy.disclaimer;

  mount(fragment);
  bindLanguageSwitches();
  renderSubmissionBanner();
  byId("restart").addEventListener("click", restart);
  byId("copy-summary").addEventListener("click", copySummary);
  byId("request-copy").addEventListener("click", copySummary);
}

async function sendSubmission() {
  state.submissionState = "sending";
  if (state.screen === "result") renderSubmissionBanner();
  try {
    const response = await fetch(config.submissionEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ submissionId: state.submissionId, path: state.path, answers: state.answers, lead: state.lead, locale: state.locale }),
    });
    if (!response.ok) throw new Error(`Submission failed with ${response.status}`);
    state.submissionState = "sent";
  } catch (error) {
    console.error("Wonder Scan submission failed", error);
    state.submissionState = "failed";
  }
  if (state.screen === "result") renderSubmissionBanner();
}

function restart() {
  Object.assign(state, { screen: "start", path: "preopen", selectedPath: null, lead: {}, answers: {}, questionIndex: 0, result: null, submissionId: "", submissionState: "idle", copied: false });
  render();
}

function render() {
  window.scrollTo(0, 0);
  if (state.screen === "quiz") return renderQuiz();
  if (state.screen === "result" && state.result) return renderResult();
  return renderStart();
}

render();
