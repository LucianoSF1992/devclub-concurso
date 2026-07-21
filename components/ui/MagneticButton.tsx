"use client";

import { ArrowRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { type MouseEvent, type ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href: string;
}

export function MagneticButton({
  children,
  href,
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  });

  const springY = useSpring(y, {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  });

  const arrowX = useTransform(springX, [-20, 20], [-4, 4]);
  const arrowY = useTransform(springY, [-20, 20], [-4, 4]);

  function handleMouseMove(
    event: MouseEvent<HTMLAnchorElement>,
  ) {
    const rect = event.currentTarget.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = event.clientX - centerX;
    const distanceY = event.clientY - centerY;

    x.set(distanceX * 0.2);
    y.set(distanceY * 0.2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
      className="group inline-flex items-center gap-4 rounded-full bg-[var(--accent)] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-black"
    >
      {children}

      <motion.span
        style={{
          x: arrowX,
          y: arrowY,
        }}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white"
      >
        <ArrowRight size={15} />
      </motion.span>
    </motion.a>
  );
}