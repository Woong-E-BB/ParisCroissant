export type Brand = {
  slug: string;
  name: string;
  englishName: string;
  shortDescription: string;
  description: string;
  accent: string;
  crop: { x: number; y: number; width: number; height: number };
  services: string[];
  signature: string[];
  audience: string[];
  referenceImage: string;
  previewImage: string;
};

export const brands: Brand[] = [
  {
    slug: "paris-baguette",
    name: "파리바게뜨",
    englishName: "PARIS BAGUETTE",
    shortDescription: "국민 베이커리 경험과 온라인 주문을 잇는 메가 브랜드",
    description:
      "브레드, 케이크, 매장 정보, 온라인 주문을 중심으로 가장 익숙한 일상 접점을 만드는 핵심 앵커 브랜드입니다.",
    accent: "#21409a",
    crop: { x: 64, y: 810, width: 198, height: 104 },
    services: ["픽업 주문", "케이터링", "대량주문", "매장안내", "채용"],
    signature: ["빵/케이크 큐레이션", "멤버십 혜택", "시즌 프로모션"],
    audience: ["B2C", "B2B", "패밀리"],
    referenceImage: "/reference/brand-detail.png",
    previewImage: "/reference/product-list.png",
  },
  {
    slug: "caffe-pascucci",
    name: "파스쿠찌",
    englishName: "CAFFE PASCUCCI",
    shortDescription: "커피와 디저트를 중심으로 한 라이프스타일 카페 브랜드",
    description:
      "신제품 디저트, 음료 프로모션, 픽업 주문을 한 화면에서 자연스럽게 이어 주는 카페 경험을 제공합니다.",
    accent: "#b5172f",
    crop: { x: 290, y: 810, width: 214, height: 104 },
    services: ["픽업 주문", "대량주문", "브랜드 이슈", "채용"],
    signature: ["시즌 음료", "케이크 페어링", "모바일 픽업"],
    audience: ["B2C", "오피스", "MZ"],
    referenceImage: "/reference/main.png",
    previewImage: "/reference/product-detail.png",
  },
  {
    slug: "paris-croissant",
    name: "파리크라상",
    englishName: "PARIS CROISSANT",
    shortDescription: "프리미엄 베이커리와 기업 정체성을 대표하는 오리지널 브랜드",
    description:
      "브랜드 스토리, 프리미엄 제품, 법인 소개까지 하나의 결로 이어 주는 헤리티지 허브 역할을 담당합니다.",
    accent: "#c79d5f",
    crop: { x: 548, y: 810, width: 212, height: 104 },
    services: ["픽업 주문", "창업 문의", "채용", "기업 소개"],
    signature: ["브랜드 헤리티지", "프리미엄 상품", "법인 연계"],
    audience: ["B2C", "기업", "브랜드 팬"],
    referenceImage: "/reference/brand-story.png",
    previewImage: "/reference/brand-detail.png",
  },
  {
    slug: "dqueens-catering",
    name: "케이터링",
    englishName: "D.QUEENS CATERING",
    shortDescription: "기업 행사와 브랜드 파티를 위한 맞춤형 B2B 케이터링",
    description:
      "예약 상담, 행사 규모별 패키지, 납품 이력을 한 번에 보여주는 기업형 케이터링 경험을 제안합니다.",
    accent: "#6c6973",
    crop: { x: 804, y: 810, width: 220, height: 104 },
    services: ["케이터링 예약", "행사 문의", "견적 요청", "브랜드 큐레이션"],
    signature: ["기업 행사 패키지", "브랜드별 메뉴 조합", "컨설팅"],
    audience: ["B2B", "행사 담당자", "기업 고객"],
    referenceImage: "/reference/main.png",
    previewImage: "/reference/checkout.png",
  },
  {
    slug: "coffee-at-works",
    name: "커피앳웍스",
    englishName: "COFFEE@WORKS",
    shortDescription: "오피스 라이프에 최적화된 스페셜티 커피 솔루션",
    description:
      "오피스 픽업, 정기 납품, 단체 주문을 중심으로 업무 중에도 끊김 없는 커피 경험을 연결합니다.",
    accent: "#1b1b1b",
    crop: { x: 1064, y: 810, width: 214, height: 104 },
    services: ["픽업 주문", "대량주문", "채용", "매장안내"],
    signature: ["오피스 픽업", "단체 주문", "원두 큐레이션"],
    audience: ["B2C", "오피스", "B2B"],
    referenceImage: "/reference/main.png",
    previewImage: "/reference/pickup-store.png",
  },
  {
    slug: "passion5",
    name: "패션5",
    englishName: "passion5",
    shortDescription: "디저트와 기프트 경험을 강화하는 프리미엄 플래그십",
    description:
      "시그니처 디저트, 시즌 한정 제품, 선물 수요를 위한 큐레이션이 강점인 감도 높은 브랜드입니다.",
    accent: "#111111",
    crop: { x: 64, y: 972, width: 198, height: 103 },
    services: ["픽업 주문", "창업 문의", "대량주문", "채용"],
    signature: ["프리미엄 디저트", "선물 세트", "브랜드 스토리텔링"],
    audience: ["B2C", "기프트", "프리미엄"],
    referenceImage: "/reference/main.png",
    previewImage: "/reference/product-detail.png",
  },
  {
    slug: "linas",
    name: "리나스",
    englishName: "LINA'S",
    shortDescription: "샌드위치와 브런치를 중심으로 한 도시형 다이닝 브랜드",
    description:
      "레스토랑 예약과 가벼운 식사 주문을 동시에 담아내며, 오피스 상권과 라이프스타일 수요를 함께 잡습니다.",
    accent: "#1d584a",
    crop: { x: 290, y: 972, width: 214, height: 103 },
    services: ["픽업 주문", "레스토랑 예약", "매장안내", "채용"],
    signature: ["브런치 예약", "샌드위치 큐레이션", "상권별 매장 안내"],
    audience: ["B2C", "오피스", "다이닝"],
    referenceImage: "/reference/main.png",
    previewImage: "/reference/product-list.png",
  },
  {
    slug: "spc-product",
    name: "SPC 상품",
    englishName: "SPC GIFT",
    shortDescription: "상품권과 제휴 혜택을 모은 통합 구매 허브",
    description:
      "상품권, 멤버십, 대량 구매, 이벤트 쿠폰을 묶어 고객과 기업 모두가 접근하기 쉬운 결제 허브를 만듭니다.",
    accent: "#8a6430",
    crop: { x: 548, y: 972, width: 212, height: 103 },
    services: ["상품권 구매", "대량주문", "제휴 혜택", "멤버십 연계"],
    signature: ["통합 결제", "쿠폰/포인트", "기업용 구매"],
    audience: ["B2C", "B2B", "선물 수요"],
    referenceImage: "/reference/main.png",
    previewImage: "/reference/checkout.png",
  },
  {
    slug: "delicieux",
    name: "외식브랜드",
    englishName: "DELICIEUX LIFESTYLE",
    shortDescription: "외식 브랜드 포트폴리오와 라이프스타일 콘텐츠를 묶는 허브",
    description:
      "다이닝 브랜드별 소개와 예약, 기업 정보, 뉴스 업데이트를 함께 제공하는 브랜드 아카이브 역할을 수행합니다.",
    accent: "#2f3138",
    crop: { x: 804, y: 972, width: 220, height: 103 },
    services: ["브랜드 소개", "예약 문의", "뉴스/공지", "법인 연계"],
    signature: ["외식 브랜드 포트폴리오", "콘텐츠 아카이브", "기업 연결"],
    audience: ["B2C", "다이닝", "기업 고객"],
    referenceImage: "/reference/brand-story.png",
    previewImage: "/reference/franchise.png",
  },
];

