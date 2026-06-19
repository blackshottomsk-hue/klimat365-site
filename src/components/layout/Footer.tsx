import Link from "next/link";
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
              <p className="text-lg font-semibold text-white">Нужен забор под ключ в СПб и Ленобласти?</p>
              <p className="text-sm text-white/60">Бесплатный выезд замерщика · Смета за 1–2 дня · Договор и гарантия</p>
            </div>
            <div className="flex shrink-0 gap-3">
              <a href={`tel:${contacts.phone}`}
                className="rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white">
                {contacts.phone}
              </a>
              <Link href="/kalkulyator-zabora"
                className="rounded-xl bg-brand-accent px-5 py-2.5 text-sm font-semibold text-brand-dark transition hover:opacity-90">
                Рассчитать стоимость
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
            <p className="text-xl font-bold text-white">{contacts.companyName}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              Установка заборов, ворот и калиток в Санкт-Петербурге и Ленинградской области. Фиксированная смета, собственная бригада, договор.
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
                { label: "Заборы из евроштакетника", href: "/zabory/iz-evroshtaketnika" },
                { label: "Заборы из профнастила", href: "/zabory/iz-profnastila" },
                { label: "3D заборы (сетка)", href: "/zabory/3d-setka" },
                { label: "Заборы из рабицы", href: "/zabory/iz-rabicy" },
                { label: "Откатные ворота", href: "/vorota/otkatnye" },
                { label: "Распашные ворота", href: "/vorota/raspashnye" },
                { label: "Монтаж на сваях", href: "/montazh/na-vintovyh-svayah" },
                { label: "Калькулятор забора", href: "/kalkulyator-zabora" },
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
                { label: "Пушкинский район", href: "/zabory-rajon/zabory-pushkin" },
                { label: "Гатчинский район", href: "/zabory-rajon/zabory-gatchina" },
                { label: "Тосненский район", href: "/zabory-rajon/zabory-tosno" },
                { label: "Ломоносовский район", href: "/zabory-rajon/zabory-lomonosov" },
                { label: "Колпинский район", href: "/zabory-rajon/zabory-kolpino" },
                { label: "Всеволожский район", href: "/zabory-rajon/zabory-vsevolozhsk" },
                { label: "Красносельский район", href: "/zabory-rajon/zabory-krasnoselskiy" },
                { label: "Московский район", href: "/zabory-rajon/zabory-moskovskiy" },
                { label: "Пос. Свердлова, Новосаратовка", href: "/zabory-rajon/zabory-sverdlova" },
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
                { label: "Для застройщиков", href: "/dlya-kompanij/zastrojshchikam" },
                { label: "Для ТСЖ", href: "/dlya-kompanij/tszh" },
                { label: "Промышленные объекты", href: "/dlya-kompanij/promyshlennye-obekty" },
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
