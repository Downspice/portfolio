"use client";

import BrickTransition from "@/components/BrickTransition";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <BrickTransition>
            {children}
        </BrickTransition>
    );
}
