"use client";

import Link from "next/link";
import { Globe2 } from "lucide-react";
import { useState } from "react";
import { CropImage } from "@/components/crop-image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brands, officialSourceLinks, storyMosaic } from "@/data/app-data";

const galleryItems = [
  storyMosaic.galleryMain,
  storyMosaic.galleryThumb1,
  storyMosaic.galleryThumb2,
  storyMosaic.galleryThumb3,
];

export function BrandStoryMvp() {
  const [selectedGallery, setSelectedGallery] = useState(storyMosaic.galleryMain);

  return (
    <main className="bg-[#f5f3ee]">
      <SiteHeader variant="hub" activeLabel="브랜드 소개" />

      <div className="mx-auto max-w-[1280px] px-4 pb-16 pt-8 sm:px-6">
        <section className="rounded-[34px] bg-white p-8 shadow-[0_18px_50px_rgba(17,19,24,0.06)] sm:p-10">
          <p className="text-[12px] uppercase tracking-[0.3em] text-black/42">Brand Story</p>
          <h1 className="mt-4 font-display text-[52px] leading-[0.94] text-[#111318] sm:text-[72px]">
            파리크라상의 베이커리, 카페, 다이닝 브랜드를 소개합니다
          </h1>
          <p className="mt-5 max-w-4xl text-[18px] leading-8 text-black/66">
            일상 속 베이커리부터 프리미엄 케이터링, 이탈리안 카페, 샌드위치와 샐러드,
            스페셜티 커피, 외식 브랜드, 기업 선물까지 목적에 맞는 브랜드를 만나보세요.
          </p>
        </section>

        <section className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.52fr_0.48fr]">
          <CropImage crop={storyMosaic.heroLeft} alt="브랜드 메인 비주얼" className="min-h-[360px] w-full rounded-[30px] lg:row-span-2" />
          <CropImage crop={storyMosaic.heroTopRight} alt="브랜드 소개" className="min-h-[200px] w-full rounded-[30px] lg:col-span-2" />
          <CropImage crop={storyMosaic.heroBottomCard1} alt="브랜드 카드 1" className="min-h-[200px] w-full rounded-[30px]" />
          <CropImage crop={storyMosaic.heroBottomCard2} alt="브랜드 카드 2" className="min-h-[200px] w-full rounded-[30px]" />
        </section>

        <section className="relative mt-6 overflow-hidden rounded-[34px]">
          <CropImage crop={storyMosaic.darkBand} alt="브랜드 그룹 배경" className="min-h-[420px] w-full" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,19,24,0.78),rgba(17,19,24,0.24))]" />
          <div className="absolute inset-0 grid items-center p-8 text-white sm:p-12 lg:grid-cols-[1fr_0.9fr]">
            <div className="max-w-2xl">
              <p className="text-[12px] uppercase tracking-[0.3em] text-white/58">Why This Structure</p>
              <h2 className="mt-4 font-display text-[46px] leading-none sm:text-[58px]">매일의 식탁과 특별한 순간을 위한 브랜드</h2>
              <p className="mt-6 text-[18px] leading-8 text-white/80">
                신선한 빵과 케이크, 커피, 샌드위치, 다이닝, 케이터링, 상품권까지 고객의 상황에
                맞는 서비스를 브랜드별로 쉽게 선택할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-5 lg:grid-cols-3">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/brands/${brand.slug}`}
              className="rounded-[30px] border border-black/8 bg-white p-6 shadow-[0_16px_45px_rgba(17,19,24,0.05)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.22em] text-black/38">{brand.englishName}</p>
                  <h3 className="mt-2 text-[28px] font-semibold tracking-tight text-[#111318]">{brand.name}</h3>
                </div>
                {brand.logoCrop ? (
                  <div className="h-11 w-28 overflow-hidden rounded bg-white">
                    <img src={brand.logoCrop.src} alt={brand.name} className="h-full w-full object-contain" />
                  </div>
                ) : null}
              </div>
              <p className="mt-4 text-[15px] leading-7 text-black/62">{brand.tagline}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {brand.highlights.map((item) => (
                  <span key={item} className="rounded-full bg-[#f5f3ee] px-3 py-2 text-[12px] font-medium text-black/60">
                    {item}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-16 grid gap-5 lg:grid-cols-[0.68fr_0.68fr_0.64fr]">
          <CropImage crop={storyMosaic.breadLeft} alt="스토리 이미지 1" className="min-h-[360px] w-full rounded-[30px]" />
          <CropImage crop={storyMosaic.breadCenter} alt="스토리 이미지 2" className="min-h-[360px] w-full rounded-[30px]" />
          <div className="rounded-[30px] bg-white p-8 shadow-[0_16px_45px_rgba(17,19,24,0.05)]">
            <p className="text-[12px] uppercase tracking-[0.28em] text-black/38">Brand Guide</p>
            <h2 className="mt-4 font-display text-[38px] leading-none text-[#111318]">목적에 맞게 고르는 브랜드</h2>
            <p className="mt-5 text-[16px] leading-8 text-black/64">
              간단한 픽업 주문, 기념일 케이크, 기업 행사 케이터링, 원두 납품, 대량 상품권 구매까지
              원하는 목적에 맞는 브랜드 상세 페이지로 바로 이동할 수 있습니다.
            </p>
          </div>
        </section>

        <section className="mt-16 grid gap-5 lg:grid-cols-[150px_1fr_0.88fr]">
          <div className="flex gap-4 lg:flex-col">
            {galleryItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedGallery(item)}
                className="w-[110px] shrink-0 overflow-hidden rounded-[18px] border border-black/8 bg-white lg:w-full"
              >
                <CropImage crop={item} alt={`브랜드 갤러리 ${index + 1}`} className="w-full" />
              </button>
            ))}
          </div>
          <CropImage crop={selectedGallery} alt="선택된 갤러리" className="min-h-[420px] w-full rounded-[30px]" />
          <div className="rounded-[30px] bg-[#1c2535] p-8 text-white">
            <p className="text-[12px] uppercase tracking-[0.28em] text-white/54">Brand Sites</p>
            <h2 className="mt-4 font-display text-[40px] leading-none">공식 브랜드 사이트</h2>
            <div className="mt-8 flex flex-col gap-3">
              {officialSourceLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-[18px] border border-white/10 px-4 py-3 text-[15px] text-white/82"
                >
                  <span>{item.label}</span>
                  <Globe2 className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-5 lg:grid-cols-[1fr_0.92fr]">
          <div className="rounded-[30px] bg-white p-8 shadow-[0_16px_45px_rgba(17,19,24,0.05)]">
            <p className="text-[12px] uppercase tracking-[0.28em] text-black/38">Customer Service</p>
            <h2 className="mt-4 font-display text-[40px] leading-none text-[#111318]">더 편리한 브랜드 이용</h2>
            <div className="mt-6 grid gap-4 text-[16px] leading-8 text-black/64">
              <p>브랜드별 이벤트와 상품을 확인하고 원하는 상품은 픽업 주문 또는 상담 주문으로 이어갈 수 있습니다.</p>
              <p>기업 고객은 상품권, 케이터링, 원두 납품 등 B2B 메뉴에서 필요한 서비스를 선택할 수 있습니다.</p>
              <p>고객센터와 공식 브랜드 사이트 링크를 함께 제공해 더 자세한 정보를 확인할 수 있습니다.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <CropImage crop={storyMosaic.finalDrinkOne} alt="브랜드 큐레이션 1" className="min-h-[240px] w-full rounded-[26px]" />
            <CropImage crop={storyMosaic.finalDrinkTwo} alt="브랜드 큐레이션 2" className="min-h-[240px] w-full rounded-[26px]" />
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
