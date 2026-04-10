"use client";

import { useState } from "react";
import { PickupStoreDialog } from "@/components/pickup-store-dialog";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function StoresPage() {
  const [selectedStoreId, setSelectedStoreId] = useState("gangnam");

  return (
    <main className="bg-[#f5f3ee]">
      <SiteHeader variant="hub" activeLabel="픽업/예약" />
      <div className="mx-auto max-w-[1280px] px-4 pb-16 pt-10 sm:px-6">
        <h1 className="font-display text-[56px] leading-none text-[#111318]">매장 안내</h1>
        <p className="mt-4 max-w-3xl text-[20px] leading-8 text-black/65">
          픽업 가능 매장과 기업 상담 매장을 확인하고 주문 목적에 맞는 수령 지점을 선택하세요.
        </p>
        <div className="mt-10">
          <PickupStoreDialog
            open
            embedded
            selectedStoreId={selectedStoreId}
            onSelectStore={setSelectedStoreId}
          />
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
