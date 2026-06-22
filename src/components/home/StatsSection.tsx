"use client";

import { useEffect, useRef, useState } from "react";

function StatCard({ value, suffix, label, icon }: {
  value: number; suffix: string; label: string; icon: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * value));
          if (progress < 1) requestAnimationFrame(tick);
          else setCount(value);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl">{icon}</div>
      <div className="mt-3 text-5xl font-black text-white">
        {count}{suffix}
      </div>
      <div className="mt-2 text-sm text-white/60">{label}</div>
    </div>
  );
}

const stats = [
  { value: 200, suffix: "+",    label: "Установленных кондиционеров", icon: "❄️" },
  { value: 2,   suffix: " года",label: "Гарантия на монтаж",          icon: "🛡️" },
  { value: 98,  suffix: "%",    label: "Клиентов рекомендуют нас",    icon: "⭐" },
  { value: 1,   suffix: " день",label: "Срок монтажа в большинстве случаев", icon: "⚡" },
];

export default function StatsSection() {
  return (
    <section className="bg-brand-dark py-16">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  );
}
