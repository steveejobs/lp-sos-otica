import { Clock3, Eye, Glasses, MapPin, Ruler } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";

const proofs = [
  {
    icon: Clock3,
    title: "Rapidez",
    text: "Montagem ágil para quem precisa resolver o óculos sem perder o dia."
  },
  {
    icon: Eye,
    title: "Cuidado com a visão",
    text: "Orientação clara sobre rotina, adaptação, medidas e conforto visual."
  },
  {
    icon: Glasses,
    title: "Conforto",
    text: "Ajuste no rosto, escolha da armação e atenção ao uso real."
  },
  {
    icon: Ruler,
    title: "Precisão",
    text: "Conferência de receita, alinhamento e acabamento antes da entrega."
  },
  {
    icon: MapPin,
    title: "Araguaína",
    text: "Atendimento local no Centro, com rota simples e WhatsApp direto."
  }
];

export function Manifesto() {
  return (
    <section id="rapidez" className="section proof-section" aria-labelledby="proof-title">
      <div className="site-shell">
        <AnimatedReveal className="section-heading proof-heading">
          <p className="eyebrow">Rapidez com critério</p>
          <h2 id="proof-title">Óculos pronto em até 40 minutos</h2>
          <p>
            Uma entrega rápida só vale quando vem com cuidado. A SOS Ótica combina laboratório ágil,
            orientação objetiva e acabamento preciso para entregar clareza com confiança.
          </p>
        </AnimatedReveal>

        <div className="proof-grid">
          {proofs.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedReveal key={item.title} className="proof-item" delay={index * 0.08}>
                <span className="proof-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
