import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import siteConfig from '../siteConfig'
import Reveal from './Reveal'

function FAQItem({ item, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-button-${index}`

  return (
    <div className="border-b border-charcoal/10">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className="font-serif text-lg font-medium text-charcoal">{item.pregunta}</span>
          <ChevronDown
            className={`h-5 w-5 flex-shrink-0 text-terracotta transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl text-sm leading-relaxed text-charcoal/70">{item.respuesta}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { faq } = siteConfig
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-charcoal sm:text-4xl">{faq.titulo}</h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10">
            {faq.lista.map((item, i) => (
              <FAQItem
                key={item.pregunta}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
