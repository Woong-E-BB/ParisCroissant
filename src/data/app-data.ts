export type ImageCrop = {
  src: string;
  sourceWidth: number;
  sourceHeight: number;
  x: number;
  y: number;
  width: number;
  height: number;
  mode?: "crop" | "cover" | "contain";
  backgroundColor?: string;
};

export type BrandPromo = {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  crop: ImageCrop;
};

export type BrandSummary = {
  slug: string;
  name: string;
  englishName: string;
  logoText: string;
  logoColor: string;
  description: string;
  tagline: string;
  accent: string;
  siteUrl: string;
  sourceLabel: string;
  copyright: string;
  logoCrop?: ImageCrop;
  heroCrop: ImageCrop;
  secondaryCrop?: ImageCrop;
  categories: string[];
  highlights: string[];
  promotions: BrandPromo[];
};

export type ProductItem = {
  id: string;
  brandSlug: string;
  brand: string;
  name: string;
  price: number;
  priceLabel: string;
  originalPrice?: string;
  discountRate?: number;
  category: string;
  description: string;
  crop: ImageCrop;
  badge?: string;
  sourceUrl?: string;
};

type ReviewSummaryItem = {
  label: string;
  value: number;
};

type StoreItem = {
  id: string;
  name: string;
  type: string;
  address: string;
  phone: string;
  pickupNote: string;
};

const coverImage = (
  src: string,
  width: number,
  height: number,
  backgroundColor?: string,
): ImageCrop => ({
  src,
  sourceWidth: width,
  sourceHeight: height,
  x: 0,
  y: 0,
  width,
  height,
  mode: "cover",
  backgroundColor,
});

const containImage = (
  src: string,
  width: number,
  height: number,
  backgroundColor?: string,
): ImageCrop => ({
  src,
  sourceWidth: width,
  sourceHeight: height,
  x: 0,
  y: 0,
  width,
  height,
  mode: "contain",
  backgroundColor,
});

const localAsset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const officialSourceLinks = [
  {
    label: "파리바게뜨",
    href: "https://www.paris.co.kr/",
    copyright: "Copyright, PARIS CROISSANT Corp. All rights reserved",
  },
  {
    label: "파리바게뜨 케이터링",
    href: "https://www.parisbaguettecatering.kr/",
    copyright: "Copyright, PARIS CROISSANT Corp. All rights reserved",
  },
  {
    label: "파리크라상",
    href: "https://www.pariscroissantorder.com/",
    copyright: "Copyright, PARIS CROISSANT Corp. All rights reserved",
  },
  {
    label: "파스쿠찌",
    href: "https://www.pascucci.co.kr/",
    copyright: "Copyright, PARIS CROISSANT Corp. All rights reserved",
  },
  {
    label: "SPC Dining",
    href: "http://dining.spc.co.kr/index.do",
    copyright: "Copyright, PARIS CROISSANT Corp. All rights reserved",
  },
  {
    label: "리나스",
    href: "https://www.linaskorea.com/",
    copyright: "Copyright, PARIS CROISSANT Corp. All rights reserved",
  },
  {
    label: "커피앳웍스",
    href: "https://coffeeatworks.kr/",
    copyright: "Copyright, PARIS CROISSANT Corp. All rights reserved",
  },
  {
    label: "패션5",
    href: "https://xn--5-bv4f396b.com/",
    copyright: "Copyright, PARIS CROISSANT Corp. All rights reserved",
  },
  {
    label: "파리크라상 상품권",
    href: "https://parisgift.cafe24.com/",
    copyright: "Copyright, PARIS CROISSANT Corp. All rights reserved",
  },
];

export const topPartnerLinks = ["파리크라상", "Bakery", "Cafe & Dining", "B2B Gift"];

export const hubNav = [
  { label: "브랜드", href: "/brand-story" },
  { label: "이벤트", href: "/events" },
  { label: "상품", href: "/products" },
  { label: "픽업/예약", href: "/product" },
  { label: "창업/제휴", href: "/franchise" },
];

export const brandNav = [
  { label: "브랜드 소개", href: "/brand-story" },
  { label: "이벤트", href: "/events" },
  { label: "상품 안내", href: "/products" },
  { label: "픽업 주문", href: "/product" },
  { label: "창업 안내", href: "/franchise" },
];

/* ============================
   BRANDS — Real URLs from live sites
   ============================ */

