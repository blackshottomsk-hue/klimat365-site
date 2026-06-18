const stages = [
  "Консультация",
  "Замер",
  "Расчет",
  "Поставка",
  "Монтаж",
  "Сдача",
];

export default function AboutSection() {
  return (
    <section className="bg-brand-dark py-16 text-white/95 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">О компании</h2>
          <p className="mt-5 text-white/80">
            ZABORIO - сервис установки заборов нового поколения. Работаем
            спокойно, системно и прозрачно: вы заранее видите стоимость, этапы и
            сроки проекта.
          </p>
          <p className="mt-4 text-white/80">
            Берем на себя полный цикл: от заявки и замера до сдачи объекта с
            договором, документами и гарантийными обязательствами.
          </p>
        </div>
        <div className="rounded-2xl border border-white/15 bg-brand/30 p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-brand-accent">Полный цикл работ</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {stages.map((stage, index) => (
              <li
                key={stage}
                className="rounded-lg border border-white/10 bg-brand-dark/50 px-4 py-3 text-sm text-white/90"
              >
                {index + 1}. {stage}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
