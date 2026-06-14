"use client";

import {
  CheckCircle2,
  ClipboardCheck,
  Glasses,
  MessageCircle,
  ScanEye,
  SlidersHorizontal,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, KeyboardEvent } from "react";
import { useId, useState } from "react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

type ProcessStep = {
  label: string;
  title: string;
  text: string;
  icon: LucideIcon;
};

const processSteps: ProcessStep[] = [
  {
    label: "Receita",
    title: "Receita conferida",
    text: "Conferimos sua receita ou realizamos o teste de visão no local.",
    icon: ClipboardCheck,
  },
  {
    label: "Lente",
    title: "Lente indicada",
    text: "Indicamos a lente mais adequada para sua rotina, seja para telas, leitura, direção ou uso diário.",
    icon: ScanEye,
  },
  {
    label: "Montagem",
    title: "Montagem cuidadosa",
    text: "A lente é preparada e encaixada com cuidado na armação escolhida.",
    icon: Wrench,
  },
  {
    label: "Ajuste",
    title: "Ajuste no rosto",
    text: "O óculos é ajustado no rosto para mais conforto, encaixe e segurança.",
    icon: SlidersHorizontal,
  },
  {
    label: "Pronto",
    title: "Pronto para usar",
    text: "Em muitos casos, seu óculos fica pronto em até 30 minutos, conforme receita, lente e disponibilidade.",
    icon: CheckCircle2,
  },
];

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabId = useId();
  const reduceMotion = useReducedMotion();
  const activeStep = processSteps[activeIndex];
  const ActiveIcon = activeStep.icon;
  const progress = activeIndex / (processSteps.length - 1);

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
          <h2 id="process-title">
            Do atendimento ao óculos pronto, sem enrolação
          </h2>
          <p>
            Um processo simples, cuidadoso e rápido para você sair enxergando
            melhor.
          </p>
        </AnimatedReveal>

        <AnimatedReveal className="process-card" delay={0.08}>
          <div
            className="process-tabs"
            role="tablist"
            aria-label="Etapas do atendimento da SOS Ótica"
            style={{ "--process-progress": progress } as CSSProperties}
          >
            <span className="process-progress-track" aria-hidden="true">
              <span className="process-progress-fill" />
            </span>

            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const selected = index === activeIndex;

              return (
                <button
                  id={`${tabId}-tab-${index}`}
                  className={`process-tab${selected ? " is-active" : ""}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`${tabId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  key={step.label}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => selectByKey(event, index)}
                >
                  <span className="process-tab-icon">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span>{step.label}</span>
                </button>
              );
            })}
          </div>

          <div className="process-body">
            <div
              className={`process-visual process-visual-step-${activeIndex}`}
              aria-hidden="true"
              style={{ "--process-progress": progress } as CSSProperties}
            >
              <div className="process-visual-glow" />
              <div className="process-frame">
                <span className="process-lens process-lens-left" />
                <span className="process-lens process-lens-right" />
                <span className="process-bridge" />
                <span className="process-temple process-temple-left" />
                <span className="process-temple process-temple-right" />
              </div>
              <div className="process-scan">
                <span />
                <span />
                <span />
              </div>
              <div className="process-workline">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <span
                      className={index <= activeIndex ? "is-lit" : ""}
                      key={step.label}
                    >
                      <Icon size={14} aria-hidden="true" />
                    </span>
                  );
                })}
              </div>
            </div>

            <motion.div
              id={`${tabId}-panel`}
              className="process-copy"
              role="tabpanel"
              aria-labelledby={`${tabId}-tab-${activeIndex}`}
              key={activeStep.label}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="process-step-kicker">
                Etapa {activeIndex + 1} de {processSteps.length}
              </span>
              <span className="process-active-icon">
                <ActiveIcon size={22} aria-hidden="true" />
              </span>
              <h3>{activeStep.title}</h3>
              <p>{activeStep.text}</p>
              <div className="process-actions">
                <a href={site.whatsappUrl} className="button button-red">
                  <MessageCircle size={18} aria-hidden="true" />
                  Chamar no WhatsApp
                </a>
                <small>Atendimento no Centro de Araguaína.</small>
              </div>
            </motion.div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