export const brands: BrandSummary[] = [
  {
    slug: "paris-baguette",
    name: "파리바게뜨",
    englishName: "PARIS BAGUETTE",
    logoText: "PARIS BAGUETTE",
    logoColor: "#1e4ca1",
    description: "매일 신선하게 구워내는 빵과 케이크로 특별한 순간을 함께하는 대한민국 대표 베이커리 브랜드입니다.",
    tagline: "매일 구워내는 신선함, 오늘을 특별하게",
    accent: "#1e4ca1",
    siteUrl: "https://www.paris.co.kr/",
    sourceLabel: "paris.co.kr",
    copyright: "Copyright, PARIS CROISSANT Corp. All rights reserved",
    logoCrop: containImage(localAsset("/logos/paris-baguette-brand-logo.png"), 420, 50, "#ffffff"),
    heroCrop: coverImage("https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2026/04/%EB%B0%A5-%EB%A8%B9%EA%B3%A0-%ED%8C%8C%EB%B0%94%EA%B3%A0-3%EC%B0%A8_%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%88.jpg", 1600, 980),
    secondaryCrop: coverImage("https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2026/03/0227_%ED%8C%8C%EB%9E%80%EB%9D%BC%EB%B2%A8_%EC%8B%A0%EC%A0%9C%ED%92%88_%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%88_1600X2000.jpg", 1200, 1500),
    categories: ["전체", "브레드", "케이크", "디저트", "카페", "간편식"],
    highlights: ["PB STORY", "시즌 캠페인", "신상품", "매장 안내"],
    promotions: [
      {
        id: "pb-event-1",
        title: "밥 먹고 파바 고!",
        subtitle: "파리바게뜨 2026년 4월 메인 캠페인",
        href: "/brands/paris-baguette#promotion",
        crop: coverImage("https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2026/04/%EB%B0%A5-%EB%A8%B9%EA%B3%A0-%ED%8C%8C%EB%B0%94%EA%B3%A0-3%EC%B0%A8_%EC%8D%B8%EB%84%A4%EC%9D%BC-600x600.jpg", 600, 600),
      },
      {
        id: "pb-event-2",
        title: "파바팥빙수",
        subtitle: "시즌 디저트 신제품",
        href: "/products",
        crop: coverImage("https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2026/04/%ED%8C%8C%EB%B0%94%ED%8C%9D%EB%B9%99%EC%88%98_%EC%8D%B8%EB%84%A4%EC%9D%BC-600x600.jpg", 600, 600),
      },
      {
        id: "pb-event-3",
        title: "버터쫀떡",
        subtitle: "겉바속쫀 신제품",
        href: "/product",
        crop: coverImage("https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2026/04/%EB%B2%84%ED%84%B0%EC%AB%80%EB%96%A1_%EC%8D%B8%EB%84%A4%EC%9D%BC-600x600.jpg", 600, 600),
      },
    ],
  },
  {
    slug: "paris-croissant",
    name: "파리크라상",
    englishName: "PARIS CROISSANT",
    logoText: "PARIS CROISSANT",
    logoColor: "#6e4d2f",
    description: "케이터링, 선물세트 배송, 주문 제작 케이크까지 연결되는 프리미엄 베이커리 오더 브랜드입니다.",
    tagline: "프리미엄 오더 서비스",
    accent: "#8e6a3f",
    siteUrl: "https://www.pariscroissantorder.com/",
    sourceLabel: "pariscroissantorder.com",
    copyright: "Copyright, PARIS CROISSANT Corp. All rights reserved",
    logoCrop: containImage(localAsset("/logos/paris-croissant-brand-logo.png"), 400, 50, "#f8f3ec"),
    heroCrop: coverImage("https://ecimg.cafe24img.com/pg299b34409484036/baekih1001/web/upload/kment/images/banner_img.png", 1400, 920),
    secondaryCrop: coverImage("https://ecimg.cafe24img.com/pg299b34409484036/baekih1001/web/upload/kment/images/main_bnr2.jpg", 1200, 800),
    categories: ["전체", "브레드", "선물", "케이크", "케이터링"],
    highlights: ["케이터링", "선물세트", "주문 케이크", "온라인 오더"],
    promotions: [
      {
        id: "pc-event-1",
        title: "파리크라상 케이터링 박스",
        subtitle: "프리미엄 케이터링 박스",
        href: "/products",
        crop: coverImage("https://ecimg.cafe24img.com/pg299b34409484036/baekih1001/web/upload/kment/images/main_bnr1.jpg", 1200, 820),
      },
      {
        id: "pc-event-2",
        title: "선물세트 배송",
        subtitle: "간편한 온라인 선물 주문",
        href: "/product",
        crop: coverImage("https://ecimg.cafe24img.com/pg299b34409484036/baekih1001/web/upload/kment/images/main_bnr3.jpg", 1200, 820),
      },
    ],
  },
  {
    slug: "caffe-pascucci",
    name: "파스쿠찌",
    englishName: "PASCUCCI",
    logoText: "PASCUCCI",
    logoColor: "#8f1f27",
    description: "언제나 센스 있게, 이탈리아스럽게 즐기는 정통 이탈리안 카페 브랜드입니다.",
    tagline: "SENSE OF ITALY",
    accent: "#9c2131",
    siteUrl: "https://www.pascucci.co.kr/",
    sourceLabel: "pascucci.co.kr",
    copyright: "Copyright, PARIS CROISSANT Corp. All rights reserved",
    logoCrop: containImage(localAsset("/logos/pascucci-brand-logo.png"), 300, 60, "#fff7f5"),
    heroCrop: coverImage("https://www.pascucci.co.kr/images/main/slide/2026/04/05/1.jpg", 1600, 1000),
    secondaryCrop: coverImage("https://www.pascucci.co.kr/images/main/slide/2026/04/02/1.jpg", 1600, 1000),
    categories: ["전체", "커피", "음료", "디저트", "매장"],
    highlights: ["시즌 음료", "신제품", "매장 찾기", "가맹 안내"],
    promotions: [
      {
        id: "ps-event-1",
        title: "파스쿠찌 시즌 메뉴",
        subtitle: "4월 신제품 라인업",
        href: "/products",
        crop: coverImage("https://www.pascucci.co.kr/upload/mainEvent/1%20(2)_10586.jpg", 900, 900),
      },
      {
        id: "ps-event-2",
        title: "이탈리아 감성 카페",
        subtitle: "SENSE OF ITALY",
        href: "/brands/caffe-pascucci",
        crop: coverImage("https://www.pascucci.co.kr/images/main/slide/2026/04/04/1.jpg", 1600, 1000),
      },
    ],
  },
  {
    slug: "coffee-at-works",
    name: "커피앳웍스",
    englishName: "COFFEE AT WORKS",
    logoText: "COFFEE@WORKS",
    logoColor: "#111111",
    description: "스페셜티 원두, B2B 납품, 단체선물, 샘플 발송 문의까지 제공하는 커피 전문 브랜드입니다.",
    tagline: "스페셜티 커피 솔루션",
    accent: "#111111",
    siteUrl: "https://coffeeatworks.kr/",
    sourceLabel: "coffeeatworks.kr",
    copyright: "Copyright, PARIS CROISSANT Corp. All rights reserved",
    logoCrop: containImage(localAsset("/logos/coffee-at-works-brand-logo.png"), 260, 60, "#ffffff"),
    heroCrop: coverImage("https://cdn-pro-web-159-230.cdn-nhncommerce.com/coffeeworks22_godomall_com/data/skin/front/pc_sy04_board/img/banner/3a6c2d7f22e95e035408a55a32e60173_55289.jpg", 1600, 1000),
    secondaryCrop: coverImage("https://cdn-pro-web-159-230.cdn-nhncommerce.com/coffeeworks22_godomall_com/data/skin/front/pc_sy04_board/img/banner/c43fd883de7981b7c5f7bf6d44f919da_20576.jpg", 1600, 1000),
    categories: ["전체", "원두", "드립백", "티트라", "선물세트", "사업자용 상품"],
    highlights: ["드립백", "티트라", "기프트세트", "B2B 납품"],
    promotions: [
      {
        id: "cw-event-1",
        title: "B2B 원두 납품",
        subtitle: "사업자 원두 상담",
        href: "/franchise",
        crop: coverImage("https://cdn-pro-web-159-230.cdn-nhncommerce.com/coffeeworks22_godomall_com/data/skin/front/pc_sy04_board/img/banner/7f0500fff718b3a1901203e82a9ed80b_78389.png", 900, 760),
      },
      {
        id: "cw-event-2",
        title: "NEW OPEN",
        subtitle: "신규 매장 소식",
        href: "/stores",
        crop: coverImage("https://cdn-pro-web-159-230.cdn-nhncommerce.com/coffeeworks22_godomall_com/data/skin/front/pc_sy04_board/img/banner/e75808d1ba010177702d8eadd9d5bd5c_97090.png", 900, 760),
      },
    ],
  },
  {
    slug: "linas",
    name: "리나스",
    englishName: "LINA'S",
    logoText: "LINA'S",
    logoColor: "#1d5c50",
    description: "1989년 프랑스에서 시작한 샌드위치 & 샐러드 브랜드입니다.",
    tagline: "French Casual Dining",
    accent: "#1f5c4d",
    siteUrl: "https://www.linaskorea.com/",
    sourceLabel: "linaskorea.com",
    copyright: "Copyright, PARIS CROISSANT Corp. All rights reserved",
    logoCrop: containImage(localAsset("/logos/linas-brand-logo.jpg"), 180, 90, "#fffdf7"),
    heroCrop: coverImage("https://file.cafe24cos.com/banner-admin-live/upload/linaskorea/de6c44a4-552f-4870-c895-de24f23455b4.jpeg", 1600, 1000),
    secondaryCrop: coverImage("https://file.cafe24cos.com/banner-admin-live/upload/linaskorea/9df039cb-4927-407f-97e8-0c76d63e50b1.jpeg", 1200, 900),
    categories: ["전체", "샌드위치", "피크닉박스", "샐러드", "브런치"],
    highlights: ["Sandwich", "Picnic Box", "Salad", "French Casual"],
    promotions: [
      {
        id: "ln-event-1",
        title: "LINA'S Sandwich & Salad",
        subtitle: "프렌치 캐주얼 다이닝",
        href: "/products",
        crop: coverImage("https://file.cafe24cos.com/banner-admin-live/upload/linaskorea/60425d73-1593-47ca-c8d4-40ffceefadc2.jpeg", 1200, 900),
      },
    ],
  },
  {
    slug: "passion5",
    name: "패션5",
    englishName: "PASSION5",
    logoText: "PASSION5",
    logoColor: "#111111",
    description: "베이커리, 파티세리, 카페, 레스토랑에 열정을 담은 프리미엄 브랜드입니다.",
    tagline: "Premium Bakery & Cafe",
    accent: "#1d1d1b",
    siteUrl: "https://xn--5-bv4f396b.com/",
    sourceLabel: "패션5.com",
    copyright: "Copyright, PARIS CROISSANT Corp. All rights reserved",
    logoCrop: containImage(localAsset("/logos/passion5-brand-logo.png"), 240, 95, "#ffffff"),
    heroCrop: coverImage("https://xn--5-bv4f396b.com/web/upload/images/main_about.jpg", 1600, 1000),
    secondaryCrop: coverImage("https://xn--5-bv4f396b.com/web/upload/category/editor/2026/03/25/30261c46a10dc516438abe5e0d9c1a66.jpg", 1200, 900),
    categories: ["전체", "세트류", "케이터링", "베이커리", "파티세리"],
    highlights: ["세트류", "케이터링", "Premium Bakery", "Restaurant"],
    promotions: [
      {
        id: "p5-event-1",
        title: "PASSION5 Premium",
        subtitle: "프리미엄 디저트 경험",
        href: "/brand-story",
        crop: coverImage("https://xn--5-bv4f396b.com/web/upload/category/editor/2026/01/05/2e58edf9b9aa946bbc2bf2a19a828418.png", 1200, 860),
      },
    ],
  },
  {
    slug: "dining",
    name: "SPC Dining",
    englishName: "SPC DINING",
    logoText: "SPC DINING",
    logoColor: "#2b2b2b",
    description: "퀸즈파크, 라브리, 베라피자, 라그릴리아, 스트릿 등 SPC 외식 브랜드의 메뉴와 브랜드 정보를 소개합니다.",
    tagline: "다이닝 브랜드 포트폴리오",
    accent: "#5f3c27",
    siteUrl: "http://dining.spc.co.kr/index.do",
    sourceLabel: "dining.spc.co.kr",
    copyright: "Copyright, PARIS CROISSANT Corp. All rights reserved",
    logoCrop: containImage(localAsset("/logos/spc-dining-typography.svg"), 420, 100, "#fff9f5"),
    heroCrop: coverImage(localAsset("/images/dining/main.jpg"), 1600, 1000),
    secondaryCrop: coverImage(localAsset("/images/dining/main_01.jpg"), 1200, 900),
    categories: ["전체", "퀸즈파크", "라브리", "베라피자", "라그릴리아", "스트릿"],
    highlights: ["Queens Park", "L'abri", "VERA PIZZA", "LAGRILLIA", "strEAT"],
    promotions: [
      {
        id: "dn-event-queenspark",
        title: "QUEENS PARK",
        subtitle: "APPETIZER · BRUNCH · TAPAS · PASTA · RISOTTO · STEAK",
        href: "http://dining.spc.co.kr/queenspark.do",
        crop: coverImage(localAsset("/images/dining/queenspark_brand.jpg"), 1600, 960),
      },
      {
        id: "dn-event-labri",
        title: "L'abri",
        subtitle: "Lunch Course · Dinner Course",
        href: "http://dining.spc.co.kr/labri.do",
        crop: coverImage(localAsset("/images/dining/labri_brand.jpg"), 1600, 960),
      },
      {
        id: "dn-event-vera",
        title: "VERA PIZZA",
        subtitle: "베라피자 공식 브랜드 & 메뉴 페이지",
        href: "http://dining.spc.co.kr/vera.do",
        crop: coverImage(localAsset("/images/dining/verapizza_brand.jpg"), 1600, 960),
      },
      {
        id: "dn-event-lagrillia",
        title: "LAGRILLIA",
        subtitle: "SEASON SPECIAL · GRILL · PIZZA · PASTA · RICE",
        href: "http://dining.spc.co.kr/lagrillia.do",
        crop: coverImage(localAsset("/images/dining/lagrillia_visual_260225.jpg"), 1600, 960),
      },
      {
        id: "dn-event-streat",
        title: "strEAT",
        subtitle: "Set ST. · Noodle ST. · Rice ST. · Main & Side ST.",
        href: "http://dining.spc.co.kr/streat.do",
        crop: coverImage(localAsset("/images/dining/streat_brand_pc_260316.jpg"), 1600, 960),
      },
    ],
  },
  {
    slug: "spc-gift",
    name: "파리크라상 상품권",
    englishName: "PARIS CROISSANT GIFT",
    logoText: "PARIS CROISSANT GIFT",
    logoColor: "#745b34",
    description: "SPC상품권, 파리바게뜨 상품권, 해피콘을 법인 대량 구매로 연결하는 B2B 상품권몰입니다.",
    tagline: "B2B 상품권 구매",
    accent: "#8a6b32",
    siteUrl: "https://parisgift.cafe24.com/",
    sourceLabel: "parisgift.cafe24.com",
    copyright: "Copyright, PARIS CROISSANT Corp. All rights reserved",
    logoCrop: containImage(localAsset("/logos/paris-croissant-gift-typography.svg"), 520, 100, "#ffffff"),
    heroCrop: coverImage("https://parisgift.cafe24.com/web/upload/share-image-1-a75aa3aa5b5702fce0ad2c46cf25d9a1.png", 1600, 1000),
    secondaryCrop: coverImage("https://parisgift.cafe24.com/web/product/medium/202311/4f3f184bf4c4004bfd791c0838897844.jpg", 1200, 900, "#faf7f2"),
    categories: ["전체", "SPC상품권", "파리바게뜨 상품권", "해피콘", "대량구매"],
    highlights: ["SPC상품권", "파리바게뜨 상품권", "대량구매", "기념일 관리"],
    promotions: [
      {
        id: "gt-event-1",
        title: "SPC상품권 3만원",
        subtitle: "기업 선물 대표 상품권",
        href: "/checkout",
        crop: coverImage("https://parisgift.cafe24.com/web/product/medium/202311/4f3f184bf4c4004bfd791c0838897844.jpg", 760, 760, "#faf7f2"),
      },
      {
        id: "gt-event-2",
        title: "SPC상품권 1만원권",
        subtitle: "실속형 상품권",
        href: "/products",
        crop: coverImage("https://parisgift.cafe24.com/web/product/medium/202311/681de13bb3ac38b5b4b665280073660d.jpg", 760, 760, "#faf7f2"),
      },
    ],
  },
  {
    slug: "paris-baguette-catering",
    name: "파리바게뜨 케이터링",
    englishName: "PARIS BAGUETTE CATERING",
    logoText: "PB CATERING",
    logoColor: "#00b7c6",
    description: "화려한 만찬을 제공하는 프리미엄 케이터링 브랜드입니다.",
    tagline: "프리미엄 케이터링",
    accent: "#00a9b8",
    siteUrl: "https://www.parisbaguettecatering.kr/",
    sourceLabel: "parisbaguettecatering.kr",
    copyright: "Copyright, PARIS CROISSANT Corp. All rights reserved",
    heroCrop: coverImage("https://www.parisbaguettecatering.kr/img/sub-proposal00-visual.jpg", 1600, 1000),
    secondaryCrop: coverImage("https://www.parisbaguettecatering.kr/img/service/img-service-info01.jpg", 1200, 900),
    categories: ["전체", "케이터링", "기업행사", "포트폴리오", "문의"],
    highlights: ["Coffee Break", "Simple Plan", "Delivery", "Special Orders"],
    promotions: [
      {
        id: "ct-event-1",
        title: "Premium Catering",
        subtitle: "프리미엄 케이터링 서비스",
        href: "/franchise",
        crop: coverImage("https://www.parisbaguettecatering.kr/img/sub-proposal00-visual.jpg", 1200, 860),
      },
    ],
  },
];

