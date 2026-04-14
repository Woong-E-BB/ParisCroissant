"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Banknote,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Handshake,
  Info,
  MapPinned,
  Play,
  Store,
} from "lucide-react";
import { CropImage } from "@/components/crop-image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { ImageCrop } from "@/data/app-data";

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

const actionCards = [
  {
    title: "사업설명회",
    description: "창업을 준비하는 분들을 위한 브랜드 설명회와 상담 흐름을 안내합니다.",
    href: "#presentation",
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
  { title: "창업 상담", description: "희망 지역, 운영 형태, 투자 계획을 바탕으로 상담 진행" },
  { title: "상권 검토", description: "브랜드 운영에 적합한 입지와 상권 가능성 확인" },
  { title: "개설 준비", description: "인테리어, 장비, 교육 등 매장 오픈 준비 진행" },
  { title: "운영 지원", description: "오픈 후 매장 운영 안정화를 위한 지속적 관리 지원" },
];

const supportLinks = [
  {
    title: "개설절차",
    href: "https://www.paris.co.kr/franchise/process/",
    description: "상담부터 오픈까지 주요 절차",
    icon: CheckCircle2,
  },
  {
    title: "개설비용",
    href: "https://www.paris.co.kr/franchise/opening-costs/",
    description: "매장 개설 투자 항목 안내",
    icon: Banknote,
  },
  {
    title: "금융상품 안내",
    href: "https://www.paris.co.kr/franchise/finance/",
    description: "창업 자금 준비 금융 정보",
    icon: Banknote,
  },
  {
    title: "임차형 가맹",
    href: "https://www.paris.co.kr/franchise/lease-type/",
    description: "임차형 운영 모델 모집 안내",
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
  return (
    <main className="bg-[#fafafa]">
      <SiteHeader variant="hub" />

      <div className="mx-auto max-w-[1280px] px-4 pb-16 pt-5 sm:px-6">
        
        {/* ── HERO SECTION ── */}
        <section className="animate-fade-in-up overflow-hidden rounded-3xl bg-[#111827] shadow-hero">
          <div className="relative">
            <CropImage crop={heroCrop} alt="창업 안내" className="min-h-[440px] w-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/80 to-transparent" />
            
            <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12">
              <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#00a0b0]">
                FRANCHISE
              </p>
              <h1 className="mt-4 max-w-2xl text-[42px] font-bold leading-tight text-white sm:text-[54px]">
                매일 구워내는 신선함,<br />성공적인 비즈니스가 됩니다
              </h1>
              <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-gray-300">
                창업을 고민하시는 예비 가맹대표님을 위해 최적의 입지 분석부터
                운영 노하우까지. 오랫동안 사랑받아 온 베이커리 운영 파트너를 기다립니다.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#presentation"
                  className="inline-flex items-center gap-2 rounded-full bg-[#00a0b0] px-6 py-3.5 text-[15px] font-bold text-white transition hover:bg-[#008b99]"
                >
                  사업설명회 안내
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={officialFranchiseUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-600 bg-white/10 px-6 py-3.5 text-[15px] font-bold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  공식 홈페이지 이동
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY PARIS BAGUETTE ── */}
        <section className="mt-14" id="why">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#00a0b0]">
                Why Paris Baguette
              </p>
              <h2 className="mt-2 text-[28px] font-bold text-[#1a1a2e] sm:text-[32px]">
                파리바게뜨를 선택해야 하는 이유
              </h2>
            </div>
            <a
              href="https://www.paris.co.kr/franchise/why/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-[14px] font-semibold text-gray-500 transition hover:text-[#00a0b0]"
            >
              상세 이유 보기 <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-7 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Story Card */}
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-card">
              <CropImage crop={storyCrop} alt="브랜드 스토리" className="h-[360px] w-full opacity-90 sm:h-[400px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#00a0b0]">Brand Promise</p>
                <p className="mt-3 text-[24px] font-bold leading-tight">
                  고객에게 매일 진심을 전하는<br />베이커리 운영 파트너
                </p>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {actionCards.map((card) => {
                const Icon = card.icon;
                const isInternal = card.href.startsWith("#");
                return (
                  <a
                    key={card.title}
                    href={card.href}
                    target={isInternal ? undefined : "_blank"}
                    rel={isInternal ? undefined : "noreferrer"}
                    className="card-hover group flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-shadow hover:border-[#00a0b0]/30 hover:shadow-card"
                  >
                    <div className="flex items-center justify-between">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#00a0b0]/10 text-[#00a0b0] group-hover:bg-[#00a0b0] group-hover:text-white transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-gray-50 text-gray-400 group-hover:bg-[#00a0b0] group-hover:text-white transition-colors">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                    <div className="mt-auto pt-8">
                      <h3 className="text-[20px] font-bold text-[#1a1a2e] group-hover:text-[#00a0b0] transition-colors">{card.title}</h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-gray-500">{card.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── OPENING GUIDE (Process Steps) ── */}
        <section className="mt-14 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-card" id="process">
          <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="bg-[#1a1a2e] p-8 sm:p-10 text-white">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#00a0b0]">Opening Guide</p>
              <h2 className="mt-3 text-[32px] font-bold leading-tight">개설안내 및 지원혜택</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-gray-400">
                초기 상담부터 입지 검토, 계약, 매장 오픈에 이르기까지 모든 운영 절차와 금융 지원 혜택을 본사에서 체계적으로 지원해 드립니다.
              </p>
            </div>
            
            <div className="grid gap-[1px] bg-gray-100 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="bg-white p-6 sm:p-8 relative">
                  <span className="absolute top-6 right-6 text-[48px] font-black text-gray-50/80 select-none">
                    {index + 1}
                  </span>
                  <p className="text-[18px] font-bold text-[#1a1a2e] relative z-10">{step.title}</p>
                  <p className="mt-3 text-[14px] leading-relaxed text-gray-500 relative z-10">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SUPPORTS ── */}
        <section className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {supportLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="card-hover flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gray-50 text-gray-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[15px] font-bold text-[#1a1a2e]">{item.title}</p>
                  <p className="mt-0.5 text-[12px] text-gray-400">{item.description}</p>
                </div>
              </a>
            );
          })}
        </section>

        {/* ── STORE STORIES ── */}
        <section className="mt-16" id="stories">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#00a0b0]">
                Store Stories
              </p>
              <h2 className="mt-2 text-[28px] font-bold text-[#1a1a2e] sm:text-[32px]">
                운영 현장 이야기
              </h2>
            </div>
          </div>

          <div className="hide-scrollbar mt-7 flex gap-5 overflow-x-auto pb-4">
            <div className="w-[500px] shrink-0 overflow-hidden rounded-2xl bg-black shadow-card">
              <iframe
                className="aspect-video w-full"
                src={storeStories[0].video}
                title={`${storeStories[0].name} 창업 스토리`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {storeStories.slice(1).map((story) => (
              <a
                key={story.name}
                href={story.video.replace("/embed/", "/watch?v=")}
                target="_blank"
                rel="noreferrer"
                className="card-hover group relative w-[280px] shrink-0 overflow-hidden rounded-2xl bg-black text-white shadow-card"
              >
                <CropImage crop={videoThumb} alt={`${story.name} 영상 썸네일`} className="h-[180px] w-full opacity-60 transition group-hover:scale-105 group-hover:opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                  <p className="text-[18px] font-bold">{story.name}</p>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white backdrop-blur-sm transition group-hover:bg-[#00a0b0]">
                    <Play className="h-4 w-4 fill-current ml-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── BUSINESS PRESENTATION ── */}
        <section className="mt-16 overflow-hidden rounded-3xl bg-white shadow-card border border-gray-100" id="presentation">
          <div className="p-8 sm:p-12">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#00a0b0]/10 text-[#00a0b0]">
                <CalendarDays className="h-6 w-6" />
              </span>
              <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-[#00a0b0]">Business Presentation</p>
            </div>
            <h2 className="mt-5 text-[32px] font-bold leading-tight text-[#1a1a2e]">사업설명회 안내</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-gray-500 max-w-3xl">
              사업설명회는 별도의 예약 없이 참석이 가능하며, 원활한 상담을 위해 방문 예정일을 사전에 지역 담당자에게 알려주시면 감사하겠습니다. 특히 수도권 외 지역의 경우, 지역 담당자와 일정을 반드시 사전 조율해주시기 바랍니다.
            </p>
            
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-gray-100 bg-[#fafafa] p-6 lg:p-8">
                <div className="flex items-center gap-2 text-[#1a1a2e] font-bold text-[18px]">
                  <CalendarDays className="h-5 w-5 text-[#00a0b0]" />
                  일정 안내
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-[20px] font-bold text-[#1a1a2e]">매주 수요일 오전 10시</span>
                  <span className="text-[14px] text-gray-400 font-medium">(약 2시간 소요)</span>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-[#fafafa] p-6 lg:p-8">
                <div className="flex items-center gap-3 text-[#1a1a2e] font-bold text-[18px]">
                  <MapPinned className="h-5 w-5 text-[#00a0b0]" />
                  진행 장소
                  <a href="https://naver.me/xBw9BCPb" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[13px] font-semibold text-[#00a0b0] ml-auto hover:underline bg-[#00a0b0]/10 px-3 py-1 rounded-full">지도로 보기 <ArrowUpRight className="h-3 w-3" /></a>
                </div>
                <div className="mt-4">
                  <span className="block text-[16px] font-medium text-[#1a1a2e]">서울특별시 동작구 신대방 16다길 14</span>
                  <span className="block mt-1 text-[14px] text-gray-500">SPC 5층 도전A 사업설명회장</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-[14px] text-gray-600 bg-gray-50 p-5 rounded-2xl border border-gray-100">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-gray-400 shadow-sm">
                <Info className="h-4 w-4" />
              </span>
              <p>건물 내 주차 공간이 협소하오니 가능하신 경우 <strong className="text-[#1a1a2e]">대중교통 이용</strong>을 권장드립니다.</p>
            </div>
          </div>
        </section>

        {/* ── INQUIRY SECTION ── */}
        <section className="mt-16 overflow-hidden rounded-3xl bg-white shadow-card" id="inquiry">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="p-8 sm:p-12">
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-[#00a0b0]/10 text-[#00a0b0]">
                <MapPinned className="h-7 w-7" />
              </div>
              <h2 className="mt-6 text-[36px] font-bold leading-tight text-[#1a1a2e]">가맹점 개설문의</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-500">
                1:1 창업 상담과 임차형 경영주 모집 정보를 하나의 화면에서 바로 확인하고 신청하실 수 있습니다. 지금 파트너가 되어주세요!
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.paris.co.kr/franchise/inquiry/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 justify-center sm:flex-none items-center gap-2 rounded-full bg-[#1a1a2e] px-6 py-3.5 text-[15px] font-bold text-white transition hover:bg-[#272744]"
                >
                  가맹점 개설 문의
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://www.paris.co.kr/franchise/lease-type/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 justify-center sm:flex-none items-center gap-2 rounded-full border border-gray-200 px-6 py-3.5 text-[15px] font-bold text-gray-600 bg-white transition hover:border-[#00a0b0] hover:text-[#00a0b0]"
                >
                  임차형 경영주 지원안내
                </a>
              </div>
            </div>
            <div className="relative min-h-[300px] border-t border-gray-100 lg:border-l lg:border-t-0 p-8 sm:p-12 bg-[#fafafa]">
               <div className="absolute inset-0 bg-[#00a0b0]/5" />
               <div className="relative h-full flex flex-col justify-center items-center text-center">
                  <div className="rounded-full bg-white p-6 shadow-sm border border-gray-100 mb-6">
                     <span className="text-[40px] font-bold text-[#1a1a2e]">36<span className="text-[#00a0b0]">년</span></span>
                  </div>
                  <p className="text-[20px] font-bold text-[#1a1a2e]">최고의 자리를 유지해 온 노하우</p>
                  <p className="mt-3 text-[15px] text-gray-500 max-w-sm">
                    일상 속 작은 만족을 넘어, 파리크라상과 함께 내일의 가능성을 열어보세요.
                  </p>
               </div>
            </div>
          </div>
        </section>

      </div>

      <SiteFooter />
    </main>
  );
}
