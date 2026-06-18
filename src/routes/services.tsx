import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  Video,
  Quote,
  Scissors,
  Lightbulb,
  Instagram,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { TikTokIcon } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ContentFlow" },
      { name: "description", content: "Content plans, video ideas, captions and editing for Instagram and TikTok." },
      { property: "og:title", content: "Services — ContentFlow" },
      { property: "og:description", content: "Full-service short-form content support for creators and small businesses." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: CalendarDays,
    title: "Content plans",
    body: "Weekly and monthly posting calendars built around your goals, audience and the way you actually post.",
    bullets: ["Day-by-day plan", "Mix of formats", "Themes & series", "Built for IG + TikTok"],
  },
  {
    icon: Video,
    title: "Video ideas",
    body: "Short-form Reel and TikTok concepts you can shoot the same day — hooks, scenes, audio suggestions.",
    bullets: ["Trending hooks", "Niche-specific angles", "Shot lists", "Audio suggestions"],
  },
  {
    icon: Quote,
    title: "Captions",
    body: "Captions that match your voice — built to stop the scroll and turn viewers into followers and customers.",
    bullets: ["Hook + body + CTA", "On-brand tone", "Hashtag sets", "A/B variations"],
  },
  {
    icon: Scissors,
    title: "Video editing",
    body: "Polished short-form edits for Instagram and TikTok — cuts, captions, transitions, sound design.",
    bullets: ["9:16 edits", "Auto-captions", "B-roll & transitions", "IG + TikTok exports"],
  },
  {
    icon: Lightbulb,
    title: "Strategy ideas",
    body: "Content angles, promo concepts and series ideas to keep your feed feeling fresh, not formulaic.",
    bullets: ["Series ideas", "Promo concepts", "Audience hooks", "Trend ride-alongs"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Services"
        title="Built for creators and small businesses"
        description="Whether you're a personal brand, a café, a barber, a gym, a coach or a local shop — these are the building blocks of a consistent presence on Instagram and TikTok."
      />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-elegant">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-foreground/80">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card p-8 md:flex-row">
            <div>
              <h3 className="text-xl font-semibold">Not sure what you need?</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                DM me and we'll figure out the right mix together — no pressure, no sales pitch.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                <Link to="/contact">Get in touch <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="border-border bg-card/40 hover:bg-card">
                <Link to="/pricing">See pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

void Instagram; void TikTokIcon;