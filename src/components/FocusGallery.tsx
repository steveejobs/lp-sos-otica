import {
  Clock3,
  CreditCard,
  Eye,
  MessageCircle,
  Navigation,
} from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

const locationFacts = [
  {
    icon: Clock3,
    title: "Horário",
    text: `${site.openingHours.weekdays}. ${site.openingHours.saturday}.`,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    text: site.phoneDisplay,
  },
  {
    icon: CreditCard,
    title: "Pagamento",
    text: site.paymentSummary,
  },
  {
    icon: Eye,
    title: "Teste de visão",
    text: "Disponível no local",
  },
];

export function FocusGallery() {
  return (
    <section
      id="contato"
      className="section trust-section location-section"
      aria-labelledby="trust-title"
    >
      <div className="site-shell trust-layout location-premium-layout">
        <AnimatedReveal className="section-heading compact location-heading">
          <p className="eyebrow">Contato e rota</p>
          <h2 id="trust-title">Estamos no Centro de Araguaína</h2>
          <p>R. Sadoc Correa, 154 — Central</p>
        </AnimatedReveal>

        <AnimatedReveal className="location-facts" delay={0.08}>
          {locationFacts.map((item) => {
            const Icon = item.icon;
            return (
              <div className="location-fact" key={item.title}>
                <Icon size={18} aria-hidden="true" />
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.text}</small>
                </span>
              </div>
            );
          })}
        </AnimatedReveal>
      </div>

      <AnimatedReveal className="site-shell map-band" delay={0.12}>
        <div className="location-card">
          <div className="location-copy">
            <span className="location-seal">Centro de Araguaína</span>
            <h3>{site.mainPromise}</h3>
            <p>{site.promiseNote}</p>
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
                Falar com a SOS Ótica
              </a>
            </div>
          </div>

          <div className="location-map">
            <iframe
              src={site.mapsEmbedUrl}
              title="Mapa da SOS Ótica em Araguaína"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </AnimatedReveal>
    </section>
  );
}
