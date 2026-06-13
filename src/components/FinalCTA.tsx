import Image from "next/image";
import { MapPin, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="section final-section" aria-labelledby="final-title">
      <div className="site-shell final-panel">
        <div>
          <Image src={site.logoIcon} width={92} height={92} alt="" aria-hidden="true" />
          <p className="eyebrow">SOS Ótica</p>
          <h2 id="final-title">Precisa de óculos hoje?</h2>
          <p>
            Chame no WhatsApp, envie sua necessidade e receba orientação para resolver com rapidez.
          </p>
        </div>
        <div className="final-actions">
          <a href={site.whatsappUrl} className="button button-red">
            <MessageCircle size={18} aria-hidden="true" />
            Chamar no WhatsApp
          </a>
          <a
            href={site.mapsRouteUrl}
            className="button button-light"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Traçar rota até a SOS Ótica no Google Maps"
          >
            <MapPin size={18} aria-hidden="true" />
            Traçar rota
          </a>
        </div>
      </div>
    </section>
  );
}
