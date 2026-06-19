"use client";

export default function StickyCTA() {
  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 hidden md:block">
        <a
          href="tel:+79952317707"
          className="inline-flex items-center gap-2 rounded-xl bg-brand-dark px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
          +7 (995) 231-77-07
        </a>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white p-3 md:hidden">
        <a
          href="tel:+79952317707"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-dark px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
          Позвонить
        </a>
      </div>
    </>
  );
}
