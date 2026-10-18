import { Metadata } from "next";
import { WorkExperience } from "@/components/home/WorkExperience";
import { EngineeringFocus } from "@/components/home/EngineeringFocus";
import { ExperienceSummaryModal } from "@/components/experience/ExperienceSummaryModal";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export const metadata: Metadata = {
    title: "Experience | Prince Spice",
    description: "Professional software engineering history, roles, technical leadership, and engineering competencies.",
};

export default function ExperiencePage() {
    return (
        <main className="min-h-screen bg-background text-foreground pb-20 pt-2 md:pt-4">
            {/* Main Interactive Work Experience Component */}
            <WorkExperience />

            <div className="hip-divider max-w-5xl mx-auto my-2 opacity-50" />

            {/* Core Engineering Focus Component */}
            <EngineeringFocus />

            {/* Floating Career Summary Snapshot Trigger & Modal */}
            <ExperienceSummaryModal />

            {/* Next Section Flow & Resume Callout */}
            <section className="py-12 px-4 md:px-6">
                <div className="container max-w-5xl mx-auto">
                    <div className="p-8 md:p-10 rounded-2xl bg-secondary/20 border border-border/80 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <span className="section-tag block mb-2">Continue Exploring</span>
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                                Deep dive into the tech stack & tooling
                            </h3>
                            <p className="text-muted-foreground text-sm md:text-base mt-2 mb-0">
                                Explore intentional choices in frontend, mobile, backend architecture, and infrastructure.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
                            <a
                                href="https://docs.google.com/document/d/1Kgei3zUYT3TPkn7CJem7U83X3vwnlyKEV_Y4eM_2anE/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2.5 rounded-xl border border-border hover:border-primary/50 text-xs md:text-sm font-semibold transition-all duration-150 active:scale-[0.98] inline-flex items-center gap-2"
                            >
                                <FileText className="w-4 h-4 text-primary" />
                                <span>Resume</span>
                            </a>
                            <Link
                                href="/stack"
                                className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs md:text-sm font-bold tracking-wide transition-all duration-150 active:scale-[0.98] inline-flex items-center gap-2 hover:opacity-95"
                            >
                                <span>View Stack</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

