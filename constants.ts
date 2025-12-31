import { Instructor, Lecture } from "./types";

export const COUPON_CODE = "underdogs";
export const COURSE_PRICE = 30000;
export const BANK_INFO = {
  bank: "카카오뱅크",
  account: "3333-01-2345678",
  holder: "비영리AI교육원",
};

export const MAIN_INSTRUCTOR: Instructor = {
  name: "김지능",
  title: "AI 업무 자동화 디렉터",
  bio: "전 스타트업 액셀러레이터 운영 팀장 출신. 5년가 300개 이상의 스타트업을 관리하며 겪은 '야근의 늪'을 AI 자동화 툴로 해결했습니다. 현재는 비영리 단체와 공공기관을 대상으로 '칼퇴근을 위한 AI' 강의를 진행하고 있습니다.",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=400&h=400&q=80",
};

const INSTRUCTORS = {
  MARKETING: {
    name: "최마케",
    title: "퍼포먼스 마케터",
    bio: "비영리 캠페인 모금액 10억 달성 경험. 진정성 있는 스토리를 데이터 기반의 퍼포먼스로 연결하는 전문가입니다.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=200&h=200&q=80"
  },
  OPS: {
    name: "박운영",
    title: "커뮤니티 매니저",
    bio: "3,000명 규모의 창업자 커뮤니티 운영. 반복되는 문의 응대와 운영 업무를 90% 자동화한 노하우를 공유합니다.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=200&h=200&q=80"
  },
  DATA: {
    name: "정분석",
    title: "데이터 애널리스트",
    bio: "공공데이터 활용 공모전 대상 수상. 모호한 정성 데이터를 설득력 있는 정량 지표로 변환하는 기술을 가르칩니다.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656ec?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=200&h=200&q=80"
  },
  MAIN: MAIN_INSTRUCTOR
};

