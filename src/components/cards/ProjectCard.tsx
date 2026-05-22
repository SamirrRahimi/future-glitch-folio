import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass neon-border rounded-xl overflow-hidden group flex flex-col h-full">
      <div className="relative h-36 bg-gradient-to-br from-neon/10 via-background to-cyan-accent/5 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-4xl font-bold text-neon/30 group-hover:text-neon/60 transition-colors">
            {project.title.split(" ").map((w) => w[0]).slice(0, 3).join("")}
          </span>
        </div>
        <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest text-neon/80">
          // {project.tagline}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-neon transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded border border-neon/20 text-neon/90 bg-neon/5"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 pt-4 border-t border-neon/10">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-neon transition-colors"
              aria-label={`${project.title} repository`}
            >
              <Github size={14} /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-neon transition-colors"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={14} /> Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
