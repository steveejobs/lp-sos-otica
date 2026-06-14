import Image from "next/image";
import { MapPin, MessageCircle } from "lucide-react";
import { GoogleRatingBadge } from "@/components/GoogleRatingBadge";
import { site } from "@/lib/site";

export function FinalCTA() {
  return (
    <section
      id="cta-final"
      className="section final-section"
      aria-labelledby="final-title"
    >
      <div className="site-shell final-panel">
        <div>
          <Image
            src={site.logoIcon}
            width={92}
            height={92}
            alt=""
            aria-hidden="true"
          />
          <p className="eyebrow">SOS Ótica</p>
          <h2 id="final-title">Precisa de óculos hoje?</h2>
          <p>
            Fale com a SOS Ótica e receba orientação para resolver com rapidez.
          </p>
          <GoogleRatingBadge
            variant="inline"
            reviews="92 avaliações"
            className="final-rating"
          />
        </div>
        <div className="final-actions">
          <a href={site.whatsappUrl} className="button button-red">
            <MessageCircle size={18} aria-hidden="true" />
            Falar com a SOS Ótica
          </a>
          <a
            href={site.mapsRouteUrl}
            className="button button-light"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Traçar rota até a Ótica S.O.S no Google Maps"
          >
            <MapPin size={18} aria-hidden="true" />
            Traçar rota
          </a>
        </div>
      </div>
    </section>
  );
}
