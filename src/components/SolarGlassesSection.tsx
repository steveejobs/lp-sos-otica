"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import type { PointerEvent } from "react";
import { AnimatedReveal } from "@/components/AnimatedReveal";

export function SolarGlassesSection() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const sceneX = useTransform(pointerX, [-0.5, 0.5], reduceMotion ? [0, 0] : [-14, 14]);
  const sceneY = useTransform(pointerY, [-0.5, 0.5], reduceMotion ? [0, 0] : [-8, 8]);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section id="solar" className="section solar-section" aria-labelledby="solar-title">
      <div className="site-shell solar-layout">
        <AnimatedReveal className="section-heading">
          <p className="eyebrow">Solar</p>
          <h2 id="solar-title">Proteção, conforto e estilo para o sol de Araguaína.</h2>
          <p>
            Lentes solares ajudam a reduzir ofuscamento, proteger os olhos e manter a leitura da
            cidade confortável mesmo nos horários de luz mais intensa.
          </p>
        </AnimatedReveal>

        <AnimatedReveal className="solar-visual" delay={0.1}>
          <div className="sun-beam" aria-hidden="true" />
          <motion.div
            className="solar-product"
            onPointerMove={handlePointerMove}
            onPointerLeave={() => {
              pointerX.set(0);
              pointerY.set(0);
            }}
            animate={reduceMotion ? undefined : { rotateY: [-3.5, 3.5, -3.5], y: [0, -7, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <div className="solar-scene" aria-hidden="true">
              <motion.div className="solar-scene-image solar-scene-glare" style={{ x: sceneX, y: sceneY }}>
                <Image
                  src="/assets/scenes/sunset-dark.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 680px) 100vw, 740px"
                  className="sunset-image"
                />
              </motion.div>
              <motion.div className="solar-scene-image solar-scene-filtered" style={{ x: sceneX, y: sceneY }}>
                <Image
                  src="/assets/scenes/sunset-dark.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 680px) 100vw, 740px"
                  className="sunset-image"
                />
              </motion.div>
              <div className="uv-spectrum">
                <span />
                <span />
                <span />
              </div>
            </div>
            <Image
              src="/assets/glasses/sunglasses-hero.webp"
              alt=""
              fill
              sizes="(max-width: 680px) 110vw, 720px"
              className="sunglasses-image"
            />
            <div className="solar-lens solar-lens-left">
              <span className="uv-mark">UV</span>
            </div>
            <div className="solar-lens solar-lens-right">
              <span className="uv-mark">400</span>
            </div>
          </motion.div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
