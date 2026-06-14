export type GoogleReview = {
  authorName: string;
  rating: number;
  text: string;
  relativeTimeDescription?: string;
  source: "Google";
};

export type GoogleReviewsData = {
  rating: number;
  totalRatings: number;
  placeUrl: string;
  reviews: GoogleReview[];
  isFallback: boolean;
};

export const fallbackGoogleReviews: GoogleReviewsData = {
  rating: 4.9,
  totalRatings: 92,
  placeUrl:
    "https://www.google.com/maps/place/%C3%93tica+S.O.S/@-7.1920141,-48.2088701,19.25z/data=!4m6!3m5!1s0x92d90daadbffe76f:0x498c96c9b5a15ebd!8m2!3d-7.1920373!4d-48.2087301!16s%2Fg%2F11t27r67sb?entry=ttu",
  isFallback: true,
  reviews: [
    {
      authorName: "Cliente SOS Ótica",
      rating: 5,
      text: "Atendimento rápido, conversa clara e cuidado na escolha das lentes.",
      source: "Google",
    },
    {
      authorName: "Cliente SOS Ótica",
      rating: 5,
      text: "Consegui resolver meu óculos com orientação objetiva e ajuste confortável.",
      source: "Google",
    },
    {
      authorName: "Cliente SOS Ótica",
      rating: 5,
      text: "Equipe atenciosa, boa variedade de armações e localização prática no Centro.",
      source: "Google",
    },
  ],
};

type PlacesReview = {
  author_name?: string;
  rating?: number;
  text?: string;
  relative_time_description?: string;
};

type PlacesDetailsResponse = {
  status?: string;
  result?: {
    rating?: number;
    user_ratings_total?: number;
    url?: string;
    reviews?: PlacesReview[];
  };
};

export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return fallbackGoogleReviews;
  }

  try {
    const params = new URLSearchParams({
      place_id: placeId,
      fields: "rating,user_ratings_total,reviews,url",
      language: "pt-BR",
      key: apiKey,
    });

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?${params}`,
      {
        next: { revalidate: 60 * 60 * 6 },
      },
    );

    if (!response.ok) return fallbackGoogleReviews;

    const data = (await response.json()) as PlacesDetailsResponse;
    if (data.status !== "OK" || !data.result) return fallbackGoogleReviews;

    const reviews = (data.result.reviews ?? [])
      .filter((review) => review.text)
      .slice(0, 5)
      .map((review) => ({
        authorName: review.author_name ?? "Cliente Google",
        rating: Math.max(1, Math.min(5, Math.round(review.rating ?? 5))),
        text: review.text ?? "",
        relativeTimeDescription: review.relative_time_description,
        source: "Google" as const,
      }));

    return {
      rating: data.result.rating ?? fallbackGoogleReviews.rating,
      totalRatings:
        data.result.user_ratings_total ?? fallbackGoogleReviews.totalRatings,
      placeUrl: data.result.url ?? fallbackGoogleReviews.placeUrl,
      reviews: reviews.length > 0 ? reviews : fallbackGoogleReviews.reviews,
      isFallback: reviews.length === 0,
    };
  } catch {
    return fallbackGoogleReviews;
  }
}
