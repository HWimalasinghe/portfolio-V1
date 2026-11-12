import { createElement, type ElementType, type HTMLAttributes, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type FadeInProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  href?: string;
  target?: string;
  rel?: string;
  children?: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
};

const motionElements = new Map<ElementType, ElementType>();

function resolveMotionElement(element: ElementType): ElementType {
  const cached = motionElements.get(element);
  if (cached) return cached;

  const created = motion.create(element as never) as ElementType;
  motionElements.set(element, created);
  return created;
}

export function FadeIn({
  as = "div",
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  ...rest
}: FadeInProps) {
  const MotionElement = resolveMotionElement(as);
  const shouldReduceMotion = useReducedMotion() === true;

  return createElement(
    MotionElement,
    {
      initial: shouldReduceMotion ? false : { opacity: 0, x, y },
      whileInView: shouldReduceMotion ? undefined : { opacity: 1, x: 0, y: 0 },
      viewport: { once: true, margin: "50px", amount: 0 },
      transition: { delay, duration, ease: [0.25, 0.1, 0.25, 1] },
      className,
      ...rest,
    },
    children,
  );
}
