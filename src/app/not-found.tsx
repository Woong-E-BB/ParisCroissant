import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-black/50">404</p>
        <h1 className="font-serif text-4xl text-black md:text-5xl">페이지를 찾을 수 없습니다</h1>
        <p className="max-w-xl text-sm leading-7 text-black/65 md:text-base">
          요청한 경로에 연결된 시안 페이지가 없습니다. 메인 화면으로 돌아가 다시 확인해 주세요.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-full bg-black px-5 py-3 text-sm font-medium text-white"
        >
          메인으로 이동
        </Link>
      </div>
    </main>
  );
}