export const featuredBrandSlugs = brands.map((brand) => brand.slug);

/* ============================
   HERO CAROUSEL SLIDES
   ============================ */

export const heroSlides = [
  {
    id: "slide-paris",
    title: "밥 먹고 파바 고!",
    subtitle: "파리바게뜨의 4월 캠페인과 신제품을 만나보세요",
    brandName: "파리바게뜨",
    href: "/brands/paris-baguette",
    crop: brands[0].heroCrop,
    accent: "#1e4ca1",
  },
  {
    id: "slide-paris-blue-label-matcha",
    title: "파란라벨이라면 건강도 습관이 됩니다",
    subtitle: "저당 말차 케이크 출시 이벤트 · 2026.04.09 - 2026.12.31",
    brandName: "파리바게뜨",
    href: "https://www.paris.co.kr/promotion/pb-blue-label-matcha/",
    crop: coverImage(
      "https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2026/04/%ED%8C%8C%EB%9E%80%EB%9D%BC%EB%B2%A8-%EC%A0%80%EB%8B%B9%EB%A7%90%EC%B0%A8%EC%BC%80%EC%9D%B4%ED%81%AC_%EC%8D%B8%EB%84%A4%EC%9D%BC_260407.jpg",
      1000,
      1000,
    ),
    accent: "#1f5bbf",
  },
  {
    id: "slide-pascucci",
    title: "SENSE OF ITALY",
    subtitle: "파스쿠찌 시즌 음료와 디저트를 지금 확인하세요",
    brandName: "파스쿠찌",
    href: "/brands/caffe-pascucci",
    crop: brands[2].heroCrop,
    accent: "#9c2131",
  },
  {
    id: "slide-croissant",
    title: "파리크라상 케이터링 & 선물세트",
    subtitle: "품격 있는 베이커리 선물과 주문 제작 케이크",
    brandName: "파리크라상",
    href: "/brands/paris-croissant",
    crop: brands[1].heroCrop,
    accent: "#8e6a3f",
  },
  {
    id: "slide-coffee",
    title: "스페셜티 커피와 B2B 납품",
    subtitle: "커피앳웍스의 원두, 정기배송, 사업자용 상품",
    brandName: "커피앳웍스",
    href: "/brands/coffee-at-works",
    crop: brands[3].heroCrop,
    accent: "#111111",
  },
  {
    id: "slide-dining",
    title: "SPC 다이닝 브랜드",
    subtitle: "라그릴리아, 퀸즈파크, 스트릿 외식 브랜드",
    brandName: "SPC Dining",
    href: "/brands/dining",
    crop: coverImage(localAsset("/images/dining/lagrillia_visual_260225.jpg"), 1600, 900),
    accent: "#5f3c27",
  },
];

