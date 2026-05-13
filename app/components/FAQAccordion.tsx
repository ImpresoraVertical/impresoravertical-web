"use client";

import { useState } from "react";

interface FAQ {
  q: string;
  a: string;
}

export default function FAQAccordion({ questions }: { questions: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-px bg-stone/15 border border-stone/15">
      {questions.map((faq, i) => (
        <div key={i} className="bg-paper">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-bone transition-colors"
            aria-expanded={openIndex === i}
          >
            <span className="font-serif text-h5 text-ink leading-snug flex-1">
              {faq.q}
            </span>
            <span
              className={`font-mono text-h5 text-ocre-500 transition-transform shrink-0 ${
                openIndex === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-6 -mt-2">
              <p className="text-body text-stone leading-relaxed text-pretty">
                {faq.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
