"use client";

import { motion, useReducedMotion } from "framer-motion";

const proofItems = [
  {
    label: "Até 30 min",
    detail: "Conforme receita e lente",
  },
  {
    label: "Teste de visão",
    detail: "No local",
  },
  {
    label: "Centro de Araguaína",
    detail: "R. Sadoc Correa, 154",
  },
  {
    label: "4,9 no Google",
    detail: "92 avaliações",
  },
];

export function HeroProofBar() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="rapidez"
      className="hero-proof-section"
      aria-labelledby="hero-proof-title"
    >
      <div className="site-shell">
        <h2 id="hero-proof-title" className="sr-only">
          Provas rápidas da SOS Ótica
        </h2>

        <motion.dl
          className="hero-proof-bar"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={reduceMotion ? { opacity: 1, y: 0 } : undefined}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          {proofItems.map((item, index) => (
            <div className="hero-proof-item" key={item.label}>
              {index > 0 ? (
                <span className="hero-proof-separator" aria-hidden="true" />
              ) : null}
              <dt>{item.label}</dt>
              <dd>{item.detail}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
