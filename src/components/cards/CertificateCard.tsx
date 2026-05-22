import { Award, ExternalLink } from "lucide-react";
import type { Certificate } from "@/data/certificates";

export function CertificateCard({ cert }: { cert: Certificate }) {
  return (
    <article className="glass neon-border rounded-xl p-6 h-full flex flex-col group">
      <div className="flex items-start justify-between gap-4">
        <div className="w-11 h-11 rounded-lg bg-neon/10 border border-neon/30 flex items-center justify-center text-neon group-hover:bg-neon/20 transition-colors">
          <Award size={20} />
        </div>
        <span className="font-mono text-xs text-neon/80">{cert.date}</span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-neon transition-colors">
        {cert.title}
      </h3>
      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
        {cert.issuer}
      </p>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
        {cert.description}
      </p>

      {cert.credentialUrl && (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-xs font-mono text-neon hover:underline"
        >
          Verify credential <ExternalLink size={12} />
        </a>
      )}
    </article>
  );
}
