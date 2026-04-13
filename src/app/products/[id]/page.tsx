import { notFound } from "next/navigation";
import { ProductDetailMvp } from "@/components/product-detail-mvp";
import { products } from "@/data/app-data";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const exists = products.some((product) => product.id === id);

  if (!exists) {
    notFound();
  }

  return <ProductDetailMvp productId={id} />;
}
