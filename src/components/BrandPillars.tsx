import { Baby, MonitorSmartphone, Sparkles, Sun } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";

const categories = [
  {
    icon: Sparkles,
    title: "Óculos de grau",
    text: "Armações para rotina, trabalho e estudo, com conforto para uso prolongado."
  },
  {
    icon: Sun,
    title: "Óculos solar",
    text: "Proteção, conforto e estilo para o sol de Araguaína."
  },
  {
    icon: Baby,
    title: "Infantil",
    text: "Modelos resistentes e leves para acompanhar a criança sem incomodar."
  },
  {
    icon: MonitorSmartphone,
    title: "Filtro azul e antirreflexo",
    text: "Tratamentos para telas, direção, leitura e ambientes com muita luz."
  }
];

export function BrandPillars() {
  return (
    <section id="saude-visual" className="section health-section" aria-labelledby="health-title">
      <div className="site-shell health-layout">
        <AnimatedReveal className="section-heading">
          <p className="eyebrow">Saúde visual</p>
          <h2 id="health-title">Mais conforto para enxergar, adaptar e viver melhor.</h2>
        </AnimatedReveal>

        <AnimatedReveal className="health-copy" delay={0.1}>
          <p>
            A escolha do óculos certo passa por medidas, rotina, adaptação e orientação. A equipe
            ajuda você a comparar opções sem excesso de informação e com atenção ao que muda no uso
            real: leitura, tela, sol, direção e trabalho.
          </p>
          <div className="health-points">
            <span>Cuidado</span>
            <span>Adaptação</span>
            <span>Conforto</span>
            <span>Orientação</span>
          </div>
        </AnimatedReveal>
      </div>

      <div id="categorias" className="site-shell category-grid" aria-label="Categorias de produtos">
        {categories.map((item, index) => {
          const Icon = item.icon;
          return (
            <AnimatedReveal key={item.title} className="category-item" delay={index * 0.06}>
              <Icon size={22} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </AnimatedReveal>
          );
        })}
      </div>
    </section>
  );
}
