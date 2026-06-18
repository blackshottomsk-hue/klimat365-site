const clients = [
  "Застройщики",
  "Предприятия",
  "ТСЖ",
  "ЖК",
  "Строительные компании",
];

const offers = ["Большие объемы", "Договор", "Безнал", "Сроки"];

export default function B2BSection() {
  return (
    <section className="bg-background-light py-16 text-text-dark sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
          <h2 className="text-3xl font-bold sm:text-4xl">Для компаний</h2>
          <p className="mt-4 text-text-secondary">Работаем с:</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {clients.map((client) => (
              <li key={client} className="rounded-lg bg-background-light px-4 py-3 text-sm text-text-secondary">
                {client}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-brand/25 bg-brand/5 p-6">
          <h3 className="text-2xl font-bold text-brand">Предлагаем</h3>
          <ul className="mt-4 grid gap-3">
            {offers.map((offer) => (
              <li key={offer} className="rounded-lg border border-border bg-white px-4 py-3 text-text-secondary">
                {offer}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
