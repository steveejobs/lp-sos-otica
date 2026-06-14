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

function TestimonialCard({
  testimonial,
  focusable = false,
}: {
  testimonial: Testimonial;
  focusable?: boolean;
}) {
  return (
    <article className="testimonial-column-card" tabIndex={focusable ? 0 : -1}>
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
