type GoogleRatingBadgeVariant = "compact" | "card" | "inline";

type GoogleRatingBadgeProps = {
  variant?: GoogleRatingBadgeVariant;
  rating?: string;
  reviews?: string;
  showLabel?: boolean;
  className?: string;
  href?: string;
};

const defaultRating = "4,9";
const defaultReviews = "92 avaliações";
const stars = "★★★★★";

function normalizeReviews(reviews: string) {
  const count = reviews.match(/\d+/)?.[0] ?? reviews;
  return `${count} avaliações`;
}

export function GoogleRatingBadge({
  variant = "compact",
  rating = defaultRating,
  reviews = defaultReviews,
  showLabel = variant === "card",
  className,
  href,
}: GoogleRatingBadgeProps) {
  const normalizedReviews = normalizeReviews(reviews);
  const accessibleLabel = `Avaliação ${rating} de 5 no Google, com ${normalizedReviews}`;
  const classes = [
    "google-rating-badge",
    `google-rating-badge-${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {showLabel ? (
        <span className="google-rating-label">Google Reviews</span>
      ) : null}
      <span className="google-rating-stars" aria-hidden="true">
        {stars}
      </span>
      {variant === "inline" ? (
        <span className="google-rating-line">
          <strong>{rating}</strong> no Google por clientes de Araguaína
        </span>
      ) : (
        <span className="google-rating-main">
          <strong>{rating}</strong>
          <span>
            {variant === "compact"
              ? `no Google · ${normalizedReviews}`
              : normalizedReviews}
          </span>
        </span>
      )}
      {variant === "card" ? (
        <small>Avaliação média no Google</small>
      ) : null}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} aria-label={accessibleLabel}>
        <span className="google-rating-visual" aria-hidden="true">
          {content}
        </span>
      </a>
    );
  }

  return (
    <div className={classes} role="group" aria-label={accessibleLabel}>
      <span className="google-rating-visual" aria-hidden="true">
        {content}
      </span>
    </div>
  );
}
