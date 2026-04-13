"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Grid3X3 } from "lucide-react";
import { brands } from "@/data/app-data";

export function BrandSwitcher() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[13px] font-semibold text-brand-dark transition hover:border-teal-brand hover:text-teal-brand"
        aria-label="브랜드 전환"
        id="brand-switcher-trigger"
      >
        <Grid3X3 className="h-4 w-4" />
        <span className="hidden sm:inline">브랜드</span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 pt-20 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative mx-4 max-h-[calc(100vh-7rem)] w-full max-w-[880px] overflow-y-auto rounded-3xl bg-white p-6 shadow-hero animate-scale-in sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200"
              aria-label="닫기"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header */}
            <div className="mb-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-teal-brand">
                Brand Select
              </p>
              <h3 className="mt-2 text-[24px] font-bold text-brand-dark">
                브랜드를 선택해주세요
              </h3>
            </div>

            {/* Brand Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {brands.map((brand, index) => (
                <Link
                  key={brand.slug}
                  href={`/brands/${brand.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-transparent p-4 transition hover:border-teal-brand/20 hover:bg-teal-light/30"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {/* Logo Circle */}
                  <div
                    className="grid h-20 w-full max-w-[132px] place-items-center rounded-2xl border border-gray-100 bg-white px-3 py-2 shadow-sm transition group-hover:border-teal-brand/40 group-hover:shadow-glow"
                  >
                    {brand.logoCrop ? (
                      <img
                        src={brand.logoCrop.src}
                        alt={brand.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <span
                        className="text-[11px] font-bold"
                        style={{ color: brand.logoColor }}
                      >
                        {brand.logoText.slice(0, 4)}
                      </span>
                    )}
                  </div>
                  {/* Brand Name */}
                  <span className="text-center text-[12px] font-semibold text-gray-700 transition group-hover:text-teal-brand">
                    {brand.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-8 border-t border-gray-100 pt-5">
              <div className="flex items-center justify-between">
                <p className="text-[12px] text-gray-400">
                  파리크라상 그룹 {brands.length}개 브랜드
                </p>
                <Link
                  href="/brand-story"
                  onClick={() => setIsOpen(false)}
                  className="text-[13px] font-semibold text-teal-brand transition hover:underline"
                >
                  브랜드 스토리 보기 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
