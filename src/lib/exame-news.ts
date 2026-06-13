export type ExameNewsItem = {
  title: string;
  category: string;
  href: string;
  meta: string;
  image?: string;
  source: "Exame";
};

export const EXAME_NEWS_URL = "https://exame.com/noticias-sobre/oculos/";
export const EXAME_NEWS_REVALIDATE = 900;
export const EXAME_NEWS_LIMIT = 8;

const FALLBACK_NEWS: ExameNewsItem[] = [
  {
    title:
      "Grife de óculos que conquistou Meryl Streep abre galeria em São Paulo",
    category: "Casual",
    href: "https://exame.com/casual/grife-de-oculos-que-conquistou-meryl-streep-abre-galeria-em-sao-paulo/",
    meta: "Arquivo Exame",
    source: "Exame",
  },
  {
    title:
      "The Simple RunClub e Zerezes lançam collab de óculos que une corrida e design",
    category: "Casual",
    href: "https://exame.com/casual/the-simple-runclub-e-zerezes-lancam-collab-de-oculos-que-une-corrida-e-design/",
    meta: "Arquivo Exame",
    source: "Exame",
  },
  {
    title:
      "Ele trabalhou no STF, virou franqueado e agora vai faturar R$ 120 milhões com óculos",
    category: "Negócios",
    href: "https://exame.com/negocios/ele-trabalhou-no-stf-virou-franqueado-e-agora-vai-faturar-r-120-milhoes-com-oculos/",
    meta: "Arquivo Exame",
    source: "Exame",
  },
  {
    title: "O acessório queridinho dos corredores agora é outro",
    category: "Casual",
    href: "https://exame.com/casual/o-acessorio-queridinho-dos-corredores-agora-e-outro/",
    meta: "Arquivo Exame",
    source: "Exame",
  },
  {
    title: "Óculos sem aro voltam à moda entre celebridades e Geração Z",
    category: "Casual",
    href: "https://exame.com/casual/oculos-sem-aro-voltam-a-moda-entre-celebridades-e-geracao-z/",
    meta: "Arquivo Exame",
    source: "Exame",
  },
  {
    title: "A dona da Ray-Ban não vende mais só óculos — agora é medtech",
    category: "Casual",
    href: "https://exame.com/casual/a-dona-da-ray-ban-nao-vende-mais-so-oculos-agora-e-medtech/",
    meta: "Arquivo Exame",
    source: "Exame",
  },
  {
    title:
      "Google e Magic Leap revelam novo óculos com IA e realidade aumentada",
    category: "Inteligência Artificial",
    href: "https://exame.com/inteligencia-artificial/google-e-magic-leap-revelam-novo-oculos-com-ia-e-realidade-aumentada/",
    meta: "Arquivo Exame",
    source: "Exame",
  },
  {
    title:
      "Snap negocia captação de US$ 1 bilhão para acelerar divisão de óculos de realidade aumentada",
    category: "Tecnologia",
    href: "https://exame.com/tecnologia/snap-negocia-captacao-de-us-1-bilhao-para-acelerar-divisao-de-oculos-de-realidade-aumentada/",
    meta: "Arquivo Exame",
    source: "Exame",
  },
];

const CATEGORY_LABELS = [
  "Inteligência Artificial",
  "Tecnologia",
  "Negócios",
  "Mercados",
  "Marketing",
  "Casual",
  "Mundo",
  "Moda",
];

export function getFallbackExameNews(limit = EXAME_NEWS_LIMIT) {
  return FALLBACK_NEWS.slice(0, limit);
}

export async function getExameNews(
  limit = EXAME_NEWS_LIMIT,
): Promise<ExameNewsItem[]> {
  try {
    const response = await fetch(EXAME_NEWS_URL, {
      headers: {
        Accept: "text/html,application/xhtml+xml",
        "User-Agent": "SOS Otica editorial preview (+https://sosotica.com.br)",
      },
      next: { revalidate: EXAME_NEWS_REVALIDATE },
    });

    if (!response.ok) {
      throw new Error(`Exame returned ${response.status}`);
    }

    const html = await response.text();
    const parsedNews = mergeUniqueNews(
      parseExameNews(html),
      getFallbackExameNews(limit),
    ).slice(0, limit);

    if (parsedNews.length < limit) {
      throw new Error("Exame markup did not expose enough news items");
    }

    return parsedNews;
  } catch {
    return getFallbackExameNews(limit);
  }
}

