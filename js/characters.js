/**
 * MBTI-style character layer for the Wonder Scan result.
 *
 * WHY THIS FILE IS SEPARATE
 * -------------------------
 * quiz-data.js, i18n.js and diagnostic.js are GENERATED from the production
 * TypeScript sources by scripts/export-standalone.mjs. Editing them by hand
 * means the next regeneration silently deletes the work. This module is
 * hand-maintained and additive: it is keyed by the same 12 dimension keys the
 * scoring engine already uses, so the diagnostic logic is untouched.
 *
 * SOURCE OF CONTENT
 * -----------------
 * Every character below is taken from Terry Kim's 12-type feedback document
 * (12type_feed_back.docx). The Korean text follows that document; the English
 * is a meaning-for-meaning translation, not a word-for-word one, per the
 * bilingual rule in the handover.
 *
 * SHAPE
 * -----
 *   name        Character title shown as the headline result (the "type").
 *   code        Existing stable result code. Do NOT rename — stored in D1.
 *   tagline     One-sentence motto in Terry's voice.
 *   essence     Two paragraphs describing the character. Rendered as the
 *               portrait body.
 *   traits      Three short chips. Keep them short; they wrap on mobile.
 *   principle   The single line from the document this character rests on.
 *   questions   The five "questions to check now" from the document.
 */

