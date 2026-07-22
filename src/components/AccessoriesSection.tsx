import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

const featuredAccessory = {
  title: "Acessórios selecionados",
  text: "Cases de luxo, flanelas premium e organizadores para manter seus óculos sempre protegidos e impecáveis.",
  image: "/imagens/acessorios-1.jpg",
  isMosaic: true,
};

const accessories = [
  {
    title: "Correntes e cordões",
    text: "Elegância e praticidade para o seu dia a dia. Uma corrente dourada para complementar seu estilo.",
    image: "/imagens/acessorios-2.jpg",
    isMosaic: false,
  }
];

function publicAssetExists(src: string) {
  const filePath = path.join(process.cwd(), "public", src.replace(/^\//, ""));
  return fs.existsSync(filePath);
}

export function AccessoriesSection() {
  return (
    <section
      id="acessorios"
      className="section watches-section"
      aria-labelledby="accessories-title"
    >
      <div className="site-shell watches-layout">
        <AnimatedReveal className="section-heading compact watches-copy-panel">
          <p className="eyebrow">Acessórios</p>
          <h2 id="accessories-title">
            Detalhes que complementam e protegem seu óculos
          </h2>
          <p>
            Uma curadoria de cases de proteção, flanelas premium e correntes elegantes para dar um toque extra de estilo e cuidado.
          </p>
          <a href={site.whatsappUrl} className="button button-red">
            <MessageCircle size={18} aria-hidden="true" />
            Ver opções pelo WhatsApp
          </a>
        </AnimatedReveal>

        <AnimatedReveal className="watches-gallery" delay={0.08}>
          <AccessoryCard
            item={featuredAccessory}
            className="watch-card-featured"
            sizes="(max-width: 1040px) 92vw, 620px"
            priority
          />

          <div className="watches-grid">
            {accessories.map((item) => (
              <AccessoryCard
                key={item.title}
                item={item}
                sizes="(max-width: 680px) 92vw, 320px"
              />
            ))}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

function AccessoryCard({
  item,
  className = "",
  sizes,
  priority = false,
}: {
  item: typeof featuredAccessory;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <article
      className={`watch-card ${item.isMosaic ? "watch-card-mosaic" : ""} ${className}`}
    >
      <AccessoryImage
        src={item.image}
        alt={item.title}
        sizes={sizes}
        priority={priority}
        contain={item.isMosaic}
      />
      <div className="watch-copy">
        <p className="watch-kicker">Acessórios</p>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </article>
  );
}

function AccessoryImage({
  src,
  alt,
  sizes,
  priority = false,
  contain = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  contain?: boolean;
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
          className={`watch-image ${contain ? "watch-image-contain" : ""}`}
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
