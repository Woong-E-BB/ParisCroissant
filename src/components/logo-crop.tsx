type LogoCropProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  className?: string;
};

export function LogoCrop({ x, y, width, height, className = "" }: LogoCropProps) {
  return (
    <div
      aria-hidden
      className={`logo-crop ${className}`}
      style={{
        width,
        height,
        backgroundPosition: `-${x}px -${y}px`,
      }}
    />
  );
}
