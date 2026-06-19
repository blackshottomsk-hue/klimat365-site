export type NavItem = {
  label: string;
  href: string;
};

export type NavGroup = NavItem & {
  children?: NavItem[];
};

export const mainNavigation: NavGroup[] = [
  {
    label: "Заборы",
    href: "/zabory",
    children: [
      { label: "Из евроштакетника", href: "/zabory/iz-evroshtaketnika" },
      { label: "Из профнастила", href: "/zabory/iz-profnastila" },
      { label: "3D сетка", href: "/zabory/3d-setka" },
      { label: "Из рабицы", href: "/zabory/iz-rabicy" },
      { label: "Под ключ", href: "/zabory/pod-klyuch" },
      { label: "Для дачи", href: "/zabory/dlya-dachi" },
      { label: "Для коттеджа", href: "/zabory/dlya-kottedzha" },
    ],
  },
  {
    label: "Ворота",
    href: "/vorota",
    children: [
      { label: "Откатные", href: "/vorota/otkatnye" },
      { label: "Распашные", href: "/vorota/raspashnye" },
      { label: "Автоматические", href: "/vorota/avtomaticheskie" },
      { label: "Под ключ", href: "/vorota/pod-klyuch" },
    ],
  },
  {
    label: "Монтаж",
    href: "/montazh",
    children: [
      { label: "На винтовых сваях", href: "/montazh/na-vintovyh-svayah" },
      { label: "С бетонированием", href: "/montazh/s-betonirovaniem" },
      { label: "С бутонованием", href: "/montazh/s-butonovaniem" },
      { label: "Ленточный фундамент", href: "/montazh/lentochnyj-fundament" },
      { label: "Подготовка участка", href: "/podgotovka-uchastka" },
      { label: "Дренажные работы", href: "/drenazhnye-raboty" },
      { label: "Въезд на участок", href: "/vezd-na-uchastok" },
      { label: "Благоустройство участка", href: "/blagoustroystvo-uchastka" },
    ],
  },
  {
    label: "Цены",
    href: "/ceny",
    children: [
      { label: "Цены на заборы", href: "/ceny/zabory" },
      { label: "Цены на ворота", href: "/ceny/vorota" },
      { label: "Цены на монтаж", href: "/ceny/montazh" },
    ],
  },
  { label: "Портфолио", href: "/portfolio" },
  { label: "О компании", href: "/o-kompanii" },
  { label: "Контакты", href: "/kontakty" },
];

export const footerServices: NavItem[] = [
  { label: "Услуги", href: "/uslugi" },
  { label: "Калькулятор забора", href: "/kalkulyator-zabora" },
  { label: "Монтаж заборов", href: "/montazh-zaborov" },
  { label: "Заборы под ключ", href: "/zabory" },
  { label: "Заборы из евроштакетника", href: "/zabory/iz-evroshtaketnika" },
  { label: "Заборы из профнастила", href: "/zabory/iz-profnastila" },
  { label: "3D заборы", href: "/zabory/3d-setka" },
  { label: "Заборы из сетки рабицы", href: "/zabory/iz-rabicy" },
];

export const footerSitemap: { title: string; links: NavItem[] }[] = [
  {
    title: "Разделы",
    links: [
      { label: "Главная", href: "/" },
      { label: "Заборы", href: "/zabory" },
      { label: "Ворота", href: "/vorota" },
      { label: "Калитки", href: "/kalitki" },
      { label: "Монтаж", href: "/montazh" },
      { label: "Технологии", href: "/tehnologii" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "Портфолио", href: "/portfolio" },
      { label: "Отзывы", href: "/otzyvy" },
      { label: "О компании", href: "/o-kompanii" },
      { label: "FAQ", href: "/faq" },
      { label: "Блог", href: "/blog" },
      { label: "Контакты", href: "/kontakty" },
      { label: "Для застройщиков", href: "/dlya-kompanij/zastrojshchikam" },
      { label: "Для ТСЖ", href: "/dlya-kompanij/tszh" },
      { label: "Промышленные объекты", href: "/dlya-kompanij/promyshlennye-obekty" },
    ],
  },
  {
    title: "Районы СПб и ЛО",
    links: [
      { label: "Пушкинский район", href: "/zabory-rajon/zabory-pushkin" },
      { label: "Гатчинский район", href: "/zabory-rajon/zabory-gatchina" },
      { label: "Тосненский район", href: "/zabory-rajon/zabory-tosno" },
      { label: "Ломоносовский район", href: "/zabory-rajon/zabory-lomonosov" },
      { label: "Колпинский район", href: "/zabory-rajon/zabory-kolpino" },
      { label: "Всеволожский район", href: "/zabory-rajon/zabory-vsevolozhsk" },
      { label: "Красносельский район", href: "/zabory-rajon/zabory-krasnoselskiy" },
      { label: "Московский район", href: "/zabory-rajon/zabory-moskovskiy" },
      { label: "Пос. Свердлова, Новосаратовка", href: "/zabory-rajon/zabory-sverdlova" },
    ],
  },
];
