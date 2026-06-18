import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Instagram,
  Video,
  CalendarDays,
  Lightbulb,
  Clock,
  TrendingDown,
  HelpCircle,
  Repeat,
  Check,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ContentFlow — Consistent Social Content for Small Businesses" },
      {
        name: "description",
        content:
          "Ready-to-post Instagram captions, TikTok ideas, and weekly content plans for cafes, barbers, gyms and local UK businesses.",
      },
      { property: "og:title", content: "ContentFlow — Social Content for Small Businesses" },
      {
        property: "og:description",
        content:
          "Never run out of things to post. Captions, ideas, and content plans built for local UK businesses.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Examples />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-lg">ContentFlow</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#problem" className="hover:text-foreground">Why</a>
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#examples" className="hover:text-foreground">Examples</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
        </nav>
        <Button asChild size="sm" className="bg-foreground text-background hover:bg-foreground/90">
          <a href="#cta">Get free sample</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            AI-powered content for local UK businesses
          </div>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Consistent social media content for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">small businesses</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Get ready-to-post captions, ideas, and content plans so you never run out of things to
            post again.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 bg-foreground px-7 text-base text-background shadow-elegant hover:bg-foreground/90"
            >
              <a href="#cta">
                Get a Free Sample <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="h-12 px-5 text-base">
              <a href="#examples">See example content</a>
            </Button>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Perfect for cafes, barbers, gyms, and local businesses in the UK.
          </p>
        </div>

        <HeroPreview />
      </div>
    </section>
  );
}

