"use client";

import { useEffect, useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brands, breadcrumbByPage, products } from "@/data/app-data";

const filters = [
  "전체",
  "브랜드",
  "브레드",
  "케이크",
  "커피",
  "음료",
  "상품권",
  "원두",
  "샌드위치",
  "브런치",
  "라그릴리아",
  "퀸즈파크",
  "케이터링",
  "사업자용 상품",
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("전체");
  const [page, setPage] = useState(1);
  const pageSize = 8;

  const filteredProducts = useMemo(() => {
    if (activeFilter === "전체" || activeFilter === "브랜드") {
      return products;
    }

    return products.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    setPage(1);
  }, [activeFilter]);

  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const pageItems = filteredProducts.slice((page - 1) * pageSize, page * pageSize);

  return (
    <main className="bg-[#f5f3ee]">
      <SiteHeader variant="baguette" activeLabel="상품 소개" />

      <div className="mx-auto max-w-[1280px] px-4 pb-16 pt-8 sm:px-6">
        <p className="text-[14px] uppercase tracking-[0.18em] text-black/35">{breadcrumbByPage.products}</p>

        <section className="mt-6 rounded-[34px] bg-white p-8 shadow-[0_18px_50px_rgba(17,19,24,0.06)] sm:p-10">
          <p className="text-[12px] uppercase tracking-[0.28em] text-black/38">Product Showcase</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="font-display text-[54px] leading-none text-[#111318]">상품소개 페이지</h1>
              <p className="mt-4 max-w-3xl text-[17px] leading-8 text-black/64">
                파리바게뜨 신제품, 파리크라상 픽업 상품, 파스쿠찌 시즌 음료, 커피앳웍스 사업자 상품,
                파리크라상 상품권까지 브랜드별 상품을 한 번에 확인하세요.
              </p>
            </div>
            <div className="rounded-[24px] bg-[#f5f3ee] px-6 py-4 text-right">
              <p className="text-[12px] uppercase tracking-[0.22em] text-black/35">Products</p>
              <p className="mt-2 text-[34px] font-semibold tracking-tight text-[#111318]">{filteredProducts.length}</p>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] bg-[#1c2535] p-7 text-white">
            <p className="text-[12px] uppercase tracking-[0.28em] text-white/54">Filter</p>
            <h2 className="mt-3 font-display text-[40px] leading-none">브랜드와 카테고리로 빠르게 탐색</h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-2 text-[14px] font-medium ${
                    activeFilter === filter ? "bg-white text-[#111318]" : "bg-white/7 text-white/72"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-black/8 bg-white p-7 shadow-[0_16px_45px_rgba(17,19,24,0.05)]">
            <p className="text-[12px] uppercase tracking-[0.28em] text-black/38">Brand Category</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {brands.slice(0, 8).map((brand) => (
                <div key={brand.slug} className="rounded-[22px] bg-[#f5f3ee] p-4">
                  <p className="text-[12px] uppercase tracking-[0.2em] text-black/35">{brand.sourceLabel}</p>
                  <p className="mt-2 text-[20px] font-semibold tracking-tight text-[#111318]">{brand.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pageItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>

        <div className="mt-12 flex items-center justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className={`grid h-11 w-11 place-items-center rounded-full text-[15px] ${
                page === index + 1 ? "bg-[#111318] text-white" : "bg-white text-black/55"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
