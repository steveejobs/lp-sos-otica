import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

const faqs = [
  {
    question: "O óculos fica pronto em até 30 minutos?",
    answer:
      "Em muitos casos, sim. O prazo pode variar conforme receita, lente e disponibilidade.",
  },
  {
    question: "A loja faz teste de visão?",
    answer: "Sim, a SOS Ótica realiza teste de visão no local.",
  },
  {
    question: "Onde fica a SOS Ótica?",
    answer: `Na ${site.displayAddress}.`,
  },
  {
    question: "Vocês parcelam?",
    answer: "Sim, em até 12x.",
  },
  {
    question: "Qual o horário de atendimento?",
    answer: "Segunda a sexta, das 8h às 18h. Sábado, das 8h às 12h.",
  },
];

export function FAQSection() {
  return (
    <section className="section faq-section" aria-labelledby="faq-title">
      <div className="site-shell faq-layout">
        <AnimatedReveal className="section-heading compact">
          <p className="eyebrow">Dúvidas comuns</p>
          <h2 id="faq-title">Perguntas rápidas antes da visita.</h2>
        </AnimatedReveal>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <AnimatedReveal
              className="faq-item"
              key={item.question}
              delay={index * 0.04}
            >
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
