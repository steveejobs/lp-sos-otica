"use client";

import {
  CarFront,
  Eye,
  Glasses,
  MonitorSmartphone,
  Sparkles,
  Sun,
  Timer,
} from "lucide-react";
import { useState } from "react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

const routineOptions = [
  {
    icon: MonitorSmartphone,
    title: "Uso muito celular e computador",
    answer:
      "Lentes com antirreflexo e conforto para telas ajudam a reduzir reflexos e melhorar a leitura durante o dia.",
  },
  {
    icon: CarFront,
    title: "Dirijo à noite",
    answer:
      "O antirreflexo pode trazer mais conforto contra faróis, reflexos e luzes fortes no trânsito.",
  },
  {
    icon: Sun,
    title: "Sinto incômodo com sol forte",
    answer:
      "Óculos solares com proteção UV ajudam a proteger os olhos e deixam a rotina mais confortável.",
  },
  {
    icon: Timer,
    title: "Preciso de óculos rápido",
    answer:
      "Na SOS Ótica, muitos óculos ficam prontos em até 30 minutos, conforme receita, lente e disponibilidade.",
  },
  {
    icon: Glasses,
    title: "Quero uma armação confortável",
    answer:
      "A escolha da armação influencia peso, ajuste no rosto e conforto no uso diário.",
  },
  {
    icon: Eye,
    title: "Preciso fazer teste de visão",
    answer:
      "A SOS Ótica realiza teste de visão no local para orientar melhor sua escolha.",
  },
];

export function RoutineLensSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = routineOptions[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section
      id="rotina"
      className="section routine-lens-section"
      aria-labelledby="routine-lens-title"
    >
      <div className="site-shell routine-lens-layout">
        <AnimatedReveal className="section-heading compact routine-lens-copy">
          <p className="eyebrow">Escolha guiada</p>
          <h2 id="routine-lens-title">Qual lente combina com sua rotina?</h2>
          <p>
            Responda pelo seu momento de uso e veja o que pode fazer mais
            sentido para seus olhos.
          </p>
        </AnimatedReveal>

        <AnimatedReveal className="routine-lens-panel" delay={0.08}>
          <div className="routine-lens-options" role="list">
            {routineOptions.map((option, index) => {
              const Icon = option.icon;
              const selected = index === activeIndex;

              return (
                <button
                  className={`routine-lens-card${selected ? " is-active" : ""}`}
                  type="button"
                  key={option.title}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={selected}
                >
                  <Icon size={18} aria-hidden="true" />
                  <span>{option.title}</span>
                </button>
              );
            })}
          </div>

          <div className="routine-lens-answer" aria-live="polite">
            <span className="routine-answer-icon">
              <ActiveIcon size={22} aria-hidden="true" />
            </span>
            <small>Para sua rotina</small>
            <h3>{active.title}</h3>
            <p>{active.answer}</p>
            <a href={site.whatsappUrl} className="button button-red">
              <Sparkles size={17} aria-hidden="true" />
              Falar com a SOS Ótica
            </a>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