const charactersKo = {
  concept: {
    name: "꿈을 방향으로 바꾸는 설계자",
    code: "VISION ARCHITECT",
    tagline: "좋은 컨셉은 무엇을 선택하고 무엇을 포기할 것인지 결정하게 해주는 운영 기준입니다.",
    essence: [
      "당신은 인테리어의 스타일이나 메뉴의 디자인을 컨셉이라고 부르지 않는 사람입니다. 그것들은 컨셉을 밖으로 보여주는 표현일 뿐이고, 중심에는 이 바가 왜 존재하는가라는 미션과 앞으로 어떤 모습으로 성장하고 싶은가라는 비전이 있어야 한다고 믿습니다.",
      "설계자의 일은 아이디어를 더 보태는 것이 아니라 기준을 세우는 것입니다. 어떤 메뉴를 만들지, 어떤 가격을 받을지, 어떤 직원을 채용할지, 문제가 생겼을 때 무엇을 우선할지가 모두 같은 기준에서 시작되어야 합니다. 그리고 그 기준은 오너만 아는 것이 아니라, 오너가 없는 순간에도 직원이 스스로 판단할 수 있도록 공유되어야 합니다.",
    ],
    traits: ["기준을 먼저 세운다", "하지 않을 일을 정한다", "결정을 빠르게 만든다"],
    principle: "명확한 컨셉과 비전, 미션은 모든 선택의 기준이 됩니다.",
    questions: [
      "이 바는 이윤을 남기는 것 외에 왜 존재해야 하는가?",
      "우리는 어떤 손님에게 어떤 시간과 감정을 제공하려는가?",
      "손님과 직원에게 반드시 지키고 싶은 약속은 무엇인가?",
      "매출에 도움이 되더라도 우리가 하지 않을 일은 무엇인가?",
      "이 기준이 계속 쌓였을 때 3년 후 어떤 모습의 바로 성장하고 싶은가?",
    ],
  },
  market: {
    name: "고객을 이해하는 탐험가",
    code: "GUEST STRATEGIST",
    tagline: "타깃 고객을 정하는 것은 누구에게 광고할 것인지가 아니라, 누구의 눈으로 바 전체를 다시 바라볼 것인지를 정하는 일입니다.",
    essence: [
      "당신은 손님이 들어오고 매출이 발생한다는 이유만으로 문제가 없다고 결론짓지 않는 사람입니다. 타깃 고객을 정하는 것이 연령과 성별, 거주 지역을 적는 일이 아니라 그 사람이 언제, 누구와, 어떤 기분으로 찾아와 무엇을 기대하고 얼마를 지불할 수 있는지까지 이해하는 일임을 알고 있습니다.",
      "탐험가는 바의 모든 순간을 손님의 렌즈로 다시 걸어봅니다. 메뉴와 가격, 예약과 결제, 입구와 좌석, 음악과 서비스가 모두 같은 고객의 관점에서 연결되어야 합니다. 우리가 편리하다고 생각하는 방식이 손님에게도 편리한 것은 아니기 때문입니다.",
    ],
    traits: ["손님의 눈으로 본다", "가정 대신 근거를 찾는다", "불편한 지점을 먼저 고친다"],
    principle: "타깃이 불분명하면 모든 사람에게 조금씩 맞추려다 누구에게도 강한 선택 이유를 주지 못합니다.",
    questions: [
      "우리가 원하는 손님은 구체적으로 누구이며, 언제 누구와 방문하는가?",
      "그 손님은 어떤 이유로 바를 찾으며, 다른 장소 대신 우리 바를 선택해야 하는 이유는 무엇인가?",
      "그 손님은 우리 바를 어디에서 발견하고, 어떤 방식으로 예약하고 찾아오는가?",
      "메뉴, 가격, 예약, 결제와 서비스가 실제로 그 손님의 관점에서 편리하게 준비되어 있는가?",
      "현재 사용하는 프로모션 비용이 핵심 고객의 방문과 재방문으로 연결되고 있는가?",
    ],
  },
  beverage: {
    name: "아이디어를 한 잔의 음료로 완성하는 창작자",
    code: "BEVERAGE CREATOR",
    tagline: "아이디어가 머릿속이나 레시피 위에만 있을 때는 아직 메뉴가 아닙니다.",
    essence: [
      "당신은 좋은 음료가 맛만 좋은 음료가 아니라는 것을 아는 사람입니다. 집을 지을 때 그곳에서 살아갈 사람을 먼저 생각하듯, 메뉴와 음료도 이를 선택할 손님과 실제로 만들어야 하는 직원을 함께 생각해야 합니다. 뼈대를 세우고 벽돌을 쌓은 다음에야 개성과 디자인을 더할 수 있습니다.",
      "창작자의 완성은 새로운 아이디어에서 끝나지 않습니다. 재료의 보관 위치와 냉장시설, 얼음과 잔, 가니시와 장비의 위치까지 함께 설계되어야 하고, 가장 바쁜 시간에도 누가 만들든 같은 품질이 나와야 합니다. 실제 공간에서 반복해서 문제없이 만들어질 때 비로소 하나의 상품이 됩니다.",
    ],
    traits: ["맛보다 구조를 먼저 본다", "반복 가능한 품질을 만든다", "설명이 필요 없는 메뉴를 만든다"],
    principle: "좋은 음료는 맛있어야 하고, 좋은 메뉴는 선택하기 쉬워야 합니다.",
    questions: [
      "손님이 메뉴를 보고 원하는 음료를 쉽게 이해하고 선택할 수 있는가?",
      "핵심 음료의 밸런스와 온도, 희석과 질감이 누가 만들어도 같은 품질로 유지되는가?",
      "새로운 메뉴를 추가할 때 재료와 재고, 준비 시간과 장비까지 함께 검토하고 있는가?",
      "가장 바쁜 시간에도 현재의 공간과 인력으로 메뉴를 감당할 수 있는가?",
      "새로운 아이디어를 시험하고 기록하고 수정할 수 있는 과정이 마련되어 있는가?",
    ],
  },
  service: {
    name: "서비스를 경험으로 바꾸는 디자이너",
    code: "HOSPITALITY DESIGNER",
    tagline: "좋은 경험은 손님이 업장을 나가는 순간의 미소입니다.",
    essence: [
      "당신은 좋은 서비스와 좋은 경험의 차이를 구분하는 사람입니다. 서비스는 우리가 제공하는 것이지만, 경험은 손님이 자신의 상황과 감정에 따라 받아들이는 것입니다. 아무리 정성스럽게 준비한 서비스라도 그 순간의 손님에게 필요한 것이 아니라면 좋은 경험으로 남지 않습니다.",
      "디자이너는 모든 손님에게 같은 좋은 서비스를 제공하는 것을 넘어 각 손님에게 맞는 옳은 서비스를 제공합니다. 먼저 관찰하고, 확실하지 않을 때는 짧고 자연스럽게 물어보며, 부담스럽지 않은 두 가지 정도의 선택을 제안합니다. 그리고 그 판단이 특정 직원의 감각에만 의존하지 않도록 기준으로 남깁니다.",
    ],
    traits: ["제공 전에 관찰한다", "선택권을 남긴다", "경험을 하나로 연결한다"],
    principle: "서비스의 기준은 제공하는 사람의 만족이 아니라 받아들이는 손님의 감정에 있어야 합니다.",
    questions: [
      "우리는 좋은 서비스를 많이 제공하는 데 집중하고 있는가, 손님에게 필요한 서비스를 제공하는 데 집중하고 있는가?",
      "직원들은 서비스를 제공하기 전에 손님의 상태와 감정을 먼저 관찰하고 있는가?",
      "손님의 상황이 분명하지 않을 때 자연스럽게 질문하고 선택권을 제안하고 있는가?",
      "입장부터 주문, 음료 제공, 계산과 배웅까지 하나의 연결된 경험으로 설계되어 있는가?",
      "특정 직원의 개인적인 감각에 의존하지 않고 누구나 옳은 서비스를 할 수 있도록 기준과 교육이 마련되어 있는가?",
    ],
  },
  operations: {
    name: "반복 가능한 기준을 만드는 시스템 설계자",
    code: "SYSTEM BUILDER",
    tagline: "매뉴얼은 목적지가 아닙니다. 목적지까지 가는 길을 알려주는 안내입니다.",
    essence: [
      "당신에게 매뉴얼과 시스템은 목적지를 찾아가기 위한 내비게이션입니다. 아무리 좋은 차가 있어도 방향을 잃으면 도착할 수 없고, 좋은 차가 아니어도 정확한 방향을 알고 꾸준히 움직이면 결국 도착합니다. 비전과 미션이 목적지라면 매뉴얼은 그 길이고, 시스템은 팀이 그 길을 계속 걷게 만드는 구조입니다.",
      "설계자는 문서의 양으로 승부하지 않습니다. 오픈 전과 영업 중, 마감 후에 반드시 지켜야 할 가장 중요한 기준부터 정리하고, 누가 실행하고 언제까지 하며 무엇을 확인하고 문제가 생기면 어떻게 조치할지까지 연결합니다. 좋은 직원이 알아서 해주는 운영은 시스템이 아닙니다.",
    ],
    traits: ["작게 시작해 매일 반복한다", "노하우를 기록으로 남긴다", "기준을 계속 업데이트한다"],
    principle: "누가 근무하더라도 기본 품질과 속도를 유지할 수 있어야 노하우가 바의 자산으로 남습니다.",
    questions: [
      "모든 직원이 우리 바의 비전과 미션, 그리고 우리가 도착하려는 목적지를 같은 말로 설명할 수 있는가?",
      "오픈 전, 영업 중, 바쁜 시간과 마감 후에 반드시 지켜야 할 기준이 분명하게 정리되어 있는가?",
      "중요한 업무마다 담당자와 완료 시점, 확인 방법과 문제가 생겼을 때의 조치가 정해져 있는가?",
      "운영 노하우가 특정 직원의 기억과 경험이 아니라 누구나 배우고 사용할 수 있는 기록으로 남아 있는가?",
      "매뉴얼을 실제 현장에 맞게 확인하고 수정하며 모든 직원에게 다시 공유하는 과정이 마련되어 있는가?",
    ],
  },
  inventory: {
    name: "새는 비용을 막는 재고 관리자",
    code: "STOCK CONTROLLER",
    tagline: "물을 더 많이 붓기 전에 시간과 노력을 들여 단단한 옹기를 만들어야 합니다.",
    essence: [
      "당신은 바의 비용과 재고 구조를 옹기로 이해하는 사람입니다. 금이 가고 구멍이 난 옹기에 아무리 많은 물을 부어도 결국 남는 것이 없습니다. 바에서 물은 매출이고 옹기는 비용과 재고를 관리하는 구조입니다. 매출을 늘리는 일만큼 지금 어디에서 비용이 새고 있는지 확인하는 일이 중요합니다.",
      "관리자에게 재고는 창고에 쌓인 물건이 아니라 현금을 주고 구입한 돈의 다른 모습입니다. 목적은 무조건 적게 사는 것이 아니라 필요한 만큼 구매하고, 정확하게 입고하며, 올바르게 보관하고, 사용 속도에 맞게 다시 주문하는 것입니다. 장부와 실제 재고의 차이를 원래 그런 것이라고 넘기지 않습니다.",
    ],
    traits: ["차이의 원인을 끝까지 찾는다", "핵심 품목부터 관리한다", "숫자를 판단의 기준으로 쓴다"],
    principle: "차이가 발생했다면 반드시 이유가 있습니다. 중요한 것은 사람을 의심하는 것이 아니라 지점을 찾는 것입니다.",
    questions: [
      "한 달 동안 바를 운영하는 데 필요한 전체 비용과 실질적으로 만들 수 있는 매출을 알고 있는가?",
      "가격이 높거나 자주 판매되는 핵심 품목의 실제 재고 수량을 정확히 알고 있는가?",
      "구매부터 입고, 보관, 사용, 판매, 파손과 폐기까지 모든 과정이 기록되고 있는가?",
      "장부와 실제 재고에 차이가 발생했을 때 그 원인을 구체적으로 설명할 수 있는가?",
      "각 비용과 재고량의 목표 기준을 정하고, 기준에서 벗어났을 때 확인하고 대응하는 과정이 마련되어 있는가?",
    ],
  },
  finance: {
    name: "매출을 이익으로 바꾸는 수익 설계자",
    code: "PROFIT PLANNER",
    tagline: "매출은 결과가 아니라 시작입니다.",
    essence: [
      "당신은 매출이 바가 얼마나 바쁘게 움직였는지를 보여줄 뿐이고, 이익이 그 움직임이 실제로 생존과 성장에 도움이 되었는지를 보여준다는 것을 아는 사람입니다. 손님이 많고 매일 바쁘더라도 모든 비용을 제외한 뒤 남는 돈이 없다면 그 바는 오래 지속하기 어렵습니다.",
      "설계자는 비용 관리를 청결 관리와 같다고 봅니다. 오너가 작은 얼룩을 그냥 지나치면 직원들도 그것을 중요하지 않은 문제로 받아들입니다. 다만 무조건 아끼는 것이 목적은 아닙니다. 손님이 느끼는 가치와 품질, 직원의 안전에 필요한 비용은 지키고 이유 없이 새는 낭비만 찾아냅니다.",
    ],
    traits: ["고정비와 변동비를 나눈다", "매주 목표와 실제를 비교한다", "작은 비용을 그냥 넘기지 않는다"],
    principle: "비용을 줄이는 것과 이익을 높이는 것은 항상 같은 일이 아닙니다.",
    questions: [
      "일 매출과 주 매출, 월 매출뿐만 아니라 모든 비용을 제외한 실제 이익까지 알고 있는가?",
      "비용을 고정비와 변동비로 나누고 세금·이자·수리비를 포함한 세부 항목까지 정리했는가?",
      "모든 비용을 감당하기 위해 필요한 최소 매출과 원하는 이익을 만들기 위한 목표 매출을 알고 있는가?",
      "목표와 실제 결과를 매주 비교하고 차이가 발생한 원인과 다음 행동을 정하고 있는가?",
      "어떤 메뉴와 시간대, 인력 배치가 단순한 매출을 넘어 실제 이익에 도움이 되는지 설명할 수 있는가?",
    ],
  },
  team: {
    name: "사람을 팀으로 만드는 코치",
    code: "TEAM COACH",
    tagline: "팀은 친한 사람들의 모임이 아닙니다.",
    essence: [
      "당신은 좋은 사람들이 모였다고 해서 반드시 좋은 팀이 되는 것은 아니라는 사실을 아는 사람입니다. 감정적인 관계만으로 결속된 조직은 갈등이나 어려운 결정 앞에서 쉽게 흔들립니다. 팀은 친밀함보다 같은 목적과 업무 기준으로 연결되어야 합니다.",
      "코치는 규칙을 관계와 직급에 상관없이 일관되게 적용하고, 그 규칙을 가장 먼저 지킵니다. 직원들은 리더의 말보다 행동을 보기 때문입니다. 책임을 맡겼다면 판단할 권한도 함께 주고, 문제가 생기면 사람을 비난하는 데서 끝내지 않고 교육과 매뉴얼을 고쳐 같은 문제가 반복되지 않게 만듭니다.",
    ],
    traits: ["기준을 먼저 지킨다", "책임과 권한을 함께 준다", "비난 대신 원인을 고친다"],
    principle: "리더가 계속 허용하는 행동이 결국 그 팀의 실제 기준이 됩니다.",
    questions: [
      "팀원 모두가 반드시 해야 할 행동과 하지 말아야 할 행동을 같은 기준으로 이해하고 있는가?",
      "리더는 자신을 예외로 두지 않고 팀원에게 요구하는 기준을 먼저 지키고 있는가?",
      "각 포지션의 역할과 책임, 스스로 결정할 수 있는 범위와 반드시 보고해야 할 일이 분명한가?",
      "문제가 발생했을 때 사람을 비난하는 데서 끝나지 않고 원인을 찾아 교육과 매뉴얼을 수정하고 있는가?",
      "직원마다 단기·장기 성장 목표가 있고 이를 이루기 위한 교육과 피드백, 평가 기준이 마련되어 있는가?",
    ],
  },
  marketing: {
    name: "바의 매력을 확장하는 브랜드 전략가",
    code: "BRAND AMPLIFIER",
    tagline: "홍보는 초대이고, 콘텐츠는 약속이며, 실제 경험은 그 약속을 증명하는 과정입니다.",
    essence: [
      "당신은 홍보를 많이 한다고 브랜드가 강해지는 것은 아니라는 것을 아는 사람입니다. 좋은 사진을 올리고 유명한 바텐더를 초청하고 사람이 모이는 행사를 열더라도, 그 활동이 방문과 매출과 재방문으로 이어지지 않는다면 홍보는 하고 있지만 브랜드는 성장하지 않는 상태입니다.",
      "전략가는 팔로워와 조회수처럼 관심을 보여주는 숫자와 예약·방문·구매·재방문처럼 고객이 실제로 움직였다는 숫자를 구분합니다. 그리고 모든 홍보와 행사에 목적 하나, 원하는 고객 행동 하나, 성공을 판단할 기준 하나를 미리 붙입니다.",
    ],
    traits: ["목적을 먼저 정한다", "관심과 행동을 구분한다", "행사 이후를 설계한다"],
    principle: "행사도 사람이 많이 온 것으로 끝나면 비용입니다. 다음 방문과 관계가 남을 때 브랜드의 자산이 됩니다.",
    questions: [
      "우리 바가 누구에게 어떤 경험을 제공하는 곳인지 한 문장으로 설명할 수 있는가?",
      "콘텐츠에서 보여주는 이미지와 손님이 실제 바에서 경험하는 음료·서비스·공간이 일치하는가?",
      "각각의 홍보와 행사에 명확한 목적, 원하는 고객 행동과 성공을 판단할 기준이 정해져 있는가?",
      "팔로워·조회수·행사 방문객과 실제 문의·예약·구매·재방문을 구분해서 확인하고 있는가?",
      "행사와 게스트 시프트가 끝난 뒤 손님을 다음 방문과 관계로 연결하는 후속 과정이 마련되어 있는가?",
    ],
  },
  space: {
    name: "동선을 효율로 바꾸는 현장 설계자",
    code: "FLOW ENGINEER",
    tagline: "공간은 보기 좋은 디자인보다 운영의 흐름을 먼저 설계해야 합니다.",
    essence: [
      "당신은 매출 목표를 세우는 것과 실제 현장에서 그 매출을 만들어내는 것이 다른 문제라는 사실을 아는 사람입니다. 바텐더와 바가 한 시간 동안 만들 수 있는 음료의 수에는 한계가 있고, 그 한계는 기술만이 아니라 바의 크기와 형태, 장비의 위치, 얼음과 잔의 공급, 세척과 전달 과정이 함께 결정합니다.",
      "설계자는 주문이 밀린다고 사람부터 늘리지 않습니다. 좁은 공간에 사람만 늘어나면 움직임이 겹치고 오히려 음료가 늦게 나옵니다. 대신 지금 흐름을 가장 먼저 막는 지점을 찾습니다. 그리고 좌석이 있는 플로어만이 아니라 입구와 대기 공간, 화장실과 서비스 스테이션까지 운영의 일부로 봅니다.",
    ],
    traits: ["병목을 먼저 찾는다", "피크 시간을 기준으로 계산한다", "동선이 겹치지 않게 만든다"],
    principle: "좌석이 많다고 더 많은 매출을 만들 수 있는 것은 아닙니다. 전체 공간의 능력이 실제 매출의 한계를 결정합니다.",
    questions: [
      "목표 매출을 하루 손님 수와 음료 주문 수로 바꾸고, 피크 시간에 들어올 주문량까지 계산했는가?",
      "현재의 메뉴와 품질 기준을 유지하면서 한 시간에 실제로 만들 수 있는 음료 수를 측정했는가?",
      "제조, 얼음, 잔, 장비, 세척, 재보충과 픽업 가운데 주문을 가장 먼저 막는 지점이 어디인지 알고 있는가?",
      "직원과 손님, 깨끗한 물건과 사용한 물건, 완성된 음료와 쓰레기의 동선이 서로 충돌하지 않는가?",
      "입구와 대기 공간, 리셉션, 서비스 스테이션, 화장실과 클로크룸이 피크 시간의 손님 수를 감당할 수 있는가?",
    ],
  },
  data: {
    name: "숫자를 행동으로 바꾸는 데이터 운영자",
    code: "DATA OPERATOR",
    tagline: "매일 확인하고, 주별로 판단해야 합니다.",
    essence: [
      "당신은 자료가 많다고 관리가 잘되는 것은 아니라는 사실을 아는 사람입니다. 숫자를 모으고 보고서를 만드는 것에서 멈추면 데이터는 지난 결과를 설명하는 자료로만 남습니다. 좋은 데이터는 지금 가장 중요한 문제가 무엇인지 보여주고 다음에 어떤 행동을 해야 하는지 알려주어야 합니다.",
      "운영자는 팀이 집중할 핵심 목표를 한 번에 하나만 정합니다. 그 숫자의 이름과 의미, 계산 방법과 담당자를 먼저 정의하고, 모든 팀이 같은 숫자를 바라보게 만듭니다. 다만 방법은 한꺼번에 바꾸지 않고 하나씩 시험합니다. 그래야 어떤 행동이 효과를 만들었는지 알 수 있습니다.",
    ],
    traits: ["핵심 숫자 하나에 집중한다", "정의부터 통일한다", "숫자를 행동으로 연결한다"],
    principle: "데이터가 없다는 사실 자체가 현재 운영에서 먼저 해결해야 할 문제입니다.",
    questions: [
      "지금 우리 바가 가장 먼저 개선해야 할 목표와 이를 보여주는 핵심 숫자 하나가 정해져 있는가?",
      "모든 직원이 그 숫자의 의미와 계산 방법, 자료를 가져오는 위치를 동일하게 이해하고 있는가?",
      "현재 기준과 목표, 달성 기간, 기록 담당자와 확인 주기가 분명하게 정해져 있는가?",
      "숫자를 개선하기 위한 행동과 담당자, 기한이 정해져 있으며 데일리 확인과 주간 판단이 구분되어 있는가?",
      "숫자가 개선된 후 효과가 있었던 행동을 기록하고 매뉴얼에 반영한 다음 새로운 우선순위로 넘어가고 있는가?",
    ],
  },
  growth: {
    name: "성장을 지속시키는 퍼포먼스 파트너",
    code: "PERFORMANCE PARTNER",
    tagline: "좋은 성장은 한 사람의 승진이 아니라 다음 사람이 그 자리를 이어받을 수 있는 이동입니다.",
    essence: [
      "당신은 지금 좋은 성과를 내고 있다고 해서 앞으로도 계속 성장할 수 있는 것은 아니라는 사실을 아는 사람입니다. 현재의 성공이 오너나 뛰어난 바텐더 한 사람의 능력에 의존하고 있다면, 그 사람이 자리를 비우는 순간 운영과 품질이 함께 흔들립니다.",
      "파트너는 지속적인 성장을 잘되는 바를 하나 더 만드는 일로 보지 않습니다. 현재의 성공이 왜 만들어졌는지 이해하고 그 기준을 사람과 교육, 시스템과 숫자로 남겨 다음 팀과 다음 매장에서도 반복할 수 있게 만드는 일입니다. 그래서 리더가 다음 단계로 가려면 자신의 역할을 맡아줄 사람을 먼저 키웁니다.",
    ],
    traits: ["다음 사람을 키운다", "성공의 이유를 기록한다", "안정화 후에 확장한다"],
    principle: "현재의 성공이 문서와 교육, 리더와 숫자로 설명되지 않는다면 아직 확장보다 안정화가 먼저입니다.",
    questions: [
      "오너나 핵심 리더가 자리를 비워도 현재의 서비스와 품질, 운영 기준이 유지되는가?",
      "각 직책의 업무와 책임, 결정 권한, 평가 기준과 대우가 명확하게 연결되어 있는가?",
      "모든 리더가 다음 역할을 배우는 동시에 자신의 현재 역할을 맡을 후임자를 육성하고 있는가?",
      "중요한 결정마다 누가 제안하고 승인하며 실행하고 결과를 확인하는지가 정해져 있는가?",
      "현재의 성과가 문서와 교육, 숫자와 리더를 통해 다음 팀과 다음 매장에서도 반복될 수 있는가?",
    ],
  },
};

