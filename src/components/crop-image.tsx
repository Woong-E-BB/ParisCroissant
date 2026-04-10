import type { CSSProperties } from "react";
import type { ImageCrop } from "@/data/app-data";

type CropImageProps = {
  crop: ImageCrop;
  alt: string;
  className?: string;
  roundedClassName?: string;
};

export function CropImage({
  crop,
  alt,
  className = "",
  roundedClassName = "",
}: CropImageProps) {
  const baseStyle: CSSProperties = {
    aspectRatio: `${crop.width} / ${crop.height}`,
    backgroundColor: crop.backgroundColor,
  };

  if (crop.mode === "cover" || crop.mode === "contain") {
    return (
      <div
        className={`relative overflow-hidden ${roundedClassName} ${className}`}
        style={baseStyle}
      >
        <img
          src={crop.src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full"
          style={{ objectFit: crop.mode }}
        />
      </div>
    );
  }

  const imageStyle: CSSProperties = {
    width: `${(crop.sourceWidth / crop.width) * 100}%`,
    left: `-${(crop.x / crop.width) * 100}%`,
    top: `-${(crop.y / crop.height) * 100}%`,
  };

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden ${roundedClassName} ${className}`}
      style={baseStyle}
    >
      <img
        src={crop.src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute max-w-none"
        style={imageStyle}
      />
    </div>
  );
}
