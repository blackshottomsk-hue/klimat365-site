import type { Metadata } from "next";
import CTASection from "../../components/sections/CTASection";
import Card from "../../components/ui/Card";
import Container from "../../components/ui/Container";
import PageHero from "../../components/ui/PageHero";
import Section from "../../components/ui/Section";
import { seoPageData } from "../../data/seo/pages";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata(seoPageData.contacts);

export default function KontaktyPage() {
  return (
    <main>
      <PageHero
        title="Контакты"
        description="Позвоните или оставьте заявку — мастер приедет в удобное для вас время. Работаем по СПб и Ленинградской области."
      />

      <Section className="bg-background-light">
        <Container className="grid gap-4 md:grid-cols-3">
          <Card>
            <div className="text-2xl mb-3">📞</div>
            <h3 className="text-lg font-semibold text-text-dark">Телефон</h3>
            <a
              href="tel:+79039522177"
              className="mt-2 block text-xl font-bold text-brand hover:underline"
            >
              +7 (903) 952-21-77
            </a>
            <p className="mt-2 text-sm text-text-secondary">
              Звоните с 9:00 до 21:00 ежедневно. Ответим на вопросы, согласуем удобное время выезда мастера.
            </p>
          </Card>
          <Card>
            <div className="text-2xl mb-3">✉️</div>
            <h3 className="text-lg font-semibold text-text-dark">Email</h3>
            <a
              href="mailto:info@klimat365.ru"
              className="mt-2 block text-base font-semibold text-brand hover:underline"
            >
              info@klimat365.ru
            </a>
            <p className="mt-2 text-sm text-text-secondary">
              Пишите с вопросами, фотографиями объекта или описанием задачи. Отвечаем в течение нескольких часов.
            </p>
          </Card>
          <Card>
            <div className="text-2xl mb-3">📍</div>
            <h3 className="text-lg font-semibold text-text-dark">Зона работы</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Санкт-Петербург и Ленинградская область. Приоритетные районы: Кудрово, Мурино, Новосаратовка,
              Девяткино, Всеволожск, Колпино, Пушкин. Выезд мастера — бесплатно.
            </p>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-text-dark sm:text-3xl">Оставить заявку</h2>
              <p className="mt-2 text-sm text-text-secondary">
                Заполните форму, и мастер свяжется с вами для согласования удобного времени визита.
              </p>
              <form className="mt-6 space-y-4" action="#" method="POST">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-dark">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Иван Иванов"
                    className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-dark placeholder:text-text-secondary/60 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-dark">
                    Телефон <span className="text-brand">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-dark placeholder:text-text-secondary/60 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-dark">
                    Опишите задачу
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Например: нужна установка кондиционера в спальню 18 м², район Мурино"
                    className="mt-1.5 w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-dark placeholder:text-text-secondary/60 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand/90"
                >
                  Отправить заявку
                </button>
                <p className="text-xs text-text-secondary">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
                </p>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-dark sm:text-3xl">Как мы работаем</h2>
              <div className="mt-6 space-y-4">
                {[
                  {
                    icon: "⚡",
                    title: "Быстрый ответ",
                    text: "Перезваниваем в течение 30 минут после заявки. Если вы позвонили сами — ответим сразу.",
                  },
                  {
                    icon: "🚗",
                    title: "Бесплатный выезд",
                    text: "Мастер приезжает без оплаты выезда при заключении договора. Осматривает объект и называет точную стоимость.",
                  },
                  {
                    icon: "📋",
                    title: "Договор и акт",
                    text: "Работаем официально. Договор фиксирует стоимость и объём работ. После завершения — акт и гарантийный талон.",
                  },
                  {
                    icon: "🛡",
                    title: "Гарантия 2 года",
                    text: "Гарантия на монтажные работы прописана в договоре. При любых проблемах по нашей вине — устраняем бесплатно.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 rounded-2xl border border-border bg-white p-4 shadow-card">
                    <div className="text-2xl shrink-0">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-text-dark">{item.title}</div>
                      <p className="mt-1 text-sm text-text-secondary">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </main>
  );
}
