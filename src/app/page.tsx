"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { ArrowUpRight, ShoppingBag, Store, Calendar, Gift, ChevronRight } from "lucide-react";
import { CropImage } from "@/components/crop-image";
import { ProductCard } from "@/components/product-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HeroCarousel } from "@/components/hero-carousel";
import { CouponSection } from "@/components/coupon-section";
import {
  brands,
  couponCards,
  heroSlides,
  homeStats,
  issueCards,
  mainEventCards,
  orderJourney,
  products,
  sourceHighlights,
} from "@/data/app-data";

const brandFilterTabs = [
  { label: "전체", slug: "all" },
  { label: "파리바게뜨", slug: "paris-baguette" },
  { label: "파리크라상", slug: "paris-croissant" },
  { label: "파스쿠찌", slug: "caffe-pascucci" },
  { label: "커피앳웍스", slug: "coffee-at-works" },
  { label: "리나스", slug: "linas" },
  { label: "패션5", slug: "passion5" },
  { label: "상품권", slug: "spc-gift" },
];

const quickServices = [
  { icon: ShoppingBag, label: "픽업 주문", href: "/product", color: "#00a0b0" },
  { icon: Store, label: "매장 찾기", href: "/stores", color: "#1e4ca1" },
  { icon: Calendar, label: "예약/케이터링", href: "/brands/paris-baguette-catering", color: "#8e6a3f" },
  { icon: Gift, label: "상품권/B2B", href: "/brands/spc-gift", color: "#745b34" },
];

