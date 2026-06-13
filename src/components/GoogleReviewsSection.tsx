import { Star } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { getGoogleReviews } from "@/lib/google-reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="review-stars" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={15} fill="currentColor" aria-hidden="true" />
      ))}
    </span>
  );
}

export async function GoogleReviewsSection() {
  const data = await getGoogleReviews();
  const totalLabel = data.totalRatings > 0 ? `${data.totalRatings} avaliações` : "avaliações do Google";

  return (
    <section id="avaliacoes" className="section google-reviews-section" aria-labelledby="google-reviews-title">
      <div className="site-shell reviews-layout">
        <AnimatedReveal className="section-heading compact">
          <p className="eyebrow">Avaliações</p>
          <h2 id="google-reviews-title">O que os clientes dizem</h2>
          <p>
            Depoimentos apresentados em cards próprios, com arquitetura pronta para carregar avaliações reais do Google.
          </p>
        </AnimatedReveal>

        <AnimatedReveal className="reviews-summary" delay={0.08}>
          <strong>{data.rating.toFixed(1)}</strong>
          <Stars rating={Math.round(data.rating)} />
          <span>{totalLabel}</span>
          {data.isFallback ? <small>Fallback até conectar a API do Google</small> : null}
          <a href={data.placeUrl} target="_blank" rel="noopener noreferrer">
            Ver avaliações no Google
          </a>
        </AnimatedReveal>
      </div>

      <div className="site-shell google-review-grid">
        {data.reviews.map((review, index) => (
          <AnimatedReveal key={`${review.authorName}-${index}`} className="google-review-card" delay={index * 0.05}>
            <Stars rating={review.rating} />
            <p>“{review.text}”</p>
            <div>
              <strong>{review.authorName}</strong>
              <span>Origem: {review.source}</span>
            </div>
          </AnimatedReveal>
        ))}
      </div>
    </section>
  );
}
