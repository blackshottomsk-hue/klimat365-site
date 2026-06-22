"use client";

import Link from "next/link";
import HeroCanvas from "./HeroCanvas";

export default function HeroSection() {
  return (
    <section style={{ position: "relative", overflow: "hidden", minHeight: "70vh", display: "flex", alignItems: "center", background: "#0a1628" }}>

      {/* Фоновое фото */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/01-main-hero/1.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0, left: 0, width: "100%", height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          zIndex: 0,
        }}
      />

      {/* Оверлей */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        background: "linear-gradient(105deg, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.55) 42%, rgba(10,22,40,0.15) 100%)",
        zIndex: 1,
      }} />

      {/* Анимация частиц */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2 }}>
        <HeroCanvas />
      </div>

      {/* Контент */}
      <div style={{ position: "relative", zIndex: 3, width: "100%", maxWidth: 1600, margin: "0 auto", padding: "80px 32px" }}>
        <div style={{ maxWidth: 660 }}>

          {/* Бейдж */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(0,0,0,0.18)",
            borderRadius: 999, padding: "6px 16px",
            marginBottom: 24,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#93c5fd", display: "inline-block" }} />
            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, fontWeight: 500 }}>
              Климат 365 — кондиционеры в СПб и Ленобласти
            </span>
          </div>

          {/* Заголовок */}
          <h1 style={{
            color: "#ffffff", fontWeight: 800,
            fontSize: "clamp(32px, 4.5vw, 58px)",
            lineHeight: 1.1, margin: "0 0 20px",
          }}>
            Монтаж, обслуживание и ремонт кондиционеров
            <span style={{ color: "#93c5fd" }}> в Санкт-Петербурге и Ленобласти</span>
          </h1>

          {/* Подзаголовок */}
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: 1.6, margin: "0 0 32px", maxWidth: 520 }}>
            Устанавливаем кондиционеры в новых ЖК, частных домах и офисах. Выезжаем по СПб и Ленобласти — Новосаратовка, Кудрово, Мурино и ближайшие районы.
          </p>

          {/* Преимущества */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
            {["Договор и акты", "Фиксированная цена", "Гарантия на работы", "Выезд мастера бесплатно"].map(item => (
              <span key={item} style={{
                display: "flex", alignItems: "center", gap: 6,
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 8, padding: "7px 14px",
                color: "rgba(255,255,255,0.88)", fontSize: 13,
              }}>
                <span style={{ color: "#4ade80" }}>✓</span> {item}
              </span>
            ))}
          </div>

          {/* Кнопки */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}>
            <Link href="/kontakty" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              background: "#1a56db", color: "#fff",

              borderRadius: 12, padding: "14px 28px",
              fontWeight: 700, fontSize: 15, textDecoration: "none",
              border: "none", cursor: "pointer",
            }}>
              Оставить заявку →
            </Link>
            <a href="tel:+79039522177" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#fff", borderRadius: 12, padding: "14px 28px",
              fontWeight: 600, fontSize: 15, textDecoration: "none",
            }}>
              +7 (903) 952-21-77
            </a>
          </div>

          {/* Зона работы */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.45)", fontSize: 12 }}>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: "#4ade80", flexShrink: 0 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            Санкт-Петербург и Лен. область · Новосаратовка · Кудрово · Мурино · Девяткино
          </div>

        </div>
      </div>
    </section>
  );
}
