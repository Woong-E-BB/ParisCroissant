"use client";

import Link from "next/link";
import { ChevronDown, ExternalLink, Heart, ShoppingCart, ThumbsUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  brands,
  breadcrumbByPage,
  featuredProduct,
  products,
  reviewPhotos,
  reviewSummary,
} from "@/data/app-data";
import { CropImage } from "@/components/crop-image";
import { PickupStoreDialog } from "@/components/pickup-store-dialog";
import { ProductCard } from "@/components/product-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const reviewTags = ["브랜드 신뢰", "상품 만족", "픽업 편의", "B2B 주문"];
const accordionLabels = ["상품 안내", "픽업/교환 안내", "기업 주문 안내"];

const reviewItems = [
  {
    id: "review-1",
    user: "brand_pm",
    store: "강남 플래그십 픽업",
    text: "상품 카드에서 본 이미지와 설명, 가격 톤이 상세에서도 그대로 이어져서 비교와 주문 결정이 빠릅니다.",
    tags: ["카드 정보 일치", "상세 정보 명확", "전환 흐름 자연"],
  },
  {
    id: "review-2",
    user: "b2b_ops",
    store: "기업 행사 주문",
    text: "브랜드, 상품 카테고리, 공식 소스 정보가 함께 보이기 때문에 법인 검토 단계에서도 활용하기 좋습니다.",
    tags: ["B2B 적합", "소스 확인 가능", "CTA 명확"],
  },
];

type ProductDetailMvpProps = {
  initialPickupOpen?: boolean;
  productId?: string;
};

