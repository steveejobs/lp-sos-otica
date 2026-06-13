import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Camera, Sparkles } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";

const storePhotos = [
  {
    src: "/assets/store/store-01.webp",
    label: "Foto da loja",
    title: "Ambiente real no Centro",
    featured: true,
  },
  {
    src: "/assets/store/store-02.webp",
    label: "Atendimento",
    title: "Orientação próxima",
    featured: false,
  },
  {
    src: "/assets/store/store-03.webp",
    label: "Vitrine",
    title: "Armações e acessórios",
    featured: false,
  },
];

function publicAssetExists(src: string) {
  const filePath = path.join(process.cwd(), "public", src.replace(/^\//, ""));
  return fs.existsSync(filePath);
}

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
            Um recorte discreto da loja para mostrar presença local, vitrine e
            atendimento sem transformar a página em galeria.
          </p>
        </AnimatedReveal>

        <AnimatedReveal className="store-photos-composition" delay={0.08}>
          {storePhotos.map((photo) => (
            <article
              className={`store-photo-card${photo.featured ? " is-featured" : ""}`}
              key={photo.src}
            >
              <div className="store-photo-media">
                {publicAssetExists(photo.src) ? (
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
                  />
                ) : (
                  <div className="store-photo-placeholder">
                    {photo.featured ? (
                      <Camera size={28} aria-hidden="true" />
                    ) : (
                      <Sparkles size={24} aria-hidden="true" />
                    )}
                    <span>{photo.label}</span>
                  </div>
                )}
              </div>
              <p>{photo.title}</p>
            </article>
          ))}
        </AnimatedReveal>
      </div>
    </section>
  );
}
