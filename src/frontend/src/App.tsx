import {
  Briefcase,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Menu,
  MessageSquare,
  Phone,
  User,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = ["Java", "Python", "C", "MySQL", "Data Analytics"];

const LINKEDIN_URL = "https://www.linkedin.com/in/karthik-raparthi-a3b155331";
const GITHUB_URL = "https://github.com/KarthikGoud-4";

const STATS = [
  {
    value: 2450,
    label: "Project Completed Done",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
      >
        <rect
          x="10"
          y="4"
          width="36"
          height="48"
          rx="4"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M18 18h20M18 26h20M18 34h12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle
          cx="48"
          cy="46"
          r="10"
          fill="#0f172a"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M43 46l3.5 3.5L53 42"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    value: 1085,
    label: "Satisfied Clients",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
      >
        <circle cx="32" cy="14" r="8" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M14 50c0-9.941 8.059-18 18-18s18 8.059 18 18"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M24 26c-6 1-10 5-10 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M40 26c6 1 10 5 10 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M28 38c2-1.5 6-1.5 8 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    value: 7,
    label: "My Team Members",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
      >
        <circle
          cx="32"
          cy="22"
          r="10"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M12 52c0-11.046 8.954-20 20-20s20 8.954 20 20"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M38 14a10 10 0 010 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M50 52c0-8-5-14-12-17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    value: 2790,
    label: "World Wide Customer",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
      >
        <circle
          cx="32"
          cy="32"
          r="22"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <ellipse
          cx="32"
          cy="32"
          rx="10"
          ry="22"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M10 32h44" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 20h40M12 44h40"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
      </svg>
    ),
  },
];

