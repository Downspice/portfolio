import { Hero } from "@/components/home/Hero";
import { EngineeringFocus } from "@/components/home/EngineeringFocus";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { TechnicalDomains } from "@/components/home/TechnicalDomains";
import { Mindset } from "@/components/home/Mindset";
import { ClosingCTA } from "@/components/home/ClosingCTA";
import { WorkExperience } from "@/components/home/WorkExperience";
import { UIMockups } from "@/components/home/UIMockups";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/20">
      <Hero />
      <EngineeringFocus />
      {/* <FeaturedProjects /> */}
      <TechnicalDomains />
      <WorkExperience />
      <UIMockups />
      <Mindset />
      <ClosingCTA />
    </main>
  );
}
