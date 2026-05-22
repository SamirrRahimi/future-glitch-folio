export type SkillCategory = "Offensive Security" | "Networking" | "Tools & Platforms" | "Languages";

export interface Skill {
  name: string;
  level: number; // 0-100
  category: SkillCategory;
}

export const skills: Skill[] = [
  // Offensive Security
  { name: "Penetration Testing", level: 75, category: "Offensive Security" },
  { name: "Web App Security (OWASP Top 10)", level: 80, category: "Offensive Security" },
  { name: "Vulnerability Assessment", level: 78, category: "Offensive Security" },
  { name: "Network Reconnaissance", level: 82, category: "Offensive Security" },
  { name: "Active Directory Attacks", level: 65, category: "Offensive Security" },

  // Networking
  { name: "TCP/IP & Routing", level: 85, category: "Networking" },
  { name: "Cisco IOS Configuration", level: 78, category: "Networking" },
  { name: "Firewalls & VPN", level: 72, category: "Networking" },
  { name: "Network Monitoring", level: 76, category: "Networking" },
  { name: "Subnetting & VLANs", level: 88, category: "Networking" },

  // Tools
  { name: "Kali Linux / Parrot OS", level: 88, category: "Tools & Platforms" },
  { name: "Burp Suite", level: 80, category: "Tools & Platforms" },
  { name: "Nmap & Masscan", level: 85, category: "Tools & Platforms" },
  { name: "Metasploit Framework", level: 72, category: "Tools & Platforms" },
  { name: "Wireshark", level: 80, category: "Tools & Platforms" },
  { name: "Wazuh / Splunk SIEM", level: 60, category: "Tools & Platforms" },

  // Languages
  { name: "Python", level: 78, category: "Languages" },
  { name: "Bash / Shell Scripting", level: 80, category: "Languages" },
  { name: "JavaScript", level: 65, category: "Languages" },
  { name: "SQL", level: 70, category: "Languages" },
];

export const skillCategories: SkillCategory[] = [
  "Offensive Security",
  "Networking",
  "Tools & Platforms",
  "Languages",
];
