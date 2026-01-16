
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProblemStatement } from "@/components/project/ProblemStatement";
import { SolutionArchitecture } from "@/components/project/SolutionArchitecture";
import { TechnicalDecisions } from "@/components/project/TechnicalDecisions";
import { ProjectChallenges } from "@/components/project/ProjectChallenges";
import { ProjectResults } from "@/components/project/ProjectResults";
import { ProjectNavigation } from "@/components/project/ProjectNavigation";
import { ClosingCTA } from "@/components/home/ClosingCTA";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/20">
            <ProjectHero project={project} />
            <ProblemStatement project={project} />
            <SolutionArchitecture project={project} />
            <TechnicalDecisions project={project} />
            <ProjectChallenges project={project} />
            <ProjectResults project={project} />
            <ProjectNavigation />
            <ClosingCTA />
        </main>
    );
}
