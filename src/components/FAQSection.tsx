import { AnimatedReveal } from "@/components/AnimatedReveal";

const faqs = [
  {
    question: "Todo óculos fica pronto em até 30 minutos?",
    answer:
      "O prazo depende da lente, do grau, da disponibilidade e do tipo de montagem. Quando possível, a equipe orienta o caminho mais rápido com conferência e ajuste final.",
  },
  {
    question: "Posso chamar pelo WhatsApp antes de ir até a loja?",
    answer:
      "Sim. Você pode enviar sua necessidade, receita ou dúvida pelo WhatsApp para receber orientação inicial antes de ir até a SOS Ótica.",
  },
  {
    question: "Vocês ajudam a escolher a armação?",
    answer:
      "Sim. A escolha considera formato do rosto, conforto, uso diário, tipo de lente e adaptação.",
  },
  {
    question: "Qual lente é melhor para quem usa muito computador?",
    answer:
      "Depende da receita e da rotina. Antirreflexo e tratamentos para luz azul podem ajudar no conforto, principalmente em uso prolongado de telas.",
  },
  {
    question: "Óculos solar também precisa de proteção UV?",
    answer:
      "Sim. Lente escura sem proteção adequada pode dar falsa sensação de segurança. A orientação busca conforto e proteção.",
  },
  {
    question: "Onde fica a SOS Ótica?",
    answer:
      "A loja fica na Rua Sadoc Correia, 154, Centro, Araguaína-TO, com atendimento local e rota pelo Google Maps.",
  },
];

export function FAQSection() {
  return (
    <section className="section faq-section" aria-labelledby="faq-title">
      <div className="site-shell faq-layout">
        <AnimatedReveal className="section-heading compact">
          <p className="eyebrow">Dúvidas comuns</p>
          <h2 id="faq-title">
            Perguntas que normalmente aparecem antes da compra.
          </h2>
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
