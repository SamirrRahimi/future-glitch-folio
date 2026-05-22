import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  asChild?: boolean;
}

export const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "solid", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-sm uppercase tracking-wider rounded-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";

    const variants: Record<Variant, string> = {
      solid:
        "bg-neon text-primary-foreground shadow-[0_0_20px_-5px_var(--neon)] hover:shadow-[0_0_35px_-2px_var(--neon)] hover:-translate-y-0.5",
      outline:
        "border border-neon/40 text-neon hover:bg-neon/10 hover:border-neon hover:shadow-[0_0_20px_-5px_var(--neon)]",
      ghost: "text-neon hover:bg-neon/10",
    };

    return <button ref={ref} className={cn(base, variants[variant], className)} {...props} />;
  },
);
NeonButton.displayName = "NeonButton";
