import Link from "next/link";
import {
  ArrowUpRight,
  Banknote,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Handshake,
  MapPinned,
  Play,
  Store,
} from "lucide-react";
import { CropImage } from "@/components/crop-image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { ImageCrop } from "@/data/app-data";
import { brands } from "@/data/app-data";

const officialFranchiseUrl = "https://www.paris.co.kr/franchise/";

const heroCrop: ImageCrop = {
  src: "https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2025/07/01-bg.jpg",
  sourceWidth: 1600,
  sourceHeight: 920,
  x: 0,
  y: 0,
  width: 1600,
  height: 920,
  mode: "cover",
};

const storyCrop: ImageCrop = {
  src: "https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2025/07/01-bg2.png",
  sourceWidth: 1200,
  sourceHeight: 820,
  x: 0,
  y: 0,
  width: 1200,
  height: 820,
  mode: "cover",
  backgroundColor: "#f3ebdf",
};

const videoThumb: ImageCrop = {
  src: "https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2026/02/thumbnail_1280X720.jpg",
  sourceWidth: 1280,
  sourceHeight: 720,
  x: 0,
  y: 0,
  width: 1280,
  height: 720,
  mode: "cover",
};

const quickLinks = [
  { label: "파리바게뜨를 창업해야 하는 이유", href: "#why" },
  { label: "사업설명회", href: "#presentation" },
  { label: "개설안내 및 지원혜택", href: "#process" },
  { label: "개설문의", href: "#inquiry" },
  { label: "가맹점 운영 스토리", href: "#stories" },
];

const actionCards = [
  {
    title: "사업설명회",
    description: "창업을 준비하는 분들을 위한 브랜드 설명회와 상담 흐름을 안내합니다.",
    href: "https://www.paris.co.kr/franchise/business-presentation/",
    icon: CalendarDays,
  },
  {
    title: "개설안내",
    description: "입지 검토부터 계약, 교육, 오픈 준비까지 개설 절차를 한눈에 확인합니다.",
    href: "https://www.paris.co.kr/franchise/process/",
    icon: ClipboardList,
  },
  {
    title: "지원혜택",
    description: "가맹점 운영을 돕는 지원 프로그램과 금융/운영 혜택을 연결합니다.",
    href: "https://www.paris.co.kr/franchise/benefit/",
    icon: Handshake,
  },
];

const processSteps = [
  { title: "1. 창업 상담", description: "희망 지역, 운영 형태, 투자 계획을 바탕으로 초기 상담을 진행합니다." },
  { title: "2. 입지 및 상권 검토", description: "브랜드 운영에 적합한 입지와 상권 가능성을 확인합니다." },
  { title: "3. 계약 및 개설 준비", description: "계약 이후 인테리어, 장비, 교육, 오픈 준비를 단계별로 진행합니다." },
  { title: "4. 오픈 및 운영 지원", description: "오픈 후 매장 운영 안정화를 위한 교육과 관리 지원을 이어갑니다." },
];

const supportLinks = [
  {
    title: "개설절차",
    href: "https://www.paris.co.kr/franchise/process/",
    description: "상담부터 오픈까지 필요한 주요 절차",
    icon: CheckCircle2,
  },
  {
    title: "개설비용",
    href: "https://www.paris.co.kr/franchise/opening-costs/",
    description: "매장 개설에 필요한 투자 항목 안내",
    icon: Banknote,
  },
  {
    title: "금융상품 안내",
    href: "https://www.paris.co.kr/franchise/finance/",
    description: "창업 자금 준비를 위한 금융 정보",
    icon: Banknote,
  },
  {
    title: "임차형 경영주 모집",
    href: "https://www.paris.co.kr/franchise/lease-type/",
    description: "임차형 운영 모델과 모집 안내",
    icon: Store,
  },
];

const storeStories = [
  { name: "충암점", video: "https://www.youtube.com/embed/3V97M6YhA7U" },
  { name: "연신내점", video: "https://www.youtube.com/embed/bw-rKMJo-SU" },
  { name: "부산부전역점", video: "https://www.youtube.com/embed/PBkelbllkY4" },
  { name: "천안백석점", video: "https://www.youtube.com/embed/iAFDP2rZMRY" },
];