function HeroPreview() {
  return (
    <div className="mx-auto mt-16 max-w-4xl">
      <div className="rounded-2xl border border-border bg-card p-3 shadow-elegant">
        <div className="rounded-xl bg-muted/40 p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-3">
            <PreviewCard
              icon={<Instagram className="h-4 w-4" />}
              label="Instagram caption"
              text="Your Monday espresso has arrived ☕ Pop in before 10am for £1 off any flat white."
            />
            <PreviewCard
              icon={<Video className="h-4 w-4" />}
              label="TikTok idea"
              text="POV: a behind-the-bar morning routine — grind, tamp, pour, smile."
            />
            <PreviewCard
              icon={<CalendarDays className="h-4 w-4" />}
              label="This week's plan"
              text="Mon: Reel · Tue: Story poll · Wed: Carousel · Fri: Customer feature."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewCard({
  icon,
  label,
  text,
}: {
  icon: React.ReactNode;
  label: string;
  text: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-background p-4 text-left shadow-soft">
      <div className="mb-2 flex items-center gap-2 text-xs font-medium text-primary">
        {icon}
        {label}
      </div>
      <p className="text-sm leading-relaxed text-foreground">{text}</p>
    </div>
  );
}

function Problem() {
  const items = [
    { icon: HelpCircle, title: "Not knowing what to post", body: "Staring at a blank screen kills momentum." },
    { icon: Repeat, title: "Inconsistent posting", body: "Two posts one week, none the next — the algorithm notices." },
    { icon: Clock, title: "No time to plan", body: "You're running a business, not a content studio." },
    { icon: TrendingDown, title: "Low engagement", body: "Generic posts don't bring foot traffic through the door." },
  ];
  return (
    <section id="problem" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">The problem</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Social media shouldn't feel like a second job
          </h2>
          <p className="mt-4 text-muted-foreground">
            Most small business owners want to stay visible online, but the day-to-day gets in the way.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const items = [
    { icon: Instagram, title: "Instagram captions", body: "Tone-matched captions ready to copy, paste, and post." },
    { icon: Video, title: "TikTok video ideas", body: "Short, doable scripts built around your actual business." },
    { icon: CalendarDays, title: "Weekly content plans", body: "Know exactly what to post — every day of the week." },
    { icon: Lightbulb, title: "Content strategy ideas", body: "Promotions, hooks, and themes that bring locals in." },
  ];
  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">What you get</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Your lightweight marketing assistant
          </h2>
          <p className="mt-4 text-muted-foreground">
            ContentFlow gives you everything you need to post consistently — without hiring an agency.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {items.map((it) => (
            <div key={it.title} className="group flex gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-elegant">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                <it.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Tell us about your business", body: "Share your business type, tone, and goals in a quick form — takes 2 minutes." },
    { n: "02", title: "Receive custom content", body: "We send tailored captions, ideas, and a posting plan built for your audience." },
    { n: "03", title: "Post and grow", body: "Stay consistent, bring locals through the door, and build a loyal online following." },
  ];
  return (
    <section id="how" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">How it works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Three steps to consistent content
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-card p-8 shadow-soft">
              <div className="text-5xl font-extrabold tracking-tight text-primary/15">{s.n}</div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Examples() {
  const captions = [
    "Sunday slow mornings ☕ Open from 9. Grab a window seat — the light's perfect today.",
    "Loyalty card full? Your next flat white is on us. Tag the friend you're bringing 👇",
    "New seasonal menu lands Monday. Pumpkin spice purists — we see you.",
  ];
  const tiktoks = [
    "60-second 'morning open' time-lapse — chairs down, machine on, first pour.",
    "Barista quiz: customers guess the espresso origin blind. Winner gets a free drink.",
    "POV: making the most-ordered drink of the week, with the recipe on-screen.",
  ];
  const plan = [
    { day: "Mon", task: "Reel — behind the bar open-up" },
    { day: "Tue", task: "Story poll — sweet or savoury?" },
    { day: "Wed", task: "Carousel — meet the team" },
    { day: "Thu", task: "Story — limited drink of the day" },
    { day: "Fri", task: "Customer feature post" },
    { day: "Sat", task: "Reel — busy Saturday energy" },
    { day: "Sun", task: "Quiet shot + opening hours" },
  ];

  return (
    <section id="examples" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Sample work</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            A week of content for a local café
          </h2>
          <p className="mt-4 text-muted-foreground">
            Here's exactly what a ContentFlow pack looks like.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
              <Instagram className="h-4 w-4 text-primary" /> Instagram captions
            </div>
            <ul className="space-y-3">
              {captions.map((c, i) => (
                <li key={i} className="rounded-lg bg-muted/60 p-3 text-sm leading-relaxed">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
              <Video className="h-4 w-4 text-primary" /> TikTok ideas
            </div>
            <ul className="space-y-3">
              {tiktoks.map((t, i) => (
                <li key={i} className="flex gap-3 rounded-lg bg-muted/60 p-3 text-sm leading-relaxed">
                  <span className="font-semibold text-primary">{i + 1}.</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
              <CalendarDays className="h-4 w-4 text-primary" /> Weekly posting plan
            </div>
            <ul className="divide-y divide-border">
              {plan.map((p) => (
                <li key={p.day} className="flex items-center gap-3 py-2.5 text-sm">
                  <span className="w-10 font-semibold text-primary">{p.day}</span>
                  <span className="text-muted-foreground">{p.task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Starter Pack",
      price: "£10",
      cadence: "one-off",
      desc: "Test the waters with a quick content boost.",
      features: ["5 Instagram captions", "5 content ideas", "Delivered in 48 hours"],
    },
    {
      name: "Growth Pack",
      price: "£25",
      cadence: "one-off",
      desc: "A full week of content, ready to post.",
      features: ["Weekly content plan", "10 captions", "5 TikTok ideas", "Posting schedule"],
      featured: true,
    },
    {
      name: "Monthly Plan",
      price: "£50",
      cadence: "per month",
      desc: "Ongoing content support so you never run out.",
      features: ["4 weekly plans", "Unlimited captions", "TikTok scripts", "Priority support"],
    },
  ];
  return (
    <section id="pricing" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Simple, honest pricing
          </h2>
          <p className="mt-4 text-muted-foreground">No contracts. Cancel anytime.</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={
                "relative rounded-2xl border bg-card p-8 " +
                (t.featured
                  ? "border-primary shadow-elegant ring-1 ring-primary/30"
                  : "border-border shadow-soft")
              }
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight">{t.price}</span>
                <span className="text-sm text-muted-foreground">/{t.cadence}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={
                  "mt-8 w-full " +
                  (t.featured
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90")
                }
              >
                <a href="#cta">Get started</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section id="cta" className="relative overflow-hidden bg-foreground py-24 text-background">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <div className="absolute left-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary-glow blur-3xl" />
      </div>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Get your free sample content pack today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-background/70">
          Tell us about your business and we'll send a free taster pack — captions, ideas, and a
          posting plan tailored to you.
        </p>

        {sent ? (
          <div className="mx-auto mt-10 max-w-md rounded-xl border border-background/20 bg-background/10 p-6 text-sm">
            Thanks! We'll be in touch within 24 hours with your free sample pack.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email && business) setSent(true);
            }}
            className="mx-auto mt-10 grid max-w-lg gap-3"
          >
            <input
              required
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              placeholder="Your business (e.g. Bean & Brew Café)"
              className="h-12 rounded-lg border border-background/20 bg-background/10 px-4 text-base text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary-glow"
            />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="h-12 rounded-lg border border-background/20 bg-background/10 px-4 text-base text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary-glow"
            />
            <Button
              type="submit"
              size="lg"
              className="h-12 bg-background text-foreground hover:bg-background/90"
            >
              Send my free sample <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <p className="mt-1 text-xs text-background/60">
              No spam. We'll only use your email to send your sample pack.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
            <Sparkles className="h-3 w-3" />
          </span>
          <span className="font-semibold text-foreground">ContentFlow</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <div className="flex gap-6">
          <a href="#problem" className="hover:text-foreground">Why</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
          <a href="#cta" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}