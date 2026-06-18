import Image from "next/image";

const portfolioItems = [
  {
    type: "Профнастил С20",
    length: "42 м",
    district: "Всеволожский район",
    image:
      "/images/03-portfolio/c3def239-d19e-4c52-807c-fd92a4626dfc.jpg",
  },
  {
    type: "Евроштакетник шахматка",
    length: "36 м",
    district: "Приморский район",
    image:
      "/images/03-portfolio/c00f2d89-7840-49d7-afc8-61906d849cda.jpg",
  },
  {
    type: "3D забор",
    length: "95 м",
    district: "Гатчинский район",
    image:
      "/images/03-portfolio/d3789f3a-32af-4f16-8c1a-8989a8444730.jpg",
  },
  {
    type: "Сетка рабица",
    length: "58 м",
    district: "Ломоносовский район",
    image:
      "/images/03-portfolio/e7fa760d-7257-4adf-a3f8-26e93163633e.jpg",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-white py-16 text-text-dark sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Фото выполненных работ</h2>
        <p className="mt-4 max-w-3xl text-text-secondary">
          Реальные объекты с разными типами ограждений. Показываем результат,
          который клиент получает на сдаче.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {portfolioItems.map((item) => (
            <article
              key={`${item.type}-${item.district}`}
              className="overflow-hidden rounded-2xl border border-border bg-white shadow-card transition hover:border-brand/35 hover:shadow-card-hover"
            >
              <Image
                src={item.image}
                alt={item.type}
                width={1200}
                height={560}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="grid gap-2 p-5 text-sm text-text-secondary">
                <p className="text-base font-semibold text-text-dark">{item.type}</p>
                <p>Длина: {item.length}</p>
                <p>Район: {item.district}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