export default function FranchisePage() {
  const parisBaguette = brands.find((brand) => brand.slug === "paris-baguette") ?? brands[0];

  return (
    <main className="bg-[#f6f2e9]">
      <SiteHeader variant="baguette" activeLabel="창업 안내" />

      <section className="relative overflow-hidden bg-[#061c52] text-white">
        <CropImage crop={heroCrop} alt="파리바게뜨 창업안내" className="min-h-[620px] w-full opacity-68" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,20,64,0.94),rgba(3,20,64,0.48),rgba(3,20,64,0.88))]" />
        <div className="absolute inset-0 mx-auto grid max-w-[1280px] items-center px-5 py-16 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-[12px] uppercase tracking-[0.36em] text-white/58">PARIS BAGUETTE FRANCHISE</p>
            <h1 className="mt-6 font-display text-[58px] leading-[0.9] tracking-[-0.04em] sm:text-[88px]">
              창업의 꿈, 파리바게뜨와 함께
            </h1>
            <p className="mt-7 max-w-2xl text-[18px] leading-8 text-white/78">
              공식 창업안내 페이지의 구조와 메시지를 기반으로, 예비 가맹대표님이 필요한 정보를 빠르게 찾을 수 있는
              상업용 창업 랜딩 페이지로 재구성했습니다.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#presentation"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[15px] font-semibold text-[#061c52]"
              >
                사업설명회 보기
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={officialFranchiseUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/18 px-5 py-3 text-[15px] font-semibold text-white"
              >
                공식 페이지
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="sticky top-[82px] z-30 border-y border-black/8 bg-white/92 backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] gap-2 overflow-x-auto px-5 py-3 sm:px-8">
          {quickLinks.map((item) => (
            <a key={item.href} href={item.href} className="shrink-0 rounded-full bg-[#f1f3f8] px-4 py-2 text-[14px] font-semibold text-[#061c52]">
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8">
        <section id="why" className="grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="rounded-[36px] bg-white p-8 shadow-[0_20px_60px_rgba(17,19,24,0.07)]">
            <p className="text-[12px] uppercase tracking-[0.3em] text-black/38">Why Paris Baguette</p>
            <h2 className="mt-4 font-display text-[52px] leading-none tracking-[-0.04em] text-[#111318]">
              파리바게뜨를 창업해야 하는 이유
            </h2>
            <p className="mt-6 text-[17px] leading-8 text-black/66">
              파리바게뜨는 매일의 베이커리 경험을 중심으로 고객과 가까운 상권에서 성장해온 브랜드입니다.
              창업 페이지에서는 브랜드 신뢰, 운영 노하우, 지원 체계를 중심으로 예비 창업자의 판단을 돕습니다.
            </p>
            <a
              href="https://www.paris.co.kr/franchise/why/"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#061c52] px-5 py-3 text-[15px] font-semibold text-white"
            >
              창업 이유 자세히 보기
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative overflow-hidden rounded-[36px] bg-[#e7d8bd]">
            <CropImage crop={storyCrop} alt="파리바게뜨 창업 브랜드 스토리" className="min-h-[460px] w-full opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061c52]/86 via-[#061c52]/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white">
              <p className="text-[12px] uppercase tracking-[0.28em] text-white/60">Brand Promise</p>
              <p className="mt-3 max-w-xl text-[30px] font-semibold leading-tight">
                고객에게 매일 진심을 전하는 베이커리 운영 파트너를 기다립니다.
              </p>
            </div>
          </div>
        </section>

        <section id="presentation" className="mt-16 grid gap-5 md:grid-cols-3">
          {actionCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[32px] bg-white p-7 shadow-[0_18px_50px_rgba(17,19,24,0.06)] transition duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-13 w-13 place-items-center rounded-full bg-[#edf3ff] text-[#1e4ca1]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-black/30 transition group-hover:text-black" />
                </div>
                <h3 className="mt-8 text-[30px] font-semibold tracking-tight text-[#111318]">{card.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-black/62">{card.description}</p>
              </a>
            );
          })}
        </section>

        <section id="process" className="mt-16 overflow-hidden rounded-[38px] bg-[#061c52] text-white shadow-[0_22px_70px_rgba(17,19,24,0.12)]">
          <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="p-8 sm:p-10">
              <p className="text-[12px] uppercase tracking-[0.3em] text-white/52">Opening Guide</p>
              <h2 className="mt-4 font-display text-[52px] leading-none tracking-[-0.04em]">개설안내 및 지원혜택</h2>
              <p className="mt-6 text-[16px] leading-8 text-white/72">
                공식 창업안내의 개설절차, 개설비용, 금융상품, 지원혜택 메뉴를 고객 여정에 맞춰 하나의 흐름으로 정리했습니다.
              </p>
            </div>
            <div className="grid gap-3 bg-white/5 p-5 sm:grid-cols-2 sm:p-7">
              {processSteps.map((step) => (
                <div key={step.title} className="rounded-[26px] border border-white/10 bg-white/6 p-6">
                  <p className="text-[22px] font-semibold tracking-tight">{step.title}</p>
                  <p className="mt-3 text-[14px] leading-6 text-white/68">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {supportLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[30px] border border-black/8 bg-white p-6 shadow-[0_16px_45px_rgba(17,19,24,0.05)]"
              >
                <Icon className="h-6 w-6 text-[#1e4ca1]" />
                <p className="mt-5 text-[24px] font-semibold tracking-tight text-[#111318]">{item.title}</p>
                <p className="mt-2 text-[14px] leading-6 text-black/58">{item.description}</p>
              </a>
            );
          })}
        </section>

        <section id="stories" className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[12px] uppercase tracking-[0.28em] text-black/38">Store Stories</p>
              <h2 className="mt-3 font-display text-[52px] leading-none tracking-[-0.04em] text-[#111318]">
                성공 노하우를 담은 파리바게뜨 이야기
              </h2>
            </div>
            <p className="max-w-lg text-[16px] leading-7 text-black/58">
              실제 매장 운영 이야기를 통해 예비 창업자가 운영 현장을 구체적으로 상상할 수 있도록 구성했습니다.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.18fr_0.82fr]">
            <div className="overflow-hidden rounded-[34px] bg-black">
              <iframe
                className="aspect-video w-full"
                src={storeStories[0].video}
                title={`${storeStories[0].name} 창업 스토리`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {storeStories.slice(1).map((story) => (
                <a
                  key={story.name}
                  href={story.video.replace("/embed/", "/watch?v=")}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative overflow-hidden rounded-[28px] bg-[#111318] text-white"
                >
                  <CropImage crop={videoThumb} alt={`${story.name} 영상 썸네일`} className="min-h-[170px] w-full opacity-76 transition group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/78 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-5">
                    <p className="text-[22px] font-semibold">{story.name}</p>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#111318]">
                      <Play className="h-4 w-4 fill-current" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="inquiry" className="mt-16 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[36px] bg-white p-8 shadow-[0_18px_50px_rgba(17,19,24,0.06)]">
            <MapPinned className="h-7 w-7 text-[#1e4ca1]" />
            <h2 className="mt-6 font-display text-[46px] leading-none tracking-[-0.04em] text-[#111318]">개설문의</h2>
            <p className="mt-5 text-[16px] leading-8 text-black/64">
              가맹점 개설 상담과 임차형 경영주 모집 안내를 한 화면에서 확인할 수 있도록 공식 메뉴를 연결했습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.paris.co.kr/franchise/inquiry/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#1e4ca1] px-5 py-3 text-[15px] font-semibold text-white"
              >
                가맹점 개설 문의
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.paris.co.kr/franchise/lease-type/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/12 px-5 py-3 text-[15px] font-semibold text-[#111318]"
              >
                임차형 경영주 모집
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[36px] bg-white">
            <CropImage crop={parisBaguette.heroCrop} alt={parisBaguette.name} className="min-h-[390px] w-full" />
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
