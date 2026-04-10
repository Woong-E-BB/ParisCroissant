"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ExternalLink } from "lucide-react";
import { brands, officialSourceLinks } from "@/data/app-data";

const footerLinks = [
  { href: "/brand-story", label: "브랜드 소개" },
  { href: "/corporate/paris-croissant", label: "파리크라상 기업" },
  { href: "/products", label: "상품 소개" },
  { href: "/product", label: "픽업 주문" },
  { href: "/franchise", label: "창업 안내" },
  { href: "/checkout", label: "법인/B2B 결제" },
];

const legalLinks = ["이용약관", "개인정보처리방침", "이메일무단수집거부", "사이트맵"];

export function SiteFooter() {
  const [familyOpen, setFamilyOpen] = useState(false);

  return (
    <footer className="mt-24 bg-[#101827] text-white" id="site-footer">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-14 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#32d5df]">
            PARIS CROISSANT
          </p>
          <h2 className="mt-3 text-[28px] font-bold leading-tight text-white">
            브랜드를 한 번에 만나는
            <br />
            통합 라이프 서비스
          </h2>
          <p className="mt-4 max-w-md text-[14px] leading-7 text-[#d1d5db]">
            파리바게뜨, 파리크라상, 파스쿠찌, 리나스, 커피앳웍스, 패션5, 다이닝, 상품권과
            케이터링을 한 화면에서 탐색하고 주문까지 이어갑니다.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {legalLinks.map((link) => (
              <span
                key={link}
                className={`cursor-pointer text-[12px] transition ${
                  link === "개인정보처리방침"
                    ? "font-bold text-white hover:text-[#32d5df]"
                    : "text-[#cbd5e1] hover:text-white"
                }`}
              >
                {link}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[15px] font-bold text-white">Navigation</h3>
          <div className="mt-5 flex flex-col gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] text-[#cbd5e1] transition hover:text-[#32d5df]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[15px] font-bold text-white">브랜드 바로가기</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="rounded-full border border-[#334155] bg-[#172033] px-3 py-1.5 text-[12px] text-[#d1d5db] transition hover:border-[#32d5df] hover:text-white"
              >
                {brand.name}
              </Link>
            ))}
          </div>

          <div className="relative mt-6">
            <button
              onClick={() => setFamilyOpen(!familyOpen)}
              className="flex w-full items-center justify-between rounded-xl border border-[#334155] bg-[#172033] px-4 py-3 text-[13px] text-[#e5e7eb] transition hover:border-[#4b5872]"
            >
              <span>패밀리 사이트</span>
              <ChevronDown className={`h-4 w-4 transition ${familyOpen ? "rotate-180" : ""}`} />
            </button>

            {familyOpen && (
              <div className="absolute bottom-full left-0 mb-2 w-full rounded-xl border border-[#334155] bg-[#172033] p-2 shadow-xl">
                {officialSourceLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] text-[#d1d5db] transition hover:bg-[#22304a] hover:text-white"
                  >
                    {link.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-[#263244]">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-6 py-5">
          <p className="text-[11px] text-[#cbd5e1]">
            Copyright, PARIS CROISSANT Corp. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
