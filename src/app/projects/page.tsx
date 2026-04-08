import { WebProjects } from "@/components/home/WebProjects";
import { UIMockups } from "@/components/home/UIMockups";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen">
            <WebProjects />
            <UIMockups />
        </main>
    );
}
