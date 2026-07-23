import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

type AccessoryItem = {
  title: string;
  text: string;
  image?: string;
  images?: string[];
  isMosaic: boolean;
};

const featuredAccessory: AccessoryItem = {
  title: "Acessórios selecionados",
  text: "Cases de luxo, flanelas premium e organizadores para manter seus óculos sempre protegidos e impecáveis.",
  images: ["/acessorios/1 (3).png", "/acessorios/1 (4).png"],
  isMosaic: true,
};

const accessories: AccessoryItem[] = [
  {
    title: "Correntes e cordões",
    text: "Elegância e praticidade para o seu dia a dia. Uma corrente dourada para complementar seu estilo.",
    image: "/acessorios/1 (1).png",
    isMosaic: false,
  },
  {
    title: "Prendedores de óculos",
    text: "Mais firmeza e segurança para a haste não escorregar da orelha. Ideal para quem busca um ajuste perfeito o dia todo.",
    image: "/acessorios/1 (2).png",
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
  item: AccessoryItem;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <article
      className={`watch-card ${item.isMosaic ? "watch-card-mosaic" : ""} ${className}`}
    >
      {item.images ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', padding: '12px 12px 0' }}>
          {item.images.map((img, i) => (
            <AccessoryImage
              key={i}
              src={img}
              alt={`${item.title} ${i + 1}`}
              sizes={sizes}
              priority={priority}
              contain={item.isMosaic}
              wrapperStyle={{ margin: 0, height: '100%', aspectRatio: 'auto' }}
            />
          ))}
        </div>
      ) : (
        <AccessoryImage
          src={item.image!}
          alt={item.title}
          sizes={sizes}
          priority={priority}
          contain={item.isMosaic}
        />
      )}
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
  wrapperStyle,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  contain?: boolean;
  wrapperStyle?: React.CSSProperties;
}) {
  const hasImage = publicAssetExists(src);

  return (
    <div className="watch-media" style={wrapperStyle}>
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
