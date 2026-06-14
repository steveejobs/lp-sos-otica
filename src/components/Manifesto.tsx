import { Clock3, Eye, Star } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

const proofs = [
  {
    icon: Clock3,
    title: "Até 30 minutos",
    text: "Agilidade para quem precisa resolver o óculos sem perder o dia.",
  },
  {
    icon: Eye,
    title: "Teste de visão",
    text: "Orientação no local para escolher com mais clareza.",
  },
  {
    icon: Star,
    title: "4,9 no Google",
    text: "92 avaliações reforçam a confiança de quem já passou pela SOS.",
  },
];

export function Manifesto() {
  return (
    <section
      id="rapidez"
      className="section proof-section"
      aria-labelledby="proof-title"
    >
      <div className="site-shell">
        <AnimatedReveal className="section-heading proof-heading">
          <p className="eyebrow">Rapidez com critério</p>
          <h2 id="proof-title">Óculos pronto em até 30 minutos</h2>
          <p>
            Óculos não é só grau. É conforto no rosto, nitidez na rotina e
            segurança para escolher sem pressa.
          </p>
          <small className="promise-note">{site.promiseNote}</small>
        </AnimatedReveal>

        <div className="proof-grid">
          {proofs.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedReveal
                key={item.title}
                className="proof-item"
                delay={index * 0.08}
              >
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
