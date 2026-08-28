import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  number: string;
  tag: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({ number, tag, title, subtitle, align = "left" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <div className={cn("flex items-center gap-4 mb-4", align === "center" && "justify-center")}>
        <span className="section-tag">{tag}</span>
        <span className="font-mono-label text-xs text-muted-foreground">[{number}]</span>
      </div>
      <h2 className="glitch-text" data-text={title}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-lg max-w-2xl", align === "center" && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
