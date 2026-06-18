import Button from "../ui/Button";
import Image from "next/image";

const fenceTypes = [
  {
    title: "Заборы из профнастила",
    text: "Рациональный выбор для приватности и четкой геометрии периметра.",
    advantages: "Надежность, минимум обслуживания, предсказуемый бюджет.",
    price: "от 2 300 ₽/м.п.",
    image:
      "/images/04-zabory/DSC09628.jpg",
  },
  {
    title: "Евроштакетник",
    text: "Современный формат ограждения, где важны внешний вид и долговечность.",
    advantages: "Аккуратный дизайн, вариативность высоты и цвета.",
    price: "от 2 600 ₽/м.п.",
    image:
      "/images/04-zabory/DSC09524.jpg",
  },
  {
    title: "3D-сетка",
    text: "Оптимально для территорий, где важны обзорность и быстрый монтаж.",
    advantages: "Легкая конструкция, стабильный ресурс, хорошая вентиляция.",
    price: "от 1 950 ₽/м.п.",
    image:
      "/images/04-zabory/DSC09540.jpg",
  },
  {
    title: "Рабица",
    text: "Практичное решение, когда важны скорость установки и доступная стоимость.",
    advantages: "Экономичность, ремонтопригодность, быстрый запуск проекта.",
    price: "от 1 450 ₽/м.п.",
    image:
      "/images/04-zabory/DSC09665.jpg",
  },
  {
    title: "Ворота и калитки",
    text: "Завершаем периметр функциональными въездными и входными решениями.",
    advantages: "Интеграция с ограждением, варианты автоматики, удобство использования.",
    price: "от 55 000 ₽ за комплект",
    image:
      "/images/05-vorota/DSC09489.jpg",
  },
];

export default function FenceTypes() {
  return (
    <section className="bg-background-light py-16 text-text-dark sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Услуги ZABORIO</h2>
        <p className="mt-4 max-w-3xl text-text-secondary">
          Подбираем решение под задачу объекта и фиксируем ориентир по цене еще на
          этапе согласования сметы.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fenceTypes.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-border bg-white shadow-card transition hover:border-brand/35 hover:shadow-card-hover"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={440}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-44 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-text-dark">{item.title}</h3>
                <p className="mt-3 text-sm text-text-secondary">{item.text}</p>
                <p className="mt-3 text-sm text-text-secondary">
                  <span className="font-semibold text-text-dark">Преимущества:</span> {item.advantages}
                </p>
                <p className="mt-3 text-base font-bold text-brand">{item.price}</p>
                <Button className="mt-5 px-4 py-2 text-sm">Подробнее</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
