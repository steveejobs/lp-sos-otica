import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

const featuredWatch = {
  title: "Coleção Technos em destaque",
  text: "Quatro recortes da vitrine em um bloco de coleção, com peças para uso diário, presente e ocasiões especiais.",
  image: "/imagens/TECHNOS-02.jpg",
};

const watches = [
  {
    title: "Automático GMT",
    text: "Estojo, pulseira extra e leitura marcante para observar de perto.",
    image: "/imagens/TECHNOS-01.jpg",
  },
  {
    title: "Vitrine selecionada",
    text: "Peças com presença, acabamento e boa composição para presente.",
    image: "/imagens/TECHNOS-06.jpg",
  },
  {
    title: "Coleção para comparar",
    text: "Um mosaico visual para comparar estilos, caixas e pulseiras.",
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
      <div className="site-shell watches-layout">
        <AnimatedReveal className="section-heading compact watches-copy-panel">
          <p className="eyebrow">Relógios e acessórios</p>
          <h2 id="watches-title">
            Relógios com presença e acabamento para escolher sem pressa
          </h2>
          <p>
            Uma curadoria Technos enxuta, com modelos de vitrine, opções para
            presente e peças que pedem comparação ao vivo.
          </p>
          <a href={site.whatsappUrl} className="button button-red">
            <MessageCircle size={18} aria-hidden="true" />
            Ver opções pelo WhatsApp
          </a>
        </AnimatedReveal>

        <AnimatedReveal className="watches-gallery" delay={0.08}>
          <WatchCard
            watch={featuredWatch}
            className="watch-card-featured"
            sizes="(max-width: 1040px) 92vw, 560px"
            priority
          />

          <div className="watches-grid">
            {watches.map((watch) => (
              <WatchCard
                key={watch.title}
                watch={watch}
                sizes="(max-width: 680px) 92vw, 320px"
              />
            ))}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

function WatchCard({
  watch,
  className = "",
  sizes,
  priority = false,
}: {
  watch: typeof featuredWatch;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <article className={`watch-card ${className}`}>
      <WatchImage
        src={watch.image}
        alt={watch.title}
        sizes={sizes}
        priority={priority}
      />
      <div className="watch-copy">
        <p className="watch-kicker">Technos</p>
        <h3>{watch.title}</h3>
        <p>{watch.text}</p>
      </div>
    </article>
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
