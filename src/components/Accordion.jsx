import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function AccordionItem({ item, isOpen, onToggle, index, idPrefix }) {
  const panelId = `${idPrefix}-panel-${index}`
  const buttonId = `${idPrefix}-button-${index}`

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

// Acordeón accesible y reutilizable. `idPrefix` evita colisiones de id
// cuando hay más de un acordeón en la misma página.
export default function Accordion({ items, idPrefix = 'accordion' }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div>
      {items.map((item, i) => (
        <AccordionItem
          key={item.pregunta}
          item={item}
          index={i}
          idPrefix={idPrefix}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  )
}
