import { dimensionKeys, } from "./quiz-data.js";
import { dimensionsFor, getLevels, getProfiles, getQuestions } from "./i18n.js";
const unique = (items, count) => [...new Set(items.filter((item) => Boolean(item)))].slice(0, count);
function scoreLabel(score, locale) {
    if (locale === "en") {
        if (score >= 80)
            return "Stable foundation";
        if (score >= 65)
            return "Ready to improve";
        if (score >= 50)
            return "Needs a deeper review";
        return "Rebuild the basics first";
    }
    if (score >= 80)
        return "안정적인 기반";
    if (score >= 65)
        return "개선 가능한 상태";
    if (score >= 50)
        return "더 깊은 확인이 필요한 상태";
    return "기본부터 재정비 필요";
}
function recommendLevel(path, scores, readiness, selected, redFlags) {
    const weakCount = dimensionKeys.filter((key) => scores[key] < 60).length;
    const partnership = selected.some((choice) => choice.signal === "partnership");
    const partnershipReady = readiness >= 72
        && scores.finance >= 65
        && scores.team >= 65
        && scores.data >= 65
        && scores.growth >= 65
        && redFlags.length === 0;
    if (partnership && partnershipReady)
        return 6;
    if (path === "preopen") {
        if (scores.concept < 55 || scores.market < 55 || weakCount >= 6)
            return 5;
        if (weakCount === 1 && readiness >= 72)
            return 1;
        return 3;
    }
    if (scores.concept < 50 && weakCount >= 4)
        return 5;
    if (weakCount === 1 && readiness >= 70)
        return 1;
    if (readiness >= 75 && weakCount <= 3 && redFlags.length === 0)
        return 4;
    return 2;
}
function getRoute(readiness, levelNumber, redFlags, locale) {
    if (locale === "en") {
        if (redFlags.length >= 2)
            return { label: "Review information before consulting", tone: "pause", detail: "Before starting production, the marked risks, available information and decision responsibilities should be reviewed." };
        if (levelNumber === 6)
            return { label: "Partnership candidate", tone: "conditional", detail: "A long-term operating partnership may be possible, subject to a separate review of finance, legal terms, authority, brand rights, accounting and exit conditions." };
        if (redFlags.length === 1 || readiness < 65)
            return { label: "Deeper diagnosis first", tone: "conditional", detail: "A paid diagnostic review of the site, information and decision structure should come before confirming the consulting scope." };
        return { label: "Ready to discuss scope", tone: "good", detail: "The main priorities are relatively clear from the current answers. Scope, timing and fee can be confirmed after reviewing the relevant information." };
    }
    if (redFlags.length >= 2) {
        return {
            label: "자료 확인 후 상담",
            tone: "pause",
            detail: "바로 제작에 착수하기보다 표시된 위험 항목의 자료와 책임 구조를 먼저 확인해야 합니다.",
        };
    }
    if (levelNumber === 6) {
        return {
            label: "파트너십 후보",
            tone: "conditional",
            detail: "장기 운영 협업 가능성이 있습니다. 다만 재무·법무·권한·브랜드 권리·회계·중단 조건을 별도로 확인한 뒤 최종 판단합니다.",
        };
    }
    if (redFlags.length === 1 || readiness < 65) {
        return {
            label: "정밀진단 우선",
            tone: "conditional",
            detail: "컨설팅 범위를 정하기 전에 현장·데이터·의사결정 구조를 확인하는 유료 진단 세션이 적합합니다.",
        };
    }
    return {
        label: "범위 협의 가능",
        tone: "good",
        detail: "현재 응답 기준으로 우선 영역이 비교적 선명합니다. 관련 자료 검토 후 범위·기간·비용을 확정할 수 있습니다.",
    };
}
export function calculateResult(path, answers, locale = "ko") {
    const questions = getQuestions(path, locale);
    const profiles = getProfiles(locale);
    const localizedLevels = getLevels(locale);
    const localizedDimensions = dimensionsFor(locale);
    const totals = Object.fromEntries(dimensionKeys.map((key) => [key, { value: 0, count: 0 }]));
    const selected = questions.map((question) => {
        const choiceIndex = answers[question.id] ?? 0;
        const choice = question.choices[choiceIndex] ?? question.choices[0];
        totals[question.dimension].value += choice.score;
        totals[question.dimension].count += 1;
        return choice;
    });
    const scores = Object.fromEntries(dimensionKeys.map((key) => [
        key,
        Math.round((totals[key].value / (totals[key].count * 4)) * 100),
    ]));
    const readiness = Math.round(dimensionKeys.reduce((sum, key) => sum + scores[key], 0) / dimensionKeys.length);
    const redFlags = unique(selected.map((choice) => choice.redFlag), 5);
    const levelNumber = recommendLevel(path, scores, readiness, selected, redFlags);
    const sorted = dimensionKeys
        .map((dimension) => ({
        dimension,
        label: localizedDimensions[dimension].label,
        score: scores[dimension],
        profile: profiles[dimension],
    }))
        .sort((a, b) => a.score - b.score);
    const partnership = selected.some((choice) => choice.signal === "partnership");
    const primaryDimension = sorted[0].score >= 70 && scores.growth >= 70
        ? "growth"
        : partnership && scores.growth <= sorted[0].score + 8
            ? "growth"
            : sorted[0].dimension;
    const primary = profiles[primaryDimension];
    const strongest = [...sorted].sort((a, b) => b.score - a.score).slice(0, 3);
    const priorities = sorted.slice(0, 3);
    const pathOpportunity = locale === "en"
        ? path === "preopen"
            ? "Changing the structure before opening can reduce later repair costs and team trial and error."
            : "Existing guests and operating records can make improvements easier to measure."
        : path === "preopen"
            ? "오픈 전에 구조를 바꾸면 향후 수정비용과 팀의 시행착오를 줄일 수 있습니다."
            : "기존 고객과 운영 기록을 활용하면 개선 효과를 비교적 빠르게 확인할 수 있습니다.";
    return {
        readiness,
        scoreTitle: locale === "en" ? path === "preopen" ? "Opening readiness" : "Operating health" : path === "preopen" ? "오픈 준비도" : "운영 건강도",
        scoreLabel: scoreLabel(readiness, locale),
        scores,
        primaryDimension,
        profile: primary,
        level: localizedLevels[levelNumber],
        route: getRoute(readiness, levelNumber, redFlags, locale),
        strengths: strongest.map((item) => item.profile.strength),
        weaknesses: priorities.map((item) => item.profile.weakness),
        opportunities: unique([
            primary.opportunity,
            ...selected.map((choice) => choice.opportunity),
            pathOpportunity,
        ], 3),
        threats: unique([
            ...redFlags,
            ...selected.map((choice) => choice.threat),
            ...priorities.map((item) => item.profile.threat),
        ], 3),
        priorities,
        modules: priorities,
        redFlags,
    };
}