export const mainHeroBanners = [
  {
    id: "main-hero-paris",
    title: "밥 먹고 파바 고!",
    subtitle: "파리바게뜨의 최신 캠페인과 신제품을 한눈에 만나보세요.",
    href: "/brands/paris-baguette",
    crop: brands[0].heroCrop,
  },
  {
    id: "main-hero-croissant",
    title: "파리크라상 케이터링 & 선물세트",
    subtitle: "품격 있는 베이커리 선물과 주문 제작 케이크를 준비하세요.",
    href: "/brands/paris-croissant",
    crop: brands[1].heroCrop,
  },
  {
    id: "main-hero-coffee",
    title: "스페셜티 커피와 B2B 원두 납품",
    subtitle: "커피앳웍스의 원두, 정기배송, 사업자용 상품을 확인하세요.",
    href: "/brands/coffee-at-works",
    crop: brands[3].heroCrop,
  },
];

export const mainEventCards = [
  {
    id: "event-1",
    title: "4월 파리바게뜨 이벤트",
    subtitle: "파바팥빙수, 버터쫀떡, 파바크러시까지 최신 프로모션",
    href: "/brands/paris-baguette#promotion",
    crop: brands[0].promotions[0].crop,
  },
  {
    id: "event-2",
    title: "케이터링과 선물 예약",
    subtitle: "파리크라상과 파리바게뜨 케이터링으로 특별한 모임",
    href: "/brands/paris-baguette-catering",
    crop: brands[8].heroCrop,
  },
  {
    id: "event-3",
    title: "기업 고객을 위한 B2B 구매",
    subtitle: "커피, 상품권, 케이터링을 법인 고객 목적에 맞게",
    href: "/checkout",
    crop: brands[7].secondaryCrop ?? brands[7].heroCrop,
  },
];

export const issueCards = [
  { id: "issue-1", title: "파바팥빙수", href: "/products", crop: brands[0].promotions[1].crop },
  { id: "issue-2", title: "SENSE OF ITALY", href: "/brands/caffe-pascucci", crop: brands[2].heroCrop },
  { id: "issue-3", title: "LINA'S Sandwich & Salad", href: "/brands/linas", crop: brands[4].secondaryCrop ?? brands[4].heroCrop },
  { id: "issue-4", title: "SPC상품권 3만원", href: "/brands/spc-gift", crop: brands[7].secondaryCrop ?? brands[7].heroCrop },
];

/* ============================
   COUPON DATA
   ============================ */

export const couponCards = [
  {
    id: "cpn-1",
    brand: "파리바게뜨",
    title: "파바팥빙수 출시 기념 할인",
    discountRate: 15,
    discountPrice: "8,500원",
    originalPrice: "10,000원",
    crop: coverImage("https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2026/04/%ED%8C%8C%EB%B0%94%ED%8C%9D%EB%B9%99%EC%88%98_%EC%8D%B8%EB%84%A4%EC%9D%BC-600x600.jpg", 600, 600),
    brandColor: "#1e4ca1",
  },
  {
    id: "cpn-2",
    brand: "파리바게뜨",
    title: "4월 스마트팁 쿠폰",
    discountRate: 10,
    discountPrice: undefined,
    originalPrice: undefined,
    crop: coverImage("https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2026/03/4%EC%9B%94_%EC%8A%A4%EB%A7%88%ED%8A%B8%ED%8C%81_%EC%8D%B8%EB%84%A4%EC%9D%BC_1000x1000-600x600.jpg", 600, 600),
    brandColor: "#1e4ca1",
  },
  {
    id: "cpn-3",
    brand: "파스쿠찌",
    title: "시즌 음료 1+1 쿠폰",
    discountRate: 50,
    discountPrice: undefined,
    originalPrice: undefined,
    crop: coverImage("https://www.pascucci.co.kr/images/main/new/2026/04/1.jpg?v=3", 900, 900),
    brandColor: "#9c2131",
  },
  {
    id: "cpn-4",
    brand: "파리크라상",
    title: "케이터링 첫 주문 10% 할인",
    discountRate: 10,
    discountPrice: undefined,
    originalPrice: undefined,
    crop: coverImage("https://ecimg.cafe24img.com/pg299b34409484036/baekih1001/web/upload/kment/images/main_bnr1.jpg", 1200, 820),
    brandColor: "#8e6a3f",
  },
  {
    id: "cpn-5",
    brand: "커피앳웍스",
    title: "B2B 정기배송 첫 달 무료",
    discountRate: undefined,
    discountPrice: "무료체험",
    originalPrice: undefined,
    crop: coverImage("https://cdn-pro-web-159-230.cdn-nhncommerce.com/coffeeworks22_godomall_com/data/skin/front/pc_sy04_board/img/banner/989ddd06b14875ae13ecdedf7574e436_96637.png", 900, 900),
    brandColor: "#111111",
  },
  {
    id: "cpn-6",
    brand: "파리크라상 상품권",
    title: "상품권 대량 구매 추가 증정",
    discountRate: 5,
    discountPrice: "28,500원",
    originalPrice: "30,000원",
    crop: coverImage("https://parisgift.cafe24.com/web/product/medium/202311/4f3f184bf4c4004bfd791c0838897844.jpg", 760, 760, "#faf7f2"),
    brandColor: "#745b34",
  },
];

/* ============================
   PRODUCTS — Real image URLs
   ============================ */

