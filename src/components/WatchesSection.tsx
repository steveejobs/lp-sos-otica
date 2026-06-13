import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

const featuredWatch = {
  title: "Coleção em destaque",
  text: "Uma seleção Technos com presença, acabamento e opções para presente.",
  image: "/imagens/TECHNOS-02.jpg",
};

const watches = [
  {
    title: "Clássicos de vitrine",
    text: "Modelos versáteis para acompanhar trabalho, eventos e rotina.",
    image: "/imagens/TECHNOS-01.jpg",
  },
  {
    title: "Automáticos selecionados",
    text: "Peças com visual marcante e detalhes de acabamento para observar de perto.",
    image: "/imagens/TECHNOS-06.jpg",
  },
  {
    title: "Presentes especiais",
    text: "Opções com apresentação cuidadosa para escolher com bom gosto.",
    image: "/imagens/TECHNOS-02 (1).jpg",
  },
];

function publicAssetExists(src: string) {
  const filePath = path.join(process.cwd(), "public", src.replace(/^\//, ""));
  return fs.existsSync(filePath);
}

export function WatchesSection() {
  return (
    <section
      id="relogios"
      className="section watches-section"
      aria-labelledby="watches-title"
    >
      <div className="site-shell watches-intro">
        <AnimatedReveal className="section-heading compact">
          <p className="eyebrow">Relógios e acessórios</p>
          <h2 id="watches-title">
            Relógios com presença, escolha e bom acabamento
          </h2>
          <p>
            Uma curadoria compacta para quem quer completar o estilo ou escolher
            um presente com aparência mais refinada.
          </p>
        </AnimatedReveal>
        <AnimatedReveal className="watches-cta" delay={0.12}>
          <a href={site.whatsappUrl} className="button button-red">
            <MessageCircle size={18} aria-hidden="true" />
            Ver opções pelo WhatsApp
          </a>
        </AnimatedReveal>
      </div>

      <div className="site-shell watches-editorial">
        <AnimatedReveal className="watch-card watch-card-featured" delay={0.08}>
          <WatchImage
            src={featuredWatch.image}
            alt={featuredWatch.title}
            sizes="(max-width: 1040px) 92vw, 640px"
            priority
          />
          <div className="watch-copy">
            <p className="watch-kicker">Technos</p>
            <h3>{featuredWatch.title}</h3>
            <p>{featuredWatch.text}</p>
          </div>
        </AnimatedReveal>

        <div className="watches-grid">
          {watches.map((watch, index) => (
            <AnimatedReveal
              key={watch.title}
              className="watch-card"
              delay={0.14 + index * 0.06}
            >
              <WatchImage
                src={watch.image}
                alt={watch.title}
                sizes="(max-width: 680px) 92vw, 260px"
              />
              <div className="watch-copy">
                <h3>{watch.title}</h3>
                <p>{watch.text}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WatchImage({
  src,
  alt,
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
}) {
  const hasImage = publicAssetExists(src);

  return (
    <div className="watch-media">
      {hasImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="watch-image"
        />
      ) : (
        <div className="watch-placeholder" aria-hidden="true">
          <span />
          <small>Imagem em breve</small>
        </div>
      )}
    </div>
  );
}
