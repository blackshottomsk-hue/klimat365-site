const methods = [
  {
    title: "Монтаж на винтовых сваях",
    description:
      "Быстрый и чистый способ установки для сложных грунтов и участков с перепадами высот.",
    advantages: "Скорость монтажа, минимум земляных работ, высокая устойчивость.",
    usage: "Подходит для болотистых, пучинистых и нестабильных грунтов.",
  },
  {
    title: "Монтаж с бутованием щебнем",
    description:
      "Оптимальное решение для частных участков с хорошим дренажом и умеренной нагрузкой.",
    advantages: "Экономичность, надежная фиксация столбов, меньше риска выдавливания.",
    usage: "Рекомендуется для дач и загородных домов с сезонным проживанием.",
  },
  {
    title: "Бетонирование столбов",
    description:
      "Классическая технология, обеспечивающая максимальную жесткость конструкции.",
    advantages: "Прочность, долговечность, устойчивость при высоких ветровых нагрузках.",
    usage: "Используется для капитальных заборов и воротных групп.",
  },
];

export default function InstallationTypes() {
  return (
    <section className="bg-background-light py-16 text-text-dark sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Монтаж заборов</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {methods.map((method) => (
            <article
              key={method.title}
              className="rounded-2xl border border-border bg-white p-6 shadow-card transition hover:border-brand/35 hover:shadow-card-hover"
            >
              <h3 className="text-xl font-semibold text-brand">{method.title}</h3>
              <p className="mt-4 text-sm text-text-secondary">{method.description}</p>
              <p className="mt-4 text-sm text-text-secondary">
                <span className="font-semibold text-text-dark">Преимущества:</span>{" "}
                {method.advantages}
              </p>
              <p className="mt-3 text-sm text-text-secondary">
                <span className="font-semibold text-text-dark">Когда применяется:</span>{" "}
                {method.usage}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
