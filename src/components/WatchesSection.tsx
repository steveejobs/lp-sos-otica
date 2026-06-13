import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

const watches = [
  {
    title: "Relógios clássicos",
    text: "Peças discretas para presença elegante no trabalho e em ocasiões especiais.",
    image: "/assets/watches/watch-01.webp"
  },
  {
    title: "Relógios casuais",
    text: "Modelos versáteis para acompanhar a rotina com leveza e praticidade.",
    image: "/assets/watches/watch-02.webp"
  },
  {
    title: "Presentes especiais",
    text: "Escolhas com aparência cuidadosa para surpreender com bom gosto.",
    image: "/assets/watches/watch-03.webp"
  },
  {
    title: "Acessórios selecionados",
    text: "Detalhes que completam o visual sem perder funcionalidade.",
    image: "/assets/watches/watch-04.webp"
  }
];

function publicAssetExists(src: string) {
  const filePath = path.join(process.cwd(), "public", src.replace(/^\//, ""));
  return fs.existsSync(filePath);
}

export function WatchesSection() {
  return (
    <section id="relogios" className="section watches-section" aria-labelledby="watches-title">
      <div className="site-shell watches-intro">
        <AnimatedReveal className="section-heading compact">
          <p className="eyebrow">Relógios e acessórios</p>
          <h2 id="watches-title">Relógios que completam o seu estilo</h2>
          <p>Peças escolhidas para acompanhar sua rotina com elegância, presença e praticidade.</p>
        </AnimatedReveal>
        <AnimatedReveal className="watches-cta" delay={0.08}>
          <a href={site.whatsappUrl} className="button button-red">
            <MessageCircle size={18} aria-hidden="true" />
            Ver opções pelo WhatsApp
          </a>
        </AnimatedReveal>
      </div>

      <div className="site-shell watches-grid">
        {watches.map((watch, index) => {
          const hasImage = publicAssetExists(watch.image);

          return (
            <AnimatedReveal key={watch.title} className="watch-card" delay={index * 0.05}>
              <div className="watch-media">
                {hasImage ? (
                  <Image
                    src={watch.image}
                    alt={watch.title}
                    fill
                    sizes="(max-width: 680px) 92vw, 280px"
                    className="watch-image"
                  />
                ) : (
                  <div className="watch-placeholder" aria-hidden="true">
                    <span />
                    <small>Imagem em breve</small>
                  </div>
                )}
              </div>
              <div className="watch-copy">
                <h3>{watch.title}</h3>
                <p>{watch.text}</p>
              </div>
            </AnimatedReveal>
          );
        })}
      </div>
    </section>
  );
}
