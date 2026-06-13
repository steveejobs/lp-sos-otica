import { Shield, Sparkles, SunMedium } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";

const lensOptions = [
  {
    icon: Sparkles,
    title: "Antirreflexo",
    text: "Ajuda a reduzir reflexos em luz artificial, direção noturna, telas e ambientes com muita iluminação."
  },
  {
    icon: Shield,
    title: "Luz azul",
    text: "Indicado para quem passa muitas horas em telas e busca mais conforto na rotina digital."
  },
  {
    icon: SunMedium,
    title: "Proteção UV",
    text: "Essencial para proteger os olhos em ambientes externos e no sol forte de Araguaína."
  }
];

export function LensGuidance() {
  return (
    <section id="lentes" className="section lens-guidance-section" aria-labelledby="lens-guidance-title">
      <div className="site-shell lens-guidance-layout">
        <AnimatedReveal className="section-heading compact">
          <p className="eyebrow">Guia de lentes</p>
          <h2 id="lens-guidance-title">Menos dúvida na escolha da lente.</h2>
          <p>
            A lente ideal não é só grau. Ela precisa conversar com sua rotina, sua sensibilidade à
            luz, seus horários e o tipo de armação escolhido.
          </p>
        </AnimatedReveal>

        <div className="lens-guidance-list">
          {lensOptions.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedReveal className="lens-guidance-item" key={item.title} delay={index * 0.08}>
                <span>
                  <Icon size={21} aria-hidden="true" />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
