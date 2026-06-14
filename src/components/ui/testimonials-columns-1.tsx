"use client";

import { Star } from "lucide-react";
import { useReducedMotion } from "motion/react";
import type { CSSProperties } from "react";
import type { Testimonial } from "@/data/testimonials";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function Stars() {
  return (
    <span className="testimonial-stars" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={14} fill="currentColor" aria-hidden="true" />
      ))}
    </span>
  );
}

export function TestimonialsColumn(props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();
  const duration = `${props.duration || 28}s`;

  return (
    <div
      className={`${props.className ?? ""}${reduceMotion ? " is-static" : ""}`}
      style={{ "--testimonial-duration": duration } as CSSProperties}
    >
      <div className="testimonials-column-track">
        <div className="testimonials-column-set">
          {props.testimonials.map((testimonial) => (
            <TestimonialCard
              testimonial={testimonial}
              key={testimonial.name}
              focusable
            />
          ))}
        </div>

        {!reduceMotion ? (
          <div className="testimonials-column-set" aria-hidden="true">
            {props.testimonials.map((testimonial) => (
              <TestimonialCard
                testimonial={testimonial}
                key={`${testimonial.name}-duplicate`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function TestimonialsMobileMarquee({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const splitIndex = Math.ceil(testimonials.length / 2);
  const firstRow = testimonials.slice(0, splitIndex);
  const secondRow = testimonials.slice(splitIndex);

  return (
    <div className="site-shell testimonials-mobile-marquee">
      <ul className="sr-only">
        {testimonials.map((testimonial) => (
          <li key={`accessible-${testimonial.name}`}>
            {testimonial.text} {testimonial.name}. Origem: {testimonial.source}.
          </li>
        ))}
      </ul>

      <MobileMarqueeRow testimonials={firstRow} />
      <MobileMarqueeRow testimonials={secondRow} reverse />
    </div>
  );
}

function MobileMarqueeRow({
  testimonials,
  reverse = false,
}: {
  testimonials: Testimonial[];
  reverse?: boolean;
}) {
  return (
    <div
      className={`testimonials-mobile-row${reverse ? " is-reverse" : ""}`}
      aria-hidden="true"
    >
      <div className="testimonials-mobile-track">
        <div className="testimonials-mobile-set">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              testimonial={testimonial}
              key={`mobile-${testimonial.name}`}
              compact
            />
          ))}
        </div>
        <div className="testimonials-mobile-set" aria-hidden="true">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              testimonial={testimonial}
              key={`mobile-${testimonial.name}-duplicate`}
              compact
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  testimonial,
  focusable = false,
  compact = false,
}: {
  testimonial: Testimonial;
  focusable?: boolean;
  compact?: boolean;
}) {
  return (
    <article
      className={`testimonial-column-card${compact ? " is-compact" : ""}`}
      tabIndex={focusable ? 0 : -1}
    >
      <Stars />
      <p>{testimonial.text}</p>
      <div className="testimonial-author">
        <span className="testimonial-avatar" aria-hidden="true">
          {initials(testimonial.name)}
        </span>
        <span>
          <strong>{testimonial.name}</strong>
          <small>Origem: {testimonial.source}</small>
        </span>
      </div>
    </article>
  );
}
