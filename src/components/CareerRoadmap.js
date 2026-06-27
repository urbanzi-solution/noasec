import {
  Network,
  ShieldCheck,
  Code2,
  Award,
  Laptop,
  FileText,
  BriefcaseBusiness,
  TrendingUp,
  CheckCircle2,
  Monitor,
  Server,
  Terminal,
  Target,
  UserRoundCheck,
  ChartNoAxesCombined,
  AlertTriangle,
  KeyRound,
  ClipboardCheck,
  SearchCheck,
  ShieldAlert,
  GraduationCap,
  House,
  Trophy,
  BookOpenCheck,
  FolderKanban,
  Lightbulb,
  Wrench,
  FolderOpen,
  Star,
  BookMarked,
  Radar,
  Building2,
  Headphones,
  Eye,
  Newspaper,
  Users,
  BadgeCheck,
  FlaskConical,
  ExternalLink,
} from "lucide-react";

export default function CareerRoadmap() {
  const roadmap = [
    {
      number: "1",
      title: "Learn Basics of IT & Networking",
      image: "/learn.jpg",
      description:
        "Build a strong foundation in how computers, networks, and operating systems work.",
      icon: Network,
      topics: [
        {
          title: "The Basics of Networking",
          icon: Network,
          items: [
            "IP addresses",
            "DNS",
            "TCP/IP",
            "Routers & Switches",
            "Networking protocols",
            "Firewalls",
          ],
        },
        {
          title: "Network Security",
          icon: ShieldCheck,
          items: [
            "Firewalls",
            "Secure network communication",
            "Basic threat protection",
          ],
        },
        {
          title: "Operating Systems",
          icon: Monitor,
          items: [
            "Windows System Administration",
            "Linux basics",
            "File systems",
            "System programs",
            "User administration",
          ],
        },
        {
          title: "Computer Basics",
          icon: Server,
          items: [
            "Hardware parts",
            "Software applications",
            "System architecture",
          ],
        },
      ],
    },

    {
      number: "2",
      title: "Grasp Core Concepts",
      image: "/grasp.avif",
      description:
        "Understand the core principles, common threats, security controls, and risk management practices used in cybersecurity.",
      icon: ShieldCheck,
      topics: [
        {
          title: "Information Security Principles",
          icon: ShieldCheck,
          items: [
            "Confidentiality",
            "Integrity",
            "Availability (CIA Triad)",
          ],
        },
        {
          title: "Threats and Attacks",
          icon: AlertTriangle,
          items: [
            "Malware",
            "Ransomware",
            "Phishing",
            "Social engineering",
            "DDoS attacks",
          ],
        },
        {
          title: "Security Controls",
          icon: KeyRound,
          items: [
            "Firewalls",
            "Antivirus solutions",
            "Access controls",
            "Multi-factor authentication",
          ],
        },
        {
          title: "Risk Management",
          icon: ClipboardCheck,
          items: [
            "Vulnerability assessment",
            "Risk analysis",
            "Security policies",
          ],
        },
      ],
      bottomNote:
        "Understanding these foundational concepts is crucial for anyone pursuing a cybersecurity career.",
    },

    {
      number: "3",
      title: "Learn Essential Skills",
      image: "/skill.jpg",
      description:
        "Develop practical cybersecurity skills that help you monitor networks, investigate threats, and respond to security incidents.",
      icon: Code2,
      topics: [
        {
          title: "Network Security",
          icon: ShieldCheck,
          items: [
            "Learn to monitor networks",
            "Secure network communication",
            "Troubleshoot network issues",
          ],
        },
        {
          title: "Linux Administration",
          icon: Terminal,
          items: [
            "Linux is commonly used in cybersecurity",
            "Server administration basics",
            "Security tools and commands",
          ],
        },
        {
          title: "Security Watch",
          icon: Target,
          items: [
            "Monitor security activity",
            "Detect potential threats",
            "Understand security team workflows",
          ],
        },
        {
          title: "Vulnerability Scanning & Assessment",
          icon: SearchCheck,
          items: [
            "Identify system vulnerabilities",
            "Assess application weaknesses",
            "Understand security findings",
          ],
        },
        {
          title: "Basic Scripting",
          icon: Code2,
          items: [
            "Python basics",
            "Automate repetitive tasks",
            "Improve security workflow efficiency",
          ],
        },
        {
          title: "Response to Incidents",
          icon: ShieldAlert,
          items: [
            "Investigate security incidents",
            "Respond to threats",
            "Document and report incidents",
          ],
        },
      ],
      bottomNote:
        "Enhancing these abilities will greatly improve your chances of securing employment.",
    },

    {
      number: "4",
      title: "Obtain Certifications",
      image: "/certificate.jpeg",
      description:
        "Begin with beginner-friendly certifications to validate your knowledge and strengthen your cybersecurity resume.",
      icon: Award,
      topics: [
        {
          title: "CompTIA Security+",
          icon: ShieldCheck,
          items: [
            "Entry-level cybersecurity certification",
            "Very popular for beginners",
            "Builds a strong security foundation",
          ],
        },
        {
          title: "Certified Ethical Hacker (CEH)",
          icon: Target,
          items: [
            "Ethical hacking concepts",
            "Penetration testing methodologies",
            "Understanding attacker techniques",
          ],
        },
        {
          title: "Google Certificate in Cyber Security",
          icon: GraduationCap,
          items: [
            "Introductory cybersecurity certification",
            "Overview of cybersecurity concepts",
            "Beginner-friendly learning path",
          ],
        },
        {
          title: "Cisco CyberOps Associate",
          icon: Monitor,
          items: [
            "Ideal for aspiring SOC Analysts",
            "Security operations concepts",
            "Monitoring and incident response basics",
          ],
        },
      ],
      bottomNote:
        "Certifications can add value to your resume and help you stand out in a competitive job market.",
    },

    {
      number: "5",
      title: "Get Practical Experience",
      image: "/practical.jpg",
      description:
        "Gain hands-on experience by practicing cybersecurity techniques in safe environments and building your own projects.",
      icon: Laptop,
      topics: [
        {
          title: "Build a Home Lab",
          icon: House,
          items: [
            "Set up a virtual environment",
            "Practice cybersecurity techniques safely",
            "Test tools and configurations",
          ],
        },
        {
          title: "Join Capture The Flag (CTF) Challenges",
          icon: Trophy,
          items: [
            "Build problem-solving skills",
            "Improve security analysis skills",
            "Practice real-world style challenges",
          ],
        },
        {
          title: "Use Cybersecurity Learning Platforms",
          icon: BookOpenCheck,
          items: [
            "Practice with hands-on labs",
            "Use simulated environments",
            "Learn through guided challenges",
          ],
        },
        {
          title: "Work on Personal Projects",
          icon: FolderKanban,
          items: [
            "Document your cybersecurity projects",
            "Showcase your technical skills",
            "Create a professional portfolio",
          ],
        },
      ],
      bottomNote:
        "Hands-on experience demonstrates your ability to apply cybersecurity concepts in practical situations.",
    },

    {
      number: "6",
      title: "Build a Strong Resume",
      image: "/resume.jpg",
      description:
        "Create a focused cybersecurity resume that clearly shows your skills, learning progress, projects, and achievements.",
      icon: FileText,
      topics: [
        {
          title: "Technical Skills",
          icon: Wrench,
          items: [
            "Networking fundamentals",
            "Security tools",
            "Linux and Windows skills",
            "Scripting knowledge",
          ],
        },
        {
          title: "Certifications",
          icon: Award,
          items: [
            "CompTIA Security+",
            "Google Cybersecurity Certificate",
            "CEH or other relevant certifications",
          ],
        },
        {
          title: "Projects & Practical Experience",
          icon: FolderOpen,
          items: [
            "Home lab projects",
            "CTF challenge write-ups",
            "Security research",
            "Hands-on cybersecurity practice",
          ],
        },
        {
          title: "Relevant Coursework",
          icon: BookMarked,
          items: [
            "Networking",
            "Operating systems",
            "Cybersecurity fundamentals",
            "Programming and scripting",
          ],
        },
        {
          title: "Achievements",
          icon: Star,
          items: [
            "Completed certifications",
            "CTF achievements",
            "Project milestones",
            "Academic accomplishments",
          ],
        },
      ],
      bottomNote:
        "Even if you are a fresher, showcasing labs, projects, and certifications can help compensate for limited work experience. Be sure to convey your desire to learn and your passion for cybersecurity.",
    },

    {
      number: "7",
      title: "Apply for Entry-Level Roles",
      image: "/entry.webp",
      description:
        "Start your cybersecurity career by applying for entry-level roles that match your skills and learning experience.",
      icon: BriefcaseBusiness,
      topics: [
        {
          title: "SOC Analyst",
          icon: Radar,
          items: [
            "Monitors security alerts",
            "Investigates possible threats",
            "Supports incident response activities",
          ],
        },
        {
          title: "Information Security Analyst",
          icon: Building2,
          items: [
            "Supports organizational security operations",
            "Helps manage security risks",
            "Assists with security policies and controls",
          ],
        },
        {
          title: "IT Support & Security Duties",
          icon: Headphones,
          items: [
            "Great stepping stone into cybersecurity",
            "Supports users and systems",
            "Helps with basic security tasks",
          ],
        },
        {
          title: "Junior Security Analyst",
          icon: Eye,
          items: [
            "Assists senior security professionals",
            "Helps monitor security activity",
            "Supports incident response tasks",
          ],
        },
      ],
      bottomNote:
        "These roles offer valuable experience and can open the door to advanced careers in cybersecurity.",
    },

    {
      number: "8",
      title: "Continuous Growth",
      image: "/grwoth.jpg",
      description:
        "Cybersecurity is constantly evolving. New threats, technologies, and attack methods emerge every year.",
      icon: TrendingUp,
      topics: [
        {
          title: "Follow Cybersecurity News",
          icon: Newspaper,
          items: [
            "Stay updated with new threats",
            "Follow trusted industry resources",
            "Read security advisories",
          ],
        },
        {
          title: "Attend Webinars & Workshops",
          icon: GraduationCap,
          items: [
            "Learn from cybersecurity experts",
            "Discover new technologies",
            "Build practical knowledge",
          ],
        },
        {
          title: "Join Professional Communities",
          icon: Users,
          items: [
            "Connect with cybersecurity professionals",
            "Share knowledge and experiences",
            "Find learning opportunities",
          ],
        },
        {
          title: "Pursue Advanced Certifications",
          icon: BadgeCheck,
          items: [
            "Build specialized expertise",
            "Strengthen your career profile",
            "Advance into higher-level roles",
          ],
        },
        {
          title: "Practice Regularly",
          icon: FlaskConical,
          items: [
            "Use labs and simulations",
            "Practice security tools",
            "Keep your skills current",
          ],
        },
      ],
      resourceNote: true,
      bottomNote:
        "Continuous learning is one of the most important factors for long-term success in cybersecurity.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#071827] px-4 pb-16 pt-44 text-white sm:px-6 sm:pb-20 sm:pt-52 lg:px-10 lg:pt-56">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-cyan-400">
            Cybersecurity Learning Journey
          </p>

          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            The 8-Step Career Roadmap
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-300">
            Follow these steps to build the right cybersecurity knowledge,
            practical skills, certifications, and career experience.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-8 left-[18px] top-8 w-px bg-cyan-400/40 sm:left-[23px]" />

          <div className="space-y-16">
            {roadmap.map((step) => {
              const StepIcon = step.icon;

              return (
                <article key={step.number} className="relative pl-12 sm:pl-16">
                  <div className="absolute left-0 top-1 z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-cyan-300 bg-[#0b2436] text-sm font-bold text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.65)] sm:h-12 sm:w-12">
                    {step.number}
                  </div>

                  <div className="mb-5 flex min-h-[58px] items-center gap-3 rounded-xl border border-[#24475c] bg-[#0b2030] px-4 py-3 sm:min-h-[66px] sm:px-5 sm:py-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/25 bg-cyan-400/10 sm:h-10 sm:w-10">
                      <StepIcon size={19} className="text-cyan-300" />
                    </div>

                    <div className="min-w-0">
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-400 sm:text-[11px]">
                        Step {step.number}
                      </p>

                      <h3 className="text-[17px] font-bold leading-tight text-white sm:text-xl">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-[#24475c] bg-[#0b2030] shadow-[0_12px_30px_rgba(0,0,0,0.2)]">
                    <div className="relative h-56 overflow-hidden sm:h-72 lg:h-80">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="h-full w-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071827]/60 via-transparent to-transparent" />
                    </div>

                    <div className="border-b border-[#24475c] px-5 py-5 sm:px-7">
                      <p className="text-sm leading-6 text-slate-200 sm:text-[15px]">
                        {step.description}
                      </p>
                    </div>

                    <div className="p-5 sm:p-7">
                      {step.resourceNote && (
                        <div className="mb-6 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">
                          <div className="mb-2 flex items-center gap-2">
                            <Newspaper size={18} className="text-cyan-300" />
                            <h4 className="text-sm font-bold text-cyan-100">
                              Stay Informed with Trusted Resources
                            </h4>
                          </div>

                          <p className="text-sm leading-6 text-slate-200">
                            Successful cybersecurity professionals regularly
                            follow trusted industry resources, security
                            advisories, and threat intelligence updates.
                            Resources such as{" "}
                            <a
                              href="https://www.cert-in.org.in/"
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 font-medium text-cyan-300 underline underline-offset-4 hover:text-cyan-200"
                            >
                              CERT-In (Indian Computer Emergency Response Team)
                              <ExternalLink size={13} />
                            </a>{" "}
                            help professionals stay informed about the latest
                            cybersecurity threats, vulnerabilities, and best
                            practices relevant to India.
                          </p>
                        </div>
                      )}

                      <div className="mb-5 flex items-center gap-2">
                        <CheckCircle2 size={19} className="text-cyan-400" />
                        <h4 className="text-[15px] font-bold text-cyan-100">
                          Topics to Learn
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        {step.topics.map((topic) => {
                          const TopicIcon = topic.icon;

                          return (
                            <div
                              key={topic.title}
                              className="relative overflow-hidden rounded-xl border border-[#24475c] bg-[#102a3d]"
                            >
                              <div className="absolute left-0 top-0 h-full w-1 bg-cyan-400" />

                              <div className="flex gap-4 p-5 pl-6">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10">
                                  <TopicIcon
                                    size={21}
                                    className="text-cyan-300"
                                  />
                                </div>

                                <div className="min-w-0 flex-1">
                                  <h5 className="mb-3 text-[15px] font-bold text-white">
                                    {topic.title}
                                  </h5>

                                  <div className="flex flex-wrap gap-2">
                                    {topic.items.map((item) => (
                                      <span
                                        key={item}
                                        className="rounded-md border border-cyan-400/15 bg-[#071d2c] px-3 py-1.5 text-xs text-slate-200"
                                      >
                                        {item}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {step.bottomNote && (
                        <div className="mt-6 flex items-start gap-3 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-5 py-4">
                          <Lightbulb
                            size={19}
                            className="mt-0.5 shrink-0 text-cyan-300"
                          />
                          <p className="text-sm leading-6 text-cyan-50">
                            {step.bottomNote}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}