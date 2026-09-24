import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems, FAQItem } from '@/data/faqItems';

function FAQAccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-warm-200 dark:border-warm-700">
      <h3>
        <button
          onClick={onToggle}
          className="flex items-center justify-between w-full py-5 text-left group"
          aria-expanded={isOpen}
        >
          <span className="text-sm md:text-base font-semibold text-warm-800 dark:text-warm-200 pr-4 group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors">
            {item.question}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-warm-500 dark:text-warm-400 flex-shrink-0 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </h3>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-5 text-sm text-warm-600 dark:text-warm-400 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white dark:bg-warm-800/50 border-y border-warm-200 dark:border-warm-700 scroll-mt-20">
      <div className="container-narrow">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-secondary-600 dark:text-secondary-400">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        <div className="border-t border-warm-200 dark:border-warm-700">
          {faqItems.map((item, i) => (
            <FAQAccordionItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
