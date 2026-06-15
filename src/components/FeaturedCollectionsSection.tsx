import fs from "node:fs";
import path from "node:path";
import { FeaturedCollectionsCarousel } from "@/components/FeaturedCollectionsCarousel";
import { buildWhatsAppUrl } from "@/lib/site";

export type CollectionMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
};

export type FeaturedCollection = {
  number: 1 | 2 | 3 | 4;
  title: string;
  text: string;
  variant: "quad" | "duo" | "video-led" | "mixed-video";
  dominant: CollectionMedia;
  supports: CollectionMedia[];
};

const COLLECTION_DIR = path.join(process.cwd(), "public", "galeria coleção");
const COLLECTION_PUBLIC_PATH = "/galeria coleção";

const collectionCopy = {
  1: {
    title: "Clareza com leveza",
    text: "Modelos pensados para uso diário, conforto e presença discreta.",
    variant: "quad",
  },
  2: {
    title: "Delicadeza e encaixe",
    text: "Armações leves para quem busca visual limpo e uso confortável.",
    variant: "duo",
  },
  3: {
    title: "Solar com presença",
    text: "Modelos para sol forte, com personalidade e acabamento marcante.",
    variant: "video-led",
  },
  4: {
    title: "Estilo em evidência",
    text: "Uma seleção com mais expressão visual, elegância e atitude.",
    variant: "mixed-video",
  },
} satisfies Record<
  FeaturedCollection["number"],
  Pick<FeaturedCollection, "title" | "text" | "variant">
>;

const collectionWhatsAppUrl = buildWhatsAppUrl(
  "Olá, S.O.S Ótica! Vim pelo site e quero ver opções de óculos.",
);

function mediaSrc(fileName: string) {
  return encodeURI(`${COLLECTION_PUBLIC_PATH}/${fileName}`);
}

function getCollectionNumber(fileName: string) {
  const match = fileName.match(/cole[cç][aã]o\s*(\d)/i);
  const number = Number(match?.[1]);

  if (number >= 1 && number <= 4) {
    return number as FeaturedCollection["number"];
  }

  return null;
}

function readCollectionMedia() {
  const grouped: Record<FeaturedCollection["number"], CollectionMedia[]> = {
    1: [],
    2: [],
    3: [],
    4: [],
  };
  const genericVideos: fs.Dirent[] = [];

  if (!fs.existsSync(COLLECTION_DIR)) {
    return grouped;
  }

  const entries = fs
    .readdirSync(COLLECTION_DIR, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR", { numeric: true }));

  for (const entry of entries) {
    const extension = path.extname(entry.name).toLowerCase();
    const isImage = [".jpg", ".jpeg", ".png", ".webp"].includes(extension);
    const isVideo = extension === ".mp4";

    if (!isImage && !isVideo) {
      continue;
    }

    const collectionNumber = getCollectionNumber(entry.name);
    const media = {
      type: isVideo ? "video" : "image",
      src: mediaSrc(entry.name),
      alt: `Óculos da coleção ${collectionNumber ?? 4}`,
    } satisfies CollectionMedia;

    if (collectionNumber) {
      grouped[collectionNumber].push(media);
      continue;
    }

    if (isVideo) {
      genericVideos.push(entry);
    }
  }

  const collectionFourHasVideo = grouped[4].some(
    (media) => media.type === "video",
  );
  const shortestGenericVideo = genericVideos
    .map((entry) => ({
      entry,
      size: fs.statSync(path.join(COLLECTION_DIR, entry.name)).size,
    }))
    .sort((a, b) => a.size - b.size)[0]?.entry;

  if (!collectionFourHasVideo && shortestGenericVideo) {
    grouped[4].push({
      type: "video",
      src: mediaSrc(shortestGenericVideo.name),
      alt: "Vídeo de óculos da coleção 4",
    });
  }

  return grouped;
}

function buildCollections(): FeaturedCollection[] {
  const media = readCollectionMedia();

  return ([1, 2, 3, 4] as const).flatMap((number) => {
    const copy = collectionCopy[number];
    const items = media[number];
    const images = items.filter((item) => item.type === "image");
    const videos = items.filter((item) => item.type === "video");

    const dominant = images[0] ?? videos[0];

    if (!dominant) {
      return [];
    }

    const supports = [
      ...videos,
      ...images.filter((image) => image.src !== dominant.src),
    ];

    return [
      {
        number,
        title: copy.title,
        text: copy.text,
        variant: copy.variant,
        dominant,
        supports,
      },
    ];
  });
}

export function FeaturedCollectionsSection() {
  const collections = buildCollections();

  if (collections.length === 0) {
    return null;
  }

  return (
    <section
      id="colecoes"
      className="section featured-collections-section"
      aria-labelledby="featured-collections-title"
    >
      <div className="site-shell featured-collections-shell">
        <div className="featured-collections-header">
          <div className="section-heading featured-collections-heading">
            <p className="eyebrow">Óculos</p>
            <h2 id="featured-collections-title">Coleções em destaque</h2>
            <p>
              Uma seleção de armações e solares com presença, conforto e estilos
              diferentes para a sua rotina.
            </p>
          </div>
        </div>

        <FeaturedCollectionsCarousel
          collections={collections}
          whatsappUrl={collectionWhatsAppUrl}
        />
      </div>
    </section>
  );
}
