import { WorkExperience } from "@/components/home/WorkExperience";
import { EngineeringFocus } from "@/components/home/EngineeringFocus";

export default function ExperiencePage() {
    return (
        <main className="min-h-screen">
            <WorkExperience />
            <EngineeringFocus />
        </main>
    );
}
