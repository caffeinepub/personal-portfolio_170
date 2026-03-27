import {
  Briefcase,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  MessageSquare,
  User,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Git & GitHub",
  "REST APIs",
  "Responsive Design",
  "Figma",
  "VS Code",
];

const PROJECTS = [
  {
    title: "SkyWatch Dashboard",
    description:
      "A real-time weather dashboard with animated charts, 7-day forecasts, and location-based data using the OpenWeather API. Features dark/light mode and responsive layout.",
    tags: ["React", "TypeScript", "Chart.js", "REST API"],
    image: "/assets/generated/project-weather.dim_600x400.png",
    link: "#",
  },
  {
    title: "TaskFlow Kanban",
    description:
      "A full-featured kanban board app with drag-and-drop task management, priority labels, due dates, and team collaboration features. Persists state with localStorage.",
    tags: ["React", "DnD Kit", "Tailwind", "Zustand"],
    image: "/assets/generated/project-taskboard.dim_600x400.png",
    link: "#",
  },
  {
    title: "ShopSphere",
    description:
      "A modern e-commerce storefront with product filtering, cart management, checkout flow, and animated product previews. Designed with accessibility in mind.",
    tags: ["React", "CSS Grid", "Context API", "Framer Motion"],
    image: "/assets/generated/project-shop.dim_600x400.png",
    link: "#",
  },
];

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
        {/* Logo */}
        <a
          href="#home"
          data-ocid="header.link"
          className="text-lg font-extrabold tracking-widest transition-colors duration-200"
          style={{ color: active === "#home" ? "#38BDF8" : "#ffffff" }}
        >
          ALEX RAMOS
        </a>

        {/* Desktop Nav */}
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

        {/* Mobile menu toggle */}
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

      {/* Mobile Nav */}
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
      {/* Background decorative blobs */}
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
          {/* Left: Text */}
          <div>
            <p
              className="animate-fade-in-up text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#0ea5e9" }}
            >
              👋 Hello, I'm
            </p>
            <h1 className="animate-fade-in-up-delay text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-4">
              Alex
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
                Ramos
              </span>
            </h1>
            <p
              className="animate-fade-in-up-delay2 text-xl sm:text-2xl font-semibold mb-6"
              style={{ color: "#94A3B8" }}
            >
              Aspiring Web Developer
            </p>
            <p
              className="animate-fade-in-up-delay2 text-base mb-10 max-w-md leading-relaxed"
              style={{ color: "#94A3B8" }}
            >
              I craft clean, responsive, and delightful web experiences.
              Passionate about turning ideas into pixel-perfect reality with
              modern tools.
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

          {/* Right: Decorative image with floating shapes */}
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
              {/* Floating shape overlays */}
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

      {/* Scroll indicator */}
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
          {/* Left: Avatar + bio */}
          <div>
            {/* Avatar */}
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
                  AR
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
              Hi! I'm Alex Ramos, an aspiring web developer based in San
              Francisco. I'm passionate about building clean, accessible, and
              performant web applications that solve real-world problems.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#94A3B8" }}
            >
              Currently pursuing a Computer Science degree while freelancing on
              side projects. I love diving into new technologies and
              collaborating with creative teams to ship products that people
              actually enjoy using.
            </p>
          </div>

          {/* Right: Skills */}
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
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
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
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div
            className="w-16 h-1 rounded-full mx-auto"
            style={{ background: "linear-gradient(90deg, #0ea5e9, #6366f1)" }}
          />
        </div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="projects.list"
        >
          {PROJECTS.map((project, i) => (
            <article
              key={project.title}
              data-ocid={`projects.item.${i + 1}`}
              className="group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "#111827",
                border: "1px solid rgba(99,102,241,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.border =
                  "1px solid rgba(14,165,233,0.5)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 30px rgba(14,165,233,0.2), 0 8px 32px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.border =
                  "1px solid rgba(99,102,241,0.2)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 50%, #111827 100%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4 flex-1"
                  style={{ color: "#94A3B8" }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded-md"
                      style={{
                        background: "rgba(99,102,241,0.15)",
                        color: "#818cf8",
                        border: "1px solid rgba(99,102,241,0.2)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.link}
                  data-ocid={`projects.view_button.${i + 1}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #0ea5e9, #6366f1)",
                  }}
                >
                  <ExternalLink size={14} />
                  View Project
                </a>
              </div>
            </article>
          ))}
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
          I'm currently open to new opportunities, freelance projects, and
          exciting collaborations. Whether you have a question or just want to
          say hi, my inbox is always open!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:alex.ramos@example.com"
            data-ocid="contact.email_button"
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
            <Mail size={18} style={{ color: "#0ea5e9" }} />
            Send an Email
          </a>

          <a
            href="https://linkedin.com/in/alexramos"
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
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              style={{ color: "#6366f1" }}
            >
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>

          <a
            href="https://github.com/alexramos"
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
          © {year} Alex Ramos. Built with ❤️ using{" "}
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
            href="mailto:alex.ramos@example.com"
            aria-label="Email"
            className="transition-all duration-200 hover:scale-110"
            style={{ color: "#94A3B8" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#38BDF8";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#94A3B8";
            }}
          >
            <Mail size={18} />
          </a>
          <a
            href="https://linkedin.com/in/alexramos"
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
            href="https://github.com/alexramos"
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
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
