"use client";

import StairTransition from "@/components/StairTransition";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <StairTransition>
            {children}
        </StairTransition>
    );
}