export const products: ProductItem[] = [
  {
    id: "pb-low-sugar-cacao-cake",
    brandSlug: "paris-baguette",
    brand: "파리바게뜨",
    name: "저당 카카오 케이크",
    price: 25000,
    priceLabel: "25,000원",
    category: "케이크",
    description: "파란라벨 저당 라인업 신제품",
    crop: coverImage("https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2026/04/%EC%A0%80%EB%8B%B9%EC%B9%B4%EC%B9%B4%EC%98%A4%EC%BC%80%EC%9D%B4%ED%81%AC-%EC%A0%9C%ED%92%88-600x600.png", 600, 600, "#faf7f2"),
    badge: "NEW",
    sourceUrl: "https://www.paris.co.kr/",
  },
  {
    id: "pb-truffle-pasta",
    brandSlug: "paris-baguette",
    brand: "파리바게뜨",
    name: "트러플오일 버섯크림 파스타",
    price: 8900,
    priceLabel: "8,900원",
    originalPrice: "9,800원",
    discountRate: 9,
    category: "간편식",
    description: "HMR 프리미엄 파스타 신제품",
    crop: coverImage("https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2026/04/HMR-%ED%8A%B8%EB%9F%AC%ED%94%8C%EC%98%A4%EC%9D%BC-%EB%B2%84%EC%84%AF%ED%81%AC%EB%A6%BC-%ED%8C%8C%EC%8A%A4%ED%83%80_%EC%8B%9C%EB%AE%AC%EC%A0%9C%ED%92%88-600x600.png", 600, 600, "#faf7f2"),
    badge: "NEW",
  },
  {
    id: "pb-basil-ricotta-pasta",
    brandSlug: "paris-baguette",
    brand: "파리바게뜨",
    name: "바질 리코타 토마토 파스타",
    price: 8900,
    priceLabel: "8,900원",
    category: "간편식",
    description: "브런치와 식사용 HMR 파스타",
    crop: coverImage("https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2026/04/HMR-%EB%B0%94%EC%A7%88-%EB%A6%AC%EC%BD%94%ED%83%80-%ED%86%A0%EB%A7%88%ED%86%A0-%ED%8C%8C%EC%8A%A4%ED%83%80_%EC%8B%9C%EB%AE%AC%EC%A0%9C%ED%92%88-600x600.png", 600, 600, "#faf7f2"),
  },
  {
    id: "pb-fresh-bread",
    brandSlug: "paris-baguette",
    brand: "파리바게뜨",
    name: "후레쉬식빵",
    price: 3500,
    priceLabel: "3,500원",
    category: "브레드",
    description: "매일 즐기는 기본 식빵",
    crop: coverImage("https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2026/04/%ED%9B%84%EB%A0%88%EC%89%AC%EC%8B%9D%EB%B9%B5-600x600.png", 600, 600, "#faf7f2"),
    badge: "BEST",
  },
  {
    id: "pb-melon-crush",
    brandSlug: "paris-baguette",
    brand: "파리바게뜨",
    name: "멜론 크러시",
    price: 5200,
    priceLabel: "5,200원",
    category: "디저트",
    description: "시즌 한정 디저트",
    crop: coverImage("https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2026/03/%EB%A9%9C%EB%A1%A0-%ED%81%AC%EB%9F%AC%EC%8B%9C-600x600.jpg", 600, 600),
    badge: "SEASON",
  },
  {
    id: "pb-cheese-soufle",
    brandSlug: "paris-baguette",
    brand: "파리바게뜨",
    name: "치즈 수플레 케이크",
    price: 19800,
    priceLabel: "19,800원",
    category: "케이크",
    description: "부드러운 치즈 수플레",
    crop: coverImage("https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2026/03/%EC%B9%98%EC%A6%88-%EC%88%98%ED%94%8C%EB%A0%88-%EC%BC%80%EC%9D%B4%ED%81%AC-600x600.jpg", 600, 600),
  },
  {
    id: "pc-product-1",
    brandSlug: "paris-croissant",
    brand: "파리크라상",
    name: "버터향 가득 바삭한 소금빵",
    price: 0,
    priceLabel: "가격문의",
    category: "브레드",
    description: "버터를 듬뿍 넣어 구워낸 겉바속촉 스타일의 시그니처 소금빵",
    crop: coverImage("https://ecimg.cafe24img.com/pg299b34409484036/baekih1001/web/product/medium/20240412/e381834ac794b4fda517f54254c34e15.jpg", 800, 800),
    badge: "BEST",
    sourceUrl: "https://www.pariscroissantorder.com/product/list5.html?cate_no=68",
  },
  {
    id: "pc-product-2",
    brandSlug: "paris-croissant",
    brand: "파리크라상",
    name: "더욱 맛있어진 명란 바게뜨",
    price: 0,
    priceLabel: "가격문의",
    category: "브레드",
    description: "정통 프랑스 바게뜨에 명란 소스를 더한 파리크라상 인기 바게뜨",
    crop: coverImage("https://ecimg.cafe24img.com/pg299b34409484036/baekih1001/web/product/medium/20240412/868a9dd4d1a4574884568c6bc768c8bd.jpg", 800, 800),
    sourceUrl: "https://www.pariscroissantorder.com/product/list5.html?cate_no=68",
  },
  {
    id: "pc-product-3",
    brandSlug: "paris-croissant",
    brand: "파리크라상",
    name: "장인의 생(生)식빵",
    price: 0,
    priceLabel: "가격문의",
    category: "브레드",
    description: "반죽부터 숙성까지 장인의 손길로 완성한 파리크라상 대표 식빵",
    crop: coverImage("https://ecimg.cafe24img.com/pg299b34409484036/baekih1001/web/product/medium/20240412/d93b12b137bc835bd63bee6d855d3105.jpg", 800, 800),
    sourceUrl: "https://www.pariscroissantorder.com/product/list5.html?cate_no=68",
  },
  {
    id: "pc-product-4",
    brandSlug: "paris-croissant",
    brand: "파리크라상",
    name: "미니크라상",
    price: 0,
    priceLabel: "가격문의",
    category: "브레드",
    description: "겹겹의 바삭한 결을 살린 프랑스식 정통 페이스트리",
    crop: coverImage("https://ecimg.cafe24img.com/pg299b34409484036/baekih1001/web/product/medium/20240412/f9f74e33db72c51b9dfcb3b19fcbfa41.jpg", 800, 800),
    sourceUrl: "https://www.pariscroissantorder.com/product/list5.html?cate_no=68",
  },
  {
    id: "ps-product-1",
    brandSlug: "caffe-pascucci",
    brand: "파스쿠찌",
    name: "에소플 마끼아또",
    price: 0,
    priceLabel: "매장별 상이",
    category: "커피",
    description: "Macchiato Espresso Plate 시그니처 메뉴",
    crop: coverImage(encodeURI("https://www.pascucci.co.kr/upload/product/마끼야또_14352.png"), 720, 720, "#f6f1eb"),
    badge: "NEW",
    sourceUrl: "https://www.pascucci.co.kr/product/productList.asp?typeCode=00100010",
  },
  {
    id: "ps-product-2",
    brandSlug: "caffe-pascucci",
    brand: "파스쿠찌",
    name: "에소플 콘파나",
    price: 0,
    priceLabel: "매장별 상이",
    category: "커피",
    description: "Con panna Espresso Plate 시그니처 메뉴",
    crop: coverImage(encodeURI("https://www.pascucci.co.kr/upload/product/콘파나_143539.png"), 720, 720, "#f6f1eb"),
    sourceUrl: "https://www.pascucci.co.kr/product/productList.asp?typeCode=00100010",
  },
  {
    id: "ps-product-3",
    brandSlug: "caffe-pascucci",
    brand: "파스쿠찌",
    name: "이탈리안 아포가또",
    price: 0,
    priceLabel: "매장별 상이",
    category: "디저트",
    description: "Italian Affogato로 즐기는 에스프레소 디저트",
    crop: coverImage(encodeURI("https://www.pascucci.co.kr/upload/product/이탈리안아포가또_1562_181627.jpg"), 720, 720, "#f6f1eb"),
    sourceUrl: "https://www.pascucci.co.kr/product/productList.asp?typeCode=00100010",
  },
  {
    id: "ps-product-4",
    brandSlug: "caffe-pascucci",
    brand: "파스쿠찌",
    name: "에스프레소 솔로",
    price: 0,
    priceLabel: "매장별 상이",
    category: "커피",
    description: "파스쿠찌 에스프레소 바의 기본 메뉴",
    crop: coverImage(encodeURI("https://www.pascucci.co.kr/upload/product/에스프레소_16833_18171.jpg"), 720, 720, "#f6f1eb"),
    sourceUrl: "https://www.pascucci.co.kr/product/productList.asp?typeCode=00100010",
  },
  {
    id: "ps-product-5",
    brandSlug: "caffe-pascucci",
    brand: "파스쿠찌",
    name: "에스프레소 마끼아또",
    price: 0,
    priceLabel: "매장별 상이",
    category: "커피",
    description: "Espresso Macchiato로 완성한 정통 이탈리안 커피",
    crop: coverImage(encodeURI("https://www.pascucci.co.kr/upload/product/에스프레소 마끼아또_16811_181730.jpg"), 720, 720, "#f6f1eb"),
    sourceUrl: "https://www.pascucci.co.kr/product/productList.asp?typeCode=00100010",
  },
  {
    id: "cw-product-1",
    brandSlug: "coffee-at-works",
    brand: "커피앳웍스",
    name: "커스텀 드립백 위클리박스",
    price: 9800,
    priceLabel: "9,800원",
    category: "드립백",
    description: "10g 7개입 구성의 커스텀 드립백 위클리박스",
    crop: coverImage("https://cdn-pro-web-159-230.cdn-nhncommerce.com/coffeeworks22_godomall_com/data/goods/23/11/44/1000000050/1000000050_main_046.jpg", 900, 900, "#f2f0eb"),
    badge: "NEW",
    sourceUrl: "https://coffeeatworks.kr/goods/goods_view.php?goodsNo=1000000050",
  },
  {
    id: "cw-product-2",
    brandSlug: "coffee-at-works",
    brand: "커피앳웍스",
    name: "커스텀 드립백 먼슬리박스",
    price: 39000,
    priceLabel: "39,000원",
    category: "드립백",
    description: "10g 30개입으로 구성한 커스텀 드립백 먼슬리박스",
    crop: coverImage("https://cdn-pro-web-159-230.cdn-nhncommerce.com/coffeeworks22_godomall_com/data/goods/23/11/44/1000000052/1000000052_main_038.jpg", 900, 900, "#f2f0eb"),
    sourceUrl: "https://coffeeatworks.kr/goods/goods_view.php?goodsNo=1000000052",
  },
  {
    id: "cw-product-3",
    brandSlug: "coffee-at-works",
    brand: "커피앳웍스",
    name: "[티트라] 시그니처 기프트세트",
    price: 67000,
    priceLabel: "67,000원",
    category: "선물세트",
    description: "10개입 4개 구성을 담은 티트라 시그니처 기프트세트",
    crop: coverImage("https://cdn-pro-web-159-230.cdn-nhncommerce.com/coffeeworks22_godomall_com/data/goods/25/03/13/1000000300/1000000300_main_07.jpg", 900, 900, "#f2f0eb"),
    badge: "BEST",
    sourceUrl: "https://coffeeatworks.kr/goods/goods_view.php?goodsNo=1000000300",
  },
  {
    id: "cw-product-4",
    brandSlug: "coffee-at-works",
    brand: "커피앳웍스",
    name: "[티트라] 선라이즈 히비스커스 스트로베리",
    price: 24000,
    priceLabel: "24,000원",
    category: "티트라",
    description: "20개입 스탠다드 파우치 티트라 블렌드",
    crop: coverImage("https://cdn-pro-web-159-230.cdn-nhncommerce.com/coffeeworks22_godomall_com/data/goods/25/03/11/1000000284/1000000284_main_046.jpg", 900, 900, "#f2f0eb"),
    sourceUrl: "https://coffeeatworks.kr/goods/goods_view.php?goodsNo=1000000284",
  },
  {
    id: "cw-product-5",
    brandSlug: "coffee-at-works",
    brand: "커피앳웍스",
    name: "[티트라] 샤인머스캣 그린티",
    price: 23000,
    priceLabel: "23,000원",
    category: "티트라",
    description: "20개입 스탠다드 파우치 티트라 블렌드",
    crop: coverImage("https://cdn-pro-web-159-230.cdn-nhncommerce.com/coffeeworks22_godomall_com/data/goods/25/03/11/1000000283/1000000283_main_083.jpg", 900, 900, "#f2f0eb"),
    sourceUrl: "https://coffeeatworks.kr/goods/goods_view.php?goodsNo=1000000283",
  },
  {
    id: "gift-spc-30000",
    brandSlug: "spc-gift",
    brand: "파리크라상 상품권",
    name: "파리바게뜨 상품권 1만원권",
    price: 10000,
    priceLabel: "10,000원",
    category: "파리바게뜨 상품권",
    description: "공식 온라인몰에서 구매 가능한 파리바게뜨 상품권",
    crop: coverImage("https://parisgift.cafe24.com/web/product/medium/202311/a8dc912cea41c5d0b605e0ae78658408.jpg", 760, 760, "#faf7f2"),
    badge: "BEST",
    sourceUrl: "https://parisgift.cafe24.com/product/detail.html?product_no=16&cate_no=43&display_group=1",
  },
  {
    id: "gift-spc-10000",
    brandSlug: "spc-gift",
    brand: "파리크라상 상품권",
    name: "파리바게뜨 상품권 5천원권",
    price: 5000,
    priceLabel: "5,000원",
    category: "파리바게뜨 상품권",
    description: "실속형 금액대로 구성된 파리바게뜨 상품권",
    crop: coverImage("https://parisgift.cafe24.com/web/product/medium/202311/0034643164c9ff80ee2301ac48b608a9.jpg", 760, 760, "#faf7f2"),
    sourceUrl: "https://parisgift.cafe24.com/product/detail.html?product_no=15&cate_no=43&display_group=1",
  },
  {
    id: "linas-product-1",
    brandSlug: "linas",
    brand: "리나스",
    name: "파티 피크닉 박스 (10인분)",
    price: 110000,
    priceLabel: "110,000원",
    category: "피크닉박스",
    description: "샌드위치 5종 20ea와 샐러드컵, 과일컵으로 구성한 대형 피크닉 박스",
    crop: coverImage("https://www.linaskorea.com/web/product/medium/202411/7923577f82cb1c459f0ae0caf0bc3947.png", 1200, 900, "#f8f5ef"),
    badge: "OFFICIAL",
    sourceUrl: "https://www.linaskorea.com/product/%ED%8C%8C%ED%8B%B0-%ED%94%BC%ED%81%AC%EB%8B%89-%EB%B0%95%EC%8A%A4-10%EC%9D%B8%EB%B6%84/74/category/48/display/1/",
  },
  {
    id: "linas-product-2",
    brandSlug: "linas",
    brand: "리나스",
    name: "건강 피크닉 박스",
    price: 19000,
    priceLabel: "19,000원",
    category: "피크닉박스",
    description: "샌드위치 하프와 샐러드컵, 과일컵, 구움과자, 오렌지주스로 구성한 박스",
    crop: coverImage("https://www.linaskorea.com/web/product/medium/202501/a4fa00d7f508f68716388faafa287d11.png", 1200, 900, "#f8f5ef"),
    sourceUrl: "https://www.linaskorea.com/product/%EA%B1%B4%EA%B0%95-%ED%94%BC%ED%81%AC%EB%8B%89-%EB%B0%95%EC%8A%A4/55/category/48/display/1/",
  },
  {
    id: "linas-product-3",
    brandSlug: "linas",
    brand: "리나스",
    name: "카페 피크닉 박스",
    price: 16000,
    priceLabel: "16,000원",
    category: "피크닉박스",
    description: "샌드위치 하프와 구움과자, 콜드브루 아메리카노를 담은 피크닉 박스",
    crop: coverImage("https://www.linaskorea.com/web/product/medium/202602/162bc3c2626bb19323d26abde7914348.png", 1200, 900, "#f8f5ef"),
    sourceUrl: "https://www.linaskorea.com/product/%EC%B9%B4%ED%8E%98-%ED%94%BC%ED%81%AC%EB%8B%89-%EB%B0%95%EC%8A%A4/104/category/48/display/1/",
  },
  {
    id: "linas-product-4",
    brandSlug: "linas",
    brand: "리나스",
    name: "딸기&그릭요거트 크림샌드",
    price: 8000,
    priceLabel: "8,000원",
    category: "샌드위치",
    description: "딸기와 그릭요거트 마스카포네 치즈 크림을 담은 크림샌드",
    crop: coverImage("https://www.linaskorea.com/web/product/medium/202602/1d243753a673585fc3c7c53cda350c8f.png", 1200, 900, "#f8f5ef"),
    sourceUrl: "https://www.linaskorea.com/product/%EB%94%B8%EA%B8%B0%EA%B7%B8%EB%A6%AD%EC%9A%94%EA%B1%B0%ED%8A%B8-%ED%81%AC%EB%A6%BC%EC%83%8C%EB%93%9C/107/category/44/display/1/",
  },
  {
    id: "linas-product-5",
    brandSlug: "linas",
    brand: "리나스",
    name: "비프 피타 샌드 밀박스",
    price: 12000,
    priceLabel: "12,000원",
    category: "샌드위치",
    description: "피타브레드와 비프 패티, 치즈, 토마토, 피클, 과일 2종으로 구성한 밀박스",
    crop: coverImage("https://www.linaskorea.com/web/product/medium/202601/9cf2addcb406d883505a68c31216ce92.png", 1200, 900, "#f8f5ef"),
    sourceUrl: "https://www.linaskorea.com/product/%EB%B9%84%ED%94%84-%ED%94%BC%ED%83%80-%EC%83%8C%EB%93%9C-%EB%B0%80%EB%B0%95%EC%8A%A4/101/category/44/display/1/",
  },
  {
    id: "passion5-product-1",
    brandSlug: "passion5",
    brand: "패션5",
    name: "패션5 케이터링 메뉴",
    price: 0,
    priceLabel: "메뉴 문의",
    category: "케이터링",
    description: "특별한 날을 위한 패션5 공식 케이터링 메뉴 페이지",
    crop: coverImage("https://xn--5-bv4f396b.com/web/upload/images/top_image_catering.jpg", 1200, 900, "#f7f3ed"),
    badge: "OFFICIAL",
    sourceUrl: "https://xn--5-bv4f396b.com/catering",
  },
  {
    id: "passion5-product-2",
    brandSlug: "passion5",
    brand: "패션5",
    name: "미니 바움쿠헨 세트",
    price: 40000,
    priceLabel: "40,000원",
    category: "세트류",
    description: "패션5 세트류 카테고리 대표 선물 상품",
    crop: coverImage("https://xn--5-bv4f396b.com/web/product/medium/202602/bbfb98ae8e30773300c233e6b4137729.jpg", 1200, 900, "#f7f3ed"),
    badge: "BEST",
    sourceUrl: "https://xn--5-bv4f396b.com/product/detail.html?product_no=183&cate_no=47&display_group=1",
  },
  {
    id: "passion5-product-3",
    brandSlug: "passion5",
    brand: "패션5",
    name: "파이 선물세트",
    price: 40000,
    priceLabel: "40,000원",
    category: "세트류",
    description: "패션5 공식 온라인몰 세트류 선물 상품",
    crop: coverImage("https://xn--5-bv4f396b.com/web/product/medium/202603/15e28bbc60674ecfd4ab35df20fd9bf8.jpg", 1200, 900, "#f7f3ed"),
    sourceUrl: "https://xn--5-bv4f396b.com/product/detail.html?product_no=301&cate_no=47&display_group=1",
  },
  {
    id: "passion5-product-4",
    brandSlug: "passion5",
    brand: "패션5",
    name: "구움과자 선물세트 No.52",
    price: 52000,
    priceLabel: "52,000원",
    category: "세트류",
    description: "패션5 구움과자 선물세트 라인업",
    crop: coverImage("https://xn--5-bv4f396b.com/web/product/medium/202603/67aa19841e36d154f09e81f4bbf5cc57.jpg", 1200, 900, "#f7f3ed"),
    sourceUrl: "https://xn--5-bv4f396b.com/product/detail.html?product_no=655&cate_no=47&display_group=1",
  },
  {
    id: "passion5-product-5",
    brandSlug: "passion5",
    brand: "패션5",
    name: "스페셜 오더 2단 선물세트",
    price: 330000,
    priceLabel: "330,000원",
    category: "세트류",
    description: "맞춤형 구성으로 주문 가능한 패션5 스페셜 오더 선물세트",
    crop: coverImage("https://xn--5-bv4f396b.com/web/product/medium/202509/c6c3aff339b238cc0101c701bc67339f.jpg", 1200, 900, "#f7f3ed"),
    badge: "RESERVE",
    sourceUrl: "https://xn--5-bv4f396b.com/product/detail.html?product_no=202&cate_no=47&display_group=1",
  },
  {
    id: "dining-product-queenspark",
    brandSlug: "dining",
    brand: "SPC Dining",
    name: "QUEENS PARK Menu",
    price: 0,
    priceLabel: "공식 메뉴 보기",
    category: "퀸즈파크",
    description: "브런치, 파스타, 리조또, 스테이크 메뉴 구성",
    crop: coverImage(localAsset("/images/dining/queenspark_menu_251209.jpg"), 1200, 900),
    badge: "DINING",
    sourceUrl: "http://dining.spc.co.kr/queenspark.do",
  },
  {
    id: "dining-product-labri",
    brandSlug: "dining",
    brand: "SPC Dining",
    name: "L'abri Course",
    price: 0,
    priceLabel: "공식 메뉴 보기",
    category: "라브리",
    description: "Lunch Course · Dinner Course 중심의 코스 메뉴",
    crop: coverImage(localAsset("/images/dining/labri_brand.jpg"), 1200, 900),
    badge: "DINING",
    sourceUrl: "http://dining.spc.co.kr/labri.do",
  },
  {
    id: "dining-product-vera",
    brandSlug: "dining",
    brand: "SPC Dining",
    name: "VERA PIZZA Menu",
    price: 0,
    priceLabel: "공식 메뉴 보기",
    category: "베라피자",
    description: "베라피자 공식 메뉴 페이지",
    crop: coverImage(localAsset("/images/dining/verapizza_menu_260226.jpg"), 1200, 900),
    badge: "DINING",
    sourceUrl: "http://dining.spc.co.kr/vera.do",
  },
  {
    id: "dining-product-lagrillia",
    brandSlug: "dining",
    brand: "SPC Dining",
    name: "LAGRILLIA Menu",
    price: 0,
    priceLabel: "공식 메뉴 보기",
    category: "라그릴리아",
    description: "SEASON SPECIAL, GRILL, PIZZA, PASTA, RICE 메뉴",
    crop: coverImage(localAsset("/images/dining/lagrillia_menu_260227.jpg"), 1200, 900),
    badge: "DINING",
    sourceUrl: "http://dining.spc.co.kr/lagrillia.do",
  },
  {
    id: "dining-product-streat",
    brandSlug: "dining",
    brand: "SPC Dining",
    name: "strEAT Menu",
    price: 0,
    priceLabel: "공식 메뉴 보기",
    category: "스트릿",
    description: "Set ST., Noodle ST., Rice ST., Main & Side ST. 메뉴",
    crop: coverImage(localAsset("/images/dining/streat_menu_260410.jpg"), 1200, 900),
    badge: "DINING",
    sourceUrl: "http://dining.spc.co.kr/streat.do",
  },
  {
    id: "catering-product-1",
    brandSlug: "paris-baguette-catering",
    brand: "파리바게뜨 케이터링",
    name: "Coffee Break Proposal",
    price: 0,
    priceLabel: "제안서 보기",
    category: "케이터링",
    description: "커피와 스낵 중심으로 구성된 오피스 브레이크 케이터링 제안",
    crop: coverImage("https://www.parisbaguettecatering.kr/img/sub-proposal00-visual.jpg", 1200, 900),
    badge: "B2B",
    sourceUrl: "https://www.parisbaguettecatering.kr/proposal/view/coffee_break",
  },
  {
    id: "catering-product-2",
    brandSlug: "paris-baguette-catering",
    brand: "파리바게뜨 케이터링",
    name: "Fingerfood Plate Proposal",
    price: 0,
    priceLabel: "제안서 보기",
    category: "기업행사",
    description: "핑거푸드 플레이트 중심으로 구성된 행사형 케이터링 제안",
    crop: coverImage("https://www.parisbaguettecatering.kr/img/service/img-service-info01.jpg", 1200, 900),
    badge: "B2B",
    sourceUrl: "https://www.parisbaguettecatering.kr/proposal/view/fingerfood_plate",
  },
];

