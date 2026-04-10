"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CropImage } from "@/components/crop-image";
import type { ImageCrop } from "@/data/app-data";

export type HeroSlide = {
  id: string;
  title: string;
  subtitle: string;
  brandName?: string;
  href: string;
  crop: ImageCrop;
  accent?: string;
};

type HeroCarouselProps = {
  slides: HeroSlide[];
  autoPlayInterval?: number;
};

export function HeroCarousel({
  slides,
  autoPlayInterval = 5000,
}: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning],
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, slides.length, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, slides.length, goTo]);

  useEffect(() => {
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [next, autoPlayInterval]);

  return (
    <section className="relative w-full overflow-hidden rounded-3xl bg-brand-dark" id="hero-carousel">
      {/* Slides */}
      <div className="relative h-[420px] sm:h-[480px] lg:h-[560px]">
        {slides.map((slide, index) => (
          <Link
            key={slide.id}
            href={slide.href}
            className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              index === current
                ? "z-10 opacity-100 scale-100"
                : "z-0 opacity-0 scale-[1.03]"
            }`}
          >
            <CropImage
              crop={slide.crop}
              alt={slide.title}
              className="absolute inset-0 h-full w-full"
            />
            <div className="overlay-gradient-dark absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 z-20 p-8 sm:p-12 lg:p-16">
              {slide.brandName && (
                <span
                  className="mb-3 inline-block rounded-full px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-widest text-white"
                  style={{
                    background: slide.accent || "rgba(0,160,176,0.85)",
                  }}
                >
                  {slide.brandName}
                </span>
              )}
              <h2 className="max-w-2xl text-[28px] font-bold leading-tight text-white sm:text-[36px] lg:text-[44px]">
                {slide.title}
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-7 text-white/80 sm:text-[17px]">
                {slide.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.preventDefault();
          prev();
        }}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/30"
        aria-label="이전 슬라이드"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          next();
        }}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/30"
        aria-label="다음 슬라이드"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Pagination Indicator */}
      <div className="absolute bottom-6 right-8 z-30 flex items-center gap-3 sm:bottom-8 sm:right-12">
        <span className="rounded-full bg-white/20 px-3 py-1 text-[13px] font-semibold text-white backdrop-blur-sm">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
        <div className="flex gap-1.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                goTo(index);
              }}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === current
                  ? "w-8 bg-white"
                  : "w-2 bg-white/35 hover:bg-white/55"
              }`}
              aria-label={`슬라이드 ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
