import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  ChevronRight,
  Factory,
  Globe2,
  Leaf,
  MapPin,
  Newspaper,
  Phone,
  UsersRound,
} from "lucide-react";
import { CropImage } from "@/components/crop-image";
import { SiteFooter } from "@/components/site-footer";
import type { ImageCrop } from "@/data/app-data";
import { brands } from "@/data/app-data";

const companySourceUrl = "https://www.paris.co.kr/company/about-pariscroissant/";

const companyHero: ImageCrop = {
  src: "https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2023/11/1620608772.jpg",
  sourceWidth: 1600,
  sourceHeight: 1000,
  x: 0,
  y: 0,
  width: 1600,
  height: 1000,
  mode: "cover",
};

const corporateNav = [
  { label: "회사소개", href: "#about" },
  { label: "브랜드", href: "#brands" },
  { label: "ESG", href: "#esg" },
  { label: "뉴스룸", href: "#news" },
  { label: "채용", href: "#careers" },
  { label: "고객센터", href: "#contact" },
];

const companyFacts = [
  { label: "설립", value: "1986", description: "유럽풍 베이커리 문화 제안" },
  { label: "대표 브랜드", value: "1988", description: "파리바게뜨 론칭" },
  { label: "사업영역", value: "Global", description: "베이커리, 카페, 다이닝" },
];

const corporateInfo = [
  { label: "회사명", value: "(주)파리크라상" },
  { label: "대표이사", value: "도세호" },
  { label: "주소 1", value: "경기도 성남시 중원구 사기막골로31번길 18" },
  { label: "주소 2", value: "서울시 서초구 남부순환로 2620" },
];

const esgCards = [
  {
    title: "Responsible Bakery",
    description: "고객 만족과 품질 기준을 중심으로 베이커리 문화를 확장합니다.",
    icon: Leaf,
  },
  {
    title: "Customer First",
    description: "고객 의견을 경청하고 서비스 개선으로 연결하는 운영 체계를 지향합니다.",
    icon: UsersRound,
  },
  {
    title: "Global Platform",
    description: "국내외 브랜드 사업을 연결해 글로벌 식문화 플랫폼으로 성장합니다.",
    icon: Globe2,
  },
];

const newsItems = [
  { title: "파리크라상 기업 소개", href: companySourceUrl, tag: "Official" },
  { title: "브랜드 포트폴리오 바로가기", href: "#brands", tag: "Brand" },
  { title: "B2B 주문 및 기업 문의", href: "/checkout", tag: "Business" },
];