export const serviceGroups = [
  {
    title: "B2C 통합 서비스",
    items: [
      "케이터링 예약/구매",
      "픽업 구매",
      "레스토랑 예약",
      "상품권 구매",
      "매장 안내",
    ],
  },
  {
    title: "B2B 성장 서비스",
    items: ["창업/가맹 문의", "채용 안내", "대량주문", "기업 행사 문의", "제휴 상담"],
  },
  {
    title: "기업/법인 허브",
    items: ["회사 소개", "연혁", "뉴스·공지", "컴플라이언스", "ESG", "채용"],
  },
];

export const corporateSections = [
  {
    title: "회사 소개",
    description:
      "파리크라상 브랜드 철학과 포트폴리오를 한 흐름으로 설명하는 법인 메인 섹션입니다.",
  },
  {
    title: "연혁",
    description:
      "브랜드 론칭, 서비스 확장, 글로벌·디지털 전환 등 성장 이력을 타임라인으로 구성합니다.",
  },
  {
    title: "뉴스 / 공지사항",
    description:
      "신규 브랜드 소식, 캠페인, 보도자료, 제휴 및 IR 성격의 업데이트를 모아서 제공합니다.",
  },
  {
    title: "컴플라이언스 / ESG",
    description:
      "공정거래 자율준수, 윤리경영, 환경과 지역사회 기여 활동을 분리된 정보 구조로 정리합니다.",
  },
  {
    title: "채용",
    description:
      "브랜드별 채용 정보와 공통 인재상을 연결해 지원 전환을 높이는 리크루팅 허브입니다.",
  },
];

export const franchiseSteps = [
  "브랜드 선택 및 상담 신청",
  "상권/입지 검토",
  "예상 투자비 산정",
  "오픈 일정 및 교육 안내",
];

export const pickupFlow = [
  "상품 탐색",
  "매장 선택",
  "시간 예약",
  "결제 완료",
  "픽업 알림",
];

export const previewPanels = [
  {
    title: "메인 허브",
    subtitle: "브랜드 허브, 이벤트, 주목할 브랜드를 한 번에 노출",
    image: "/reference/main.png",
  },
  {
    title: "로그인 & 멤버십",
    subtitle: "단일 로그인과 SNS 간편 가입으로 전환 장벽 최소화",
    image: "/reference/login.png",
  },
  {
    title: "브랜드 상세",
    subtitle: "브랜드별 특화 페이지로 자연스럽게 분기되는 구조",
    image: "/reference/brand-detail.png",
  },
  {
    title: "창업 안내",
    subtitle: "가맹 상담과 자료 요청까지 이어지는 B2B 전환 페이지",
    image: "/reference/franchise.png",
  },
];

export function getBrandBySlug(slug: string) {
  return brands.find((brand) => brand.slug === slug);
}
