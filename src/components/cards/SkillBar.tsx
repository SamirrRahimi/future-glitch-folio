import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  name: string;
  level: number;
}

export function SkillBar({ name, level }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="text-sm font-medium text-foreground group-hover:text-neon transition-colors">
          {name}
        </span>
        <span className="font-mono text-xs text-neon">{level}%</span>
      </div>
      <div className="relative h-1.5 w-full rounded-full bg-secondary/60 overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-neon to-cyan-accent shadow-[0_0_10px_var(--neon)]"
          style={{
            width: visible ? `${level}%` : "0%",
            transition: "width 1.4s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      </div>
    </div>
  );
}
