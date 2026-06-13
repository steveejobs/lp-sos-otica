import {
  Instagram,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

export function FocusGallery() {
  return (
    <section
      id="contato"
      className="section trust-section"
      aria-labelledby="trust-title"
    >
      <div className="site-shell trust-layout">
        <AnimatedReveal className="section-heading">
          <p className="eyebrow">Confiança local</p>
          <h2 id="trust-title">Atendimento direto no Centro de Araguaína.</h2>
          <p>
            Uma ótica próxima, com conversa objetiva, orientação clara e canais
            simples para chegar, chamar ou acompanhar novidades.
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
        <div className="location-card">
          <div className="location-copy">
            <span className="location-seal">Centro de Araguaína</span>
            <h3>Estamos no Centro de Araguaína</h3>
            <p>Rua Sadoc Corrêa, 154 — Centro</p>
            <div className="location-actions">
              <a
                href={site.mapsRouteUrl}
                className="button button-red"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Traçar rota até a SOS Ótica no Google Maps"
              >
                <Navigation size={17} aria-hidden="true" />
                Traçar rota
              </a>
              <a href={site.whatsappUrl} className="button button-ghost">
                <MessageCircle size={17} aria-hidden="true" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          <div className="location-map" aria-hidden="true">
            <span className="map-grid" />
            <span className="map-route map-route-a" />
            <span className="map-route map-route-b" />
            <span className="map-pin">
              <MapPin size={22} />
            </span>
          </div>
        </div>
      </AnimatedReveal>
    </section>
  );
}
