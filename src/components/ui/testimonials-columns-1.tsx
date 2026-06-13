"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
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
  const [isPaused, setIsPaused] = useState(false);
  const shouldAnimate = !reduceMotion && !isPaused;

  return (
    <div
      className={props.className}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <motion.div
        animate={shouldAnimate ? { translateY: "-50%" } : { translateY: 0 }}
        transition={{
          duration: props.duration || 18,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="testimonials-column-track"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map((testimonial) => (
              <article
                className="testimonial-column-card"
                key={`${testimonial.name}-${index}`}
                tabIndex={0}
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
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
