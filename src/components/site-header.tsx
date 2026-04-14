"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { useMemo, useState } from "react";
import { brandNav, brands, hubNav, topPartnerLinks } from "@/data/app-data";
import { BrandSwitcher } from "@/components/brand-switcher";

type SiteHeaderProps = {
  variant?: string;
  activeLabel?: string;
};

const brandVariantAliases: Record<string, string> = {
  baguette: "paris-baguette",
  croissant: "paris-croissant",
};

function getBrandVariant(variant?: string) {
  if (!variant || variant === "hub") return null;
  const resolvedVariant = brandVariantAliases[variant] ?? variant;
  return brands.find((brand) => brand.slug === resolvedVariant) ?? null;
}

const serviceIcons = [
  { label: "픽업", icon: "🛍️" },
  { label: "케이터링", icon: "🍽️" },
  { label: "예약", icon: "📅" },
  { label: "상품권", icon: "🎫" },
  { label: "매장찾기", icon: "📍" },
];

const headerActions = [
  { icon: Search, href: "/products", label: "search" },
  { icon: ShoppingBag, href: "/checkout", label: "cart" },
  { icon: UserRound, href: "/login", label: "mypage" },
];

export function SiteHeader({ variant = "hub", activeLabel }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const brand = useMemo(() => getBrandVariant(variant), [variant]);
  
  const navItems = variant === "hub" ? hubNav : [
    { label: "브랜드 소개", href: brand ? `/brands/${brand.slug}` : "/brand-story" },
    { label: "이벤트", href: "/events" },
    { label: "상품 안내", href: "/products" },
    { label: "픽업 주문", href: "/product" },
    { label: "창업 안내", href: "/franchise" },
  ];

  const homeHref = brand ? `/brands/${brand.slug}` : "/";

  return (
    <header className="sticky top-0 z-40" id="site-header">
      {/* Top Bar - Only on Hub */}
      {variant === "hub" && (
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
      )}

      {/* Main Navigation */}
      <div 
        className="glass border-b border-gray-200/60"
        style={{ "--brand-accent": brand?.accent || "#00a0b0" } as React.CSSProperties}
      >
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
              <div className="grid h-[72px] w-[112px] shrink-0 place-items-center rounded bg-white px-2 py-1.5">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logos/paris-croissant-ci.jpg`}
                  alt="파리크라상"
                  className="max-h-full max-w-full object-contain"
                />
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
                className={`text-[15px] font-semibold transition-colors duration-200 ${
                  activeLabel === item.label
                    ? "text-[color:var(--brand-accent)]"
                    : "text-gray-700 hover:text-[color:var(--brand-accent)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Brand Switcher or Hub Link */}
            <div className="hidden lg:block">
              {variant === "hub" ? (
                <BrandSwitcher />
              ) : (
                <Link
                  href="/"
                  className="flex items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-[12px] font-semibold text-gray-500 transition hover:border-[color:var(--brand-accent)] hover:text-[color:var(--brand-accent)]"
                >
                  통합허브 이동
                </Link>
              )}
            </div>

            {/* Icon Buttons */}
            <div className="hidden items-center gap-1.5 lg:flex">
              {headerActions.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="grid h-10 w-10 place-items-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-[color:var(--brand-accent)]"
                  aria-label={label}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </Link>
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
        <div 
          className="border-t border-gray-100 bg-white px-4 py-6 lg:hidden animate-fade-in"
          style={{ "--brand-accent": brand?.accent || "#00a0b0" } as React.CSSProperties}
        >
          <div className="mx-auto flex max-w-[1280px] flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-[17px] font-semibold text-brand-dark transition hover:text-[color:var(--brand-accent)]"
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
