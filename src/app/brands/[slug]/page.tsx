import { notFound } from "next/navigation";
import { BrandDetailMvp } from "@/components/brand-detail-mvp";
import { brands } from "@/data/app-data";

export function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

export default async function BrandDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exists = brands.some((brand) => brand.slug === slug);

  if (!exists) {
    notFound();
  }

  return <BrandDetailMvp slug={slug} />;
}
