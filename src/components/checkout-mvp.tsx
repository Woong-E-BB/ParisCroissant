"use client";

import { useMemo, useState } from "react";
import { agreementLabels, breadcrumbByPage, featuredProduct, paymentMethods } from "@/data/app-data";
import { formatCurrency } from "@/lib/utils";
import { CropImage } from "@/components/crop-image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const baseAmount = 21000;
const discountAmount = 2000;

export function CheckoutMvp() {
  const [name, setName] = useState("김브랜드");
  const [phone, setPhone] = useState("010-2093-5124");
  const [selectedPayment, setSelectedPayment] = useState("신용카드");
  const [agreements, setAgreements] = useState<string[]>([]);

  const totalAmount = useMemo(() => baseAmount - discountAmount, []);
  const canPay = agreements.includes("구매 및 결제 진행 동의(필수)");

  return (
    <main className="bg-[#f5f3ee]">
      <SiteHeader variant="croissant" activeLabel="상품 소개" />

      <div className="mx-auto max-w-[1280px] px-4 pb-16 pt-8 sm:px-6">
        <p className="text-[14px] uppercase tracking-[0.18em] text-black/35">{breadcrumbByPage.checkout}</p>

        <section className="mt-6 rounded-[34px] bg-white p-8 shadow-[0_18px_50px_rgba(17,19,24,0.06)] sm:p-10">
          <p className="text-[12px] uppercase tracking-[0.28em] text-black/38">Checkout</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="font-display text-[54px] leading-none text-[#111318]">상품 주문 결제</h1>
              <p className="mt-4 max-w-3xl text-[17px] leading-8 text-black/64">
                선택한 상품의 수령 정보와 결제수단을 확인하고, 픽업 주문 또는 기업 상담 주문을 완료하세요.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="rounded-[34px] bg-white p-8 shadow-[0_18px_50px_rgba(17,19,24,0.06)]">
              <h2 className="font-display text-[38px] leading-none text-[#111318]">주문 상품</h2>
              <div className="mt-8 grid gap-5 rounded-[28px] bg-[#f5f3ee] p-5 sm:grid-cols-[160px_1fr]">
                <CropImage crop={featuredProduct.crop} alt={featuredProduct.name} className="w-full rounded-[22px]" />
                <div className="flex flex-col justify-center">
                  <p className="text-[12px] uppercase tracking-[0.22em] text-black/38">{featuredProduct.brand}</p>
                  <p className="mt-2 text-[32px] font-semibold tracking-tight text-[#111318]">{featuredProduct.name}</p>
                  <p className="mt-3 text-[15px] leading-7 text-black/62">{featuredProduct.description}</p>
                  <p className="mt-4 text-[16px] font-medium text-[#1c2535]">{featuredProduct.priceLabel}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[34px] bg-white p-8 shadow-[0_18px_50px_rgba(17,19,24,0.06)]">
              <h2 className="font-display text-[38px] leading-none text-[#111318]">수령 정보</h2>
              <div className="mt-8 grid gap-5">
                <label className="grid gap-2">
                  <span className="text-[15px] font-medium text-black/62">수령자명</span>
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="h-14 rounded-2xl border border-black/10 bg-[#fafaf8] px-5 text-[16px]"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-[15px] font-medium text-black/62">연락처</span>
                  <input
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className="h-14 rounded-2xl border border-black/10 bg-[#fafaf8] px-5 text-[16px]"
                  />
                </label>
                <div className="rounded-[26px] bg-[#f5f3ee] p-5 text-[15px] leading-8 text-black/64">
                  <p className="font-medium text-[#111318]">픽업 매장</p>
                  <p className="mt-3">파리크라상 강남 플래그십 / 서울특별시 강남구 테헤란로 152, 1층</p>
                  <p>주문 후 2시간 내 픽업 가능</p>
                </div>
              </div>
            </div>

            <div className="rounded-[34px] bg-white p-8 shadow-[0_18px_50px_rgba(17,19,24,0.06)]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="font-display text-[38px] leading-none text-[#111318]">결제수단</h2>
                <span className="rounded-full bg-[#1c2535] px-4 py-2 text-[12px] font-medium text-white">안전 결제</span>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method}
                    onClick={() => setSelectedPayment(method)}
                    className={`min-h-[100px] rounded-[24px] border px-5 py-5 text-left text-[18px] font-medium ${
                      selectedPayment === method
                        ? "border-[#111318] bg-[#111318] text-white"
                        : "border-black/10 bg-[#fafaf8] text-black/65"
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[34px] bg-[#1c2535] p-8 text-white shadow-[0_18px_50px_rgba(17,19,24,0.12)]">
              <p className="text-[12px] uppercase tracking-[0.28em] text-white/54">Payment Summary</p>
              <h2 className="mt-4 font-display text-[40px] leading-none">결제 요약</h2>
              <div className="mt-8 space-y-4 text-[16px]">
                <div className="flex items-center justify-between text-white/72">
                  <span>상품 금액</span>
                  <span>{formatCurrency(baseAmount)}원</span>
                </div>
                <div className="flex items-center justify-between text-white/72">
                  <span>할인 금액</span>
                  <span>-{formatCurrency(discountAmount)}원</span>
                </div>
                <div className="flex items-center justify-between text-white/72">
                  <span>결제 수단</span>
                  <span>{selectedPayment}</span>
                </div>
                <div className="mt-6 border-t border-white/10 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[16px] text-white/68">총 결제금액</span>
                    <span className="text-[38px] font-semibold tracking-tight">{formatCurrency(totalAmount)}원</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[34px] bg-white p-8 shadow-[0_18px_50px_rgba(17,19,24,0.06)]">
              <h2 className="font-display text-[38px] leading-none text-[#111318]">동의 항목</h2>
              <div className="mt-8 space-y-4">
                {agreementLabels.map((label) => {
                  const checked = agreements.includes(label);
                  return (
                    <label key={label} className="flex items-start gap-3 rounded-[20px] bg-[#f5f3ee] px-4 py-4 text-[15px] leading-7 text-black/66">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(event) => {
                          setAgreements((current) =>
                            event.target.checked
                              ? [...current, label]
                              : current.filter((item) => item !== label),
                          );
                        }}
                        className="mt-1 h-5 w-5"
                      />
                      <span>{label}</span>
                    </label>
                  );
                })}
              </div>
              <p className="mt-6 text-[14px] leading-7 text-black/52">
                주문 전 수령자 정보, 결제수단, 필수 동의 항목을 다시 한 번 확인해주세요.
              </p>
              <button
                disabled={!canPay}
                className={`mt-8 h-14 w-full rounded-full text-[18px] font-semibold ${
                  canPay ? "bg-[#111318] text-white" : "bg-black/10 text-black/30"
                }`}
              >
                결제 진행하기
              </button>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