const PROJECTS = [
  {
    title: "Weather Chatbot",
    description:
      "An AI-powered weather assistant chatbot that provides real-time weather updates, forecasts, and conversational weather insights through a clean, interactive interface.",
    image: "/assets/generated/weather-chatbot-project.dim_800x500.jpg",
    tags: ["AI", "Weather API", "Chatbot", "JavaScript"],
    link: "https://weather-chatbot-56.netlify.app/",
  },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({
  value,
  label,
  icon,
  animate,
}: { value: number; label: string; icon: React.ReactNode; animate: boolean }) {
  const count = useCountUp(value, 1800, animate);
  const display =
    value < 10 ? String(count).padStart(2, "0") : count.toLocaleString();
  return (
    <div className="flex flex-col items-start gap-4 p-8 border-r last:border-r-0 border-[#1F2937]">
      <div style={{ color: "#94A3B8" }}>{icon}</div>
      <div>
        <div
          className="text-5xl font-bold text-white mb-1"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {display}
        </div>
        <div className="text-sm" style={{ color: "#64748B" }}>
          {label}
        </div>
      </div>
    </div>
  );
}

function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="border-y border-[#1F2937]"
      style={{ background: "#0f172a" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "about", "projects", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111827]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      } border-b border-[#1F2937]`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          data-ocid="header.link"
          className="text-lg font-extrabold tracking-widest transition-colors duration-200"
          style={{ color: active === "#home" ? "#38BDF8" : "#ffffff" }}
        >
          KARTHIK
        </a>

        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={`header.${link.label.toLowerCase()}.link`}
              className="relative text-sm font-medium transition-colors duration-200"
              style={{
                color: active === link.href ? "#38BDF8" : "#94A3B8",
              }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-200"
                style={{
                  width: active === link.href ? "100%" : "0",
                  backgroundColor: "#0ea5e9",
                }}
              />
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          data-ocid="header.toggle"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="md:hidden border-t border-[#1F2937] bg-[#111827]/98 backdrop-blur-md px-4 py-4 flex flex-col gap-3"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={`header.mobile.${link.label.toLowerCase()}.link`}
              className="py-2 text-sm font-medium transition-colors duration-200"
              style={{ color: active === link.href ? "#38BDF8" : "#94A3B8" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0c1445 100%)",
      }}
    >
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="animate-fade-in-up text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#0ea5e9" }}
            >
              👋 Hello, I'm
            </p>
            <h1 className="animate-fade-in-up-delay text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-4">
              Raparthi
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #38BDF8 0%, #6366f1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Karthik
              </span>
            </h1>
            <p
              className="animate-fade-in-up-delay2 text-xl sm:text-2xl font-semibold mb-6"
              style={{ color: "#94A3B8" }}
            >
              Java & Python Developer | Data Analytics
            </p>
            <p
              className="animate-fade-in-up-delay2 text-base mb-10 max-w-md leading-relaxed"
              style={{ color: "#94A3B8" }}
            >
              Passionate about building efficient software solutions and
              uncovering insights through data. Skilled in Java, Python, C,
              MySQL, and Data Analytics.
            </p>
            <div className="animate-fade-in-up-delay3 flex flex-wrap gap-4">
              <a
                href="#projects"
                data-ocid="hero.primary_button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #0ea5e9, #6366f1)",
                }}
              >
                <Briefcase size={16} />
                View My Work
              </a>
              <a
                href="#contact"
                data-ocid="hero.secondary_button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: "#0ea5e9",
                  color: "#0ea5e9",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(14,165,233,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "transparent";
                }}
              >
                <MessageSquare size={16} />
                Get In Touch
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center relative">
            <div
              className="relative w-full max-w-md h-96 rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1e1b4b 0%, #0c1a3d 100%)",
                border: "1px solid rgba(99,102,241,0.3)",
                boxShadow: "0 0 60px rgba(99,102,241,0.2)",
              }}
            >
              <img
                src="/assets/generated/hero-shapes.dim_600x500.png"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover opacity-80"
              />
              <div
                className="animate-float absolute top-6 right-8 w-12 h-12 rounded-lg"
                style={{
                  background: "rgba(14,165,233,0.2)",
                  border: "1px solid rgba(14,165,233,0.5)",
                  backdropFilter: "blur(4px)",
                }}
              />
              <div
                className="animate-float-delay absolute bottom-10 left-6 w-8 h-8 rounded-full"
                style={{
                  background: "rgba(99,102,241,0.3)",
                  border: "1px solid rgba(99,102,241,0.6)",
                }}
              />
              <div
                className="animate-float-delay2 absolute top-1/2 left-1/3 w-10 h-10"
                style={{
                  background: "rgba(56,189,248,0.15)",
                  border: "1px solid rgba(56,189,248,0.4)",
                  transform: "rotate(45deg)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-[#94A3B8] tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#94A3B8] to-transparent" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6"
      style={{ background: "#0f172a" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-6 mb-8">
              <div className="relative flex-shrink-0">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, #0ea5e9, #6366f1)",
                    boxShadow:
                      "0 0 30px rgba(14,165,233,0.4), 0 0 60px rgba(99,102,241,0.2)",
                  }}
                >
                  RK
                </div>
                <div
                  className="absolute inset-0 rounded-full animate-pulse"
                  style={{ boxShadow: "0 0 0 4px rgba(14,165,233,0.2)" }}
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <User size={16} style={{ color: "#0ea5e9" }} />
                  <span
                    className="text-sm font-semibold uppercase tracking-wider"
                    style={{ color: "#0ea5e9" }}
                  >
                    About Me
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white">Who I Am</h2>
              </div>
            </div>

            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "#94A3B8" }}
            >
              Hi! I'm Raparthi Karthik, a developer passionate about creating
              efficient and impactful software. I specialize in Java, Python,
              and C programming, backed by strong skills in MySQL database
              management and Data Analytics.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#94A3B8" }}
            >
              I love turning complex data into actionable insights and building
              robust backend systems. Always eager to learn new technologies and
              take on challenging projects.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Code2 size={16} style={{ color: "#6366f1" }} />
              <span
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: "#6366f1" }}
              >
                Skills &amp; Tech Stack
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">
              What I Work With
            </h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default"
                  style={{
                    background: "rgba(14,165,233,0.1)",
                    border: "1px solid rgba(14,165,233,0.3)",
                    color: "#38BDF8",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLSpanElement).style.background =
                      "rgba(14,165,233,0.2)";
                    (e.currentTarget as HTMLSpanElement).style.borderColor =
                      "rgba(14,165,233,0.6)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLSpanElement).style.background =
                      "rgba(14,165,233,0.1)";
                    (e.currentTarget as HTMLSpanElement).style.borderColor =
                      "rgba(14,165,233,0.3)";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6"
      style={{
        background:
          "linear-gradient(180deg, #0f172a 0%, #0c1a3d 50%, #0f172a 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Briefcase size={16} style={{ color: "#0ea5e9" }} />
            <span
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: "#0ea5e9" }}
            >
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <div
            className="w-16 h-1 rounded-full mx-auto"
            style={{ background: "linear-gradient(90deg, #0ea5e9, #6366f1)" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              style={{
                background: "#111827",
                border: "1px solid rgba(99,102,241,0.25)",
                boxShadow: "0 0 30px rgba(99,102,241,0.06)",
              }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 50%, #111827 100%)",
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "#94A3B8" }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: "rgba(99,102,241,0.15)",
                        border: "1px solid rgba(99,102,241,0.3)",
                        color: "#a5b4fc",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`projects.${project.title.toLowerCase().replace(/\s+/g, "_")}.button`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #0ea5e9, #6366f1)",
                  }}
                >
                  <ExternalLink size={14} />
                  View Project
                </a>
              </div>
            </div>
          ))}

          <div
            className="rounded-2xl p-8 flex flex-col items-center justify-center text-center"
            style={{
              background: "#111827",
              border: "1px dashed rgba(99,102,241,0.3)",
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
              style={{
                background:
                  "linear-gradient(135deg, rgba(14,165,233,0.15), rgba(99,102,241,0.15))",
                border: "1px solid rgba(99,102,241,0.3)",
              }}
            >
              <Github size={28} style={{ color: "#38BDF8" }} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              More Coming Soon
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "#94A3B8" }}
            >
              Follow my GitHub to stay updated on new projects.
            </p>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="projects.github_button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border transition-all duration-300 hover:scale-105"
              style={{
                borderColor: "rgba(56,189,248,0.4)",
                color: "#38BDF8",
                background: "transparent",
              }}
            >
              <Github size={14} />
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6"
      style={{ background: "#0f172a" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <MessageSquare size={16} style={{ color: "#0ea5e9" }} />
          <span
            className="text-sm font-semibold uppercase tracking-wider"
            style={{ color: "#0ea5e9" }}
          >
            Contact
          </span>
        </div>
        <h2 className="text-4xl font-bold text-white mb-2">Get In Touch</h2>
        <p className="text-2xl font-semibold mb-6" style={{ color: "#6366f1" }}>
          Let's Collaborate!
        </p>
        <p
          className="text-base leading-relaxed mb-12"
          style={{ color: "#94A3B8" }}
        >
          I'm open to new opportunities, projects, and exciting collaborations.
          Feel free to reach out via phone or connect with me on social media!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:7816061094"
            data-ocid="contact.phone_button"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "#111827",
              border: "1px solid rgba(14,165,233,0.3)",
              color: "#F8FAFC",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "#0ea5e9";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 20px rgba(14,165,233,0.3)";
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(14,165,233,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(14,165,233,0.3)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#111827";
            }}
          >
            <Phone size={18} style={{ color: "#0ea5e9" }} />
            7816061094
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact.linkedin_button"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "#111827",
              border: "1px solid rgba(99,102,241,0.3)",
              color: "#F8FAFC",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "#6366f1";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 20px rgba(99,102,241,0.3)";
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(99,102,241,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(99,102,241,0.3)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#111827";
            }}
          >
            <Linkedin size={18} style={{ color: "#6366f1" }} />
            LinkedIn
          </a>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact.github_button"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "#111827",
              border: "1px solid rgba(56,189,248,0.3)",
              color: "#F8FAFC",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "#38BDF8";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 20px rgba(56,189,248,0.3)";
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(56,189,248,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(56,189,248,0.3)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#111827";
            }}
          >
            <Github size={18} style={{ color: "#38BDF8" }} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="py-8 px-4 sm:px-6 border-t"
      style={{ background: "#111827", borderColor: "#1F2937" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "#94A3B8" }}>
          © {year} Raparthi Karthik. Built with ❤️ using{" "}
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-white"
            style={{ color: "#0ea5e9" }}
          >
            caffeine.ai
          </a>
        </p>

        <div className="flex items-center gap-4">
          <a
            href="tel:7816061094"
            aria-label="Phone"
            className="transition-all duration-200 hover:scale-110"
            style={{ color: "#94A3B8" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#38BDF8";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#94A3B8";
            }}
          >
            <Phone size={18} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-all duration-200 hover:scale-110"
            style={{ color: "#94A3B8" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#818cf8";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#94A3B8";
            }}
          >
            <Linkedin size={18} />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-all duration-200 hover:scale-110"
            style={{ color: "#94A3B8" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#F8FAFC";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#94A3B8";
            }}
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "#0f172a" }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
