import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Mail, Send } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { NeonButton } from "@/components/common/NeonButton";
import { submitContactMessage } from "@/lib/contact.functions";
import { socials } from "@/data/socials";

export function Contact() {
  const submit = useServerFn(submitContactMessage);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill out every field.");
      return;
    }
    setLoading(true);
    try {
      await submit({ data: form });
      toast.success("Message transmitted. I'll be in touch soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 scroll-mt-20" aria-labelledby="contact-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Open a secure channel"
          subtitle="Got a project, a question, or a job offer? Drop a message — replies usually within 24 hours."
        />

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
          <aside className="glass neon-border rounded-2xl p-6 flex flex-col gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon mb-2">
                // Direct
              </p>
              <a
                href="mailto:hello@eshaqrahimi.dev"
                className="flex items-center gap-2 text-foreground hover:text-neon transition-colors"
              >
                <Mail size={16} /> hello@eshaqrahimi.dev
              </a>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon mb-3">
                // Channels
              </p>
              <ul className="flex flex-col gap-2">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <li key={s.name}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-neon transition-colors"
                      >
                        <Icon size={16} /> {s.handle}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-auto pt-4 border-t border-neon/10 font-mono text-[11px] text-muted-foreground">
              <p>encryption: <span className="text-neon">TLS 1.3</span></p>
              <p>response_time: ~24h</p>
              <p>status: <span className="text-neon">accepting messages</span></p>
            </div>
          </aside>

          <form
            onSubmit={onSubmit}
            className="glass neon-border rounded-2xl p-6 md:p-8 flex flex-col gap-5"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                id="name"
                label="Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                maxLength={100}
                required
              />
              <Field
                id="email"
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                maxLength={255}
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                maxLength={2000}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg bg-secondary/40 border border-neon/15 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-neon focus:shadow-[0_0_20px_-5px_var(--neon)] transition-all"
                placeholder="What can I help you build, break, or secure?"
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              <p className="font-mono text-[11px] text-muted-foreground">
                {form.message.length}/2000
              </p>
              <NeonButton type="submit" disabled={loading}>
                {loading ? "Transmitting…" : (<><Send size={14} /> Send message</>)}
              </NeonButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  maxLength,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  maxLength?: number;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        maxLength={maxLength}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg bg-secondary/40 border border-neon/15 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-neon focus:shadow-[0_0_20px_-5px_var(--neon)] transition-all"
      />
    </div>
  );
}
