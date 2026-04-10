"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Ticket } from "lucide-react";
import { CropImage } from "@/components/crop-image";
import type { ImageCrop } from "@/data/app-data";

export type CouponCard = {
  id: string;
  brand: string;
  title: string;
  discountRate?: number;
  discountPrice?: string;
  originalPrice?: string;
  crop: ImageCrop;
  brandColor?: string;
};

type CouponSectionProps = {
  coupons: CouponCard[];
};

export function CouponSection({ coupons }: CouponSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative mt-10 rounded-3xl bg-gradient-to-br from-brand-dark to-[#16213e] p-8 text-white sm:p-10" id="coupon-section">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Ticket className="h-5 w-5 text-teal-brand" />
            <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-teal-brand">
              Coupon & Promotion
            </p>
          </div>
          <h2 className="mt-3 text-[28px] font-bold leading-tight sm:text-[34px]">
            바로 쓸 수 있는 쿠폰 받기
          </h2>
          <p className="mt-2 text-[15px] text-white/60">
            브랜드별 할인 쿠폰과 프로모션을 확인하세요
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/60 transition hover:border-white/40 hover:text-white"
            aria-label="이전"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/60 transition hover:border-white/40 hover:text-white"
            aria-label="다음"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Cards */}
      <div
        ref={scrollRef}
        className="hide-scrollbar mt-8 flex gap-5 overflow-x-auto pb-2"
      >
        {coupons.map((coupon) => (
          <div
            key={coupon.id}
            className="group relative w-[260px] shrink-0 overflow-hidden rounded-2xl bg-white/8 backdrop-blur-sm border border-white/10 transition hover:bg-white/12 hover:border-white/20"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <CropImage
                crop={coupon.crop}
                alt={coupon.title}
                className="h-[200px] w-full"
              />
              {/* Discount Badge */}
              {coupon.discountRate && (
                <div className="absolute right-3 top-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-[14px] font-bold text-white shadow-lg">
                  {coupon.discountRate}%
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-4">
              <p
                className="text-[11px] font-bold uppercase tracking-wider"
                style={{ color: coupon.brandColor || "#00a0b0" }}
              >
                {coupon.brand}
              </p>
              <p className="mt-1.5 text-[15px] font-semibold leading-snug text-white">
                {coupon.title}
              </p>
              {coupon.discountPrice && (
                <div className="mt-3 flex items-center gap-2">
                  {coupon.originalPrice && (
                    <span className="text-[13px] text-white/40 line-through">
                      {coupon.originalPrice}
                    </span>
                  )}
                  <span className="text-[16px] font-bold text-teal-brand">
                    {coupon.discountPrice}
                  </span>
                </div>
              )}
              <button className="mt-4 w-full rounded-xl bg-teal-brand/20 py-2.5 text-[13px] font-semibold text-teal-brand transition hover:bg-teal-brand/30">
                쿠폰 받기
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
