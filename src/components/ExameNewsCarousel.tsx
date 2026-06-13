"use client";

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import type { ExameNewsItem } from "@/lib/exame-news";

type ExameNewsCarouselProps = {
  items: ExameNewsItem[];
};

export function ExameNewsCarousel({ items }: ExameNewsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const dragStart = useRef<{ x: number; scrollLeft: number } | null>(null);

  useEffect(() => {
    if (isPaused || items.length <= 3) {
      return;
    }

    const timer = window.setInterval(() => {
      scrollCarousel(1);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [isPaused, items.length]);

  function scrollCarousel(direction: 1 | -1) {
    const track = trackRef.current;
    const firstCard = track?.querySelector<HTMLElement>(".exame-news-card");

    if (!track || !firstCard) {
      return;
    }

    const gap =
      Number.parseFloat(window.getComputedStyle(track).columnGap) || 16;
    const distance = (firstCard.offsetWidth + gap) * direction;
    const isAtEnd =
      direction > 0 &&
      track.scrollLeft + track.clientWidth >=
        track.scrollWidth - distance * 0.8;
    const isAtStart =
      direction < 0 && track.scrollLeft <= firstCard.offsetWidth;

    track.scrollTo({
      left: isAtEnd
        ? 0
        : isAtStart
          ? track.scrollWidth
          : track.scrollLeft + distance,
      behavior: "smooth",
    });
  }

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    dragStart.current = {
      x: event.clientX,
      scrollLeft: track.scrollLeft,
    };
    track.setPointerCapture(event.pointerId);
    track.classList.add("is-dragging");
    setIsPaused(true);
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const track = trackRef.current;

    if (!track || !dragStart.current) {
      return;
    }

    track.scrollLeft =
      dragStart.current.scrollLeft - (event.clientX - dragStart.current.x);
  }

  function endDrag(event: ReactPointerEvent<HTMLDivElement>) {
    const track = trackRef.current;

    dragStart.current = null;
    track?.classList.remove("is-dragging");

    if (track?.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <div
      className="exame-news-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="exame-news-controls" aria-label="Controles do carrossel">
        <button
          type="button"
          className="exame-news-arrow"
          aria-label="Notícia anterior"
          onClick={() => scrollCarousel(-1)}
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="exame-news-arrow"
          aria-label="Próxima notícia"
          onClick={() => scrollCarousel(1)}
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>

      <div
        ref={trackRef}
        className="exame-news-track"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {items.map((item) => (
          <article className="exame-news-card" key={item.href}>
            <a
              className={`exame-news-thumb${item.image ? " has-image" : " is-placeholder"}`}
              style={
                item.image
                  ? ({
                      "--news-image": `url("${item.image.replace(/"/g, "%22")}")`,
                    } as CSSProperties)
                  : undefined
              }
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ler na Exame: ${item.title}`}
            >
              <span className="sr-only">Imagem da matéria</span>
            </a>

            <div className="exame-news-body">
              <div className="exame-news-meta">
                <span>{item.source}</span>
                <span>{item.meta}</span>
              </div>
              <h3>{item.title}</h3>
            </div>

            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="exame-news-link"
            >
              Ler na Exame
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
