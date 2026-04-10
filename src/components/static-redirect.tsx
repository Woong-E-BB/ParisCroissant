"use client";

import Link from "next/link";
import { useEffect } from "react";

type StaticRedirectProps = {
  to: string;
  label: string;
};

export function StaticRedirect({ to, label }: StaticRedirectProps) {
  useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    window.location.replace(`${basePath}${to}`);
  }, [to]);

  return (
    <main className="grid min-h-screen place-items-center bg-[#f6f2e9] px-6 text-center">
      <div className="rounded-[28px] bg-white p-8 shadow-[0_18px_50px_rgba(17,19,24,0.08)]">
        <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-black/35">Redirecting</p>
        <h1 className="mt-4 text-[26px] font-bold text-[#111318]">{label}</h1>
        <p className="mt-3 text-[14px] leading-6 text-black/58">잠시 후 해당 페이지로 이동합니다.</p>
        <Link
          href={to}
          className="mt-6 inline-flex rounded-full bg-[#111318] px-5 py-3 text-[14px] font-semibold text-white"
        >
          바로 이동하기
        </Link>
      </div>
    </main>
  );
}
