"use client";

import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronRight, Heart, ShoppingCart, ThumbsUp } from "lucide-react";
import { useMemo, useState } from "react";
import {
  breadcrumbByPage,
  featuredProduct,
  productDetailHero,
  products,
  recommendedMarketItems,
  reviewPhotos,
  reviewSummary,
} from "@/data/app-data";
import { formatCurrency } from "@/lib/utils";
import { CropImage } from "@/components/crop-image";
import { PickupStoreDialog } from "@/components/pickup-store-dialog";
import { ProductCard } from "@/components/product-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const reviewTags = ["브랜드 일치", "포장 만족", "픽업 편리", "상담 친절"];
const accordionLabels = ["상품 안내", "픽업/교환 안내", "기업 주문 유의사항"];

const reviewItems = [
  {
    id: "review-1",
    user: "brand_pm",
    store: "강남 플래그십 픽업",
    text: "상품 이미지와 실제 수령 경험이 크게 다르지 않도록 상세 화면을 정리해둔 점이 좋았습니다.",
    tags: ["실이미지 반영", "상세 정보 직관적", "픽업 흐름 자연스러움"],
  },
  {
    id: "review-2",
    user: "b2b_ops",
    store: "기업 행사 주문",
    text: "상품 상세에서 바로 픽업 매장과 결제 단계로 이어지는 흐름이 법인 주문 테스트에 특히 유용했습니다.",
    tags: ["B2B 대응", "결제 흐름 명확", "CTA 배치 좋음"],
  },
];

type ProductDetailMvpProps = {
  initialPickupOpen?: boolean;
};

