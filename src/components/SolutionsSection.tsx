import { Baby, BriefcaseBusiness, Car, MonitorSmartphone, Sun } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";

const solutions = [
  {
    icon: MonitorSmartphone,
    title: "Para quem usa telas",
    text: "Tratamentos que ajudam a reduzir reflexos e melhorar o conforto em celular, computador e ambientes de trabalho."
  },
  {
    icon: Car,
    title: "Para dirigir",
    text: "Orientação para leitura de placas, contraste, antirreflexo e adaptação segura no dia a dia."
  },
  {
    icon: Sun,
    title: "Para o sol forte",
    text: "Óculos solares e proteção UV para enfrentar a luminosidade de Araguaína com mais conforto."
  },
  {
    icon: BriefcaseBusiness,
    title: "Para estudo e trabalho",
    text: "Armações leves e lentes pensadas para uso prolongado, leitura e foco por muitas horas."
  },
  {
    icon: Baby,
    title: "Para crianças",
    text: "Modelos resistentes, ajuste cuidadoso e atenção ao conforto para a criança usar sem incômodo."
  }
];

export function SolutionsSection() {
  return (
    <section id="solucoes" className="section solutions-section" aria-labelledby="solutions-title">
      <div className="site-shell solutions-intro">
        <AnimatedReveal className="section-heading">
          <p className="eyebrow">Soluções por necessidade</p>
          <h2 id="solutions-title">O óculos certo depende de como você vive o dia.</h2>
        </AnimatedReveal>
        <AnimatedReveal className="solutions-note" delay={0.08}>
          A conversa começa pela rotina: tela, direção, sol, leitura, trabalho, estudo e adaptação.
          A partir disso, a escolha fica mais simples e mais segura.
        </AnimatedReveal>
      </div>

      <div className="site-shell solutions-grid">
        {solutions.map((item, index) => {
          const Icon = item.icon;
          return (
            <AnimatedReveal className="solution-item" key={item.title} delay={index * 0.05}>
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
