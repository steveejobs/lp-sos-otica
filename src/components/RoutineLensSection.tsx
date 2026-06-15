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
import { buildWhatsAppUrl } from "@/lib/site";

const routineOptions = [
  {
    icon: MonitorSmartphone,
    title: "Tela e computador",
    answer:
      "Antirreflexo e conforto para telas ajudam a reduzir reflexos e deixam a leitura mais estável durante o dia.",
    ctaLabel: "Pedir orientação para telas",
    message:
      "Olá, S.O.S Ótica! Vim pelo site e escolhi a opção: uso muito celular e computador. Quero orientação para lentes de tela.",
  },
  {
    icon: CarFront,
    title: "Direção à noite",
    answer:
      "O antirreflexo pode trazer mais conforto contra faróis, reflexos e luzes fortes no trânsito.",
    ctaLabel: "Falar sobre óculos para dirigir",
    message:
      "Olá, S.O.S Ótica! Vim pelo site e escolhi a opção: dirijo à noite. Quero saber sobre lentes que ajudem no conforto contra faróis e reflexos.",
  },
  {
    icon: Sun,
    title: "Sol forte",
    answer:
      "Óculos solares com proteção UV ajudam a proteger os olhos em ambientes externos.",
    ctaLabel: "Ver opções para sol forte",
    message:
      "Olá, S.O.S Ótica! Vim pelo site e escolhi a opção: sinto incômodo com sol forte. Quero saber sobre óculos solares com proteção UV.",
  },
  {
    icon: Timer,
    title: "Preciso rápido",
    answer:
      "Na SOS Ótica, muitos óculos ficam prontos em até 30 minutos, conforme receita, lente e disponibilidade.",
    ctaLabel: "Consultar óculos em até 30 minutos",
    message:
      "Olá, S.O.S Ótica! Vim pelo site e escolhi a opção: preciso resolver rápido. Quero saber se meu óculos pode ficar pronto em até 30 minutos.",
  },
  {
    icon: Glasses,
    title: "Armação confortável",
    answer:
      "A armação certa melhora peso, encaixe no rosto e conforto no uso diário.",
    ctaLabel: "Escolher armação confortável",
    message:
      "Olá, S.O.S Ótica! Vim pelo site e escolhi a opção: quero conforto no rosto. Quero ajuda para escolher uma armação confortável.",
  },
  {
    icon: Eye,
    title: "Teste de visão",
    answer:
      "A SOS Ótica realiza teste de visão no local para orientar melhor sua escolha.",
    ctaLabel: "Agendar teste de visão",
    message:
      "Olá, S.O.S Ótica! Vim pelo site e escolhi a opção: quero fazer teste de visão. Quero saber como funciona o teste no local.",
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
          <p>Toque na situação mais próxima e veja uma indicação direta.</p>
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
                  aria-label={`Selecionar: ${option.title}`}
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
            <small>Indicação</small>
            <h3>{active.title}</h3>
            <p>{active.answer}</p>
            <a
              href={buildWhatsAppUrl(active.message)}
              className="button button-red"
              aria-label={`${active.ctaLabel} pelo WhatsApp`}
            >
              <Sparkles size={17} aria-hidden="true" />
              {active.ctaLabel}
            </a>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
