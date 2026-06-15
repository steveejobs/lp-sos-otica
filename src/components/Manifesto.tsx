import { Clock3, Eye, Star } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";

const proofs = [
  {
    icon: Clock3,
    title: "Óculos pronto em até 30 minutos",
    text: "Conforme receita, lente e disponibilidade.",
  },
  {
    icon: Eye,
    title: "Teste de visão no local",
    text: "Atendimento direto na loja.",
  },
  {
    icon: Star,
    title: "4,9 no Google · 92 avaliações",
    text: "Prova social objetiva de clientes reais.",
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
        <h2 id="proof-title" className="sr-only">
          Provas rápidas da SOS Ótica
        </h2>

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
