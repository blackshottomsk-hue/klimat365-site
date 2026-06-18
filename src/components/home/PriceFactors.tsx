const factors = [
  {
    title: "Тип материалов",
    text: "Стоимость зависит от выбранного типа забора, толщины металла и покрытия.",
  },
  {
    title: "Размеры участка",
    text: "Чем больше длина ограждения и высота секций, тем выше итоговая смета.",
  },
  {
    title: "Ворота и калитка",
    text: "На цену влияет наличие ворот, их тип, автоматика и дополнительная фурнитура.",
  },
  {
    title: "Способ монтажа",
    text: "Сваи, бутование или бетонирование выбираются под грунт и задачу объекта.",
  },
  {
    title: "Подготовка территории",
    text: "Учитывается демонтаж старого забора, выравнивание и логистика материалов.",
  },
  {
    title: "Сроки выполнения",
    text: "Срочные проекты и большие объемы рассчитываются индивидуально по договору.",
  },
];

export default function PriceFactors() {
  return (
    <section className="bg-background-light py-16 text-text-dark sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Как формируется цена</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {factors.map((factor) => (
            <article
              key={factor.title}
              className="rounded-xl border border-border bg-white p-5 shadow-card transition hover:border-brand/35 hover:shadow-card-hover"
            >
              <h3 className="text-lg font-semibold text-brand">{factor.title}</h3>
              <p className="mt-3 text-sm text-text-secondary">{factor.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
