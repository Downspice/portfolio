"use client";

import { motion } from "framer-motion";

export function BackgroundOrbs() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Top Right Orb */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[100px]"
            />

            {/* Middle Left Orb */}
            <motion.div
                animate={{
                    x: [0, -70, 0],
                    y: [0, 50, 0],
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute top-[30%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-secondary/15 blur-[120px]"
            />

            {/* Bottom Right Orb */}
            <motion.div
                animate={{
                    x: [0, 60, 0],
                    y: [0, -80, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4,
                }}
                className="absolute bottom-[-10%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-accent/10 blur-[90px]"
            />
        </div>
    );
}
