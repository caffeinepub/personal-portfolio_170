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
  {
    title: "Fade Loop Demo",
    description:
      "A modern UI/UX design portfolio demo featuring smooth fade and loop animations, sleek dark interface design, and glowing neon accents showcasing advanced web animation techniques.",
    image: "/assets/generated/fade-loop-project.dim_800x500.jpg",
    tags: ["UI/UX", "Animation", "Design", "React"],
    link: "https://fade-loop-demo.preview.emergentagent.com/about",
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
              👋 Hello, I&apos;m
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
              Web Developer | Java &amp; Python Developer
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

          {/* Hero image - uploaded portfolio reference */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div
              className="relative w-full max-w-lg rounded-3xl overflow-hidden"
              style={{
                boxShadow: "0 0 60px rgba(99,102,241,0.3)",
                border: "1px solid rgba(99,102,241,0.3)",
              }}
            >
              <img
                src="/assets/uploads/image-019d2f95-94be-73ed-8114-f9647008e310-1.png"
                alt="Professional Portfolio - Raparthi Karthik"
                className="w-full h-auto object-cover"
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
              Hi! I&apos;m Raparthi Karthik, a developer passionate about
              creating efficient and impactful software. I specialize in Java,
              Python, and C programming, backed by strong skills in MySQL
              database management and Data Analytics.
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
        </div>
      </div>
    </section>
  );
}

const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: 8,
  border: "1px solid #ccc",
  background: "#f9f9f9",
  color: "#111",
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
};

function Contact() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const tags = [
    "Mobile App",
    "Website Design",
    "Branding",
    "Webflow Development",
    "App Design",
    "Web Development",
    "WordPress",
  ];

  const toggleTag = (tag: string) => {
    setSelected((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const company = data.get("company") as string;
    const message = data.get("message") as string;
    const services = selected.join(", ");

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\nServices: ${services || "N/A"}\n\nMessage:\n${message}\n\nSent from portfolio contact form`,
    );
    window.location.href = `mailto:karthikgoudraparthi@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ background: "#eeeeee" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "80px 24px 0" }}>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: 16,
            color: "#111",
          }}
        >
          <span style={{ color: "#aaa" }}>Say Hi!</span> and tell me about
          <br />
          <span
            style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
          >
            <span
              style={{
                display: "inline-block",
                width: 60,
                height: 2,
                background: "#111",
                verticalAlign: "middle",
              }}
            />
            your idea
          </span>
        </h2>
        <p style={{ color: "#888", marginBottom: 40, fontSize: 15 }}>
          Have a nice works? reach out and let&#39;s chat.
        </p>

        {submitted ? (
          <div
            style={{ padding: "40px 0", textAlign: "center", color: "#111" }}
          >
            <p style={{ fontSize: 20, fontWeight: 700 }}>
              Thanks! I&#39;ll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} data-ocid="contact.modal">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginBottom: 16,
              }}
            >
              <div>
                <label
                  htmlFor="contact-name"
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#333",
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  Name.<span style={{ color: "#e00" }}>*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  placeholder="Hello.."
                  data-ocid="contact.input"
                  style={INPUT_STYLE}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#333",
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  Email.<span style={{ color: "#e00" }}>*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Where can I reply"
                  data-ocid="contact.input"
                  style={INPUT_STYLE}
                />
              </div>
            </div>
            <div style={{ marginBottom: 20 }}>
              <label
                htmlFor="contact-company"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#333",
                  display: "block",
                  marginBottom: 6,
                }}
              >
                Company name
              </label>
              <input
                id="contact-company"
                name="company"
                placeholder="Your company or website?"
                data-ocid="contact.input"
                style={INPUT_STYLE}
              />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label
                htmlFor="contact-message"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#333",
                  display: "block",
                  marginBottom: 6,
                }}
              >
                Message.<span style={{ color: "#e00" }}>*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                placeholder="Tell me about your idea..."
                data-ocid="contact.textarea"
                rows={4}
                style={{
                  ...INPUT_STYLE,
                  resize: "vertical",
                  fontFamily: "inherit",
                }}
              />
            </div>
            <div style={{ marginBottom: 28 }}>
              <label
                htmlFor="contact-services"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#333",
                  display: "block",
                  marginBottom: 10,
                }}
              >
                What&#39;s in your mind?<span style={{ color: "#e00" }}>*</span>
              </label>
              <input
                id="contact-services"
                type="hidden"
                name="services"
                value={selected.join(", ")}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {tags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    data-ocid="contact.toggle"
                    style={{
                      padding: "6px 16px",
                      borderRadius: 999,
                      border: "1.5px solid #ccc",
                      background: selected.includes(tag)
                        ? "#111"
                        : "transparent",
                      color: selected.includes(tag) ? "#fff" : "#333",
                      fontSize: 13,
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 12,
                marginBottom: 8,
              }}
            >
              <p style={{ fontSize: 12, color: "#999" }}>
                I&#39;ll must get back to you within 24 hours
              </p>
              <button
                type="submit"
                data-ocid="contact.submit_button"
                style={{
                  padding: "10px 28px",
                  borderRadius: 999,
                  background: "#111",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 14,
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                Send Me <span style={{ fontSize: 16 }}>⚡</span>
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Footer inside contact section */}
      <div
        style={{
          borderTop: "1px solid #ddd",
          marginTop: 60,
          padding: "20px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", gap: 24, fontSize: 13, color: "#555" }}>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact.link"
            style={{ color: "#555", textDecoration: "none" }}
          >
            Dribbble
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact.link"
            style={{ color: "#555", textDecoration: "none" }}
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact.link"
            style={{ color: "#555", textDecoration: "none" }}
          >
            Instagram
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact.link"
            style={{ color: "#555", textDecoration: "none" }}
          >
            Behance
          </a>
        </div>
        <p style={{ fontSize: 12, color: "#999" }}>Personal Portfolio©2024</p>
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
