"use client";

import { useState } from "react";
import { contacts } from "../../lib/contacts";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Input from "../ui/Input";
import Section from "../ui/Section";
import Textarea from "../ui/Textarea";
import Link from "next/link";

export default function ContactSection() {
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) return;
    setLoading(true);
    try {
      await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, comment }),
      });
      setSent(true);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section>
      <Container className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-text-dark">Контакты и заявка</h2>
          <p className="mt-4 text-text-secondary">
            Оставьте заявку — подготовим понятное КП под ваш участок, предложим
            2-3 варианта комплектации и сразу объясним, где можно оптимизировать
            бюджет без потери надежности.
          </p>
          <div className="mt-6 space-y-2 text-sm text-text-secondary">
            <p>{contacts.phone}</p>
            <p>{contacts.email}</p>
            <p>{contacts.address}</p>
          </div>
          <ul className="mt-5 grid gap-2 text-sm text-text-secondary">
            <li>• Работаем официально: договор, акты, гарантийные обязательства.</li>
            <li>• Подбираем технологию монтажа под реальные условия участка.</li>
            <li>• Фиксируем сроки и этапы работ до старта проекта.</li>
          </ul>
        </div>

        {sent ? (
          <div className="flex items-center justify-center rounded-2xl border border-border bg-white p-8 shadow-card text-center">
            <div>
              <p className="text-2xl font-bold text-brand-dark">Заявка отправлена!</p>
              <p className="mt-3 text-text-secondary">Мы перезвоним вам в течение рабочего дня.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-white p-6 shadow-card">
            <div className="grid gap-3">
              <Input
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                placeholder="Телефон"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <Textarea
                rows={4}
                placeholder="Комментарий"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-brand"
                />
                <span className="text-xs text-text-secondary leading-relaxed">
                  Я согласен(а) на обработку персональных данных в соответствии с{" "}
                  <Link href="/politika-konfidencialnosti" className="text-brand hover:underline" target="_blank">
                    Политикой конфиденциальности
                  </Link>
                </span>
              </label>

              <Button type="submit" disabled={!consent || loading} className="disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? "Отправка..." : "Отправить заявку"}
              </Button>
            </div>
          </form>
        )}
      </Container>
      <Container className="mt-6">
        <div className="rounded-2xl border border-border bg-background-light p-5">
          <h3 className="text-xl font-semibold text-text-dark">Карта зоны выезда</h3>
          <p className="mt-2 text-sm text-text-secondary">
            Работаем по Санкт-Петербургу и Ленинградской области, с приоритетным
            выездом в южные районы города и ближайшие направления по ЛО. На
            этапе звонка сразу подтверждаем доступность бригады по вашему адресу.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-border">
            <iframe
              src="https://api-maps.yandex.ru/services/constructor/1.0/html/?um=constructor%3A68bd3789a780d3f7d5018ff143d573e7c7e125e6c2d7029c94d61137949b3fc9&lang=ru_RU&scroll=true"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
              title="Карта зоны выезда ZABORIO"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
