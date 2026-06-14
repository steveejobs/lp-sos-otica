import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { AnimatedReveal } from "@/components/AnimatedReveal";

const steps = [
  "Conferência da receita",
  "Escolha da lente",
  "Montagem precisa",
  "Ajuste no rosto",
];

export function EventsSection() {
  return (
    <section
      id="laboratorio"
      className="section lab-section"
      aria-labelledby="lab-title"
    >
      <div className="site-shell lab-layout">
        <AnimatedReveal className="lab-visual">
          <div className="lab-frame" aria-hidden="true">
            <Image
              src="/imagem labo.png"
              alt=""
              fill
              sizes="(max-width: 680px) 88vw, 560px"
              className="lab-product-image lab-diagram-image"
            />
          </div>
        </AnimatedReveal>

        <AnimatedReveal className="section-heading" delay={0.1}>
          <p className="eyebrow">Laboratório de precisão</p>
          <h2 id="lab-title">
            Agilidade com precisão: seu óculos pronto sem complicação.
          </h2>
          <p>
            O diferencial de tempo só faz sentido quando a montagem mantém
            alinhamento, acabamento e conforto. Por isso cada entrega passa por
            conferência e ajuste final.
          </p>
          <div className="lab-steps">
            {steps.map((step) => (
              <span key={step}>
                <CheckCircle2 size={18} aria-hidden="true" />
                {step}
              </span>
            ))}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
