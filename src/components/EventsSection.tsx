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
              src="/assets/glasses/eyeglasses-hero.webp"
              alt=""
              fill
              sizes="(max-width: 680px) 88vw, 560px"
              className="lab-product-image"
            />
            <div className="lab-lens">
              <span className="hud hud-a" />
              <span className="hud hud-b" />
              <span className="hud hud-c" />
              <span className="hud-dot hud-dot-a" />
              <span className="hud-dot hud-dot-b" />
            </div>
            <div className="lab-mount" />
            <div className="lab-axis" />
            <div className="lab-scan" />
            <div className="lab-badge lab-badge-a">Receita conferida</div>
            <div className="lab-badge lab-badge-b">Ajuste final</div>
            <div className="lab-timer">30 min</div>
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