export const featuredProduct = products.find((product) => product.id === "pc-product-1") ?? products[0];

export const reviewPhotos = [
  products.find((product) => product.id === "pb-low-sugar-cacao-cake")?.crop ?? products[0].crop,
  products.find((product) => product.id === "pc-product-1")?.crop ?? products[0].crop,
  products.find((product) => product.id === "ps-product-1")?.crop ?? products[0].crop,
  products.find((product) => product.id === "cw-product-1")?.crop ?? products[0].crop,
  products.find((product) => product.id === "linas-product-1")?.crop ?? products[0].crop,
];

export const storyMosaic = {
  heroLeft: brands[0].heroCrop,
  heroTopRight: brands[1].heroCrop,
  heroBottomCard1: brands[2].heroCrop,
  heroBottomCard2: brands[4].heroCrop,
  darkBand: brands[8].heroCrop,
  breadLeft: brands[0].secondaryCrop ?? brands[0].heroCrop,
  breadCenter: brands[6].heroCrop,
  dishOne: brands[7].heroCrop,
  dishTwo: brands[3].secondaryCrop ?? brands[3].heroCrop,
  galleryMain: brands[4].secondaryCrop ?? brands[4].heroCrop,
  galleryThumb1: brands[0].promotions[1].crop,
  galleryThumb2: brands[2].promotions[1].crop,
  galleryThumb3: brands[5].secondaryCrop ?? brands[5].heroCrop,
  finalDrinkOne: brands[2].heroCrop,
  finalDrinkTwo: brands[3].heroCrop,
};

