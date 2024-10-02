'use client'
import { useState, useEffect } from 'react'

export default function MyAccordion({ children, title, id, active = false }) {
  const [accordionOpen, setAccordionOpen] = useState(false)
  useEffect(() => {
    setAccordionOpen(active)
  }, [])

  return (
    <div className="py-2">
      <h2>
        <button
          className="flex items-center justify-between text-base lg:text-xl  w-full text-left py-0 lg:py-2"
          onClick={(e) => {
            e.preventDefault()
            setAccordionOpen(!accordionOpen)
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span>{title}</span>

          <svg
            className="fill-indigo-600 shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && '!rotate-180'
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && '!rotate-180'
              }`}
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-3">{children}</div>
        </div>
      </div>
    </div>
  )
}
