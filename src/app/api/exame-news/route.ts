import { NextResponse } from "next/server";
import { EXAME_NEWS_REVALIDATE, getExameNews } from "@/lib/exame-news";

export const revalidate = 3600;

export async function GET() {
  const items = await getExameNews(3);

  return NextResponse.json(items, {
    headers: {
      "Cache-Control": `public, s-maxage=${EXAME_NEWS_REVALIDATE}, stale-while-revalidate=${EXAME_NEWS_REVALIDATE}`,
    },
  });
}
