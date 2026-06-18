const reviews = [
  {
    name: "Алексей, Всеволожский район",
    text: "Понравилась прозрачность: сначала замер и понятная смета, потом строго по этапам. Без неожиданных доплат.",
  },
  {
    name: "Марина, Красносельский район",
    text: "Сроки выдержали точно, по коммуникации все спокойно и профессионально. Результат совпал с тем, что обсуждали.",
  },
  {
    name: "Игорь, Гатчинский район",
    text: "Выбирали между несколькими подрядчиками. Здесь был самый понятный процесс и внятная ответственность по договору.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-background-light py-16 text-text-dark sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Отзывы клиентов</h2>
        <p className="mt-4 max-w-3xl text-text-secondary">
          Клиенты отмечают главное: предсказуемый процесс, аккуратный монтаж и
          выполнение договоренностей по срокам и качеству.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-border bg-white p-5 shadow-card"
            >
              <p className="text-sm text-text-secondary">{item.text}</p>
              <p className="mt-4 text-sm font-semibold text-text-dark">{item.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
