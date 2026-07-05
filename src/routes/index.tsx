import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Download, Github, Linkedin, Mail, MapPin, Phone, Send,
  Code2, Database, Cloud, Cpu, Layers, Wrench, Sparkles, ChevronDown,
  Rocket, Shield, Zap, Globe, Star, ArrowUpRight, Terminal,
  MessageSquare, Calendar, ExternalLink, Check, Menu, X,
  Search, PenTool, Palette, TestTube2, LifeBuoy, Server, Gauge,
} from "lucide-react";
const PORTRAIT = "/jagadeesh-portrait.png";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

// ---------- Data ----------
const NAV = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const TRUST_COMPANIES = ["Cook Medical", "CGI", "Capgemini"];

const EXPERIENCE = [
  {
    company: "Cook Medical",
    role: "Software Engineer",
    period: "Nov 2025 — Present",
    desc: "Building enterprise healthcare software using Java, Spring Boot, cloud technologies, and scalable backend systems.",
    tags: ["Java", "Spring Boot", "Cloud", "Healthcare"],
  },
  {
    company: "CGI",
    role: "Software Engineer",
    period: "Enterprise Backend",
    desc: "Enterprise backend development with REST APIs and microservices architecture.",
    tags: ["REST APIs", "Microservices", "Java", "Spring Boot"],
  },
  {
    company: "Capgemini",
    role: "Software Engineer",
    period: "Enterprise Banking",
    desc: "Enterprise banking systems with batch processing and cloud deployment.",
    tags: ["Spring Boot", "Java", "Batch Processing", "Cloud"],
  },
];

const SERVICES = [
  { icon: Globe, title: "Business Websites", desc: "Fast, SEO-ready marketing sites that convert visitors into customers." },
  { icon: Layers, title: "Enterprise Web Applications", desc: "Robust full-stack apps designed for scale, security, and reliability." },
  { icon: Code2, title: "Java Backend Development", desc: "Battle-tested backends written in modern, maintainable Java." },
  { icon: Server, title: "Spring Boot APIs", desc: "Production-grade REST and microservice APIs on Spring Boot." },
  { icon: Sparkles, title: "AI Automation", desc: "LLM-powered chatbots, workflow automation, and OpenAI integrations." },
  { icon: Cpu, title: "REST APIs", desc: "Clean, versioned, well-documented APIs your team will actually enjoy." },
  { icon: Database, title: "Database Design", desc: "Schema design, migrations, and query optimization for SQL & NoSQL." },
  { icon: Cloud, title: "Cloud Deployment", desc: "AWS, Docker, Kubernetes, and CI/CD pipelines you can trust." },
  { icon: Gauge, title: "Performance Optimization", desc: "Profiling, caching, and query tuning to make your app fly." },
  { icon: LifeBuoy, title: "Website Maintenance", desc: "Monitoring, updates, and long-term support for peace of mind." },
];

const WHY = [
  "Clean Architecture", "Modern UI", "Java Backend Expert",
  "AI Automation", "SEO Optimized", "Mobile Responsive",
  "Scalable Solutions", "Secure Development", "Long-term Support",
];

const PROCESS = [
  { icon: Search, title: "Discovery", desc: "Understand your business, users, and goals." },
  { icon: PenTool, title: "Planning", desc: "Scope, timeline, architecture, and milestones." },
  { icon: Palette, title: "UI/UX Design", desc: "Wireframes and premium interfaces mapped to your brand." },
  { icon: Code2, title: "Development", desc: "Clean, tested code shipped in weekly increments." },
  { icon: TestTube2, title: "Testing", desc: "Automated + manual QA across devices and browsers." },
  { icon: Rocket, title: "Deployment", desc: "Zero-downtime launch on modern cloud infrastructure." },
  { icon: LifeBuoy, title: "Support", desc: "Ongoing monitoring, updates, and iteration." },
];

