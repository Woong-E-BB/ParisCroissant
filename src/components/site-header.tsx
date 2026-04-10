"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { useMemo, useState } from "react";
import { brandNav, brands, hubNav, topPartnerLinks } from "@/data/app-data";
import { BrandSwitcher } from "@/components/brand-switcher";

type SiteHeaderProps = {
  variant?: "hub" | "baguette" | "croissant";
  activeLabel?: string;
};

function getBrandVariant(variant: SiteHeaderProps["variant"]) {
  if (variant === "baguette") {
    return brands.find((brand) => brand.slug === "paris-baguette") ?? brands[0];
  }

  if (variant === "croissant") {
    return brands.find((brand) => brand.slug === "paris-croissant") ?? brands[1];
  }

  return null;
}

const serviceIcons = [
  { label: "픽업", icon: "🛍️" },
  { label: "케이터링", icon: "🍽️" },
  { label: "예약", icon: "📅" },
  { label: "상품권", icon: "🎫" },
  { label: "매장찾기", icon: "📍" },
];

export function SiteHeader({ variant = "hub", activeLabel }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = variant === "hub" ? hubNav : brandNav;
  const brand = useMemo(() => getBrandVariant(variant), [variant]);
  const homeHref =
    variant === "croissant" ? "/brands/paris-croissant" : variant === "baguette" ? "/brands/paris-baguette" : "/";

  return (
    <header className="sticky top-0 z-40" id="site-header">
      {/* Top Bar */}
      <div className="bg-brand-dark text-white">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-2 text-[11px] sm:px-6">
          <div className="flex flex-wrap items-center gap-3 text-white/60">
            {topPartnerLinks.map((item) => (
              <span key={item} className="hover:text-white transition cursor-pointer">{item}</span>
            ))}
          </div>
          <div className="hidden items-center gap-4 text-white/50 md:flex">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-brand" />
              공식 브랜드 통합 서비스
            </span>
          </div>
        </div>
      </div>

      {/* Service Icons Bar */}
      {variant === "hub" && (
        <div className="border-b border-gray-100 bg-white">
          <div className="mx-auto hidden max-w-[1280px] items-center justify-center gap-8 px-4 py-2 sm:px-6 md:flex">
            {serviceIcons.map((svc) => (
              <button
                key={svc.label}
                className="flex items-center gap-1.5 text-[12px] text-gray-500 transition hover:text-teal-brand"
              >
                <span className="text-[14px]">{svc.icon}</span>
                {svc.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <div className="glass border-b border-gray-200/60">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          {/* Logo */}
          <Link href={homeHref} className="flex min-w-0 items-center gap-4">
            {brand?.logoCrop ? (
              <div className="h-10 w-[170px] overflow-hidden rounded bg-white">
                <img
                  src={brand.logoCrop.src}
                  alt={brand.name}
                  className="h-full w-full object-contain"
                />
              </div>
            ) : (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal-brand">
                  PARIS CROISSANT
                </p>
                <p className="font-display text-[28px] tracking-tight text-brand-dark">
                  파리크라상
                </p>
              </div>
            )}
            {brand ? (
              <div className="hidden lg:block">
                <p className="text-[11px] uppercase tracking-[0.28em] text-gray-400">{brand.sourceLabel}</p>
                <p className="text-[13px] text-gray-600">{brand.tagline}</p>
              </div>
            ) : null}
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[15px] font-semibold transition ${
                  activeLabel === item.label
                    ? "text-teal-brand"
                    : "text-gray-700 hover:text-teal-brand"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Brand Switcher */}
            <div className="hidden lg:block">
              <BrandSwitcher />
            </div>

            {/* Icon Buttons */}
            <div className="hidden items-center gap-1.5 lg:flex">
              {[Search, ShoppingBag, UserRound].map((Icon, index) => (
                <button
                  key={index}
                  className="grid h-10 w-10 place-items-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-brand-dark"
                  aria-label="header action"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </button>
              ))}
            </div>

            {/* Mobile Menu */}
            <button
              className="grid h-10 w-10 place-items-center rounded-xl border border-gray-200 text-gray-700 lg:hidden"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label="메뉴 열기"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen ? (
        <div className="border-t border-gray-100 bg-white px-4 py-6 lg:hidden animate-fade-in">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-[17px] font-semibold text-brand-dark transition hover:text-teal-brand"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 border-t border-gray-100 pt-4">
              <p className="mb-3 text-[12px] font-bold uppercase tracking-wider text-gray-400">
                서비스 바로가기
              </p>
              <div className="flex flex-wrap gap-2">
                {serviceIcons.map((svc) => (
                  <span
                    key={svc.label}
                    className="rounded-full bg-gray-50 px-3 py-1.5 text-[12px] text-gray-600"
                  >
                    {svc.icon} {svc.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
