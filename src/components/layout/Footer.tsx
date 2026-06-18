import Link from "next/link";
import { contacts } from "../../lib/contacts";
import { footerServices, footerSitemap, mainNavigation } from "../../lib/navigation";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-brand-dark text-white/90">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <p className="text-2xl font-bold text-white">{contacts.companyName}</p>
            <p className="mt-3 text-sm text-white/75">
              Современный сервис установки заборов: прозрачная смета, понятные этапы и контроль качества.
            </p>
            <p className="mt-2 text-xs text-white/60">{contacts.legalName}</p>
          </div>

          <div>
            <p className="font-semibold text-white">Навигация</p>
            <ul className="mt-3 grid gap-2 text-sm">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-brand-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white">Услуги</p>
            <ul className="mt-3 grid gap-2 text-sm">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-brand-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white">Контакты</p>
            <ul className="mt-3 grid gap-2 text-sm">
              <li>
                <a href={`tel:${contacts.phone}`} className="transition hover:text-brand-accent">
                  {contacts.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contacts.email}`} className="transition hover:text-brand-accent">
                  {contacts.email}
                </a>
              </li>
              <li>{contacts.address}</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white">Карта сайта</p>
            <div className="mt-3 grid gap-4 text-sm">
              {footerSitemap.map((group) => (
                <div key={group.title}>
                  <p className="mb-2 text-xs uppercase tracking-wide text-white/55">{group.title}</p>
                  <ul className="grid gap-1">
                    {group.links.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="transition hover:text-brand-accent">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {contacts.companyName}. Все права
            защищены. {contacts.legalName}
          </p>
          <Link href="/politika-konfidencialnosti" className="transition hover:text-brand-accent">
            Политика конфиденциальности
          </Link>
        </div>
      </Container>
    </footer>
  );
}
