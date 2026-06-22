export type NavItem = {
  label: string;
  href: string;
};

export type NavGroup = NavItem & {
  children?: NavItem[];
};

export const mainNavigation: NavGroup[] = [
  {
    label: "Услуги",
    href: "/uslugi",
    children: [
      { label: "Монтаж кондиционеров", href: "/uslugi/montazh-kondicionerov" },
      { label: "Обслуживание и чистка", href: "/uslugi/obsluzhivanie-kondicionerov" },
      { label: "Ремонт кондиционеров", href: "/uslugi/remont-kondicionerov" },
    ],
  },
  { label: "Калькулятор", href: "/kalkulyator" },
  { label: "Цены", href: "/ceny" },
  {
    label: "Районы",
    href: "/rajony",
    children: [
      { label: "Кудрово", href: "/rajony/kudrovo" },
      { label: "Мурино", href: "/rajony/murino" },
      { label: "Новосаратовка", href: "/rajony/novosuratovka" },
      { label: "Девяткино", href: "/rajony/devyatkino" },
      { label: "Всеволожск", href: "/rajony/vsevolozhsk" },
      { label: "Колпино", href: "/rajony/kolpino" },
      { label: "Пушкин", href: "/rajony/pushkin" },
    ],
  },
  { label: "Блог", href: "/blog" },
  { label: "О компании", href: "/o-kompanii" },
  { label: "Контакты", href: "/kontakty" },
];

export const footerServices: NavItem[] = [
  { label: "Монтаж кондиционеров", href: "/uslugi/montazh-kondicionerov" },
  { label: "Обслуживание кондиционеров", href: "/uslugi/obsluzhivanie-kondicionerov" },
  { label: "Ремонт кондиционеров", href: "/uslugi/remont-kondicionerov" },
  { label: "Цены", href: "/ceny" },
  { label: "Калькулятор", href: "/kalkulyator" },
];

export const footerSitemap: { title: string; links: NavItem[] }[] = [
  {
    title: "Услуги",
    links: [
      { label: "Монтаж кондиционеров", href: "/uslugi/montazh-kondicionerov" },
      { label: "Обслуживание кондиционеров", href: "/uslugi/obsluzhivanie-kondicionerov" },
      { label: "Ремонт кондиционеров", href: "/uslugi/remont-kondicionerov" },
      { label: "Цены", href: "/ceny" },
      { label: "FAQ", href: "/faq" },
      { label: "Блог", href: "/blog" },
    ],
  },
  {
    title: "Районы",
    links: [
      { label: "Кудрово", href: "/rajony/kudrovo" },
      { label: "Мурино", href: "/rajony/murino" },
      { label: "Новосаратовка", href: "/rajony/novosuratovka" },
      { label: "Девяткино", href: "/rajony/devyatkino" },
      { label: "Всеволожск", href: "/rajony/vsevolozhsk" },
      { label: "Колпино", href: "/rajony/kolpino" },
      { label: "Пушкин", href: "/rajony/pushkin" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "Портфолио", href: "/portfolio" },
      { label: "Отзывы", href: "/otzyvy" },
      { label: "О компании", href: "/o-kompanii" },
      { label: "Контакты", href: "/kontakty" },
      { label: "Политика конфиденциальности", href: "/politika-konfidencialnosti" },
    ],
  },
];
