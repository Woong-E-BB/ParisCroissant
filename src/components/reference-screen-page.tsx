import Image from "next/image";

type ReferenceScreenPageProps = {
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
};

export function ReferenceScreenPage({
  title,
  src,
  alt,
  width,
  height,
  priority = false,
}: ReferenceScreenPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="sr-only">{title}</h1>
      <div className="mx-auto max-w-[1366px]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="block h-auto w-full"
          sizes="100vw"
        />
      </div>
    </main>
  );
}
