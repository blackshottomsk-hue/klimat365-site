import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="bg-background-light py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-white p-6 shadow-card sm:p-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">
            Получите понятный расчет стоимости
          </h2>
          <p className="mt-3 text-text-secondary">
            Оставьте заявку, и мы подготовим прозрачную смету, сроки и план работ
            под ваш объект.
          </p>
          <form className="mt-8 grid gap-4">
            <input
              type="text"
              placeholder="Имя"
              className="rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-dark placeholder:text-text-secondary/70"
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-dark placeholder:text-text-secondary/70"
            />
            <textarea
              placeholder="Комментарий"
              rows={4}
              className="rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-dark placeholder:text-text-secondary/70"
            />
            <Button type="submit" className="px-6 py-4 text-base">
              Рассчитать стоимость
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