export function ProductDetailMvp({ initialPickupOpen = false }: ProductDetailMvpProps) {
  const [selectedThumb, setSelectedThumb] = useState<"main" | "thumbTwo">("main");
  const [pickupOpen, setPickupOpen] = useState(initialPickupOpen);
  const [selectedStoreId, setSelectedStoreId] = useState("gangnam");
  const [openAccordion, setOpenAccordion] = useState<string | null>(accordionLabels[0]);
  const [selectedTag, setSelectedTag] = useState(reviewTags[0]);

  const heroCrop = selectedThumb === "main" ? productDetailHero.main : productDetailHero.thumbTwo;
  const highlightedProducts = useMemo(() => products.slice(0, 4), []);

  return (
    <main className="bg-[#f5f3ee]">
      <SiteHeader variant="croissant" activeLabel="상품 소개" />

      <div className="mx-auto max-w-[1280px] px-4 pb-16 pt-8 sm:px-6">
        <p className="text-[14px] uppercase tracking-[0.18em] text-black/35">{breadcrumbByPage.product}</p>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[34px] bg-white p-6 shadow-[0_18px_50px_rgba(17,19,24,0.06)] sm:p-8">
            <CropImage crop={heroCrop} alt={featuredProduct.name} className="w-full rounded-[28px]" />
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => setSelectedThumb("main")}
                className={`rounded-[18px] border p-2 ${selectedThumb === "main" ? "border-black/30" : "border-black/8"}`}
              >
                <CropImage crop={productDetailHero.thumbOne} alt="썸네일 1" className="w-[82px] rounded-[14px]" />
              </button>
              <button
                onClick={() => setSelectedThumb("thumbTwo")}
                className={`rounded-[18px] border p-2 ${selectedThumb === "thumbTwo" ? "border-black/30" : "border-black/8"}`}
              >
                <CropImage crop={productDetailHero.thumbTwo} alt="썸네일 2" className="w-[82px] rounded-[14px]" />
              </button>
            </div>
          </div>

          <div className="rounded-[34px] bg-white p-8 shadow-[0_18px_50px_rgba(17,19,24,0.06)] sm:p-10">
            <p className="text-[12px] uppercase tracking-[0.28em] text-black/38">{featuredProduct.brand}</p>
            <h1 className="mt-4 font-display text-[54px] leading-[0.92] text-[#111318]">{featuredProduct.name}</h1>
            <p className="mt-4 text-[17px] leading-8 text-black/64">{featuredProduct.description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] bg-[#f5f3ee] p-5">
                <p className="text-[12px] uppercase tracking-[0.2em] text-black/35">Price</p>
                <p className="mt-3 text-[30px] font-semibold tracking-tight text-[#111318]">{featuredProduct.priceLabel}</p>
              </div>
              <div className="rounded-[24px] bg-[#f5f3ee] p-5">
                <p className="text-[12px] uppercase tracking-[0.2em] text-black/35">Pickup Order</p>
                <p className="mt-3 text-[16px] leading-7 text-black/65">가까운 매장에서 수령할 수 있는 픽업 주문 상품</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["픽업 가능", "기업 행사 주문 가능", "법인 결제 연동"].map((item) => (
                <span key={item} className="rounded-full bg-[#f5f3ee] px-4 py-2 text-[13px] font-medium text-black/62">
                  {item}
                </span>
              ))}
            </div>

            <button
              onClick={() => setPickupOpen(true)}
              className="mt-8 h-16 w-full rounded-full bg-[#1c2535] text-[18px] font-semibold text-white"
            >
              픽업 매장 선택 후 주문하기
            </button>

            <div className="mt-10 grid gap-8 text-[15px] leading-8 text-black/66">
              <div>
                <h2 className="border-b border-black/10 pb-3 text-[24px] font-semibold text-[#111318]">상품 정보</h2>
                <p className="mt-4">브랜드: 파리크라상 오더 사이트의 실제 상품 이미지 사용</p>
                <p>주문 안내: 픽업 가능 매장과 수령 시간을 확인한 뒤 주문해주세요.</p>
              </div>
              <div>
                <h2 className="border-b border-black/10 pb-3 text-[24px] font-semibold text-[#111318]">보관 및 수령</h2>
                <p className="mt-4">픽업 매장 선택 후 수령 가능 시간과 유의사항을 모달에서 바로 확인할 수 있습니다.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[34px] bg-white p-8 shadow-[0_18px_50px_rgba(17,19,24,0.06)]">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-[38px] leading-none text-[#111318]">상품 안내 섹션</h2>
            <button className="rounded-full border border-black/10 px-5 py-3 text-[14px] font-medium text-black/60">
              문의 남기기
            </button>
          </div>

          <div className="mt-8 border-t border-black/10">
            {accordionLabels.map((label) => {
              const active = openAccordion === label;
              return (
                <div key={label} className="border-b border-black/8">
                  <button
                    onClick={() => setOpenAccordion(active ? null : label)}
                    className="flex w-full items-center justify-between py-6 text-left text-[20px] font-medium text-[#111318]"
                  >
                    {label}
                    <ChevronDown className={`h-5 w-5 transition ${active ? "rotate-180" : ""}`} />
                  </button>
                  {active ? (
                    <div className="pb-6 text-[15px] leading-8 text-black/64">
                      상품 정보, 픽업 안내, 교환/취소 기준은 브랜드와 매장 운영 정책에 따라 달라질 수 있습니다.
                      주문 전 수령 매장과 상품 준비 시간을 확인해주세요.
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-16 grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="rounded-[34px] bg-white p-8 shadow-[0_18px_50px_rgba(17,19,24,0.06)]">
            <h2 className="font-display text-[38px] leading-none text-[#111318]">고객 경험 리뷰</h2>
            <div className="mt-8 text-center">
              <p className="text-[58px] font-semibold tracking-tight text-[#111318]">4.8</p>
              <p className="text-[16px] text-black/50">고객 이용 만족도</p>
            </div>
            <div className="mt-8 grid gap-6">
              {reviewSummary.map((item) => (
                <div key={item.label}>
                  <p className="text-[16px] font-medium text-[#111318]">{item.label}</p>
                  <div className="mt-3 h-3 overflow-hidden rounded-full bg-black/8">
                    <div className="h-full rounded-full bg-[#1e4ca1]" style={{ width: `${item.value}%` }} />
                  </div>
                  <p className="mt-2 text-[14px] text-black/45">{item.value}%</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] bg-white p-8 shadow-[0_18px_50px_rgba(17,19,24,0.06)]">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-[38px] leading-none text-[#111318]">포토 리뷰</h2>
              <button className="text-[15px] font-medium text-black/45">더보기</button>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-5">
              {reviewPhotos.map((photo, index) => (
                <CropImage key={index} crop={photo} alt={`리뷰 이미지 ${index + 1}`} className="w-full rounded-[18px]" />
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {reviewTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`rounded-full px-4 py-2 text-[14px] font-medium ${
                    selectedTag === tag ? "bg-[#111318] text-white" : "bg-[#f5f3ee] text-black/58"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="mt-8 divide-y divide-black/8 border-t border-black/8">
              {reviewItems.map((review, index) => (
                <div key={review.id} className="py-6">
                  <div className="flex flex-wrap items-center gap-3 text-[18px]">
                    <span className="font-semibold text-[#111318]">{review.user}</span>
                    <span className="text-black/35">|</span>
                    <span className="text-black/50">{review.store}</span>
                  </div>
                  <p className="mt-4 text-[16px] leading-8 text-black/66">{review.text}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {review.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#f5f3ee] px-3 py-2 text-[12px] font-medium text-black/58">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    <CropImage crop={reviewPhotos[index]} alt={`${review.user} 리뷰 이미지`} className="w-[110px] rounded-[18px]" />
                    <CropImage crop={reviewPhotos[index + 1]} alt={`${review.user} 리뷰 이미지 2`} className="w-[110px] rounded-[18px]" />
                  </div>
                  <button className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-[13px] text-black/52">
                    <ThumbsUp className="h-4 w-4" />0
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[34px] bg-[#1c2535] p-8 text-white shadow-[0_18px_50px_rgba(17,19,24,0.1)] sm:p-10">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-[40px] leading-none">함께 보면 좋은 상품</h2>
            <div className="flex gap-3 text-white/48">
              <ChevronLeft className="h-6 w-6" />
              <ChevronRight className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {recommendedMarketItems.map((item) => (
              <div key={item.title} className="rounded-[26px] bg-white/6 p-4">
                <CropImage crop={item.crop} alt={item.title} className="w-full rounded-[20px]" />
                <p className="mt-4 text-[20px] font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-[14px] text-white/68">{item.priceLabel}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-[38px] leading-none text-[#111318]">추천 상품 카드</h2>
            <Link href="/products" className="text-[15px] font-medium text-black/50">
              상품소개 전체 보기
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {highlightedProducts.map((product) => (
              <div key={product.id} className="relative">
                <ProductCard product={product} compact />
                <div className="absolute right-4 top-4 flex gap-2 rounded-full bg-white/90 px-3 py-2 text-black/55 shadow-sm">
                  <Heart className="h-4 w-4" />
                  <ShoppingCart className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <PickupStoreDialog
        open={pickupOpen}
        onClose={() => setPickupOpen(false)}
        selectedStoreId={selectedStoreId}
        onSelectStore={setSelectedStoreId}
      />
      <SiteFooter />
    </main>
  );
}