export default function HomePage() {
  const [activeBrandTab, setActiveBrandTab] = useState("all");

  const filteredProducts = useMemo(() => {
    if (activeBrandTab === "all") return products.slice(0, 12);
    return products.filter((p) => p.brandSlug === activeBrandTab).slice(0, 8);
  }, [activeBrandTab]);

  return (
    <main className="bg-[#fafafa]">
      <SiteHeader variant="hub" />

      <div className="mx-auto max-w-[1280px] px-4 pb-16 pt-5 sm:px-6">
        {/* ── HERO CAROUSEL ── */}
        <HeroCarousel slides={heroSlides} autoPlayInterval={5000} />

        {/* ── QUICK SERVICE BAR ── */}
        <section className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4" id="quick-services">
          {quickServices.map((svc) => (
            <Link
              key={svc.label}
              href={svc.href}
              className="card-hover flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div
                className="grid h-12 w-12 shrink-0 place-items-center rounded-xl"
                style={{ backgroundColor: `${svc.color}12` }}
              >
                <svc.icon className="h-5 w-5" style={{ color: svc.color }} />
              </div>
              <div>
                <p className="text-[15px] font-bold text-brand-dark">{svc.label}</p>
                <p className="mt-0.5 text-[12px] text-gray-400">바로가기</p>
              </div>
            </Link>
          ))}
        </section>

        {/* ── BRAND DIRECTORY ── */}
        <section className="mt-10" id="brand-directory">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-teal-brand">
                Brand Directory
              </p>
              <h2 className="mt-2 text-[28px] font-bold text-brand-dark sm:text-[32px]">
                원하는 브랜드를 선택하세요
              </h2>
            </div>
            <Link
              href="/brand-story"
              className="flex items-center gap-1 text-[14px] font-semibold text-gray-500 transition hover:text-teal-brand"
            >
              전체 브랜드 <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="group card-hover overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card"
                id={`brand-card-${brand.slug}`}
              >
                {/* Brand Color Bar */}
                <div
                  className="h-1 w-full"
                  style={{ backgroundColor: brand.accent }}
                />

                {/* Logo Area */}
                <div
                  className="relative grid min-h-[120px] place-items-center overflow-hidden p-5"
                  style={{
                    background: `linear-gradient(135deg, ${brand.accent}10, #ffffff 60%)`,
                  }}
                >
                  {brand.logoCrop ? (
                    <div className="grid h-16 w-full max-w-[200px] place-items-center rounded-2xl bg-white/90 px-4 shadow-sm">
                      <img
                        src={brand.logoCrop.src}
                        alt={`${brand.name} logo`}
                        className="max-h-10 w-full object-contain"
                      />
                    </div>
                  ) : (
                    <p
                      className="text-center text-[22px] font-bold tracking-tight"
                      style={{ color: brand.logoColor }}
                    >
                      {brand.logoText}
                    </p>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                        {brand.englishName}
                      </p>
                      <p className="mt-1.5 text-[20px] font-bold text-brand-dark">
                        {brand.name}
                      </p>
                    </div>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-dark text-white transition group-hover:bg-teal-brand">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-gray-500">
                    {brand.tagline}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {brand.highlights.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── COUPON SECTION ── */}
        <CouponSection coupons={couponCards} />

        {/* ── SERVICE HIGHLIGHTS ── */}
        <section
          className="mt-10 grid gap-5 rounded-3xl border border-gray-200 bg-white p-5 shadow-card lg:grid-cols-[0.85fr_1.15fr]"
          id="service-highlights"
        >
          {/* Stats Card */}
          <div className="rounded-2xl border border-gray-200 bg-[#ffffff] p-7 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-teal-brand">
              Service Overview
            </p>
            <h3 className="mt-3 text-[22px] font-bold text-brand-dark">서비스 현황</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {homeStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-gray-200 bg-[#f3f6f8] p-4"
                >
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-[24px] font-bold text-brand-dark">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Order Journey */}
          <div className="rounded-2xl bg-[#111827] p-7 text-white shadow-hero">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#32d5df]">
                  Shopping Flow
                </p>
                <h3 className="mt-2 text-[22px] font-bold">
                  상품 선택부터 주문까지
                </h3>
              </div>
              <Link
                href="/product"
                className="inline-flex items-center gap-2 rounded-full border border-[#3f4b63] bg-[#1f2937] px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-[#263244]"
              >
                바로 주문 <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {orderJourney.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-xl border border-[#374151] bg-[#1f2937] p-5 transition hover:bg-[#263244]"
                >
                  <span className="text-[24px]">{item.icon}</span>
                  <p className="mt-3 text-[16px] font-bold">{item.title}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#d1d5db]">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROMOTION SECTION ── */}
        <section className="mt-14" id="promotion-section">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-teal-brand">
                Promotion
              </p>
              <h2 className="mt-2 text-[28px] font-bold text-brand-dark sm:text-[32px]">
                지금 주목할 이벤트
              </h2>
            </div>
          </div>
          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            {sourceHighlights.map((item) => (
              <div
                key={item.title}
                className="card-hover overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card"
              >
                <CropImage
                  crop={item.crop}
                  alt={item.title}
                  className="min-h-[200px] w-full"
                  displayMode="contain"
                  objectPosition="center center"
                />
                <div className="p-5">
                  <h3 className="text-[20px] font-bold text-brand-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVICE MENU ── */}
        <section className="mt-14" id="service-menu">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-teal-brand">
                Service Menu
              </p>
              <h2 className="mt-2 text-[28px] font-bold text-brand-dark sm:text-[32px]">
                개인 주문부터 기업 구매까지
              </h2>
            </div>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {mainEventCards.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                className="card-hover overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card"
              >
                <CropImage
                  crop={card.crop}
                  alt={card.title}
                  className="min-h-[200px] w-full"
                  displayMode="contain"
                  objectPosition="center center"
                />
                <div className="p-5">
                  <p className="text-[20px] font-bold text-brand-dark">
                    {card.title}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-gray-500">
                    {card.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── PRODUCT LIST WITH BRAND TAB FILTER ── */}
        <section className="mt-14" id="product-list">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-teal-brand">
                Products
              </p>
              <h2 className="mt-2 text-[28px] font-bold text-brand-dark sm:text-[32px]">
                브랜드별 신상품과 인기 상품
              </h2>
            </div>
            <Link
              href="/products"
              className="flex items-center gap-1 text-[14px] font-semibold text-gray-500 transition hover:text-teal-brand"
            >
              전체 상품 <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Brand Filter Tabs */}
          <div className="hide-scrollbar mt-6 flex gap-2 overflow-x-auto pb-2">
            {brandFilterTabs.map((tab) => (
              <button
                key={tab.slug}
                onClick={() => setActiveBrandTab(tab.slug)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-[13px] font-semibold transition ${
                  activeBrandTab === tab.slug
                    ? "bg-teal-brand text-white shadow-glow"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-teal-brand hover:text-teal-brand"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* ── NOW TRENDING ── */}
        <section className="mt-14" id="trending-section">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-teal-brand">
                Now Trending
              </p>
              <h2 className="mt-2 text-[28px] font-bold text-brand-dark sm:text-[32px]">
                지금 많이 찾는 소식
              </h2>
            </div>
          </div>
          <div className="hide-scrollbar mt-7 flex gap-5 overflow-x-auto pb-4">
            {issueCards.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                className="card-hover w-[280px] shrink-0 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card"
              >
                <CropImage
                  crop={card.crop}
                  alt={card.title}
                  className="h-[220px] w-full"
                  displayMode="contain"
                  objectPosition="center center"
                />
                <div className="p-4">
                  <p className="text-[17px] font-bold text-brand-dark">
                    {card.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
