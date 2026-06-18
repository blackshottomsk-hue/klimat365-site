"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-white shadow-xl">
        <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6">
          {/* Icon */}
          <div className="hidden shrink-0 sm:flex h-10 w-10 items-center justify-center rounded-xl bg-brand-dark/10 text-xl">
            🍪
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="text-sm font-semibold text-text-dark">Мы используем файлы cookie</p>
            <p className="mt-1 text-xs leading-relaxed text-text-secondary">
              Сайт использует cookie для корректной работы и улучшения пользовательского
              опыта. Нажимая «Принять», вы соглашаетесь с использованием cookie в
              соответствии с нашей{" "}
              <Link
                href="/politika-konfidencialnosti"
                className="text-brand underline hover:text-brand-dark"
              >
                Политикой конфиденциальности
              </Link>
              .
            </p>
          </div>

          {/* Buttons */}
          <div className="flex shrink-0 gap-3">
            <button
              onClick={decline}
              className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-text-secondary transition hover:border-text-secondary hover:text-text-dark"
            >
              Отклонить
            </button>
            <button
              onClick={accept}
              className="rounded-xl bg-brand-dark px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand"
            >
              Принять
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
