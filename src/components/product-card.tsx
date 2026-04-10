import Link from "next/link";
import type { ProductItem } from "@/data/app-data";
import { CropImage } from "@/components/crop-image";

type ProductCardProps = {
  product: ProductItem;
  href?: string;
  compact?: boolean;
};

const badgeStyles: Record<string, string> = {
  NEW: "badge-new",
  BEST: "badge-best",
  SEASON: "badge-season",
  ORDER: "badge-order",
  OFFICIAL: "badge-order",
  RESERVE: "badge-order",
  DINING: "badge-order",
  B2B: "badge-order",
};

const brandColors: Record<string, string> = {
  "paris-baguette": "#1e4ca1",
  "paris-croissant": "#8e6a3f",
  "caffe-pascucci": "#8f1f27",
  "coffee-at-works": "#111111",
  linas: "#1d5c50",
  passion5: "#111111",
  dining: "#5f3c27",
  "spc-gift": "#745b34",
  "paris-baguette-catering": "#00a9b8",
};

export function ProductCard({
  product,
  href = "/product",
  compact = false,
}: ProductCardProps) {
  const brandColor = brandColors[product.brandSlug] || "#00a0b0";
  const badgeClass = product.badge
    ? badgeStyles[product.badge] || "badge-new"
    : null;

  return (
    <Link href={href} className="group block" id={`product-${product.id}`}>
      <div className="card-hover overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card">
        {/* Brand Color Bar */}
        <div
          className="brand-color-bar"
          style={{ backgroundColor: brandColor }}
        />

        {/* Image Area */}
        <div className="relative overflow-hidden">
          <CropImage
            crop={product.crop}
            alt={product.name}
            className={`w-full transition-transform duration-500 group-hover:scale-105 ${
              compact ? "" : ""
            }`}
          />

          {/* Discount Badge */}
          {product.discountRate && (
            <div className="discount-badge">
              {product.discountRate}%
            </div>
          )}

          {/* Badge */}
          {badgeClass && (
            <span className={`absolute left-3 top-3 ${badgeClass}`}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className={compact ? "p-4" : "p-5"}>
          {/* Brand Name */}
          <p
            className="text-[12px] font-bold uppercase tracking-wider"
            style={{ color: brandColor }}
          >
            {product.brand}
          </p>

          {/* Product Name */}
          <p
            className={`mt-2 font-semibold leading-snug text-brand-dark ${
              compact ? "text-[15px]" : "text-[17px]"
            }`}
          >
            {product.name}
          </p>

          {/* Description */}
          <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-gray-500">
            {product.description}
          </p>

          {/* Price Row */}
          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {product.originalPrice && (
                <span className="text-[13px] text-gray-400 line-through">
                  {product.originalPrice}
                </span>
              )}
              <span className="text-[16px] font-bold text-brand-dark">
                {product.priceLabel}
              </span>
            </div>
            <span className="rounded-full bg-gray-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400 transition group-hover:bg-teal-brand group-hover:text-white">
              상세보기
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
