"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const COLUMNS = 6;

/**
 * A premium stair-step transition that plays on every route change.
 * Replaces the old "blue loader" with a more sophisticated reveal effect.
 */
export default function StairTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <>
            {/* Stair Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[9999] flex">
                {[...Array(COLUMNS)].map((_, i) => (
                    <motion.div
                        key={`${pathname}-step-${i}`}
                        className="h-screen flex-1 bg-primary dark:bg-primary relative border-x border-white/5"
                        initial={{ scaleY: 1 }}
                        animate={{ scaleY: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.645, 0.045, 0.355, 1], // easeInOutQuart
                            delay: i * 0.06,
                        }}
                        style={{ originY: 0 }} // Slides up to reveal
                    >
                        {/* Subtle highlight/glow on each step */}
                        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-primary/20" />
                    </motion.div>
                ))}
            </div>

            {/* Content holder with a slight fade and slide to match the transition */}
            <motion.div
                key={`content-${pathname}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </>
    );
}
