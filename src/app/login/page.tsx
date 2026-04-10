"use client";

import { useState } from "react";
import { CropImage } from "@/components/crop-image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brands } from "@/data/app-data";

const snsButtons = [
  { label: "카카오로 시작하기", bg: "#FEE500", text: "#191919" },
  { label: "네이버로 시작하기", bg: "#03C75A", text: "#ffffff" },
];

export default function LoginPage() {
  const [memberMode, setMemberMode] = useState<"member" | "guest">("member");
  const [saveId, setSaveId] = useState(true);

  return (
    <main className="bg-[#f5f3ee]">
      <SiteHeader variant="hub" />

      <div className="mx-auto grid max-w-[1280px] gap-6 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1fr_0.82fr]">
        <section className="relative overflow-hidden rounded-[34px] bg-[#111318] text-white">
          <CropImage crop={brands[0].heroCrop} alt="로그인 배경" className="min-h-[420px] w-full lg:min-h-[760px]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,19,24,0.18),rgba(17,19,24,0.78))]" />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
            <p className="text-[12px] uppercase tracking-[0.32em] text-white/62">Welcome Back</p>
            <h1 className="mt-4 font-display text-[50px] leading-[0.94] sm:text-[66px]">
              로그인하고 더 편리하게 주문하세요
            </h1>
            <p className="mt-4 max-w-xl text-[16px] leading-7 text-white/80">
              회원은 주문 내역과 혜택을 확인하고, 비회원은 주문번호로 픽업 주문 상태를 조회할 수 있습니다.
            </p>
          </div>
        </section>

        <section className="rounded-[34px] bg-white p-8 shadow-[0_18px_50px_rgba(17,19,24,0.08)] sm:p-10">
          <p className="text-[12px] uppercase tracking-[0.3em] text-black/38">Account Access</p>
          <h2 className="mt-4 font-display text-[48px] leading-none text-[#111318]">로그인</h2>

          <div className="mt-10 grid grid-cols-2 rounded-full bg-[#f5f3ee] p-1 text-center text-[16px]">
            <button
              onClick={() => setMemberMode("member")}
              className={`rounded-full px-4 py-3 ${memberMode === "member" ? "bg-white font-semibold text-black shadow-sm" : "text-black/45"}`}
            >
              회원 로그인
            </button>
            <button
              onClick={() => setMemberMode("guest")}
              className={`rounded-full px-4 py-3 ${memberMode === "guest" ? "bg-white font-semibold text-black shadow-sm" : "text-black/45"}`}
            >
              비회원 주문조회
            </button>
          </div>

          <div className="mt-8 grid gap-3">
            <input
              placeholder={memberMode === "member" ? "아이디 또는 이메일" : "주문번호"}
              className="h-14 rounded-2xl border border-black/10 bg-[#fafaf8] px-5 text-[16px]"
            />
            <input
              type={memberMode === "member" ? "password" : "text"}
              placeholder={memberMode === "member" ? "비밀번호" : "휴대폰 번호"}
              className="h-14 rounded-2xl border border-black/10 bg-[#fafaf8] px-5 text-[16px]"
            />
          </div>

          {memberMode === "member" ? (
            <label className="mt-5 flex items-center gap-3 text-[15px] text-black/65">
              <input type="checkbox" checked={saveId} onChange={(event) => setSaveId(event.target.checked)} />
              아이디 저장
            </label>
          ) : null}

          <button className="mt-6 h-14 w-full rounded-2xl bg-[#111318] text-[18px] font-semibold text-white">
            로그인
          </button>

          <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-2xl border border-black/8 text-center text-[14px] text-black/60">
            <button className="py-4">아이디 찾기</button>
            <button className="border-x border-black/8 py-4">비밀번호 찾기</button>
            <button className="py-4">회원가입</button>
          </div>

          <div className="mt-10 rounded-[28px] bg-[#f5f3ee] p-6">
            <p className="text-[14px] font-medium text-black/58">SNS 간편 로그인</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {snsButtons.map((button) => (
                <button
                  key={button.label}
                  className="h-12 rounded-full text-[14px] font-semibold"
                  style={{ backgroundColor: button.bg, color: button.text }}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
