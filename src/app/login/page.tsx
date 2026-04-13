"use client";

import Link from "next/link";
import { AlertCircle, Apple, ArrowRight, CheckCircle2, Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";
import { useMemo, useState } from "react";
import { CropImage } from "@/components/crop-image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brands } from "@/data/app-data";

const snsButtons: Array<{
  id: "kakao" | "naver" | "google" | "apple";
  label: string;
  helper: string;
  bg: string;
  text: string;
  border?: string;
  mark: "K" | "N" | "G" | "apple";
}> = [
  {
    id: "kakao",
    label: "카카오로 시작하기",
    helper: "카카오 계정으로 간편 로그인",
    bg: "#FEE500",
    text: "#191919",
    mark: "K",
  },
  {
    id: "naver",
    label: "네이버로 시작하기",
    helper: "네이버 아이디 로그인",
    bg: "#03C75A",
    text: "#ffffff",
    mark: "N",
  },
  {
    id: "google",
    label: "Google로 시작하기",
    helper: "구글 계정으로 빠른 로그인",
    bg: "#ffffff",
    text: "#111318",
    border: "#d6dce5",
    mark: "G",
  },
  {
    id: "apple",
    label: "Apple로 시작하기",
    helper: "Apple ID로 보안 로그인",
    bg: "#111318",
    text: "#ffffff",
    mark: "apple",
  },
];

export default function LoginPage() {
  const [memberMode, setMemberMode] = useState<"member" | "guest">("member");
  const [saveId, setSaveId] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    loginId: "",
    password: "",
    guestOrderNo: "",
    guestPhone: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<{
    tone: "idle" | "success";
    title: string;
    description: string;
  }>({
    tone: "idle",
    title: "로그인 후 주문, 픽업, 브랜드 혜택을 한 번에 확인하세요.",
    description: "개인 회원과 비회원 주문조회 모두 지원합니다.",
  });

  const activeErrors = useMemo(() => {
    if (memberMode === "member") {
      return {
        loginId: form.loginId.trim().length === 0 ? "아이디 또는 이메일을 입력해 주세요." : "",
        password: form.password.trim().length < 4 ? "비밀번호를 4자 이상 입력해 주세요." : "",
      };
    }

    return {
      guestOrderNo: form.guestOrderNo.trim().length === 0 ? "주문번호를 입력해 주세요." : "",
      guestPhone: form.guestPhone.trim().length < 8 ? "휴대폰 번호를 확인해 주세요." : "",
    };
  }, [form.guestOrderNo, form.guestPhone, form.loginId, form.password, memberMode]);

  const hasError = Object.values(activeErrors).some(Boolean);

  function touchFields(keys: string[]) {
    setTouched((current) => {
      const next = { ...current };
      keys.forEach((key) => {
        next[key] = true;
      });
      return next;
    });
  }

  function handleMainSubmit() {
    const fields =
      memberMode === "member" ? ["loginId", "password"] : ["guestOrderNo", "guestPhone"];

    touchFields(fields);

    if (hasError) {
      setStatus({
        tone: "idle",
        title: memberMode === "member" ? "회원 로그인 정보를 확인해 주세요." : "비회원 주문조회 정보를 확인해 주세요.",
        description: "필수 입력 항목을 채우면 다음 단계로 이동할 수 있습니다.",
      });
      return;
    }

    setStatus({
      tone: "success",
      title: memberMode === "member" ? "로그인 준비가 완료되었습니다." : "주문조회 준비가 완료되었습니다.",
      description:
        memberMode === "member"
          ? "실운영 연동 시 마이페이지, 주문내역, 픽업 관리 화면으로 연결됩니다."
          : "실운영 연동 시 주문번호와 휴대폰 번호 기준으로 주문 현황을 조회합니다.",
    });
  }

  function handleSnsLogin(provider: (typeof snsButtons)[number]) {
    setStatus({
      tone: "success",
      title: `${provider.label} 선택`,
      description: `${provider.helper} 흐름으로 연결되도록 UI를 적용했습니다. 실운영에서는 OAuth 연동만 붙이면 바로 확장 가능합니다.`,
    });
  }

  return (
    <main className="bg-[#f5f3ee]">
      <SiteHeader variant="hub" />

      <div className="mx-auto grid max-w-[1280px] gap-6 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="relative overflow-hidden rounded-[34px] bg-[#111318] text-white">
          <CropImage crop={brands[1].heroCrop} alt="파리크라상 로그인 배경" className="min-h-[420px] w-full lg:min-h-[820px]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,19,24,0.14),rgba(17,19,24,0.84))]" />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-8 sm:p-10">
            <div>
              <p className="text-[12px] uppercase tracking-[0.32em] text-white/62">Account Access</p>
              <p className="mt-3 text-[15px] text-white/78">PARIS CROISSANT integrated login</p>
            </div>
            <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[12px] text-white/85 backdrop-blur">
              My Page / Order / Pickup
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
            <p className="text-[12px] uppercase tracking-[0.32em] text-white/62">Welcome Back</p>
            <h1 className="mt-4 font-display text-[44px] leading-[0.94] sm:text-[64px]">
              로그인하고
              <br />
              브랜드 서비스를 이어가세요
            </h1>
            <p className="mt-4 max-w-xl text-[16px] leading-7 text-white/80">
              주문, 픽업, 브랜드 혜택, 기업용 문의 흐름까지 하나의 계정 경험으로 연결되는 로그인 화면입니다.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "브랜드 통합 접근",
                "픽업 주문 이력 확인",
                "B2B 문의 및 혜택 연결",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 text-[14px] text-white/84 backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[34px] bg-white p-8 shadow-[0_18px_50px_rgba(17,19,24,0.08)] sm:p-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[12px] uppercase tracking-[0.3em] text-black/38">Member Login</p>
              <h2 className="mt-4 font-display text-[42px] leading-none text-[#111318]">로그인</h2>
            </div>
            <div
              className={`rounded-2xl px-4 py-3 text-[13px] leading-6 ${
                status.tone === "success" ? "bg-[#ecf8f2] text-[#156c43]" : "bg-[#f7f4ee] text-black/60"
              }`}
            >
              <div className="flex items-start gap-2">
                {status.tone === "success" ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                ) : (
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                )}
                <div>
                  <p className="font-semibold">{status.title}</p>
                  <p>{status.description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 rounded-full bg-[#f5f3ee] p-1 text-center text-[16px]">
            <button
              onClick={() => setMemberMode("member")}
              className={`rounded-full px-4 py-3 ${
                memberMode === "member" ? "bg-white font-semibold text-black shadow-sm" : "text-black/45"
              }`}
            >
              회원 로그인
            </button>
            <button
              onClick={() => setMemberMode("guest")}
              className={`rounded-full px-4 py-3 ${
                memberMode === "guest" ? "bg-white font-semibold text-black shadow-sm" : "text-black/45"
              }`}
            >
              비회원 주문조회
            </button>
          </div>

          {memberMode === "member" ? (
            <div className="mt-8 grid gap-4">
              <label className="grid gap-2">
                <span className="text-[14px] font-semibold text-[#111318]">아이디 또는 이메일</span>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black/28" />
                  <input
                    value={form.loginId}
                    onChange={(event) => setForm((current) => ({ ...current, loginId: event.target.value }))}
                    onBlur={() => touchFields(["loginId"])}
                    placeholder="아이디 또는 이메일을 입력해 주세요"
                    className="h-14 w-full rounded-2xl border border-black/10 bg-[#fafaf8] pl-12 pr-5 text-[16px] outline-none transition focus:border-[#111318]"
                  />
                </div>
                {touched.loginId && activeErrors.loginId ? (
                  <p className="text-[13px] text-[#d33a2c]">{activeErrors.loginId}</p>
                ) : null}
              </label>

              <label className="grid gap-2">
                <span className="text-[14px] font-semibold text-[#111318]">비밀번호</span>
                <div className="relative">
                  <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black/28" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
                    onBlur={() => touchFields(["password"])}
                    placeholder="비밀번호를 입력해 주세요"
                    className="h-14 w-full rounded-2xl border border-black/10 bg-[#fafaf8] pl-12 pr-14 text-[16px] outline-none transition focus:border-[#111318]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-black/35"
                    aria-label="비밀번호 보기 전환"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {touched.password && activeErrors.password ? (
                  <p className="text-[13px] text-[#d33a2c]">{activeErrors.password}</p>
                ) : null}
              </label>
            </div>
          ) : (
            <div className="mt-8 grid gap-4">
              <label className="grid gap-2">
                <span className="text-[14px] font-semibold text-[#111318]">주문번호</span>
                <div className="relative">
                  <UserRound className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black/28" />
                  <input
                    value={form.guestOrderNo}
                    onChange={(event) => setForm((current) => ({ ...current, guestOrderNo: event.target.value }))}
                    onBlur={() => touchFields(["guestOrderNo"])}
                    placeholder="주문번호를 입력해 주세요"
                    className="h-14 w-full rounded-2xl border border-black/10 bg-[#fafaf8] pl-12 pr-5 text-[16px] outline-none transition focus:border-[#111318]"
                  />
                </div>
                {touched.guestOrderNo && activeErrors.guestOrderNo ? (
                  <p className="text-[13px] text-[#d33a2c]">{activeErrors.guestOrderNo}</p>
                ) : null}
              </label>

              <label className="grid gap-2">
                <span className="text-[14px] font-semibold text-[#111318]">휴대폰 번호</span>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black/28" />
                  <input
                    value={form.guestPhone}
                    onChange={(event) => setForm((current) => ({ ...current, guestPhone: event.target.value }))}
                    onBlur={() => touchFields(["guestPhone"])}
                    placeholder="숫자만 입력해 주세요"
                    className="h-14 w-full rounded-2xl border border-black/10 bg-[#fafaf8] pl-12 pr-5 text-[16px] outline-none transition focus:border-[#111318]"
                  />
                </div>
                {touched.guestPhone && activeErrors.guestPhone ? (
                  <p className="text-[13px] text-[#d33a2c]">{activeErrors.guestPhone}</p>
                ) : null}
              </label>
            </div>
          )}

          {memberMode === "member" ? (
            <label className="mt-5 flex items-center gap-3 text-[15px] text-black/65">
              <input type="checkbox" checked={saveId} onChange={(event) => setSaveId(event.target.checked)} />
              아이디 저장
            </label>
          ) : null}

          <button
            type="button"
            onClick={handleMainSubmit}
            className="mt-6 inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#111318] text-[18px] font-semibold text-white"
          >
            {memberMode === "member" ? "로그인" : "주문조회"}
            <ArrowRight className="h-4 w-4" />
          </button>

          <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-2xl border border-black/8 text-center text-[14px] text-black/60">
            <button className="py-4">아이디 찾기</button>
            <button className="border-x border-black/8 py-4">비밀번호 찾기</button>
            <button className="py-4">회원가입</button>
          </div>

          <div className="mt-10 rounded-[28px] bg-[#f5f3ee] p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[14px] font-semibold text-[#111318]">SNS 간편 로그인</p>
                <p className="mt-1 text-[13px] text-black/52">카카오, 네이버, 구글, 애플 계정으로 빠르게 시작할 수 있습니다.</p>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {snsButtons.map((button) => (
                <button
                  key={button.id}
                  type="button"
                  onClick={() => handleSnsLogin(button)}
                  className="flex items-center justify-between gap-4 rounded-2xl border px-4 py-4 text-left transition hover:-translate-y-0.5"
                  style={{
                    backgroundColor: button.bg,
                    color: button.text,
                    borderColor: button.border ?? "transparent",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="grid h-10 w-10 place-items-center rounded-full text-[16px] font-bold"
                      style={{
                        backgroundColor:
                          button.id === "kakao"
                            ? "rgba(25,25,25,0.12)"
                            : button.id === "naver"
                              ? "rgba(255,255,255,0.14)"
                              : button.id === "google"
                                ? "rgba(17,19,24,0.06)"
                                : "rgba(255,255,255,0.12)",
                      }}
                    >
                      {button.mark === "apple" ? <Apple className="h-5 w-5" /> : button.mark}
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold">{button.label}</p>
                      <p className="text-[12px] opacity-80">{button.helper}</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-black/8 bg-white p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#1e4ca1]" />
              <div className="text-[14px] leading-7 text-black/62">
                <p className="font-semibold text-[#111318]">실운영 확장 포인트</p>
                <p>현재는 UI 및 인터랙션까지 적용된 상태이며, 실제 간편 로그인은 OAuth 연동만 추가하면 연결 가능합니다.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-[13px] leading-6 text-black/45">
            <p>로그인 시 서비스 이용약관 및 개인정보 처리방침에 동의한 것으로 간주됩니다.</p>
            <div className="mt-2 flex flex-wrap gap-4">
              <Link href="/corporate/paris-croissant" className="underline underline-offset-4">
                회사 소개
              </Link>
              <Link href="/brand-story" className="underline underline-offset-4">
                브랜드 소개
              </Link>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
