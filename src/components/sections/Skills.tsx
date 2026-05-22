import { useState } from "react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SkillBar } from "@/components/cards/SkillBar";
import { skills, skillCategories, type SkillCategory } from "@/data/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  const [active, setActive] = useState<SkillCategory>(skillCategories[0]);
  const filtered = skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="relative py-24 scroll-mt-20" aria-labelledby="skills-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Stack &amp; Arsenal"
          subtitle="A continuously growing toolkit — driven by labs, CTFs, and real engagements."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all",
                active === c
                  ? "bg-neon text-primary-foreground shadow-[0_0_20px_-5px_var(--neon)]"
                  : "border border-neon/20 text-muted-foreground hover:border-neon/60 hover:text-neon",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="glass neon-border rounded-2xl p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
            {filtered.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-xs font-mono text-muted-foreground">
          // skills are loaded dynamically from <span className="text-neon">src/data/skills.ts</span>
        </p>
      </div>
    </section>
  );
}