export const LECTURES: Lecture[] = [
  {
    id: 1,
    title: "모객의 기술: 타겟 분석부터 카피라이팅까지",
    subTitle: "3일 걸리던 홍보 기획안, AI와 함께 30분 만에 끝내기",
    description: "좋은 취지의 프로그램도 사람이 모이지 않으면 의미가 없습니다. 하지만 매번 새로운 홍보 문구를 짜내느라 머리를 싸매고 계신가요? 챗GPT를 나만의 마케팅 팀장으로 채용하여, 타겟의 마음을 꿰뚫는 페르소나 분석부터 인스타그램/보도자료/뉴스레터 카피까지 단숨에 작성하는 법을 배웁니다.",
    painPoints: [
      "매번 똑같은 홍보 문구, '복붙' 하느라 지치셨나요?",
      "우리 프로그램의 진짜 타겟이 누구인지 정의하기 어려우신가요?",
      "디자이너에게 넘길 카드뉴스 기획안 작성이 막막하신가요?"
    ],
    takeaways: [
      "프로그램 성격에 맞는 3가지 타겟 페르소나 도출 기법",
      "클릭을 부르는 후킹(Hooking) 메시지 10가지 변주하기",
      "공문 스타일의 딱딱한 글을 감성적인 에세이로 톤앤매너 변환하기"
    ],
    date: "2025.05.13(화)",
    time: "20:00~22:00",
    instructor: INSTRUCTORS.MARKETING,
    promptExample: {
      "role": "Professional Copywriter",
      "task": "Persona Analysis & Ad Copy Generation",
      "input_data": {
        "target_audience": "30대 초기 창업가",
        "pain_points": ["자금 불안정", "네트워킹 부재", "시간 관리 실패"],
        "program_usp": "실무 중심 멘토링 매칭"
      },
      "constraints": {
        "tone_and_manner": "Empathetic yet Authoritative",
        "format": "Instagram Carousel (Hook-Body-CTA)",
        "psychological_trigger": "Fear Of Missing Out (FOMO)"
      }
    },
  },
  {
    id: 2,
    title: "참가자 관리: 수백 명의 데이터를 실수 없이 다루기",
    subTitle: "단순 반복 CS 업무는 AI에게, 당신은 관계에 집중하세요",
    description: "참가자 명단 정리, 안내 문자 발송, 쏟아지는 전화 문의... 운영자의 시간은 늘 부족합니다. 엑셀과 씨름하고 반복적인 질문에 답하느라 정작 중요한 '참가자와의 소통'을 놓치지 마세요. AI를 활용해 개인화된 안내 메시지를 작성하고, FAQ를 자동화하여 운영 효율을 극대화하는 실전 노하우를 공유합니다.",
    painPoints: [
      "\"주차 되나요?\" 같은 단순 문의 전화만 하루 50통씩 받으시나요?",
      "수백 명의 참가자에게 오타 없는 맞춤형 안내 문자를 보내야 하나요?",
      "불만 섞인 피드백에 감정 소모 없이 정중하게 대처하고 싶으신가요?"
    ],
    takeaways: [
      "참가자 유형별 맞춤형 응대 스크립트 1초 만에 생성하기",
      "무례한 문의에도 품격 있게 대처하는 CS 답변 프롬프트",
      "복잡한 엑셀 데이터를 AI로 정리하여 운영 리스크 줄이기"
    ],
    date: "2025.05.20(화)",
    time: "20:00~22:00",
    instructor: INSTRUCTORS.OPS,
    promptExample: {
      "role": "CS Manager AI Agent",
      "task": "Inquiry Classification & Response Drafting",
      "instructions": [
        "Classify the incoming questions into categories (Logistics, Curriculum, Payment).",
        "Draft polite, personalized responses using the FAQ knowledge base.",
        "If the sentiment is negative, escalate to human manager."
      ],
      "few_shot_examples": [
        { "input": "주차 되나요?", "output": "네, 건물 내 지하주차장을 무료로 이용하실 수 있습니다." },
        { "input": "환불 규정이 어떻게 되죠?", "output": "환불 규정은 시작 3일 전까지 100% 가능합니다." }
      ]
    },
  },
  {
    id: 3,
    title: "성과 추적 관리: 모호한 정성 성과를 명확한 데이터로",
    subTitle: "후기 분석부터 보고서 작성까지, 데이터로 증명하는 성과",
    description: "결과 보고서 시즌만 되면 야근하시나요? '참가자들이 좋아했습니다'라는 모호한 말 대신, 설득력 있는 데이터로 증명하세요. 활동 과정에서 쌓인 수많은 텍스트 데이터(후기, 인터뷰, 일지)를 AI로 분석하여 지원 기관과 이해관계자가 만족하는 임팩트 보고서용 인사이트로 변환합니다.",
    painPoints: [
      "수백 개의 만족도 조사 서술형 답변을 언제 다 읽고 정리하나요?",
      "사업의 성과를 '보람찼다'가 아닌 '수치'로 증명해야 하나요?",
      "정부/지자체 보고서 양식에 맞는 '있어 보이는' 표현이 필요하신가요?"
    ],
    takeaways: [
      "비정형 텍스트 데이터(후기)에서 핵심 키워드 및 감성 점수 추출",
      "사업 성과를 한눈에 보여주는 요약 보고서 자동 생성 프롬프트",
      "지원사업 통과율을 높이는 '공공기관 선호 어휘' 변환 기술"
    ],
    date: "2025.05.27(화)",
    time: "20:00~22:00",
    instructor: INSTRUCTORS.DATA,
    promptExample: {
      "role": "Data Analyst",
      "task": "Qualitative Feedback Analysis",
      "source_data": "50 Participant Feedback Forms (Unstructured Text)",
      "output_requirements": {
        "format": "Markdown Report",
        "sections": [
          "Key Satisfaction Drivers (Top 3)",
          "Sentiment Score (0-10)",
          "Improvement Areas for Next Cohort"
        ],
        "language": "Formal Korean (Report Style)"
      }
    },
  },
  {
    id: 4,
    title: "실무 적용 워크숍: 나만의 AI 업무 비서 만들기",
    subTitle: "내 업무 스타일에 딱 맞는 커스텀 AI 비서 구축하기",
    description: "강의를 듣는 것만으로는 부족합니다. 실제 내 업무 상황에 딱 맞는 '나만의 프롬프트'를 완성하고 돌아가는 시간입니다. 자주 쓰는 업무 패턴을 분석하여 프롬프트 템플릿으로 만들고, 노션(Notion)과 같은 생산성 도구와 연동하여 업무 자동화의 첫걸음을 뗍니다.",
    painPoints: [
      "매번 챗GPT에게 처음부터 상황 설명하느라 귀찮으셨죠?",
      "우리 기관만의 특수한 용어나 맥락을 AI가 자꾸 틀리나요?",
      "단발성 사용을 넘어, 업무 프로세스 자체를 혁신하고 싶으신가요?"
    ],
    takeaways: [
      "내 업무 스타일을 학습시킨 '커스텀 인스트럭션' 설정법",
      "반복 업무를 버튼 하나로 해결하는 프롬프트 라이브러리 구축",
      "동료들에게 공유하여 '일 잘하는 사람'으로 인정받는 협업 팁"
    ],
    date: "2025.06.03(화)",
    time: "20:00~22:00",
    instructor: INSTRUCTORS.MAIN,
    promptExample: {
      "system": "You are a highly efficient Executive Assistant.",
      "workflow_automation": {
        "trigger": "New Entry in Google Sheets",
        "process": "Summarize weekly activity log",
        "action": "Generate Weekly Report Draft"
      },
      "template_structure": {
        "header": "Weekly Performance Review",
        "body_format": "STAR Method (Situation, Task, Action, Result)",
        "footer": "Next Week's Action Items"
      }
    },
  },
];