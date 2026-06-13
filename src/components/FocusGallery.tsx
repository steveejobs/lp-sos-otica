import { Instagram, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

export function FocusGallery() {
  return (
    <section id="contato" className="section trust-section" aria-labelledby="trust-title">
      <div className="site-shell trust-layout">
        <AnimatedReveal className="section-heading">
          <p className="eyebrow">Confiança local</p>
          <h2 id="trust-title">Atendimento direto no Centro de Araguaína.</h2>
          <p>
            Uma ótica próxima, com conversa objetiva, orientação clara e canais simples para chegar,
            chamar ou acompanhar novidades.
          </p>
        </AnimatedReveal>

        <AnimatedReveal className="contact-panel" delay={0.1}>
          <a
            href={site.mapsRouteUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Traçar rota até a SOS Ótica no Google Maps"
          >
            <MapPin size={20} aria-hidden="true" />
            <span>
              <strong>{site.address}</strong>
              <small>Traçar rota</small>
            </span>
          </a>
          <a href={site.whatsappUrl}>
            <Phone size={20} aria-hidden="true" />
            <span>
              <strong>{site.phoneDisplay}</strong>
              <small>Chamar no WhatsApp</small>
            </span>
          </a>
          <a href={site.instagramUrl}>
            <Instagram size={20} aria-hidden="true" />
            <span>
              <strong>{site.instagram}</strong>
              <small>Acompanhar no Instagram</small>
            </span>
          </a>
        </AnimatedReveal>
      </div>

      <AnimatedReveal className="site-shell map-band" delay={0.15}>
        <a
          href={site.mapsRouteUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Traçar rota até a SOS Ótica no Google Maps"
        >
          <Image
            src="/imagens/araguaina-1.jpg"
            alt=""
            fill
            sizes="(max-width: 680px) 100vw, 1180px"
            className="map-band-image"
          />
          <span>Rua Sadoc Correia, 154</span>
          <strong>Centro, Araguaína-TO</strong>
          <em>Traçar rota</em>
        </a>
      </AnimatedReveal>
    </section>
  );
}
