"use client";

import Link from "next/link";
import { ArrowUpRight, Globe2, ChevronRight, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { CropImage } from "@/components/crop-image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brandNav, findBrandBySlug, products } from "@/data/app-data";

type BrandDetailMvpProps = {
  slug: string;
};

export function BrandDetailMvp({ slug }: BrandDetailMvpProps) {
  const brand = findBrandBySlug(slug);
  const [activeCategory, setActiveCategory] = useState(brand.categories[0] ?? "전체");

  const visibleProducts = useMemo(() => {
    const items = products.filter((product) => product.brandSlug === brand.slug);

    if (activeCategory === "전체") {
      return items;
    }

    return items.filter((product) => product.category === activeCategory);
  }, [activeCategory, brand.slug]);

  return (
    <main className="bg-[#fafafa]">
      <SiteHeader variant={slug} activeLabel={brandNav[0]?.label} />

      <div className="mx-auto max-w-[1280px] px-4 pb-16 pt-6 sm:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[13px] text-gray-400">
          <Link href="/" className="hover:text-teal-brand transition">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/brand-story" className="hover:text-teal-brand transition">브랜드</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-brand-dark font-semibold">{brand.name}</span>
        </div>

        {/* ── HERO SECTION ── */}
        <section className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info Card */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-card">
            {/* Brand Color Bar */}
            <div
              className="mb-6 h-1 w-16 rounded-full"
              style={{ backgroundColor: brand.accent }}
            />
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400">
              {brand.sourceLabel}
            </p>
            <h1 className="mt-3 text-[38px] font-bold leading-tight text-brand-dark sm:text-[48px]">
              {brand.name}
            </h1>
            <p className="mt-3 text-[17px] leading-8 text-gray-600">
              {brand.tagline}
            </p>
            <p className="mt-5 text-[15px] leading-8 text-gray-500">
              {brand.description}
            </p>

            {/* Highlights */}
            <div className="mt-7 flex flex-wrap gap-2">
              {brand.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-gray-50 px-3.5 py-2 text-[12px] font-semibold text-gray-600"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={brand.siteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-dark px-5 py-3 text-[14px] font-semibold text-white transition hover:bg-teal-brand"
              >
                <ExternalLink className="h-4 w-4" />
                공식 사이트
              </a>
              <Link
                href="/product"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-[14px] font-semibold text-brand-dark transition hover:border-teal-brand hover:text-teal-brand"
              >
                픽업 주문하기
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="overflow-hidden rounded-2xl shadow-card">
            <CropImage
              crop={brand.heroCrop}
              alt={brand.name}
              className="min-h-[380px] w-full lg:min-h-[480px]"
            />
          </div>
        </section>

        {/* ── PROMOTIONS ── */}
        <section className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {brand.promotions.map((promotion) => (
            <Link
              key={promotion.id}
              href={promotion.href}
              className="card-hover overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card"
            >
              <CropImage
                crop={promotion.crop}
                alt={promotion.title}
                className="min-h-[220px] w-full"
              />
              <div className="p-5">
                <p className="text-[18px] font-bold text-brand-dark">
                  {promotion.title}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-500">
                  {promotion.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </section>

        {/* ── PRODUCT LINEUP ── */}
        <section className="mt-12 rounded-2xl bg-brand-dark p-7 text-white shadow-hero">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-teal-brand">
                Product Lineup
              </p>
              <h2 className="mt-2 text-[24px] font-bold sm:text-[28px]">
                브랜드별 상품 라인업
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {brand.categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-[13px] font-semibold transition ${
                    activeCategory === category
                      ? "bg-teal-brand text-white"
                      : "bg-white/8 text-white/65 hover:bg-white/15"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {(visibleProducts.length > 0
              ? visibleProducts
              : products.slice(0, 4)
            ).map((product) => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>
        </section>

        {/* ── BRAND SERVICE INFO ── */}
        <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-card">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-teal-brand">
              Brand Service
            </p>
            <h2 className="mt-3 text-[24px] font-bold text-brand-dark sm:text-[28px]">
              브랜드 이용 안내
            </h2>
            <div className="mt-6 grid gap-4 text-[15px] leading-8 text-gray-600">
              <p>브랜드 소개, 이벤트, 상품, 픽업 주문 정보를 한 화면에서 확인할 수 있습니다.</p>
              <p>모바일에서는 대표 배너와 주문 버튼을 우선 배치해 원하는 상품을 빠르게 찾을 수 있습니다.</p>
              <p>법인 고객은 상품권, 케이터링, 원두 납품 등 기업 구매 목적에 맞는 채널로 이동할 수 있습니다.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-card">
            <CropImage
              crop={brand.secondaryCrop ?? brand.heroCrop}
              alt={`${brand.name} secondary`}
              className="min-h-[340px] w-full"
            />
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
