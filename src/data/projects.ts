export interface Project {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "NetRecon Toolkit",
    tagline: "Automated network reconnaissance suite",
    description:
      "A Python-based reconnaissance toolkit that orchestrates Nmap, Masscan, and Whois lookups, producing actionable HTML reports for internal engagements.",
    tags: ["Python", "Nmap", "Bash", "Reporting"],
    repoUrl: "#",
    liveUrl: "#",
  },
  {
    title: "WebPentest Lab",
    tagline: "Self-hosted vulnerable web app range",
    description:
      "Dockerized lab environment with intentionally vulnerable apps (SQLi, XSS, SSRF, IDOR) used for training and demos. Includes Burp Suite collaborator configs.",
    tags: ["Docker", "OWASP", "Burp Suite", "Linux"],
    repoUrl: "#",
  },
  {
    title: "SOC Watchtower",
    tagline: "Home SOC built on Wazuh + Suricata",
    description:
      "A miniature security operations center with Wazuh agents, Suricata IDS, and a dashboard pipeline that detects and triages suspicious traffic in real time.",
    tags: ["Wazuh", "Suricata", "ELK", "Networking"],
    repoUrl: "#",
  },
  {
    title: "Phisher's Mirror",
    tagline: "Phishing-awareness simulation platform",
    description:
      "An ethical phishing simulator used to train teams. Tracks open/click metrics with anonymized analytics and includes ready-to-use awareness templates.",
    tags: ["Node.js", "SMTP", "Analytics"],
    repoUrl: "#",
  },
  {
    title: "CiscoFlow",
    tagline: "Automated branch network provisioning",
    description:
      "Ansible + Python automation that pushes baseline configs (VLANs, ACLs, SNMP, NTP) to Cisco switches and routers across multiple branches.",
    tags: ["Ansible", "Python", "Cisco IOS"],
    repoUrl: "#",
  },
  {
    title: "CTF Writeups",
    tagline: "Solutions & methodologies",
    description:
      "Public repository of detailed writeups for HTB and THM machines, focused on methodology, tooling, and the thinking process rather than just answers.",
    tags: ["CTF", "Writeups", "Markdown"],
    repoUrl: "#",
  },
];
