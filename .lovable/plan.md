## Plan: Eshaq Rahimi — Cybersecurity Portfolio

A single-page premium dark portfolio with neon green cyberpunk accents, glassmorphism, smooth scroll, and a working contact form backed by Lovable Cloud.

### Design system (src/styles.css)

- Dark base: near-black background (`oklch(0.14 0.02 240)`), elevated surface for glass cards.
- Neon green primary `#00ff9c` (`oklch(0.88 0.22 152)`) + secondary cyan accent for highlights.
- Tokens: `--neon`, `--neon-glow`, `--glass-bg`, `--glass-border`, `--grid-line`.
- Utility classes: `.glass`, `.neon-border`, `.neon-text`, `.glow`, animated grid background, scanline overlay.
- Typography: `Space Grotesk` (headings) + `JetBrains Mono` (mono accents/code) + `Inter` (body), loaded via Google Fonts in `__root.tsx`.
- Animations: fade-in, slide-up, float, pulse-glow, animated gradient borders, marquee for tech stack.

### Sections (single-page with smooth-scroll anchors)

1. **Navbar** — fixed glassmorphism bar, neon logo `</ESHAQ>`, anchor links (Home, About, Skills, Certs, Projects, Contact), mobile hamburger sheet.
2. **Hero** — animated grid/matrix background, "Junior Penetration Tester · Network Engineer Enthusiast" headline with typewriter-style rotating role, neon CTA buttons (View Projects / Contact), terminal-style intro card.
3. **About** — two-column glass card: portrait placeholder + bio, mission, focus areas; quick stats (CVEs reviewed, labs done, etc.).
4. **Skills** — driven by `src/data/skills.ts` array `{ name, level, category, icon }`; grouped tabs (Offensive Security, Networking, Tools, Languages); animated progress bars that fill on scroll (IntersectionObserver).
5. **Certificates** — driven by `src/data/certificates.ts` array `{ title, issuer, date, image, credentialUrl }`; reusable `CertificateCard` grid with glow on hover.
6. **Projects** — driven by `src/data/projects.ts`; reusable `ProjectCard` (image, summary, tags, links) with neon border hover lift.
7. **Contact** — form (name, email, message) submitting to a `createServerFn` that inserts into `contact_messages` (Lovable Cloud). Validation with Zod, sonner toast on success.
8. **Footer** — socials (GitHub, LinkedIn, Telegram — placeholder `#` links the user can swap), copyright, "Built with Lovable" line.

### Component structure

```
src/
  components/
    layout/ Navbar.tsx  Footer.tsx
    ui/     (existing shadcn)
    sections/ Hero.tsx About.tsx Skills.tsx Certificates.tsx Projects.tsx Contact.tsx
    cards/  SkillBar.tsx CertificateCard.tsx ProjectCard.tsx
    common/ NeonButton.tsx SectionHeading.tsx GridBackground.tsx
  data/ skills.ts certificates.ts projects.ts socials.ts
  routes/ index.tsx (composes sections) __root.tsx (fonts + meta)
  lib/ contact.functions.ts (createServerFn → insert)
```

### Backend (Lovable Cloud)

- Enable Lovable Cloud.
- Migration: table `contact_messages (id uuid pk, name text, email text, message text, created_at timestamptz default now())`; RLS enabled; policy allows public inserts only (no select).
- `submitContactMessage` server function validates with Zod and inserts via `supabaseAdmin`.

### Performance & accessibility

- Semantic landmarks (`header`, `main`, `section[aria-labelledby]`, `footer`), single H1 in hero.
- All neon colors validated for AA contrast against dark bg.
- `prefers-reduced-motion` disables heavy animations.
- Lazy-load section images; preconnect Google Fonts.
- SEO meta in `__root.tsx`: title, description, OG tags, JSON-LD `Person` schema.

### Out of scope

- Real avatar/cert images — placeholder gradient blocks (user can swap).
- Auth, blog, CMS.

Press Implement to build it.