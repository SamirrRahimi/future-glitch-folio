import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Certificates } from "@/components/sections/Certificates";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eshaq Rahimi — Penetration Tester & Network Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Eshaq Rahimi, junior penetration tester and network engineer. Offensive security, network engineering, and CTF writeups.",
      },
      { property: "og:title", content: "Eshaq Rahimi — Penetration Tester & Network Engineer" },
      {
        property: "og:description",
        content: "Cybersecurity portfolio: pentesting, networking, certifications, and lab projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "oklch(0.18 0.02 160)",
            border: "1px solid oklch(0.88 0.22 152 / 0.3)",
            color: "oklch(0.96 0.02 150)",
          },
        }}
      />
    </div>
  );
}