const charactersEn = {
  concept: {
    name: "The Architect Who Turns a Dream Into a Direction",
    code: "VISION ARCHITECT",
    tagline: "A good concept is the operating standard that decides what to choose and what to give up.",
    essence: [
      "You are the kind of operator who does not call an interior style or a menu design a concept. Those are only how a concept shows itself on the outside. At the centre there has to be a mission — why this bar should exist — and a vision — what it wants to grow into.",
      "The architect's work is not adding more ideas. It is setting the standard. Which drinks to make, what to charge, who to hire, and what comes first when something goes wrong should all start from the same standard. And that standard cannot live only in the owner's head. The team has to be able to decide for themselves when the owner is not there.",
    ],
    traits: ["Sets the standard first", "Decides what not to do", "Makes decisions faster"],
    principle: "A clear concept, vision and mission become the basis of every choice.",
    questions: [
      "Beyond making a profit, why should this bar exist?",
      "Which guest are we trying to give a particular time and feeling to?",
      "What promise do we want to keep for guests and for the team, without exception?",
      "What will we not do, even when it would help sales?",
      "If we keep applying this standard, what kind of bar do we want to be in three years?",
    ],
  },
  market: {
    name: "The Explorer Who Understands the Guest",
    code: "GUEST STRATEGIST",
    tagline: "Choosing a target guest is not choosing who to advertise to. It is choosing whose eyes you will see the whole bar through.",
    essence: [
      "You are the kind of operator who does not conclude that everything is fine simply because guests come in and sales happen. You know that defining a target guest is not writing down an age, a gender and a district. It is understanding when they come, who they come with, how they feel, what they expect and what they can afford to spend.",
      "The explorer walks through every moment of the bar using the guest's lens. Menu and price, booking and payment, entrance and seating, music and service all have to connect from that same point of view. What feels convenient to us is not automatically convenient to them.",
    ],
    traits: ["Sees through the guest's eyes", "Looks for evidence, not assumptions", "Fixes the friction first"],
    principle: "When the target is unclear, you fit everyone a little and give no one a strong reason to choose you.",
    questions: [
      "Who exactly is the guest we want, and when and with whom do they visit?",
      "Why do they go out at all, and why should they choose us instead of somewhere else?",
      "Where do they discover us, and how do they book and find their way here?",
      "Are the menu, price, booking, payment and service genuinely convenient from that guest's point of view?",
      "Is our current promotion spend actually producing visits and repeat visits from that core guest?",
    ],
  },
  beverage: {
    name: "The Creator Who Finishes an Idea in a Single Glass",
    code: "BEVERAGE CREATOR",
    tagline: "While an idea lives only in your head or on a recipe card, it is not yet a menu item.",
    essence: [
      "You are the kind of operator who knows a good drink is not simply a drink that tastes good. Just as a house is designed around the people who will live in it, a menu has to be designed around both the guest who will choose it and the team who will actually make it. You build the frame and lay the bricks before adding character and design.",
      "For the creator, the work does not end with a new idea. Storage positions, refrigeration, ice, glassware, garnish and equipment placement all have to be designed with it, and the quality has to hold at the busiest hour no matter who is making it. Only when it can be produced repeatedly, without incident, in the real space does it become a product.",
    ],
    traits: ["Structure before flavour", "Builds repeatable quality", "Menus that need no explanation"],
    principle: "A good drink should taste good; a good menu should be easy to choose from.",
    questions: [
      "Can a guest read the menu and understand and choose the drink they want?",
      "Do the balance, temperature, dilution and texture of core drinks hold the same regardless of who makes them?",
      "When a new drink is added, do we also review ingredients, stock, prep time and equipment?",
      "Can the current space and team carry the menu at the busiest hour?",
      "Is there a process for testing, recording and revising new ideas?",
    ],
  },
  service: {
    name: "The Designer Who Turns Service Into Experience",
    code: "HOSPITALITY DESIGNER",
    tagline: "A good experience is the smile on a guest's face as they walk out the door.",
    essence: [
      "You are the kind of operator who separates good service from a good experience. Service is what we give; experience is what the guest receives through their own situation and mood. However carefully something is prepared, if it is not what that guest needed at that moment, it does not stay with them as a good experience.",
      "The designer goes beyond giving every guest the same good service and gives each guest the right service. Observe first; when it is not obvious, ask briefly and naturally; then offer about two easy choices. And record that judgement as a standard, so it does not depend on one experienced person's instinct.",
    ],
    traits: ["Observes before offering", "Leaves the choice with the guest", "Connects the whole visit"],
    principle: "The measure of service is not the satisfaction of the person giving it, but the feeling of the guest receiving it.",
    questions: [
      "Are we focused on giving a lot of good service, or on giving the service this guest actually needs?",
      "Does the team observe the guest's state and mood before offering anything?",
      "When a guest's situation is unclear, do we ask naturally and offer a choice?",
      "Is arrival, ordering, service, payment and farewell designed as one connected experience?",
      "Are there standards and training so anyone — not just the most instinctive member of the team — can give the right service?",
    ],
  },
  operations: {
    name: "The Builder Who Makes Standards Repeatable",
    code: "SYSTEM BUILDER",
    tagline: "A manual is not the destination. It is the direction that gets you there.",
    essence: [
      "For you a manual and a system are navigation. The best car in the world will not arrive if it loses its direction, and an ordinary one will arrive eventually if it knows the way and keeps moving. If vision and mission are the destination, the manual is the route, and the system is what keeps the team walking it every day.",
      "The builder does not win with volume of documentation. Start with the few standards that must hold before opening, during service and after closing — then attach who does it, by when, what is checked, and what happens when it goes wrong. Operations that work because a good employee handles it are not a system.",
    ],
    traits: ["Starts small, repeats daily", "Turns know-how into records", "Keeps the standard updated"],
    principle: "Know-how only becomes an asset of the bar when basic quality and speed hold no matter who is on shift.",
    questions: [
      "Can everyone on the team describe our vision, mission and destination in the same words?",
      "Are the must-hold standards for pre-opening, service, peak hours and closing clearly written down?",
      "Does every important task have an owner, a deadline, a check and a defined response when it fails?",
      "Does operating know-how live in records anyone can learn from, rather than in one person's memory?",
      "Is there a process for reviewing the manual against reality, revising it and re-sharing it with everyone?",
    ],
  },
  inventory: {
    name: "The Keeper Who Stops the Leak",
    code: "STOCK CONTROLLER",
    tagline: "Before pouring in more water, take the time to build a jar that does not leak.",
    essence: [
      "You are the kind of operator who understands cost and stock as an earthenware jar. Pour as much water as you like into a cracked jar and nothing remains. In a bar the water is sales and the jar is the structure that controls cost and stock. Finding where money is leaking matters as much as raising sales.",
      "For the keeper, stock is not goods sitting in a store room. It is cash in another form. The goal is not to buy as little as possible, but to buy what is needed, receive it accurately, store it correctly and reorder at the speed it is actually used. A gap between the book and the shelf is never written off as normal.",
    ],
    traits: ["Traces every variance", "Controls key items first", "Uses numbers to decide"],
    principle: "If there is a difference, there is a reason. The point is not to suspect people but to find the point where it happens.",
    questions: [
      "Do we know the full monthly cost of running the bar and the sales it can realistically produce?",
      "Do we know the true quantity on hand of our highest-value and fastest-moving items?",
      "Is every stage recorded — purchase, receiving, storage, use, sale, breakage and waste?",
      "When the book and the actual count differ, can we explain specifically why?",
      "Is there a target for each cost and stock level, and a process for responding when we fall outside it?",
    ],
  },
  finance: {
    name: "The Planner Who Turns Sales Into Profit",
    code: "PROFIT PLANNER",
    tagline: "Sales are not the result. They are the starting point.",
    essence: [
      "You are the kind of operator who knows that sales only show how busy the bar was, while profit shows whether that activity actually helped it survive and grow. A bar can be full every night and still be hard to sustain if nothing remains once ingredients, labour, rent and running costs are taken out.",
      "The planner treats cost control like cleanliness. If the owner walks past a small stain, the team learns it does not matter. But the goal is never to cut for the sake of cutting. Protect the spending that guests feel, that quality depends on, and that keeps the team safe — and hunt only the waste that has no reason to exist.",
    ],
    traits: ["Separates fixed from variable", "Compares target to actual weekly", "Never waves through small costs"],
    principle: "Cutting cost and raising profit are not always the same job.",
    questions: [
      "Do we know daily, weekly and monthly sales — and the real profit after every cost?",
      "Have we split costs into fixed and variable, down to tax, interest and repairs?",
      "Do we know the minimum sales that covers every cost, and the target sales that produces the profit we want?",
      "Do we compare target and actual weekly, and decide the cause and the next action?",
      "Can we explain which menu items, time slots and staffing patterns help profit, not just sales?",
    ],
  },
  team: {
    name: "The Coach Who Turns People Into a Team",
    code: "TEAM COACH",
    tagline: "A team is not a group of people who get along.",
    essence: [
      "You are the kind of operator who knows that gathering good people does not automatically produce a good team. A group held together only by feeling comes apart the moment there is conflict or a hard decision. A team is connected by shared purpose and shared standards before it is connected by closeness.",
      "The coach applies the rules consistently regardless of relationship or rank — and is the first to follow them, because the team watches what a leader does rather than what a leader says. Where there is responsibility there is also authority to decide. And when something goes wrong, it does not end at blame: the training and the manual get fixed so it does not happen again.",
    ],
    traits: ["Follows the standard first", "Pairs responsibility with authority", "Fixes causes, not people"],
    principle: "Whatever a leader keeps allowing becomes the team's real standard.",
    questions: [
      "Does everyone understand the required and prohibited behaviours by the same standard?",
      "Does the leader hold themselves to the standard they ask of the team, without exception?",
      "Is each position clear on its role, its responsibility, what it can decide and what it must report?",
      "When a problem occurs, do we go past blame to fix the cause in training and in the manual?",
      "Does each person have short- and long-term growth goals, with the training, feedback and assessment to reach them?",
    ],
  },
  marketing: {
    name: "The Strategist Who Amplifies the Bar",
    code: "BRAND AMPLIFIER",
    tagline: "Promotion is the invitation, content is the promise, and the real experience is the proof.",
    essence: [
      "You are the kind of operator who knows that more promotion does not automatically make a stronger brand. You can post good photographs, host a famous bartender and fill a room — but if none of it turns into visits, sales and returning guests, you are promoting while the brand stands still.",
      "The strategist separates numbers that show attention — followers, views, headcount at an event — from numbers that show a guest actually moved: enquiries, bookings, purchases, repeat visits. And every campaign or event gets one purpose, one desired guest action and one measure of success, decided in advance.",
    ],
    traits: ["Sets the purpose first", "Separates attention from action", "Designs the follow-up"],
    principle: "An event that ends with a crowd is a cost. It becomes a brand asset when a next visit and a relationship remain.",
    questions: [
      "Can we describe in one sentence who this bar is for and what experience it gives them?",
      "Does the image in our content match the drinks, service and space a guest actually meets?",
      "Does each campaign and event have a clear purpose, a desired guest action and a measure of success?",
      "Do we track followers, views and attendance separately from enquiries, bookings, purchases and repeat visits?",
      "After an event or guest shift, is there a follow-up that turns the guest into a next visit and a relationship?",
    ],
  },
  space: {
    name: "The Engineer Who Turns Movement Into Capacity",
    code: "FLOW ENGINEER",
    tagline: "A space should be designed around the flow of operations before it is designed to look good.",
    essence: [
      "You are the kind of operator who knows that setting a sales target and producing it on the floor are two different problems. There is a limit to how many drinks a bar can make in an hour, and that limit is set not only by skill but by the size and shape of the bar, where the equipment sits, how ice and glassware are supplied, and how washing and delivery work.",
      "The engineer does not add people the moment orders back up. More bodies in a tight space means overlapping movement and drinks arriving later, not sooner. Instead, find the point that blocks the flow first. And treat the entrance, the waiting area, the restrooms and the service stations as part of operations, not just the seating floor.",
    ],
    traits: ["Finds the bottleneck first", "Plans from peak hour", "Keeps paths from crossing"],
    principle: "More seats do not mean more sales. The capacity of the whole space sets the real ceiling.",
    questions: [
      "Have we converted the sales target into daily guests and drink orders, including peak-hour volume?",
      "Have we measured how many drinks we can actually make in an hour while holding menu and quality standards?",
      "Do we know which of production, ice, glassware, equipment, washing, restocking or pickup blocks orders first?",
      "Do the paths of staff and guests, clean and used items, finished drinks and waste avoid crossing?",
      "Can the entrance, waiting area, reception, service stations, restrooms and cloakroom carry a peak-hour crowd?",
    ],
  },
  data: {
    name: "The Operator Who Turns Numbers Into Action",
    code: "DATA OPERATOR",
    tagline: "Check daily; judge weekly.",
    essence: [
      "You are the kind of operator who knows that having a lot of data is not the same as being in control. If it stops at collecting numbers and producing reports, data only explains what already happened. Good data shows which problem matters most right now and what to do next.",
      "The operator sets one improvement target at a time. The name, meaning, calculation and owner of that number get defined first, so every team is looking at the same figure. But the methods are not all changed at once — they are tested one at a time, because that is the only way to know which action produced the result.",
    ],
    traits: ["One number at a time", "Defines it before measuring it", "Turns numbers into action"],
    principle: "The absence of data is itself the operating problem to solve first.",
    questions: [
      "Have we chosen the one thing to improve first, and the one number that shows it?",
      "Does everyone understand that number's meaning, calculation and source in the same way?",
      "Are the current baseline, the target, the deadline, the recorder and the review rhythm clearly set?",
      "Are the actions, owners and deadlines defined — with daily checks and weekly judgement kept separate?",
      "Once a number improves, do we record what worked, put it in the manual, and move to the next priority?",
    ],
  },
  growth: {
    name: "The Partner Who Keeps Growth Going",
    code: "PERFORMANCE PARTNER",
    tagline: "Real growth is not one person's promotion. It is a move the next person can step into.",
    essence: [
      "You are the kind of operator who knows that performing well now does not guarantee continued growth. If today's success rests on the owner or on one exceptional bartender, then operations and quality wobble the moment that person steps away.",
      "The partner does not see lasting growth as opening one more good bar. It is understanding why the current success happened, then leaving that standard behind in people, training, systems and numbers so the next team and the next venue can repeat it. Which is why a leader who wants the next step first grows someone to take the current one.",
    ],
    traits: ["Grows a successor", "Records why it worked", "Stabilises before expanding"],
    principle: "If today's success cannot be explained through documents, training, leaders and numbers, stabilise before expanding.",
    questions: [
      "If the owner or a key leader is away, do service, quality and operating standards hold?",
      "Are duties, responsibility, decision authority, assessment and pay clearly connected for each position?",
      "Is every leader learning the next role while growing a successor for their current one?",
      "For each important decision, is it clear who proposes, who approves, who executes and who verifies?",
      "Can today's results be repeated by the next team and the next venue through documents, training, numbers and leaders?",
    ],
  },
};