export function parseExameNews(html: string): ExameNewsItem[] {
  const items: ExameNewsItem[] = [];
  const seen = new Set<string>();
  const anchorRegex = /<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let match: RegExpExecArray | null;

  while ((match = anchorRegex.exec(html)) !== null) {
    const href = normalizeExameHref(match[1]);
    const title = cleanText(match[2]);

    if (!href || seen.has(href) || !looksLikeNewsTitle(title)) {
      continue;
    }

    const context = cleanText(
      html.slice(Math.max(0, match.index - 1400), match.index),
    );
    const rawContext = html.slice(
      Math.max(0, match.index - 1800),
      Math.min(html.length, match.index + match[0].length + 1200),
    );

    items.push({
      title,
      category: findLastCategory(context),
      href,
      meta: findLastMeta(context),
      image: findArticleImage(rawContext),
      source: "Exame",
    });
    seen.add(href);

    if (items.length >= 12) {
      break;
    }
  }

  return items;
}

function mergeUniqueNews(...groups: ExameNewsItem[][]) {
  const merged: ExameNewsItem[] = [];
  const seen = new Set<string>();

  for (const group of groups) {
    for (const item of group) {
      if (seen.has(item.href)) {
        continue;
      }

      merged.push(item);
      seen.add(item.href);
    }
  }

  return merged;
}

function normalizeExameHref(href: string) {
  try {
    const url = new URL(decodeHtml(href), EXAME_NEWS_URL);

    if (!url.hostname.endsWith("exame.com")) {
      return null;
    }

    const pathParts = url.pathname.split("/").filter(Boolean);
    const isListing = url.pathname === new URL(EXAME_NEWS_URL).pathname;
    const isLikelyArticle = pathParts.length >= 2 && !isListing;

    return isLikelyArticle ? url.toString() : null;
  } catch {
    return null;
  }
}

function findArticleImage(context: string) {
  const candidates = [
    ...extractImageCandidates(context, "src"),
    ...extractImageCandidates(context, "data-src"),
    ...extractSrcsetCandidates(context),
  ];

  for (const candidate of candidates) {
    const image = normalizeExameImage(candidate);
    if (image) {
      return image;
    }
  }

  return undefined;
}

function extractImageCandidates(context: string, attr: string) {
  const regex = new RegExp(`${attr}=["']([^"']+)["']`, "gi");
  const candidates: string[] = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(context)) !== null) {
    candidates.push(match[1]);
  }

  return candidates;
}

function extractSrcsetCandidates(context: string) {
  const regex = /srcset=["']([^"']+)["']/gi;
  const candidates: string[] = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(context)) !== null) {
    const first = match[1].split(",")[0]?.trim().split(/\s+/)[0];
    if (first) {
      candidates.push(first);
    }
  }

  return candidates;
}

function normalizeExameImage(src: string) {
  try {
    const decoded = decodeHtml(src);
    if (
      !decoded ||
      decoded.startsWith("data:") ||
      decoded.includes("logo") ||
      decoded.includes("avatar")
    ) {
      return undefined;
    }

    const url = new URL(decoded, EXAME_NEWS_URL);
    const isImage =
      /\.(avif|jpe?g|png|webp)(?:$|\?)/i.test(url.pathname + url.search) ||
      url.hostname.includes("exame.com");

    return isImage ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

function looksLikeNewsTitle(title: string) {
  if (title.length < 28 || title.length > 150) {
    return false;
  }

  const blocked = ["Home", "Saiba mais", "Entrar", "Assinar", "Newsletter"];
  return !blocked.some((word) =>
    title.toLowerCase().includes(word.toLowerCase()),
  );
}

function findLastCategory(context: string) {
  let category = "Óculos";
  let lastIndex = -1;

  for (const label of CATEGORY_LABELS) {
    const index = context.lastIndexOf(label);
    if (index > lastIndex) {
      category = label;
      lastIndex = index;
    }
  }

  return category;
}

function findLastMeta(context: string) {
  const relativeMatches = context.match(
    /Há\s+(?:um|uma|\d+)\s+[^•]{2,44}(?:\s+•\s+\d+\s+min(?:uto)?s?\s+de\s+leitura)?/gi,
  );
  if (relativeMatches?.length) {
    return relativeMatches[relativeMatches.length - 1].trim();
  }

  const publishedMatches = context.match(/Publicado em\s+[^.]{8,90}\./gi);
  if (publishedMatches?.length) {
    return publishedMatches[publishedMatches.length - 1]
      .replace(/\.$/, "")
      .trim();
  }

  return "Atualizado pela Exame";
}

function cleanText(value: string) {
  return decodeHtml(value)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeHtml(value: string) {
  return value
    .replace(/&#(\d+);/g, (_, code: string) =>
      String.fromCharCode(Number(code)),
    )
    .replace(/&#x([\da-f]+);/gi, (_, code: string) =>
      String.fromCharCode(parseInt(code, 16)),
    )
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}
