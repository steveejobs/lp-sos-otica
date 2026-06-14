import Image from "next/image";
import { MapPin, MessageCircle } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

const storePhotos = [
  {
    src: "/assets/store/store-01.webp",
    title: "Atendimento real no Centro",
    featured: true,
  },
  {
    src: "/assets/store/store-02.webp",
    title: "Ajuste e orientação",
    featured: false,
  },
  {
    src: "/assets/store/store-03.webp",
    title: "Teste e escolha",
    featured: false,
  },
];

export function StorePhotosSection() {
  return (
    <section
      id="por-dentro"
      className="section store-photos-section"
      aria-labelledby="store-photos-title"
    >
      <div className="site-shell store-photos-layout">
        <AnimatedReveal className="section-heading compact store-photos-copy">
          <p className="eyebrow">Loja real</p>
          <h2 id="store-photos-title">Por dentro da SOS Ótica</h2>
          <p>
            Um espaço pensado para escolher seus óculos com calma, orientação e
            atendimento próximo.
          </p>
          <span className="store-local-seal">Centro de Araguaína</span>
          <div className="store-photo-actions">
            <a
              href={site.mapsRouteUrl}
              className="button button-red"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Traçar rota até a SOS Ótica no Google Maps"
            >
              <MapPin size={17} aria-hidden="true" />
              Traçar rota
            </a>
            <a href={site.whatsappUrl} className="button button-ghost">
              <MessageCircle size={17} aria-hidden="true" />
              Chamar no WhatsApp
            </a>
          </div>
        </AnimatedReveal>

        <AnimatedReveal className="store-photos-composition" delay={0.08}>
          {storePhotos.map((photo) => (
            <article
              className={`store-photo-card${photo.featured ? " is-featured" : ""}`}
              key={photo.src}
            >
              <div className="store-photo-media">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes={
                    photo.featured
                      ? "(max-width: 900px) 92vw, 680px"
                      : "(max-width: 900px) 44vw, 320px"
                  }
                  className="store-photo-image"
                  unoptimized
                />
              </div>
              <p>{photo.title}</p>
            </article>
          ))}
        </AnimatedReveal>
      </div>
    </section>
  );
}
