"use client";

import {
  CheckCircle2,
  ClipboardCheck,
  MessageCircle,
  ScanEye,
  SlidersHorizontal,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { KeyboardEvent } from "react";
import { useId, useState } from "react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

type ProcessStep = {
  label: string;
  text: string;
  icon: LucideIcon;
};

const processSteps: ProcessStep[] = [
  {
    label: "Receita",
    text: "Conferimos a receita ou fazemos o teste de visão.",
    icon: ClipboardCheck,
  },
  {
    label: "Lente",
    text: "Indicamos a lente adequada para sua rotina.",
    icon: ScanEye,
  },
  {
    label: "Montagem",
    text: "Preparamos a lente e encaixamos na armação.",
    icon: Wrench,
  },
  {
    label: "Ajuste",
    text: "Ajustamos o óculos para ficar confortável.",
    icon: SlidersHorizontal,
  },
  {
    label: "Pronto",
    text: "Muitos óculos ficam prontos em até 30 minutos.",
    icon: CheckCircle2,
  },
];

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabId = useId();
  const reduceMotion = useReducedMotion();
  const activeStep = processSteps[activeIndex];
  const ActiveIcon = activeStep.icon;

  function selectByKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (
      ![
        "ArrowRight",
        "ArrowDown",
        "ArrowLeft",
        "ArrowUp",
        "Home",
        "End",
      ].includes(event.key)
    ) {
      return;
    }

    event.preventDefault();
    const nextIndex =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? processSteps.length - 1
          : event.key === "ArrowRight" || event.key === "ArrowDown"
            ? (index + 1) % processSteps.length
            : (index - 1 + processSteps.length) % processSteps.length;

    setActiveIndex(nextIndex);
    document.getElementById(`${tabId}-tab-${nextIndex}`)?.focus();
  }

  return (
    <section
      id="processo"
      className="section process-section"
      aria-labelledby="process-title"
    >
      <div className="site-shell process-shell">
        <AnimatedReveal className="section-heading compact process-heading">
          <p className="eyebrow">Processo SOS</p>
          <h2 id="process-title">Como a SOS resolve seu óculos</h2>
          <p>
            Da receita ao ajuste final, um processo simples para você sair
            enxergando melhor.
          </p>
        </AnimatedReveal>

        <AnimatedReveal className="process-timeline-panel" delay={0.08}>
          <div
            className="process-timeline"
            role="tablist"
            aria-label="Etapas do processo da SOS Ótica"
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const selected = index === activeIndex;

              return (
                <button
                  id={`${tabId}-tab-${index}`}
                  className={`process-step${selected ? " is-active" : ""}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`${tabId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  key={step.label}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => selectByKey(event, index)}
                >
                  <span className="process-step-dot">
                    <Icon size={17} aria-hidden="true" />
                  </span>
                  <span className="process-step-copy">
                    <strong>{step.label}</strong>
                    <small>{step.text}</small>
                  </span>
                </button>
              );
            })}
          </div>

          <motion.div
            id={`${tabId}-panel`}
            className="process-summary"
            role="tabpanel"
            aria-labelledby={`${tabId}-tab-${activeIndex}`}
            key={activeStep.label}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="process-summary-icon">
              <ActiveIcon size={21} aria-hidden="true" />
            </span>
            <div>
              <span className="process-summary-kicker">
                Etapa {activeIndex + 1} de {processSteps.length}
              </span>
              <h3>{activeStep.label}</h3>
              <p>{activeStep.text}</p>
            </div>
            <div className="process-actions">
              <a href={site.whatsappUrl} className="button button-red">
                <MessageCircle size={18} aria-hidden="true" />
                Chamar no WhatsApp
              </a>
              <small>Atendimento no Centro de Araguaína.</small>
            </div>
          </motion.div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
