"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import type {
  FeaturedCollection,
  CollectionMedia,
} from "@/components/FeaturedCollectionsSection";

type FeaturedCollectionsCarouselProps = {
  collections: FeaturedCollection[];
  whatsappUrl: string;
};

export function FeaturedCollectionsCarousel({
  collections,
  whatsappUrl,
}: FeaturedCollectionsCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const appliedInitialSlide = useRef(false);
  const reduceMotion = useReducedMotion();
  const isCarouselInView = useInView(carouselRef, {
    amount: 0.38,
  });
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    duration: 34,
  });

  const syncSelected = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", syncSelected);
    emblaApi.on("reInit", syncSelected);

    return () => {
      emblaApi.off("select", syncSelected);
      emblaApi.off("reInit", syncSelected);
    };
  }, [emblaApi, syncSelected]);

  useEffect(() => {
    if (!emblaApi || appliedInitialSlide.current) return;

    const requestedCollection = Number(
      new URLSearchParams(window.location.search).get("colecao"),
    );
    const requestedIndex = collections.findIndex(
      (collection) => collection.number === requestedCollection,
    );

    appliedInitialSlide.current = true;

    if (requestedIndex >= 0) {
      emblaApi.scrollTo(requestedIndex, true);
    }
  }, [collections, emblaApi]);

  useEffect(() => {
    if (
      !emblaApi ||
      reduceMotion ||
      !isCarouselInView ||
      isDragging ||
      collections.length <= 1
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 6200);

    return () => window.clearInterval(timer);
  }, [
    collections.length,
    emblaApi,
    isCarouselInView,
    isDragging,
    reduceMotion,
  ]);

  function scroll(direction: 1 | -1) {
    if (!emblaApi) return;

    if (direction < 0) {
      emblaApi.scrollPrev();
    } else {
      emblaApi.scrollNext();
    }
  }

  return (
    <div
      ref={carouselRef}
      className={`featured-collections-carousel${isDragging ? " is-dragging" : ""}`}
    >
      <div className="featured-collections-controls">
        <button
          type="button"
          className="featured-collections-arrow"
          aria-label="Coleção anterior"
          onClick={() => scroll(-1)}
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="featured-collections-arrow"
          aria-label="Próxima coleção"
          onClick={() => scroll(1)}
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>

      <div
        className="featured-collections-viewport"
        ref={emblaRef}
        onPointerDown={() => {
          setIsDragging(true);
        }}
        onPointerUp={() => {
          setIsDragging(false);
        }}
        onPointerCancel={() => {
          setIsDragging(false);
        }}
      >
        <div className="featured-collections-track">
          {collections.map((collection, index) => (
            <CollectionSlide
              key={collection.number}
              collection={collection}
              slideIndex={index}
              isActive={index === selectedIndex}
              whatsappUrl={whatsappUrl}
            />
          ))}
        </div>
      </div>

      <div
        className="featured-collections-dots"
        aria-label="Selecionar coleção"
      >
        {collections.map((collection, index) => (
          <button
            type="button"
            key={collection.number}
            className={index === selectedIndex ? "is-active" : ""}
            aria-label={`Ir para coleção ${collection.number}`}
            aria-current={index === selectedIndex}
            onClick={() => {
              emblaApi?.scrollTo(index);
            }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function CollectionSlide({
  collection,
  slideIndex,
  isActive,
  whatsappUrl,
}: {
  collection: FeaturedCollection;
  slideIndex: number;
  isActive: boolean;
  whatsappUrl: string;
}) {
  const desktopSupports = useMemo(
    () =>
      collection.supports.slice(
        0,
        collection.variant === "duo" || collection.variant === "airy" ? 1 : 2,
      ),
    [collection.supports, collection.variant],
  );
  const mobileSupports = useMemo(
    () =>
      collection.supports.filter(
        (support) => support.src !== collection.dominant.src,
      ),
    [collection.dominant.src, collection.supports],
  );

  return (
    <article
      className={`featured-collection-slide is-${collection.variant}`}
      aria-label={`Coleção ${collection.number}: ${collection.title}`}
    >
      <CollectionMediaBlock
        media={collection.dominant}
        className="featured-collection-media is-dominant"
        isActive={isActive}
        priority={slideIndex === 0}
        quality={95}
        sizes="(min-width: 1280px) 560px, (min-width: 768px) 50vw, 92vw"
      />

      <div className="featured-collection-supports">
        {desktopSupports.map((media, index) => (
          <CollectionMediaBlock
            key={`${collection.number}-${media.src}`}
            media={media}
            className={`featured-collection-media is-support support-${index + 1}`}
            isActive={isActive}
            quality={85}
            sizes="(min-width: 1280px) 220px, (min-width: 768px) 22vw, 42vw"
          />
        ))}
      </div>

      <div className="featured-collection-copy">
        <span>{String(collection.number).padStart(2, "0")}</span>
        <h3>{collection.title}</h3>
        <p>{collection.text}</p>
        <a href={whatsappUrl} className="button button-red">
          <MessageCircle size={17} aria-hidden="true" />
          Ver opções pelo WhatsApp
        </a>
      </div>

      {mobileSupports.length > 0 ? (
        <div
          className="featured-collection-mobile-strip"
          aria-label="Detalhes da coleção"
        >
          {mobileSupports.map((media, index) => (
            <CollectionMediaBlock
              key={`mobile-${collection.number}-${media.src}`}
              media={media}
              className="featured-collection-media is-mobile-detail"
              isActive={isActive && index < 2}
              quality={85}
              sizes="42vw"
            />
          ))}
        </div>
      ) : null}
    </article>
  );
}

function CollectionMediaBlock({
  media,
  className,
  isActive,
  priority = false,
  quality = 92,
  sizes,
}: {
  media: CollectionMedia;
  className: string;
  isActive: boolean;
  priority?: boolean;
  quality?: 85 | 92 | 95;
  sizes: string;
}) {
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = mediaRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (!isActive || !isVisible) {
      video.pause();
      return;
    }

    void video.play().catch(() => undefined);
  }, [isActive, isVisible]);

  return (
    <div className={`${className} is-${media.type}`} ref={mediaRef}>
      {media.type === "image" ? (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes={sizes}
          quality={quality}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className="featured-collection-image"
        />
      ) : (
        <video
          ref={videoRef}
          className="featured-collection-video"
          src={isActive || isVisible ? media.src : undefined}
          poster={media.poster}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={media.alt}
        />
      )}
    </div>
  );
}