export const franchiseHero = coverImage("https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2025/08/franchise_PC_1096x211.jpg", 1600, 360);

export const franchiseVideos = [
  { title: "파리바게뜨 창업안내", crop: franchiseHero },
  { title: "파리바게뜨 케이터링", crop: brands[8].heroCrop },
  { title: "B2B 원두 납품", crop: brands[3].promotions[0].crop },
  { title: "SPC Dining 브랜드", crop: brands[6].heroCrop },
];

export const productDetailHero = {
  main: featuredProduct.crop,
  thumbOne: featuredProduct.crop,
  thumbTwo: products.find((product) => product.id === "pc-product-2")?.crop ?? products[1].crop,
};

export const recommendedMarketItems = products.slice(0, 4).map((product) => ({
  title: product.name,
  price: product.price,
  priceLabel: product.priceLabel,
  crop: product.crop,
}));

export const pickupStores: StoreItem[] = [
  {
    id: "gangnam",
    name: "파리크라상 강남 플래그십",
    type: "픽업 가능",
    address: "서울특별시 강남구 테헤란로 152, 1층",
    phone: "02-555-2780",
    pickupNote: "주문 후 2시간 내 픽업 가능",
  },
  {
    id: "bundang",
    name: "파리바게뜨 분당 센트럴점",
    type: "베이커리 스토어",
    address: "경기도 성남시 분당구 정자동 15-3",
    phone: "031-712-2027",
    pickupNote: "당일 픽업 가능",
  },
  {
    id: "yeouido",
    name: "커피앳웍스 여의도 B2B 라운지",
    type: "기업 주문 상담",
    address: "서울특별시 영등포구 국제금융로 8길 31",
    phone: "02-761-1108",
    pickupNote: "기업 행사 사전 예약",
  },
];

