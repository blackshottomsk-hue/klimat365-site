"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { contacts } from "../../lib/contacts";
import { mainNavigation } from "../../lib/navigation";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <Container className="flex h-24 items-center justify-between gap-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Климат 365" width={320} height={60} priority className="h-14 w-auto max-w-[320px] object-contain" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {mainNavigation.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="text-sm font-medium text-text-secondary transition duration-200 hover:text-brand"
              >
                {item.label}
              </Link>
              {item.children?.length ? (
                <div className="invisible absolute left-0 top-full z-30 min-w-64 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="rounded-xl border border-border bg-white p-3 shadow-lg">
                  <div className="grid gap-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rounded-lg px-3 py-2 text-sm text-text-secondary transition duration-200 hover:bg-background-light hover:text-brand"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="text-right">
            <a href={`tel:${contacts.phone}`} className="text-sm font-semibold text-text-dark">
              {contacts.phone}
            </a>
            <p className="text-[10px] text-text-secondary">СПб и ЛО · Новые ЖК · Ленобласть</p>
          </div>
          <Link href="/kontakty">
            <Button>Оставить заявку</Button>
          </Link>
        </div>

        <button
          className="rounded-lg border border-border px-3 py-2 text-sm font-medium text-text-dark transition hover:border-brand/50 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Открыть меню"
        >
          Меню
        </button>
      </Container>

      {isOpen ? (
        <div className="border-t border-border bg-white lg:hidden">
          <Container className="py-4">
            <nav className="grid gap-3">
              {mainNavigation.map((item) => (
                <div key={item.href} className="rounded-lg border border-border p-2">
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-text-secondary hover:bg-background-light"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children?.length ? (
                    <div className="mt-1 grid gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-lg px-3 py-2 text-sm text-text-secondary hover:bg-background-light hover:text-brand"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>
            <div className="mt-4 grid gap-3">
              <a href={`tel:${contacts.phone}`} className="text-sm font-semibold text-text-dark">
                {contacts.phone}
              </a>
              <Link href="/kontakty" onClick={() => setIsOpen(false)}>
                <Button>Оставить заявку</Button>
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
