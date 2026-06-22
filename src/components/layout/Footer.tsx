import Link from "next/link";
import Image from "next/image";
import { contacts } from "../../lib/contacts";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-brand-dark text-white/80">

      {/* CTA полоса */}
      <div className="border-b border-white/10 py-8">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="text-lg font-semibold text-white">Нужен кондиционер в СПб и Ленобласти?</p>
              <p className="text-sm text-white/60">Бесплатный выезд мастера · Фиксированная цена · Договор и гарантия</p>
            </div>
            <div className="flex shrink-0 gap-3">
              <a href={`tel:${contacts.phone}`}
                className="rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white">
                {contacts.phone}
              </a>
              <Link href="/kontakty"
                className="rounded-xl bg-brand-accent px-5 py-2.5 text-sm font-semibold text-brand-dark transition hover:opacity-90">
                Оставить заявку
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Основной блок */}
      <Container className="py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* О компании */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image src="/logo.png" alt="Климат 365" width={140} height={46} className="h-10 w-auto brightness-0 invert" />
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              Монтаж, обслуживание и ремонт кондиционеров в Санкт-Петербурге и Ленинградской области. Работаем в новых ЖК, фиксированная цена, договор.
            </p>
            <div className="mt-4 space-y-1 text-sm text-white/60">
              <p>{contacts.legalName}</p>
              <a href={`tel:${contacts.phone}`} className="block transition hover:text-white">{contacts.phone}</a>
              <a href={`mailto:${contacts.email}`} className="block transition hover:text-white">{contacts.email}</a>
              <p>{contacts.address}</p>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/40">Услуги</p>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                { label: "Монтаж кондиционеров", href: "/uslugi/montazh-kondicionerov" },
                { label: "Обслуживание кондиционеров", href: "/uslugi/obsluzhivanie-kondicionerov" },
                { label: "Ремонт кондиционеров", href: "/uslugi/remont-kondicionerov" },
                { label: "Цены", href: "/ceny" },
                { label: "Калькулятор", href: "/kalkulyator" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Районы */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/40">Районы СПб и ЛО</p>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                { label: "Новосаратовка", href: "/rajony/novosuratovka" },
                { label: "Кудрово", href: "/rajony/kudrovo" },
                { label: "Мурино", href: "/rajony/murino" },
                { label: "Девяткино", href: "/rajony/devyatkino" },
                { label: "Всеволожск", href: "/rajony/vsevolozhsk" },
                { label: "Колпино", href: "/rajony/kolpino" },
                { label: "Пушкин", href: "/rajony/pushkin" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Компания */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/40">Компания</p>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                { label: "Портфолио", href: "/portfolio" },
                { label: "Отзывы", href: "/otzyvy" },
                { label: "О компании", href: "/o-kompanii" },
                { label: "FAQ", href: "/faq" },
                { label: "Блог", href: "/blog" },
                { label: "Контакты", href: "/kontakty" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Нижняя строка */}
        <div className="mt-10 space-y-3 border-t border-white/10 pt-6 text-xs text-white/40">
          <p>
            Информация на сайте носит информационный характер и не является публичной офертой в соответствии со ст. 437 ГК РФ.
            Точная стоимость определяется после выезда замерщика и составления сметы.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} {contacts.companyName}. Все права защищены. {contacts.legalName}</p>
            <Link href="/politika-konfidencialnosti" className="transition hover:text-white/70">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
