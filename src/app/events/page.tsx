import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { CropImage } from "@/components/crop-image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brands } from "@/data/app-data";

const brandsWithPromotions = brands.filter((brand) => brand.promotions.length > 0);

export default function EventsPage() {
  return (
    <main className="bg-[#faf8f3]">
      <SiteHeader variant="hub" activeLabel="이벤트" />

      <div className="mx-auto max-w-[1280px] px-4 pb-16 pt-8 sm:px-6">
        <section className="rounded-[34px] bg-white p-8 shadow-[0_18px_50px_rgba(17,19,24,0.06)] sm:p-10">
          <p className="text-[12px] uppercase tracking-[0.28em] text-black/38">Brand Events</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="font-display text-[54px] leading-none text-[#111318]">이벤트 모아보기</h1>
              <p className="mt-4 max-w-3xl text-[17px] leading-8 text-black/64">
                브랜드별 프로모션과 시즌 이벤트를 한 페이지에서 확인하고, 원하는 공식 페이지로 바로 이동할 수 있습니다.
              </p>
            </div>
            <div className="rounded-[24px] bg-[#f5f1e8] px-6 py-4 text-right">
              <p className="text-[12px] uppercase tracking-[0.22em] text-black/35">Events</p>
              <p className="mt-2 text-[34px] font-semibold tracking-tight text-[#111318]">
                {brandsWithPromotions.reduce((sum, brand) => sum + brand.promotions.length, 0)}
              </p>
            </div>
          </div>
        </section>

        <div className="mt-8 space-y-10">
          {brandsWithPromotions.map((brand) => (
            <section key={brand.slug} className="rounded-[30px] bg-white p-7 shadow-[0_18px_50px_rgba(17,19,24,0.06)] sm:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.24em]" style={{ color: brand.accent }}>
                    {brand.englishName}
                  </p>
                  <h2 className="mt-2 text-[32px] font-semibold tracking-tight text-[#111318]">{brand.name}</h2>
                  <p className="mt-3 text-[15px] leading-7 text-black/60">{brand.tagline}</p>
                </div>
                <Link
                  href={`/brands/${brand.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-[14px] font-semibold text-[#111318] transition hover:border-[color:var(--brand-accent)] hover:text-[color:var(--brand-accent)]"
                  style={{ ["--brand-accent" as string]: brand.accent }}
                >
                  브랜드 페이지
                </Link>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {brand.promotions.map((promotion) => {
                  const isExternal = /^https?:\/\//.test(promotion.href);

                  return (
                    <Link
                      key={promotion.id}
                      href={promotion.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="group overflow-hidden rounded-[26px] border border-black/8 bg-[#fffdf9] shadow-[0_14px_36px_rgba(17,19,24,0.05)] transition hover:-translate-y-1"
                    >
                      <CropImage crop={promotion.crop} alt={promotion.title} className="min-h-[240px] w-full" />
                      <div className="p-5">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.22em]" style={{ color: brand.accent }}>
                          {brand.name}
                        </p>
                        <p className="mt-2 text-[24px] font-semibold leading-tight text-[#111318]">{promotion.title}</p>
                        <p className="mt-3 text-[14px] leading-7 text-black/58">{promotion.subtitle}</p>
                        <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#111318]">
                          자세히 보기
                          {isExternal ? <ExternalLink className="h-4 w-4" /> : null}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
