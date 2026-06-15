"use client";

import {
  CheckCircle2,
  ClipboardCheck,
  ScanEye,
  SlidersHorizontal,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { AnimatedReveal } from "@/components/AnimatedReveal";

type ProcessStep = {
  label: string;
  text: string;
  icon: LucideIcon;
};

const processSteps: ProcessStep[] = [
  {
    label: "Receita",
    text: "Conferimos sua receita.",
    icon: ClipboardCheck,
  },
  {
    label: "Lente",
    text: "Definimos tipo e material.",
    icon: ScanEye,
  },
  {
    label: "Montagem",
    text: "Cortamos e encaixamos.",
    icon: Wrench,
  },
  {
    label: "Ajuste",
    text: "Ajustamos no rosto.",
    icon: SlidersHorizontal,
  },
  {
    label: "Pronto",
    text: "Revisão final e entrega.",
    icon: CheckCircle2,
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasStarted = useRef(false);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(sectionRef, {
    amount: 0.6,
    once: true,
  });
  const [progress, setProgress] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const maxStepIndex = processSteps.length - 1;
  const selectedProgress =
    selectedIndex === null ? 0 : selectedIndex / maxStepIndex;
  const visualProgress = reduceMotion
    ? 1
    : Math.max(progress, selectedProgress);
  const activeIndex =
    reduceMotion || selectedIndex !== null
      ? (selectedIndex ?? maxStepIndex)
      : animationStarted
        ? Math.max(
            0,
            Math.min(
              maxStepIndex,
              Math.floor(visualProgress * maxStepIndex + 0.16),
            ),
          )
        : -1;
  const isComplete = visualProgress >= 0.995;

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    if (!isInView || hasStarted.current) {
      return;
    }

    hasStarted.current = true;
    setAnimationStarted(true);
    const controls = animate(0, 1, {
      duration: 5.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: setProgress,
      onComplete: () => setProgress(1),
    });

    return () => controls.stop();
  }, [isInView, reduceMotion]);

  return (
    <section
      ref={sectionRef}
      id="processo"
      className={`section process-section${isComplete ? " is-complete" : ""}`}
      aria-labelledby="process-title"
      style={
        {
          "--process-progress": visualProgress,
        } as CSSProperties
      }
    >
      <div className="site-shell process-shell">
        <AnimatedReveal className="section-heading compact process-heading">
          <p className="eyebrow">Processo SOS</p>
          <h2 id="process-title">Como a SOS resolve seu óculos</h2>
          <p>Da receita ao ajuste final, cada etapa avança com precisão.</p>
        </AnimatedReveal>

        <AnimatedReveal className="process-timeline-panel" delay={0.08}>
          <div
            className="process-timeline"
            role="list"
            aria-label="Etapas do processo da SOS Ótica"
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const stepProgress = index / maxStepIndex;
              const isReached =
                reduceMotion ||
                selectedIndex === index ||
                (animationStarted && visualProgress >= stepProgress - 0.015);
              const isActive = index === activeIndex;
              const isFinal = index === maxStepIndex && isComplete;

              return (
                <div className="process-step" role="listitem" key={step.label}>
                  <button
                    className={`process-step-button${
                      isReached ? " is-reached" : ""
                    }${isActive ? " is-active" : ""}${
                      isFinal ? " is-final" : ""
                    }`}
                    type="button"
                    aria-current={isActive ? "step" : undefined}
                    aria-label={`Etapa ${index + 1}: ${step.label}. ${step.text}`}
                    onClick={() => setSelectedIndex(index)}
                  >
                    <span className="process-step-dot">
                      <Icon size={17} aria-hidden="true" />
                    </span>
                    <span className="process-step-copy">
                      <span className="process-step-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <strong>{step.label}</strong>
                      <small>{step.text}</small>
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
