"use client";

import { useEffect, useState } from "react";

export default function PrintProposalPage() {
  const [proposalHtml, setProposalHtml] = useState("");

  useEffect(() => {
    const html = window.sessionStorage.getItem("zaborio_print_proposal") || "";
    setProposalHtml(html);
    if (html) {
      window.setTimeout(() => window.print(), 500);
    }
  }, []);

  return (
    <main className="mx-auto max-w-6xl bg-white px-4 py-6 text-text-dark print:max-w-none print:px-0 print:py-0">
      <style jsx global>{`
        @media screen {
          body > header,
          body > footer,
          body > div:last-child {
            display: none !important;
          }
        }

        @media print {
          body > header,
          body > footer,
          body > div:last-child,
          .print-actions {
            display: none !important;
          }

          body {
            background: #fff !important;
          }
        }
      `}</style>

      <div className="print-actions mb-5 flex flex-wrap gap-3">
        <button onClick={() => window.print()} className="rounded-lg bg-brand px-4 py-2 font-semibold text-white">
          Печать / сохранить PDF
        </button>
        <button onClick={() => window.close()} className="rounded-lg border border-border px-4 py-2 font-semibold">
          Закрыть
        </button>
      </div>

      {proposalHtml ? (
        <div dangerouslySetInnerHTML={{ __html: proposalHtml }} />
      ) : (
        <div className="rounded-xl border border-border bg-background-light p-6">
          Данные расчета не найдены. Вернитесь в калькулятор и нажмите кнопку печати еще раз.
        </div>
      )}
    </main>
  );
}
