const steps = [
  {
    title: "Заявка или звонок",
    text: "Фиксируем задачу, формат участка и удобное время для замера.",
  },
  {
    title: "Выезд замерщика",
    text: "На месте собираем точные данные по периметру, грунту и конфигурации.",
  },
  {
    title: "Смета и согласование",
    text: "Вы получаете понятный расчет, сроки и договор без скрытых пунктов.",
  },
  {
    title: "Монтаж и сдача объекта",
    text: "Выполняем работы по согласованному плану и передаем готовый результат.",
  },
];

export default function Steps() {
  return (
    <section className="bg-brand-dark py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Как мы работаем</h2>
        <p className="mt-4 text-white/80">
          Процесс прозрачен на каждом этапе: вы понимаете, что происходит, сколько
          это стоит и когда будет готов результат.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="rounded-xl border border-white/12 bg-brand/35 p-5 backdrop-blur-sm"
            >
              <p className="text-sm font-semibold text-brand-accent">Шаг {idx + 1}</p>
              <p className="mt-2 text-lg font-semibold text-white">{step.title}</p>
              <p className="mt-2 text-sm text-white/85">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