const STACK = [
  { icon: Code2, title: "Backend", items: ["Java", "Spring Boot", "Spring Security", "Hibernate", "JWT", "Microservices", "Spring Batch"] },
  { icon: Layers, title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { icon: Database, title: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "SQL Server"] },
  { icon: Cloud, title: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"] },
  { icon: Wrench, title: "Tools", items: ["Git", "Postman", "Maven", "Gradle", "IntelliJ"] },
  { icon: Cpu, title: "AI", items: ["OpenAI APIs", "Chatbots", "Prompt Engineering", "Workflow AI"] },
];

const PROJECTS = [
  {
    title: "ARESQED",
    tag: "Combat Sports Platform",
    desc: "Designed and developed a modern digital platform for a combat sports brand featuring membership services, training information, online store integration, and a premium user experience.",
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    services: ["Modern responsive UI", "Performance optimized", "Mobile-first", "Premium branding", "Business-focused design"],
    url: "https://aresqed.com/",
    accent: "from-[#00E5FF]/25 via-[#7C3AED]/20 to-transparent",
  },
  {
    title: "LaSan Media Works",
    tag: "Business Consulting & Media Agency",
    desc: "Designed and developed a corporate business website focused on strategic consulting, branding, digital services, and lead generation.",
    tech: ["React", "Next.js", "Tailwind CSS", "SEO"],
    services: ["Professional UI", "SEO optimized", "Business-focused", "Responsive", "Fast loading"],
    url: "https://lasanmediaworks.com/",
    accent: "from-[#7C3AED]/25 via-[#00E5FF]/20 to-transparent",
  },
  {
    title: "KIMAI Store",
    tag: "E-Commerce Platform",
    desc: "Developed a modern online shopping platform with product catalog, secure ordering experience, responsive design, and customer-friendly shopping flow.",
    tech: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    services: ["Responsive", "E-commerce", "Performance optimized", "Mobile friendly", "Secure shopping"],
    url: "https://kimai.store/",
    accent: "from-emerald-400/20 via-[#00E5FF]/20 to-transparent",
  },
];

const STATS = [
  { value: 3, suffix: "+", label: "Projects Delivered" },
  { value: 25, suffix: "+", label: "Technologies" },
  { value: 4.5, suffix: "+", label: "Years Experience" },
];

const INDUSTRIES = ["Healthcare", "Retail", "Business Consulting", "Combat Sports"];

const TESTIMONIALS = [
  { name: "ARESQED", role: "Combat Sports Platform", quote: "Jagadeesh understood our vision perfectly and delivered a premium website that exceeded our expectations." },
  { name: "LaSan Media Works", role: "Business Consulting & Media Agency", quote: "Professional communication, clean development, and outstanding attention to detail." },
  { name: "KIMAI Store", role: "E-Commerce Platform", quote: "Our online store is faster, cleaner, and provides a much better shopping experience." },
];

const FAQS = [
  { q: "What's your typical project timeline?", a: "Most MVPs ship in 4–8 weeks. Enterprise projects run 3–6 months with weekly milestones." },
  { q: "Do you work with non-technical founders?", a: "Absolutely. I translate business goals into architecture and keep you in the loop with plain-English updates." },
  { q: "Can you take over an existing codebase?", a: "Yes — I audit, refactor, and ship new features on legacy Java, Spring, or React codebases regularly." },
  { q: "Do you offer post-launch support?", a: "Yes, monthly retainers include monitoring, bug fixes, feature releases, and infrastructure upkeep." },
];

// ---------- Small components ----------
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1600;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(to * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  const displayN = to % 1 === 0 ? Math.floor(n) : n.toFixed(1);
  return <span ref={ref}>{displayN}{suffix}</span>;
}

function Section({ id, eyebrow, title, subtitle, children }: {
  id?: string; eyebrow?: string; title: string; subtitle?: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 max-w-3xl"
      >
        {eyebrow && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-[#00E5FF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" />
            {eyebrow}
          </div>
        )}
        <h2 className="text-4xl font-semibold leading-tight md:text-6xl">{title}</h2>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-white/60">{subtitle}</p>}
      </motion.div>
      {children}
    </section>
  );
}

// ---------- Main ----------
function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [testimonial, setTestimonial] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const id = setInterval(() => setTestimonial((i) => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(id);
  }, []);

  const glowX = useTransform(mouseX, (v) => v - 250);
  const glowY = useTransform(mouseY, (v) => v - 250);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* Loading */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050816]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center gap-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative flex h-16 w-16 items-center justify-center rounded-2xl glass-strong glow-cyan"
              >
                <span className="font-display text-2xl font-bold text-gradient">J</span>
              </motion.div>
              <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#00E5FF] to-[#7C3AED]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
                Booting portfolio…
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cursor glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-0 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
        style={{
          x: glowX, y: glowY,
          background: "radial-gradient(circle, rgba(0,229,255,0.25), transparent 60%)",
        }}
      />

      {/* Scroll progress */}
      <motion.div
        className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-gradient-to-r from-[#00E5FF] via-[#7C3AED] to-[#00E5FF]"
        style={{ scaleX: progressX }}
      />

      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-40 px-6 pt-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl glass-strong px-5 py-3">
          <a href="#" className="group flex items-center gap-3">
            <span className="relative block h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#00E5FF]/60 shadow-[0_0_18px_rgba(0,229,255,0.45)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_26px_rgba(0,229,255,0.75)] md:h-[42px] md:w-[42px]">
              <img src={PORTRAIT} alt="Jagadeesh" className="h-full w-full object-cover object-center" loading="eager" />
            </span>
            <span className="font-display text-2xl font-bold uppercase tracking-[0.14em] transition-all duration-300 group-hover:text-[#00E5FF] group-hover:[text-shadow:0_0_22px_rgba(0,229,255,0.65)]">
              JAGADEESH
            </span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="rounded-lg px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white">
                {n.label}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-[#050816] transition hover:bg-[#00E5FF]">
              Hire Me <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </a>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl glass-strong p-2 md:hidden"
            >
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-4 py-3 text-sm text-white/80 hover:bg-white/5">
                  {n.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-32">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.25),transparent_60%)]" />
        <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00E5FF]/10 blur-[120px]" />

        {/* Floating orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-[#00E5FF]"
            style={{
              left: `${15 + i * 13}%`,
              top: `${20 + (i % 3) * 25}%`,
              boxShadow: "0 0 20px #00E5FF",
            }}
            animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-[#22C55E]" />
              </span>
              <span className="text-white/70">Available for freelance work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 0.8 }}
              className="text-4xl font-semibold leading-[1.05] md:text-6xl lg:text-[4.5rem]"
            >
              Building <span className="text-gradient">Modern Websites</span>,<br />
              <span className="text-gradient">Scalable Business Software</span><br />
              &amp; <span className="text-gradient">AI Automation</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }}
              className="mt-8 max-w-xl text-lg text-white/60 md:text-xl"
            >
              I help businesses build fast, scalable websites, enterprise software, and AI-powered
              automation that improve efficiency, streamline operations, and accelerate business growth.
              <br /><br />
              <span className="text-white/50">Trusted by clients across healthcare, consulting, retail, manufacturing, and growing businesses.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] px-6 py-3.5 font-semibold text-[#050816] transition hover:scale-[1.02] glow-cyan">
                Hire Me <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#work" className="group inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3.5 font-semibold transition hover:bg-white/10">
                View Projects <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
              </a>
              <a href="https://drive.google.com/uc?export=download&id=1-WKfQ26bQUyk5nWRNblUk5itVOHjOJGU" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 font-medium text-white/80 transition hover:bg-white/[0.06] hover:text-white">
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}
              className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-white/40"
            >
              <span>Java · Spring Boot</span>
              <span className="hidden h-3 w-px bg-white/20 md:block" />
              <span>React · Next.js</span>
              <span className="hidden h-3 w-px bg-white/20 md:block" />
              <span>AI Automation</span>
              <span className="hidden h-3 w-px bg-white/20 md:block" />
              <span>Cloud · DevOps</span>
            </motion.div>
          </div>

          {/* Code window */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -10 }} animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#00E5FF]/20 to-[#7C3AED]/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl glass-strong">
              <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-3 font-mono text-xs text-white/40">~/jagadeesh/portfolio.ts</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
<span className="text-[#7C3AED]">const</span> <span className="text-[#00E5FF]">engineer</span> = {"{"}
{"\n  "}<span className="text-white/60">name</span>: <span className="text-emerald-300">"JAGADEESH"</span>,
{"\n  "}<span className="text-white/60">role</span>: <span className="text-emerald-300">"Full Stack Software Engineer"</span>,
{"\n  "}<span className="text-white/60">speciality</span>: <span className="text-emerald-300">"Java Backend &amp; AI Automation"</span>,
{"\n  "}<span className="text-white/60">services</span>: [
{"\n    "}<span className="text-emerald-300">"Business Websites"</span>,
{"\n    "}<span className="text-emerald-300">"Enterprise Software"</span>,
{"\n    "}<span className="text-emerald-300">"AI Automation"</span>,
{"\n  "}],
{"\n  "}<span className="text-white/60">status</span>: <span className="text-emerald-300">"Available for Freelance"</span>,
{"\n  "}<span className="text-white/60">ship</span>: () <span className="text-[#7C3AED]">=&gt;</span> <span className="text-[#00E5FF]">production</span>,
{"\n"}{"}"};
              </pre>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* Trust strip */}
      <section className="relative mx-auto max-w-7xl px-6 pb-8 pt-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="rounded-2xl glass px-6 py-5"
        >
          <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/40">
              Professional Experience
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
              {TRUST_COMPANIES.map((c) => (
                <span
                  key={c}
                  className="font-display text-lg font-semibold text-white/70 grayscale transition hover:text-white hover:[text-shadow:0_0_18px_rgba(0,229,255,0.45)] md:text-xl"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <Section id="about" eyebrow="About" title="About Me" subtitle="Full Stack Software Engineer building systems businesses rely on.">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-sm md:max-w-none"
          >
            <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,rgba(0,229,255,0.28),transparent_60%),radial-gradient(circle_at_75%_80%,rgba(124,58,237,0.32),transparent_65%)] blur-2xl" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-[24px] glass-strong p-2 shadow-[0_20px_60px_-15px_rgba(0,229,255,0.35)]"
            >
              <img
                src={PORTRAIT}
                alt="Jagadeesh — Full Stack Software Engineer"
                className="block h-auto w-full rounded-[18px] object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/10" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-[15px] leading-relaxed text-white/75"
          >
            <p>
              Hi, I'm <span className="font-semibold text-white">Jagadeesh</span>, a Full Stack Software Engineer specializing in Java backend development, enterprise software, modern web development, and AI-powered automation.
            </p>
            <p>
              With over <span className="text-[#00E5FF]">four and a half years</span> of professional software engineering experience, I enjoy building scalable applications that solve real business problems. My focus is creating secure, high-performance systems and intuitive user experiences that help organizations operate more efficiently.
            </p>
            <p>
              Alongside my professional experience, I've successfully delivered freelance solutions for businesses in healthcare, consulting, retail, and digital services.
            </p>
            <p>
              I believe great software isn't just about writing code it should solve problems, improve workflows, and create measurable business value.
            </p>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { icon: Rocket, title: "Mission", desc: "Turn business bottlenecks into elegant, automated systems that scale with the team." },
            { icon: Shield, title: "Values", desc: "Craft, clarity, and reliability. Code that reads well and runs faster than it needs to." },
            { icon: Zap, title: "Difference", desc: "I speak both languages enterprise Java architecture and modern AI-native tooling." },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl glass p-8 transition hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-[#7C3AED]/20 text-[#00E5FF]">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{c.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{c.desc}</p>
              <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#7C3AED]/10 blur-2xl transition group-hover:bg-[#00E5FF]/15" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Professional Journey */}
      <Section id="experience" eyebrow="Experience" title="Professional Journey" subtitle="From Fortune 500 consulting to medical device engineering.">
        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[#00E5FF]/60 via-[#7C3AED]/40 to-transparent md:left-1/2" />
          <div className="space-y-8">
            {EXPERIENCE.map((e, i) => (
              <motion.div
                key={e.company}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative flex gap-6 md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}
              >
                <div className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-[#00E5FF] shadow-[0_0_16px_#00E5FF] md:left-1/2" />
                <div className={`ml-12 md:ml-0 ${i % 2 ? "md:pl-8" : "md:pr-8 md:text-right"}`}>
                  <div className="rounded-2xl glass p-6 transition hover:bg-white/[0.06]">
                    <p className="font-mono text-xs uppercase tracking-widest text-[#00E5FF]">{e.period}</p>
                    <h3 className="mt-2 text-2xl font-semibold">{e.company}</h3>
                    <p className="mt-1 text-white/60">{e.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-white/70">{e.desc}</p>
                    <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 ? "" : "md:justify-end"}`}>
                      {e.tags.map((t) => (
                        <span key={t} className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-white/70">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" eyebrow="Services" title="What I build for clients." subtitle="Pick a module or hire me end-to-end. Everything ships production-ready with docs and support.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass p-7 transition hover:-translate-y-1 hover:border-[#00E5FF]/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/0 to-[#7C3AED]/0 opacity-0 transition group-hover:from-[#00E5FF]/5 group-hover:to-[#7C3AED]/10 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-[#00E5FF] transition group-hover:bg-[#00E5FF]/10 group-hover:glow-cyan">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Choose Me */}
      <Section eyebrow="Why Me" title="Why Businesses Choose Me" subtitle="Everything I ship is engineered for scale, speed, and long-term reliability.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <motion.div
              key={w}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="group flex items-center gap-4 rounded-2xl glass p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.06]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#00E5FF]/25 to-[#7C3AED]/25 text-[#00E5FF] transition group-hover:glow-cyan">
                <Check className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium text-white/90">{w}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stack */}
      <Section id="stack" eyebrow="Tech Stack" title="Tools I reach for daily." subtitle="Deep in Java and Spring, fluent in React and Next.js, and shipping AI-native workflows.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STACK.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="rounded-2xl glass p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#00E5FF]/20 to-[#7C3AED]/20 text-[#00E5FF]">
                  <s.icon className="h-4 w-4" />
                </div>
                <h3 className="font-display font-semibold">{s.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span key={it} className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-white/80 transition hover:border-[#00E5FF]/40 hover:text-[#00E5FF]">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.12),transparent_70%)]" />
          <div className="relative grid gap-8 md:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="font-display text-5xl font-bold text-gradient md:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm uppercase tracking-widest text-white/50">{s.label}</p>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="text-center md:text-left"
            >
              <p className="mb-3 text-sm uppercase tracking-widest text-white/50">Client Industries</p>
              <div className="flex flex-wrap gap-2 md:justify-start">
                {INDUSTRIES.map((ind) => (
                  <span key={ind} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/80">
                    {ind}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work */}
      <Section id="work" eyebrow="Selected Work" title="Real clients. Live websites." subtitle="A cross-section of freelance projects delivered end-to-end.">
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: (i % 2) * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass p-8 transition hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className={`relative mb-6 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${p.accent}`}>
                <div className="grid-bg absolute inset-0 opacity-30" />
                <div className="relative flex flex-col items-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl glass-strong">
                    <Terminal className="h-7 w-7 text-[#00E5FF]" />
                  </div>
                  <span className="font-display text-lg font-semibold text-white/90">{p.title}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/5 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-[#00E5FF]">{p.tag}</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{p.desc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-lg bg-white/5 px-2 py-1 font-mono text-[10px] text-white/70">{t}</span>
                ))}
              </div>

              <div className="mt-5">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-white/40">Services Delivered</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.services.map((s) => (
                    <span key={s} className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-white/70">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={p.url} target="_blank" rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] px-4 py-2 text-sm font-semibold text-[#050816] transition hover:scale-[1.02]"
                >
                  <ExternalLink className="h-4 w-4" /> Visit Website
                </a>
                <button className="inline-flex items-center gap-1.5 rounded-lg glass px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-[#00E5FF]">
                  Case Study <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process" eyebrow="Process" title="How I Work" subtitle="A proven workflow that keeps projects on time, on budget, and on brand.">
        <div className="relative">
          <div className="absolute left-6 top-3 bottom-3 w-px bg-gradient-to-b from-[#00E5FF]/60 via-[#7C3AED]/40 to-transparent md:left-1/2" />
          <div className="space-y-6">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className={`relative flex gap-6 md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}
              >
                <div className="absolute left-6 top-6 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-[#00E5FF] shadow-[0_0_16px_#00E5FF] md:left-1/2" />
                <div className={`ml-14 md:ml-0 ${i % 2 ? "md:pl-8" : "md:pr-8 md:text-right"}`}>
                  <div className="rounded-2xl glass p-6 transition hover:bg-white/[0.06]">
                    <div className={`mb-3 flex items-center gap-3 ${i % 2 ? "" : "md:justify-end"}`}>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-[#7C3AED]/20 text-[#00E5FF]">
                        <p.icon className="h-4.5 w-4.5" />
                      </div>
                      <h3 className="text-lg font-semibold">
                        <span className="font-mono text-xs text-[#00E5FF]">0{i + 1}. </span>{p.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-white/60">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section eyebrow="Testimonials" title="What clients say." subtitle="">
        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl glass-strong p-10 text-center"
            >
              <div className="mb-4 flex justify-center gap-1 text-[#00E5FF]">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-xl leading-relaxed text-white/90 md:text-2xl">
                "{TESTIMONIALS[testimonial].quote}"
              </p>
              <div className="mt-6">
                <p className="font-semibold">— {TESTIMONIALS[testimonial].name}</p>
                <p className="text-sm text-white/50">{TESTIMONIALS[testimonial].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonial(i)}
                className={`h-1.5 rounded-full transition-all ${i === testimonial ? "w-8 bg-[#00E5FF]" : "w-1.5 bg-white/20"}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Answers before you ask." subtitle="">
        <div className="mx-auto max-w-3xl space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-2xl glass">
              <button
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-white/[0.03]"
              >
                <span className="font-medium">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-white/50 transition ${activeFaq === i ? "rotate-180 text-[#00E5FF]" : ""}`} />
              </button>
              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-white/60">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl glass-strong p-10 text-center md:p-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.18),transparent_70%)]" />
          <div className="relative">
            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
              Let's <span className="text-gradient">Build Something Amazing</span> Together
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/60">
              Whether you need a business website, enterprise software, or AI automation, I'd love to
              help turn your ideas into reality.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] px-6 py-3.5 font-semibold text-[#050816] transition hover:scale-[1.02] glow-cyan">
                <Calendar className="h-4 w-4" /> Book a Free Consultation
              </a>
              <a
                href="#contact"
                onClick={() => setTimeout(() => document.querySelector<HTMLInputElement>('#contact input')?.focus(), 500)}
                className="group inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 font-semibold transition hover:bg-white/10"
              >
                <Send className="h-4 w-4" /> Send a Message
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <Section id="contact" eyebrow="Contact" title="Let's talk about your project." subtitle="Reply within 24 hours. Free 30-minute discovery call for every serious inquiry.">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thanks! I'll be in touch shortly."); }}
            className="rounded-3xl glass-strong p-8 md:p-10"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-white/50">Name</label>
                <input required maxLength={100} className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-[#00E5FF]/60 focus:bg-white/[0.05]" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-white/50">Email</label>
                <input required type="email" maxLength={255} className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-[#00E5FF]/60 focus:bg-white/[0.05]" placeholder="you@company.com" />
              </div>
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-xs uppercase tracking-widest text-white/50">Project</label>
              <input maxLength={200} className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-[#00E5FF]/60 focus:bg-white/[0.05]" placeholder="Business website, enterprise app, AI automation…" />
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-xs uppercase tracking-widest text-white/50">Message</label>
              <textarea required maxLength={1000} rows={5} className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition focus:border-[#00E5FF]/60 focus:bg-white/[0.05]" placeholder="Tell me about the problem…" />
            </div>
            <button type="submit" className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] px-6 py-3.5 font-semibold text-[#050816] transition hover:scale-[1.02] glow-cyan">
              Send message <Send className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </form>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl glass-strong p-6"
            >
              <div className="pointer-events-none absolute -inset-8 bg-[radial-gradient(circle_at_20%_20%,rgba(0,229,255,0.2),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(124,58,237,0.25),transparent_65%)] blur-2xl" />
              <div className="relative flex items-center gap-5">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-[#00E5FF]/40 shadow-[0_0_28px_rgba(0,229,255,0.35)]"
                >
                  <img src={PORTRAIT} alt="Jagadeesh" className="h-full w-full object-cover object-center" loading="lazy" />
                </motion.div>
                <div className="min-w-0">
                  <p className="font-display text-xl font-bold uppercase tracking-[0.14em]">JAGADEESH</p>
                  <p className="mt-1 text-sm text-white/70">Full Stack Software Engineer</p>
                  <p className="text-xs text-white/50">Java Backend Specialist · AI Automation Developer</p>
                  <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#22C55E]/30 bg-[#22C55E]/10 px-2.5 py-0.5 text-[11px] font-medium text-[#22C55E]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" /> Available for Freelance Projects
                  </p>
                </div>
              </div>
            </motion.div>

            {[
              { icon: Mail, label: "Email", value: "jagadeeshb232@gmail.com", href: "mailto:jagadeeshb232@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 91822 19112", href: "tel:+919182219112" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/jagadeeshb2000", href: "https://www.linkedin.com/in/jagadeeshb2000/" },
              { icon: Github, label: "GitHub", value: "github.com/BhupathiJagadeesh", href: "https://github.com/BhupathiJagadeesh" },
              { icon: MessageSquare, label: "WhatsApp", value: "+91 91822 19112", note: "Typically replies within a few hours.", href: "https://wa.me/919182219112" },
              { icon: MapPin, label: "Location", value: "Remote • India", href: "#" },
            ].map((c) => (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group flex items-center gap-4 rounded-2xl glass p-5 transition hover:bg-white/[0.06]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-[#00E5FF] transition group-hover:glow-cyan">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-white/40">{c.label}</p>
                  <p className="text-sm font-medium">{c.value}</p>
                  {"note" in c && c.note && <p className="mt-0.5 text-xs text-white/40">{c.note}</p>}
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/30 transition group-hover:text-[#00E5FF]" />
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <span className="block h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#00E5FF]/50 shadow-[0_0_14px_rgba(0,229,255,0.4)]">
                <img src={PORTRAIT} alt="Jagadeesh" className="h-full w-full object-cover object-center" loading="lazy" />
              </span>
              <div>
                <p className="text-sm font-semibold">Jagadeesh</p>
                <p className="text-xs text-white/40">Full Stack Engineer · Available for hire</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/40">
              <span>© {new Date().getFullYear()} Jagadeesh</span>
              <span className="flex items-center gap-1.5">
                <Check className="h-3 w-3 text-[#22C55E]" /> Systems operational
              </span>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.15),transparent_70%)]" />
      </footer>
    </div>
  );
}
