const faqItems = [
  {
    question: "Как формируется стоимость забора?",
    answer:
      "Стоимость зависит от типа ограждения, длины периметра, высоты, выбранного основания и комплектации ворот. Перед стартом вы получаете прозрачную смету без скрытых строк.",
  },
  {
    question: "Какие сроки монтажа обычно по проекту?",
    answer:
      "Сроки фиксируем в договоре после замера и согласования сметы. Небольшие объекты закрываем быстро, сложные проекты ведем по этапному плану.",
  },
  {
    question: "Работаете ли по договору и даете ли гарантию?",
    answer:
      "Да. Работаем официально: договор, акты, согласованный объем работ и гарантийные обязательства на выполненный монтаж.",
  },
  {
    question: "Можно ли заказать только ворота или калитку?",
    answer:
      "Да, выполняем как комплексные проекты под ключ, так и отдельные задачи по воротам и калиткам с подбором конфигурации под объект.",
  },
  {
    question: "Как вы контролируете качество работ?",
    answer:
      "Контроль идет на каждом этапе: замер, подготовка основания, монтаж, финальная проверка геометрии и функциональности перед сдачей.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-background-light py-16 text-text-dark sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Частые вопросы</h2>
        <div className="mt-8 space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="rounded-xl border border-border bg-white p-5 shadow-sm transition hover:border-brand/30"
            >
              <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-text-dark">
                {item.question}
              </summary>
              <p className="mt-3 text-sm text-text-secondary">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
