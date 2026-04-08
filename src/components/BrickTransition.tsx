"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Grid configuration
const COLUMNS = 10;
const ROWS = 6;
const TOTAL_BRICKS = COLUMNS * ROWS;

export default function BrickTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const bricks = Array.from({ length: TOTAL_BRICKS });

    return (
        <>
            {/* Page Content */}
            {children}

            {/* Brick Overlay */}
            {/* Re-mounts key based on pathname so it triggers every route change */}
            <motion.div
                key={`overlay-${pathname}`}
                className="fixed inset-0 z-[9999] pointer-events-none flex flex-wrap overflow-hidden"
                initial="initial"
                animate="animate"
                variants={{
                    initial: {},
                    animate: {
                        transition: {
                            staggerChildren: 0.02, // Fast cascade
                            staggerDirection: 1, // Top to bottom
                        }
                    }
                }}
            >
                {bricks.map((_, i) => {
                    return (
                        <motion.div
                            key={i}
                            variants={{
                                initial: { 
                                    y: 0, 
                                    opacity: 1,
                                    scale: 1,
                                },
                                animate: { 
                                    y: "100vh", 
                                    opacity: 0,
                                    scale: 0.8,
                                    rotate: (i % 7) * 4 - 12, // Deterministic tumble
                                    transition: { duration: 0.7, ease: "easeIn" }
                                }
                            }}
                            className="flex-auto relative border border-white/20 shadow-lg backdrop-blur-sm"
                            style={{
                                backgroundColor: "#4897cb8c",
                                width: `${100 / COLUMNS}%`,
                                height: `${100 / ROWS}%`
                            }}
                        >
                            {/* Inner highlight for 3D brick effect */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-white/30" />
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-black/20" />
                        </motion.div>
                    );
                })}
            </motion.div>
        </>
    );
}
