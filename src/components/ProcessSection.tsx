import {
  CheckCircle2,
  ClipboardCheck,
  ScanEye,
  SlidersHorizontal,
  Wrench,
  type LucideIcon,
} from "lucide-react";
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
            Um caminho curto entre conferir a necessidade e entregar o óculos
            ajustado.
          </p>
        </AnimatedReveal>

        <AnimatedReveal className="process-timeline-panel" delay={0.08}>
          <div
            className="process-timeline"
            role="list"
            aria-label="Etapas do processo da SOS Ótica"
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div className="process-step" role="listitem" key={step.label}>
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
                </div>
              );
            })}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
