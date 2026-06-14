"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type AnimatedRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
  id?: string;
};

export function AnimatedReveal({
  children,
  className,
  delay = 0,
  as = "div",
  id,
}: AnimatedRevealProps) {
  const reduceMotion = useReducedMotion();
  const [isCompactViewport, setIsCompactViewport] = useState(true);
  const Component = motion[as];
  const showImmediately = reduceMotion || isCompactViewport;

  useEffect(() => {
    const query = window.matchMedia("(max-width: 680px)");
    const update = () => setIsCompactViewport(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <Component
      id={id}
      className={className}
      initial={showImmediately ? false : { opacity: 0, y: 18 }}
      animate={showImmediately ? { opacity: 1, y: 0 } : undefined}
      whileInView={showImmediately ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.76, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </Component>
  );
}
