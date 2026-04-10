"use client";

import { MapPin, Phone, X } from "lucide-react";
import { useMemo, useState } from "react";
import { pickupStores } from "@/data/app-data";

type PickupStoreDialogProps = {
  open: boolean;
  onClose?: () => void;
  selectedStoreId?: string;
  onSelectStore?: (storeId: string) => void;
  embedded?: boolean;
};

export function PickupStoreDialog({
  open,
  onClose,
  selectedStoreId,
  onSelectStore,
  embedded = false,
}: PickupStoreDialogProps) {
  const [region, setRegion] = useState("전체");
  const [keyword, setKeyword] = useState("");

  const filteredStores = useMemo(() => {
    return pickupStores.filter((store) => {
      const byKeyword =
        keyword.length === 0 ||
        store.name.includes(keyword) ||
        store.address.includes(keyword) ||
        store.type.includes(keyword);

      if (region === "전체") {
        return byKeyword;
      }

      return byKeyword && store.address.includes(region);
    });
  }, [keyword, region]);

  if (!open) {
    return null;
  }

  const panel = (
    <div className="mx-auto w-full max-w-[1040px] rounded-[34px] bg-white p-8 shadow-[0_28px_90px_rgba(17,19,24,0.24)] sm:p-10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[12px] uppercase tracking-[0.28em] text-black/38">Pickup Store</p>
          <h2 className="mt-3 font-display text-[40px] leading-none text-[#111318]">픽업 매장 선택</h2>
        </div>
        {onClose ? (
          <button onClick={onClose} aria-label="닫기" className="grid h-11 w-11 place-items-center rounded-full border border-black/10 text-black/70">
            <X className="h-5 w-5" />
          </button>
        ) : null}
      </div>

      <div className="mt-8 rounded-[28px] bg-[#f5f3ee] p-6">
        <div className="grid gap-3 md:grid-cols-[220px_1fr]">
          <select
            value={region}
            onChange={(event) => setRegion(event.target.value)}
            className="h-12 rounded-full border border-black/10 bg-white px-4 text-[15px]"
          >
            <option>전체</option>
            <option>서울특별시</option>
            <option>경기도</option>
          </select>
          <input
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="지역, 브랜드, 매장명을 입력하세요"
            className="h-12 rounded-full border border-black/10 bg-white px-4 text-[15px]"
          />
        </div>
        <div className="mt-5 grid gap-1 text-[14px] leading-7 text-black/60">
          <p>픽업 가능 시간은 브랜드와 매장 운영 상황에 따라 달라질 수 있습니다.</p>
          <p>브랜드와 상품에 따라 픽업 가능 매장과 준비 시간이 달라질 수 있습니다.</p>
          <p>법인 행사 주문은 상담 매장을 별도로 지정해 B2B 주문 플로우도 테스트할 수 있습니다.</p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-[15px] text-black/62">
          검색 결과 <span className="font-semibold text-[#1e4ca1]">{filteredStores.length}</span>개
        </p>
      </div>

      <div className="mt-4 divide-y divide-black/8 border-t border-black/8">
        {filteredStores.map((store) => {
          const active = selectedStoreId === store.id;

          return (
            <div key={store.id} className="grid gap-6 py-7 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-[28px] font-semibold tracking-tight text-[#111318]">{store.name}</p>
                  <span className="rounded-full bg-[#f5f3ee] px-3 py-2 text-[12px] font-medium text-black/58">
                    {store.type}
                  </span>
                </div>
                <p className="mt-4 text-[16px] leading-8 text-black/66">{store.address}</p>
                <div className="mt-4 flex flex-wrap gap-6 text-[14px] text-black/55">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    매장 위치
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    {store.phone}
                  </span>
                </div>
                <div className="mt-4">
                  <span className="rounded-full border border-[#1e4ca1]/20 px-3 py-2 text-[12px] font-medium text-[#1e4ca1]">
                    {store.pickupNote}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onSelectStore?.(store.id)}
                className={`h-12 min-w-[96px] rounded-full px-5 text-[15px] font-medium ${
                  active ? "bg-[#111318] text-white" : "border border-black/10 bg-white text-black/60"
                }`}
              >
                {active ? "선택됨" : "선택"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );

  if (embedded) {
    return panel;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 px-4 py-8">
      <div className="max-h-full overflow-auto">{panel}</div>
    </div>
  );
}
