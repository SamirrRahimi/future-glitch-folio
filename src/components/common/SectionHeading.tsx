interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${align === "center" ? "mx-auto text-center" : "text-left"} max-w-2xl`}
    >
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon mb-3">
        // {eyebrow}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
