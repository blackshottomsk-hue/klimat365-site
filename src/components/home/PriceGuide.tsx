const priceItems = [
  {
    title: "Евроштакетник",
    price: "от 2 600 ₽/м.п.",
    note: "В цену входит материал, столбы и базовый монтаж.",
  },
  {
    title: "Профнастил С20",
    price: "от 2 300 ₽/м.п.",
    note: "Оптимально для частных домов и промышленных объектов.",
  },
  {
    title: "3D сетка",
    price: "от 1 950 ₽/м.п.",
    note: "Практичный вариант для участков и территории компаний.",
  },
  {
    title: "Сетка рабица",
    price: "от 1 450 ₽/м.п.",
    note: "Экономичное решение для дачи и временных ограждений.",
  },
];

export default function PriceGuide() {
  return (
    <section className="bg-white py-16 text-text-dark sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Ориентировочные цены</h2>
        <p className="mt-4 max-w-3xl text-text-secondary">
          Ниже представлены средние цены по популярным решениям. Точная смета
          зависит от длины, высоты, типа основания и комплектации ворот.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {priceItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-background-light p-5 transition hover:border-brand/35 hover:shadow-card-hover"
            >
              <h3 className="text-lg font-semibold text-text-dark">{item.title}</h3>
              <p className="mt-3 text-2xl font-extrabold text-brand">{item.price}</p>
              <p className="mt-3 text-sm text-text-secondary">{item.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