/** Section labels for the character block. Kept here so the generated i18n.js stays untouched. */
export const characterUi = {
  ko: {
    sectionLabel: "당신의 타입",
    sectionNote: "테리 킴의 12가지 운영 캐릭터 중 현재 가장 필요한 역할",
    traitsLabel: "이 캐릭터의 특징",
    principleLabel: "테리의 원칙",
    questionsLabel: "지금 확인해야 할 질문",
    questionsNote: "결과를 읽은 뒤 팀과 함께 답해 보세요.",
    summaryCharacter: "캐릭터",
  },
  en: {
    sectionLabel: "Your type",
    sectionNote: "The role your bar needs most, from Terry Kim's twelve operating characters",
    traitsLabel: "Signature traits",
    principleLabel: "Terry's principle",
    questionsLabel: "Questions to check now",
    questionsNote: "Work through these with your team after reading the result.",
    summaryCharacter: "Character",
  },
};

/**
 * Look up the character for a dimension. Falls back to Korean if a locale is
 * missing so the result page never renders an empty hero.
 */
export function getCharacter(dimension, locale = "ko") {
  const set = locale === "en" ? charactersEn : charactersKo;
  return set[dimension] ?? charactersKo[dimension] ?? null;
}

export function getCharacterUi(locale = "ko") {
  return characterUi[locale] ?? characterUi.ko;
}

export { charactersKo, charactersEn };