export function ProductDetailMvp({
  initialPickupOpen = false,
  productId,
}: ProductDetailMvpProps) {
  const product = useMemo(
    () => products.find((item) => item.id === productId) ?? featuredProduct,
    [productId],
  );
  const brand = useMemo(
    () => brands.find((item) => item.slug === product.brandSlug),
    [product.brandSlug],
  );
  const productGallery = useMemo(() => {
    const sameBrand = products.filter((item) => item.brandSlug === product.brandSlug && item.id !== product.id);
    const crossBrand = products.filter((item) => item.brandSlug !== product.brandSlug);

    return [product, ...sameBrand, ...crossBrand].slice(0, 3);
  }, [product]);
  const relatedProducts = useMemo(() => {
    const sameBrand = products.filter((item) => item.brandSlug === product.brandSlug && item.id !== product.id);
    const fallback = products.filter((item) => item.id !== product.id);

    return [...sameBrand, ...fallback].slice(0, 4);
  }, [product]);
  const detailHighlights = useMemo(
    () =>
      [
        product.category,
        product.badge ? `${product.badge} 상품` : null,
        brand?.sourceLabel ?? null,
        product.sourceUrl ? "공식 소스 연동" : null,
      ].filter(Boolean) as string[],
    [brand?.sourceLabel, product.badge, product.category, product.sourceUrl],
  );
  const detailPanels = useMemo(
    () => [
      {
        title: accordionLabels[0],
        body: `${product.name} 상품은 목록 카드와 동일한 이미지, 브랜드, 설명, 가격 정보를 기준으로 상세 화면을 구성했습니다.`,
      },
      {
        title: accordionLabels[1],
        body: "픽업 가능 매장과 준비 시간은 선택한 매장 및 운영 상황에 따라 달라질 수 있으며, 주문 전에 매장 정보를 다시 확인할 수 있습니다.",
      },
      {
        title: accordionLabels[2],
        body: "대량 구매, 행사 주문, 상품권 또는 상담형 상품은 기업 주문 문의와 공식 채널 이동을 함께 제공해 검토 흐름을 줄입니다.",
      },
    ],
    [product.name],
  );
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [pickupOpen, setPickupOpen] = useState(initialPickupOpen);
  const [selectedStoreId, setSelectedStoreId] = useState("gangnam");
  const [openAccordion, setOpenAccordion] = useState<string | null>(accordionLabels[0]);
  const [selectedTag, setSelectedTag] = useState(reviewTags[0]);

  useEffect(() => {
    setSelectedThumb(0);
  }, [product.id]);

  const heroCrop = productGallery[selectedThumb]?.crop ?? product.crop;

  return (
    <main className="bg-[#f5f3ee]">
      <SiteHeader variant={brand?.slug ?? "hub"} activeLabel="상품 안내" />

      <div className="mx-auto max-w-[1280px] px-4 pb-16 pt-8 sm:px-6">
        <p className="text-[14px] uppercase tracking-[0.18em] text-black/35">{breadcrumbByPage.product}</p>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[34px] bg-white p-6 shadow-[0_18px_50px_rgba(17,19,24,0.06)] sm:p-8">
            <CropImage crop={heroCrop} alt={product.name} className="w-full rounded-[28px]" />
            <div className="mt-5 flex flex-wrap gap-3">
              {productGallery.map((item, index) => (
                <button
                  key={`${item.id}-${index}`}
                  onClick={() => setSelectedThumb(index)}
                  className={`rounded-[18px] border p-2 ${
                    selectedThumb === index ? "border-black/30" : "border-black/8"
                  }`}
                >
                  <CropImage crop={item.crop} alt={item.name} className="w-[82px] rounded-[14px]" />
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] bg-white p-8 shadow-[0_18px_50px_rgba(17,19,24,0.06)] sm:p-10">
            <p className="text-[12px] uppercase tracking-[0.28em] text-black/38">{product.brand}</p>
            <h1 className="mt-4 font-display text-[42px] leading-[0.94] text-[#111318] sm:text-[54px]">
              {product.name}
            </h1>
            <p className="mt-4 text-[17px] leading-8 text-black/64">{product.description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] bg-[#f5f3ee] p-5">
                <p className="text-[12px] uppercase tracking-[0.2em] text-black/35">Price</p>
                <p className="mt-3 text-[30px] font-semibold tracking-tight text-[#111318]">{product.priceLabel}</p>
                {product.originalPrice ? (
                  <p className="mt-2 text-[14px] text-black/38 line-through">{product.originalPrice}</p>
                ) : null}
              </div>
              <div className="rounded-[24px] bg-[#f5f3ee] p-5">
                <p className="text-[12px] uppercase tracking-[0.2em] text-black/35">Category</p>
                <p className="mt-3 text-[16px] leading-7 text-black/65">{product.category}</p>
                <p className="mt-2 text-[13px] text-black/45">{brand?.name ?? product.brand}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {detailHighlights.map((item) => (
                <span key={item} className="rounded-full bg-[#f5f3ee] px-4 py-2 text-[13px] font-medium text-black/62">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setPickupOpen(true)}
                className="h-16 flex-1 rounded-full bg-[#1c2535] text-[18px] font-semibold text-white"
              >
                픽업 매장 선택 후 주문하기
              </button>
              {product.sourceUrl ? (
                <Link
                  href={product.sourceUrl}
                  target="_blank"
                  className="inline-flex h-16 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 text-[15px] font-semibold text-[#111318]"
                >
                  공식 사이트 보기
                  <ExternalLink className="h-4 w-4" />
                </Link>
              ) : null}
            </div>

            <div className="mt-10 grid gap-8 text-[15px] leading-8 text-black/66">
              <div>
                <h2 className="border-b border-black/10 pb-3 text-[24px] font-semibold text-[#111318]">상품 정보</h2>
                <p className="mt-4">{product.description}</p>
                <p>{brand?.description ?? "브랜드 공식 운영 기준의 상품 정보로 상세 화면을 구성했습니다."}</p>
              </div>
              <div>
                <h2 className="border-b border-black/10 pb-3 text-[24px] font-semibold text-[#111318]">주문 및 안내</h2>
                <p className="mt-4">
                  픽업 가능 매장, 준비 시간, 결제 가능 여부는 매장 운영 정책과 상품 유형에 따라 달라질 수 있습니다.
                </p>
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
            {detailPanels.map((panel) => {
              const active = openAccordion === panel.title;
              return (
                <div key={panel.title} className="border-b border-black/8">
                  <button
                    onClick={() => setOpenAccordion(active ? null : panel.title)}
                    className="flex w-full items-center justify-between py-6 text-left text-[20px] font-medium text-[#111318]"
                  >
                    {panel.title}
                    <ChevronDown className={`h-5 w-5 transition ${active ? "rotate-180" : ""}`} />
                  </button>
                  {active ? <div className="pb-6 text-[15px] leading-8 text-black/64">{panel.body}</div> : null}
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
              <p className="text-[16px] text-black/50">구매 및 이용 만족도</p>
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
                    <CropImage
                      crop={reviewPhotos[index + 1] ?? reviewPhotos[0]}
                      alt={`${review.user} 리뷰 이미지 2`}
                      className="w-[110px] rounded-[18px]"
                    />
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
            <p className="text-[14px] text-white/54">{brand?.name ?? product.brand} 연관 추천</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.id}`}
                className="rounded-[26px] bg-white/6 p-4 transition hover:bg-white/10"
              >
                <CropImage crop={item.crop} alt={item.name} className="w-full rounded-[20px]" />
                <p className="mt-4 text-[20px] font-semibold text-white">{item.name}</p>
                <p className="mt-2 text-[14px] text-white/68">{item.priceLabel}</p>
              </Link>
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
            {relatedProducts.map((item) => (
              <div key={item.id} className="relative">
                <ProductCard product={item} compact />
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
