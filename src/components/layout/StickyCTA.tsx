"use client";

import Link from "next/link";

export default function StickyCTA() {
  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 hidden md:block">
        <Link
          href="/kalkulyator-zabora"
          className="inline-flex items-center justify-center rounded-xl bg-brand-dark px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand"
        >
          Рассчитать стоимость
        </Link>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white p-3 md:hidden">
        <Link
          href="/kalkulyator-zabora"
          className="flex w-full items-center justify-center rounded-xl bg-brand-dark px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand"
        >
          Рассчитать стоимость
        </Link>
      </div>
    </>
  );
}