export default function ParisCroissantCorporatePage() {
  const croissant = brands.find((brand) => brand.slug === "paris-croissant") ?? brands[1];
  const portfolioBrands = brands.filter((brand) =>
    ["paris-baguette", "paris-croissant", "caffe-pascucci", "linas", "passion5", "dining"].includes(brand.slug),
  );

  return (
    <main className="bg-[#f6f2e9] text-[#171717]">
      <header className="sticky top-0 z-50 border-b border-black/8 bg-[#fbf8f1]/92 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <Link href="/corporate/paris-croissant" className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.34em] text-black/45">PARIS CROISSANT CORP.</p>
            <p className="mt-1 text-[25px] font-semibold tracking-[-0.04em] text-[#171717]">파리크라상</p>
          </Link>

          <nav className="hidden items-center gap-8 text-[15px] font-semibold text-black/62 lg:flex">
            {corporateNav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-black">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={companySourceUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black/12 px-4 py-2 text-[13px] font-semibold text-black/62"
            >
              Official
            </a>
            <Link href="/" className="rounded-full bg-[#171717] px-4 py-2 text-[13px] font-semibold text-white">
              브랜드몰
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#1d211b] text-white">
        <CropImage crop={companyHero} alt="파리크라상 기업 대표 이미지" className="min-h-[620px] w-full opacity-55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.22),transparent_32%),linear-gradient(90deg,rgba(29,33,27,0.92),rgba(29,33,27,0.35),rgba(29,33,27,0.82))]" />
        <div className="absolute inset-0 mx-auto grid max-w-[1440px] items-center px-5 py-16 sm:px-8">
          <div className="max-w-4xl">
            <p className="text-[12px] uppercase tracking-[0.36em] text-white/58">Corporate Identity</p>
            <h1 className="mt-6 font-display text-[58px] leading-[0.88] tracking-[-0.04em] sm:text-[88px] lg:text-[116px]">
              Happiness in every bite
            </h1>
            <p className="mt-7 max-w-2xl text-[18px] leading-8 text-white/76">
              파리크라상은 베이커리, 카페, 다이닝 브랜드를 통해 일상 속 행복한 식문화를 제안하는 기업입니다.
              공식 회사 소개와 상미당형 기업 대표 페이지 구조를 참고해 법인 전용 UX로 재구성했습니다.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[15px] font-semibold text-[#171717]"
              >
                회사소개
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#brands"
                className="inline-flex items-center gap-2 rounded-full border border-white/18 px-5 py-3 text-[15px] font-semibold text-white"
              >
                브랜드 보기
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.84fr_1.16fr]">
          <div className="rounded-[34px] bg-white p-8 shadow-[0_18px_50px_rgba(17,19,24,0.06)]">
            <p className="text-[12px] uppercase tracking-[0.28em] text-black/36">About Paris Croissant</p>
            <h2 className="mt-4 font-display text-[52px] leading-none tracking-[-0.03em]">회사소개</h2>
            <p className="mt-6 text-[17px] leading-8 text-black/66">
              ㈜파리크라상은 1986년 설립과 함께 유럽풍 베이커리 문화를 선보였고,
              1988년 파리바게뜨 론칭 이후 카페, 샌드위치, 디저트, 외식 브랜드로 사업을 확장했습니다.
            </p>
            <a
              href={companySourceUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#171717] px-5 py-3 text-[15px] font-semibold text-white"
            >
              공식 회사소개 원문
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {companyFacts.map((fact) => (
              <div key={fact.label} className="rounded-[34px] bg-[#eadfca] p-7">
                <p className="text-[12px] uppercase tracking-[0.24em] text-black/42">{fact.label}</p>
                <p className="mt-5 font-display text-[58px] leading-none tracking-[-0.05em] text-[#171717]">{fact.value}</p>
                <p className="mt-5 text-[15px] leading-7 text-black/62">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="overflow-hidden rounded-[34px] bg-white">
            <CropImage crop={croissant.heroCrop} alt="파리크라상 브랜드 이미지" className="min-h-[380px] w-full" />
          </div>
          <div className="rounded-[34px] bg-[#171717] p-8 text-white">
            <Building2 className="h-7 w-7 text-white/52" />
            <h3 className="mt-6 font-display text-[44px] leading-none">기업 정보</h3>
            <div className="mt-7 grid gap-3">
              {corporateInfo.map((item) => (
                <div key={item.label} className="rounded-[22px] border border-white/10 px-5 py-4">
                  <p className="text-[12px] uppercase tracking-[0.2em] text-white/38">{item.label}</p>
                  <p className="mt-2 text-[16px] font-semibold text-white/86">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="brands" className="bg-[#171717] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[12px] uppercase tracking-[0.28em] text-white/42">Brand Portfolio</p>
              <h2 className="mt-4 font-display text-[56px] leading-none tracking-[-0.04em]">대표 브랜드</h2>
            </div>
            <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-white/14 px-5 py-3 text-[15px] font-semibold text-white/82">
              브랜드몰 메인
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {portfolioBrands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="group overflow-hidden rounded-[34px] bg-white text-[#171717] transition duration-300 hover:-translate-y-1"
              >
                <div className="relative grid min-h-[280px] place-items-center overflow-hidden bg-[#f6f2e9] p-8">
                  <div
                    className="absolute inset-0 opacity-12"
                    style={{
                      background: `radial-gradient(circle at 20% 20%, ${brand.accent}, transparent 34%), radial-gradient(circle at 84% 78%, ${brand.accent}, transparent 38%)`,
                    }}
                  />
                  <div className="absolute inset-x-8 top-8 h-px bg-black/8" />
                  <div className="absolute inset-x-8 bottom-8 h-px bg-black/8" />
                  {brand.logoCrop ? (
                    <div className="relative grid min-h-[132px] w-full place-items-center rounded-[28px] border border-black/8 bg-white/88 p-8 shadow-[0_18px_45px_rgba(17,19,24,0.08)]">
                      <img src={brand.logoCrop.src} alt={`${brand.name} CI`} className="max-h-[86px] w-full max-w-[260px] object-contain" />
                    </div>
                  ) : (
                    <div className="relative grid min-h-[132px] w-full place-items-center rounded-[28px] border border-black/8 bg-white/88 p-8 shadow-[0_18px_45px_rgba(17,19,24,0.08)]">
                      <span className="text-center text-[28px] font-semibold tracking-tight" style={{ color: brand.logoColor }}>
                        {brand.logoText}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-[12px] uppercase tracking-[0.22em] text-black/35">{brand.englishName}</p>
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <h3 className="text-[28px] font-semibold tracking-tight">{brand.name}</h3>
                    <ArrowUpRight className="h-5 w-5 text-black/40 transition group-hover:text-black" />
                  </div>
                  <p className="mt-3 line-clamp-2 text-[15px] leading-7 text-black/58">{brand.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="esg" className="mx-auto grid max-w-[1440px] gap-5 px-5 py-16 sm:px-8 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="rounded-[34px] bg-[#34513f] p-8 text-white">
          <Leaf className="h-7 w-7 text-white/55" />
          <h2 className="mt-6 font-display text-[54px] leading-none tracking-[-0.04em]">ESG</h2>
          <p className="mt-5 text-[16px] leading-8 text-white/74">
            품질, 고객, 글로벌 성장이라는 기업 운영의 기본 가치를 MVP 화면에서 명확한 정보 카드로 정리했습니다.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {esgCards.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-[34px] bg-white p-7 shadow-[0_18px_50px_rgba(17,19,24,0.06)]">
                <Icon className="h-6 w-6 text-black/45" />
                <h3 className="mt-6 text-[24px] font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-black/60">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="news" className="mx-auto grid max-w-[1440px] gap-5 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[34px] bg-white p-8 shadow-[0_18px_50px_rgba(17,19,24,0.06)]">
          <div className="flex items-center gap-3">
            <Newspaper className="h-6 w-6 text-black/42" />
            <p className="text-[12px] uppercase tracking-[0.28em] text-black/38">Newsroom</p>
          </div>
          <h2 className="mt-5 font-display text-[50px] leading-none tracking-[-0.04em]">파리크라상 NOW</h2>
          <div className="mt-8 divide-y divide-black/8">
            {newsItems.map((item) => {
              const external = item.href.startsWith("http");
              const className = "flex items-center justify-between gap-4 py-5 text-left";

              if (external) {
                return (
                  <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className={className}>
                    <span>
                      <span className="text-[12px] uppercase tracking-[0.2em] text-black/35">{item.tag}</span>
                      <span className="mt-2 block text-[22px] font-semibold tracking-tight">{item.title}</span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-black/36" />
                  </a>
                );
              }

              return (
                <Link key={item.title} href={item.href} className={className}>
                  <span>
                    <span className="text-[12px] uppercase tracking-[0.2em] text-black/35">{item.tag}</span>
                    <span className="mt-2 block text-[22px] font-semibold tracking-tight">{item.title}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-black/36" />
                </Link>
              );
            })}
          </div>
        </div>

        <div id="careers" className="rounded-[34px] bg-[#eadfca] p-8">
          <Factory className="h-7 w-7 text-black/45" />
          <h2 className="mt-6 font-display text-[50px] leading-none tracking-[-0.04em]">Careers</h2>
          <p className="mt-5 text-[16px] leading-8 text-black/66">
            브랜드와 고객 경험을 함께 만드는 인재를 위한 기업 대표 페이지 영역입니다.
            채용, 조직문화, 직무 소개로 확장 가능한 MVP 구조로 설계했습니다.
          </p>
          <Link href="/brand-story" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#171717] px-5 py-3 text-[15px] font-semibold text-white">
            브랜드 문화 보기
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1440px] px-5 pb-20 sm:px-8">
        <div className="grid gap-5 rounded-[34px] bg-white p-8 shadow-[0_18px_50px_rgba(17,19,24,0.06)] lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[12px] uppercase tracking-[0.28em] text-black/38">Contact</p>
            <h2 className="mt-4 font-display text-[50px] leading-none tracking-[-0.04em]">고객센터와 기업 문의</h2>
            <p className="mt-5 text-[16px] leading-8 text-black/64">
              고객 문의, 기업 구매, 케이터링, 상품권, 원두 납품 등 목적별 문의 흐름을 브랜드몰 내부 페이지로 연결합니다.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/checkout" className="rounded-[26px] bg-[#f6f2e9] p-6">
              <Phone className="h-5 w-5 text-black/55" />
              <p className="mt-4 text-[23px] font-semibold tracking-tight">B2B 주문 상담</p>
              <p className="mt-2 text-[14px] leading-6 text-black/58">상품권, 케이터링, 법인 결제 연결</p>
            </Link>
            <Link href="/stores" className="rounded-[26px] bg-[#f6f2e9] p-6">
              <MapPin className="h-5 w-5 text-black/55" />
              <p className="mt-4 text-[23px] font-semibold tracking-tight">매장/픽업 연결</p>
              <p className="mt-2 text-[14px] leading-6 text-black/58">픽업 가능 매장과 상담 거점 확인</p>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