export const paymentMethods = ["신용카드", "간편결제", "계좌이체", "법인카드", "세금계산서 상담"];

export const agreementLabels = [
  "개인정보 수집 및 이용 동의(필수)",
  "제3자 제공 동의(필수)",
  "구매 및 결제 진행 동의(필수)",
];

export const breadcrumbByPage = {
  product: "Home > 상품 > 상품 상세",
  products: "Home > 상품",
  checkout: "Home > 주문/결제",
};

export const reviewSummary: ReviewSummaryItem[] = [
  { label: "상품 이미지 만족도", value: 96 },
  { label: "픽업 주문 편의성", value: 92 },
  { label: "브랜드 정보 신뢰도", value: 94 },
];

export const homeStats = [
  { label: "브랜드", value: "9개" },
  { label: "상품/이벤트", value: "Live" },
  { label: "주문 채널", value: "Pickup + B2B" },
];

export const orderJourney = [
  {
    title: "1. 상품 선택",
    description: "브랜드별 신상품, 시즌 메뉴, 상품권을 목적에 맞게 선택합니다.",
    href: "/products",
    icon: "🛒",
  },
  {
    title: "2. 픽업/상담 예약",
    description: "픽업 가능 매장 또는 기업 상담 채널을 선택합니다.",
    href: "/pickup",
    icon: "📍",
  },
  {
    title: "3. 주문/결제",
    description: "수령자 정보와 결제수단을 확인하고 주문을 완료합니다.",
    href: "/checkout",
    icon: "💳",
  },
];

export const sourceHighlights = [
  {
    title: "오늘의 이벤트",
    description: "파리바게뜨, 파스쿠찌, 커피앳웍스의 최신 이벤트와 신상품을 메인에 노출합니다.",
    crop: brands[0].promotions[0].crop,
  },
  {
    title: "브랜드별 대표 비주얼",
    description: "각 브랜드 운영 사이트의 메인 배너와 로고를 기준으로 브랜드 영역을 구성합니다.",
    crop: brands[1].heroCrop,
  },
  {
    title: "기업 구매와 선물",
    description: "상품권, 케이터링, 원두 납품을 B2B 구매 흐름으로 연결합니다.",
    crop: brands[7].secondaryCrop ?? brands[7].heroCrop,
  },
];

export function findBrandBySlug(slug: string) {
  return brands.find((brand) => brand.slug === slug) ?? brands[0];
}
