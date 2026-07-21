"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { type MouseEvent } from "react";

export function InteractiveGlow() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, {
        stiffness: 40,
        damping: 20,
    });

    const springY = useSpring(y, {
        stiffness: 40,
        damping: 20,
    });

    function handleMouseMove(
        event: MouseEvent<HTMLDivElement>,
    ) {
        const { clientX, clientY } = event;

        x.set(clientX);
        y.set(clientY);
    }

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                style={{
                    left: springX,
                    top: springY,
                }}
                className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/5 blur-[120px]"
            />
        </div>
    );
}