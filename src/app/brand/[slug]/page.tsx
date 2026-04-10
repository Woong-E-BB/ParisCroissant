import { StaticRedirect } from "@/components/static-redirect";
import { brands } from "@/data/app-data";

export function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

export default async function BrandAliasPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <StaticRedirect to={`/brands/${slug}`} label="브랜드 상세 페이지로 이동 중" />;
}
