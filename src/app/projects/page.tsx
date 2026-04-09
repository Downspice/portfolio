import { ProfessionalProjects } from "@/components/home/ProfessionalProjects";
import { WebProjects } from "@/components/home/WebProjects";
import { UIMockups } from "@/components/home/UIMockups";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen">
            <ProfessionalProjects />
            <WebProjects />
            <UIMockups />
        </main>
    );
}
