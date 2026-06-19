import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Instagram, Video, CalendarDays, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/examples")({
  head: () => ({
    meta: [
      { title: "Examples — PostPilot" },
      { name: "description", content: "Sample captions, TikTok ideas and posting plans created for real-style clients." },
      { property: "og:title", content: "Examples — PostPilot" },
      { property: "og:description", content: "See exactly what a PostPilot pack looks like." },
    ],
  }),
  component: ExamplesPage,
});

const CAPTIONS = [
  "Sunday slow mornings ☕ Open from 9. Grab a window seat — the light's perfect today.",
  "Loyalty card full? Your next flat white is on us. Tag the friend you're bringing 👇",
  "New seasonal menu drops Monday. Pumpkin spice purists — we see you.",
];

const TIKTOKS = [
  "60-second 'morning open' time-lapse — chairs down, machine on, first pour. Trending lo-fi audio.",
  "Barista quiz: customers guess the espresso origin blind. Winner gets a free drink.",
  "POV: making the most-ordered drink of the week, with the recipe overlaid on-screen.",
];

const CREATOR_CAPTIONS = [
  "I rebuilt my morning routine in 30 days — and stopped snoozing 7 alarms. Here's the version that actually stuck 👇",
  "Three things I wish I knew before going full-time on content (#2 will save you months).",
  "If you're posting 5x a week and growing slow — it's almost always this one thing.",
];

const CREATOR_TIKTOKS = [
  "Talking head with B-roll: 'The 1 setting that doubled my reach last month' — 25s, strong on-screen hook.",
  "Stitch a popular take in your niche, give your contrarian angle in under 40 seconds.",
  "Day-in-the-life cut to 45s — 4 scenes, fast cuts, trending audio.",
];

const PLAN = [
  { day: "Mon", task: "Reel — behind the scenes / open-up" },
  { day: "Tue", task: "Story poll — quick audience question" },
  { day: "Wed", task: "Carousel — value or 'meet the team'" },
  { day: "Thu", task: "Story — limited drop / drink of the day" },
  { day: "Fri", task: "Customer / client feature post" },
  { day: "Sat", task: "Reel — high-energy moment of the week" },
  { day: "Sun", task: "Quote / quiet shot + opening hours" },
];

function ExamplesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Sample work"
        title="Real examples of what you'll get"
        description="These are the exact kinds of captions, ideas and plans included in a PostPilot pack — for local businesses and personal-brand creators."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold tracking-tight">A week for a local café</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <Block icon={<Instagram className="h-4 w-4 text-primary" />} title="Instagram captions" items={CAPTIONS} />
            <Block icon={<Video className="h-4 w-4 text-primary" />} title="TikTok ideas" items={TIKTOKS} numbered />
            <PlanBlock />
          </div>

          <h2 className="mt-20 text-2xl font-bold tracking-tight">A week for a personal-brand creator</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Block icon={<Instagram className="h-4 w-4 text-primary" />} title="Instagram captions" items={CREATOR_CAPTIONS} />
            <Block icon={<Video className="h-4 w-4 text-primary" />} title="TikTok ideas" items={CREATOR_TIKTOKS} numbered />
          </div>

          <div className="mt-16 flex justify-center">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
              <Link to="/contact">Get a free sample for your page <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Block({
  icon,
  title,
  items,
  numbered,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  numbered?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
        {icon} {title}
      </div>
      <ul className="space-y-3">
        {items.map((c, i) => (
          <li key={i} className="flex gap-3 rounded-lg bg-muted/60 p-3 text-sm leading-relaxed">
            {numbered && <span className="font-semibold text-primary">{i + 1}.</span>}
            <span>{c}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PlanBlock() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
        <CalendarDays className="h-4 w-4 text-primary" /> Weekly posting plan
      </div>
      <ul className="divide-y divide-border">
        {PLAN.map((p) => (
          <li key={p.day} className="flex items-center gap-3 py-2.5 text-sm">
            <span className="w-10 font-semibold text-primary">{p.day}</span>
            <span className="text-muted-foreground">{p.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}