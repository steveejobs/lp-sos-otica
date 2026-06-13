import { AnimatedReveal } from "@/components/AnimatedReveal";

const testimonials = [
  {
    quote: "Atendimento rápido e explicação clara sobre as lentes.",
    person: "Cliente SOS Ótica"
  },
  {
    quote: "Consegui resolver meu óculos no mesmo dia, com ajuste confortável.",
    person: "Cliente SOS Ótica"
  },
  {
    quote: "Boa variedade de armações e equipe atenciosa na escolha.",
    person: "Cliente SOS Ótica"
  }
];

export function SocialProof() {
  return (
    <section className="section testimonials-section" aria-labelledby="testimonials-title">
      <div className="site-shell">
        <AnimatedReveal className="section-heading compact">
          <p className="eyebrow">Depoimentos</p>
          <h2 id="testimonials-title">Experiências que reforçam rapidez e cuidado.</h2>
        </AnimatedReveal>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <AnimatedReveal key={item.quote} className="testimonial-item" delay={index * 0.08}>
              <p>“{item.quote}”</p>
              <span>{item.person}</span>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
