const advantages = [
  {
    title: "Фиксированная смета без скрытых платежей",
    text: "Согласовываем стоимость до старта работ и фиксируем ее в договоре.",
  },
  {
    title: "Четкие сроки выполнения",
    text: "Вы заранее знаете этапы и дедлайны, а не получаете размытые обещания.",
  },
  {
    title: "Контроль качества",
    text: "Проверяем ключевые узлы монтажа и сдаем объект по понятным критериям.",
  },
  {
    title: "Работа по договору",
    text: "Официальные обязательства, прозрачные условия и документально подтвержденный результат.",
  },
  {
    title: "Опытная команда",
    text: "Инженерный подход и отработанные процессы на частных и корпоративных объектах.",
  },
  {
    title: "Гарантия на работы",
    text: "Несем ответственность за монтаж и остаемся на связи после сдачи проекта.",
  },
];

export default function Advantages() {
  return (
    <section className="bg-brand-dark py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Почему выбирают ZABORIO</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/12 bg-brand/25 p-5 backdrop-blur-sm"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-accent text-lg font-bold text-brand-dark">
                OK
              </div>
              <p className="text-base font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-white/85">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
