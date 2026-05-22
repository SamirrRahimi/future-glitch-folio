export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  description: string;
}

export const certificates: Certificate[] = [
  {
    title: "eJPT — Junior Penetration Tester",
    issuer: "INE Security / eLearnSecurity",
    date: "2025",
    description:
      "Hands-on certification covering network and web application penetration testing methodologies.",
    credentialUrl: "#",
  },
  {
    title: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2024",
    description: "Industry baseline for cybersecurity skills — threats, cryptography, and risk management.",
    credentialUrl: "#",
  },
  {
    title: "CCNA — Cisco Certified Network Associate",
    issuer: "Cisco",
    date: "2024",
    description:
      "Routing, switching, network fundamentals, security basics, and automation across Cisco platforms.",
    credentialUrl: "#",
  },
  {
    title: "CompTIA Network+",
    issuer: "CompTIA",
    date: "2023",
    description: "Foundational networking certification covering protocols, infrastructure, and troubleshooting.",
    credentialUrl: "#",
  },
  {
    title: "TryHackMe — Pre Security & Jr Penetration Tester Path",
    issuer: "TryHackMe",
    date: "2024",
    description: "Completed 100+ rooms across pentesting, networking, Linux, and red team methodologies.",
    credentialUrl: "#",
  },
  {
    title: "Hack The Box — CPTS Track (in progress)",
    issuer: "Hack The Box Academy",
    date: "2026",
    description: "Advancing toward Certified Penetration Testing Specialist with extensive lab work.",
    credentialUrl: "#",
  },
];
