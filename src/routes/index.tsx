import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteLayout, IG_URL, TT_URL, HANDLE, TikTokIcon } from "@/components/site/SiteLayout";
import {
  Instagram,
  Video,
  CalendarDays,
  ArrowRight,
  Wand2,
  Scissors,
  Quote,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ContentFlow — Content plans, video ideas & captions for creators" },
      {
        name: "description",
        content:
          "Done-for-you content plans, video ideas, captions and editing for Instagram and TikTok — built for creators and small businesses.",
      },
      { property: "og:title", content: "ContentFlow — Stay consistent on Instagram & TikTok" },
      {
        property: "og:description",
        content:
          "Content plans, video ideas, captions and editing for Instagram & TikTok. DM @darsh_thepostpilot for a free sample.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <ValueProps />
      <PreviewStrip />
      <MiniCta />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-primary-glow/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            For creators & small businesses on Instagram + TikTok
          </div>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Show up consistently.{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Stop guessing what to post.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Done-for-you content plans, video ideas, captions and editing for Instagram and TikTok —
            ready to post the moment they land in your DMs.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 bg-gradient-primary px-7 text-base text-primary-foreground shadow-elegant hover:opacity-90"
            >
              <Link to="/contact">
                Get a free sample <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-border bg-card/40 px-5 text-base hover:bg-card"
            >
              <Link to="/examples">See example work</Link>
            </Button>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            DM <span className="font-medium text-foreground">{HANDLE}</span> on Instagram or TikTok.
          </p>
        </div>
      </div>
    </section>
  );
}

function ValueProps() {
  const items = [
    { icon: CalendarDays, title: "Content plans", body: "A clear weekly map of what to post and when." },
    { icon: Video, title: "Video ideas", body: "Reel & TikTok concepts tailored to your niche." },
    { icon: Quote, title: "Captions that convert", body: "Hooks, CTAs and tone matched to your voice." },
    { icon: Scissors, title: "Editing", body: "Polished edits for short-form video, IG & TikTok." },
  ];
  return (
    <section className="border-t border-border/60 bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">What we do</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Everything you need to post — without the headache
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-elegant"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
            <Link to="/services">
              See full services <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function PreviewStrip() {
  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Sneak peek</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            What lands in your DMs
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <PreviewCard
            icon={<Instagram className="h-4 w-4" />}
            label="Instagram caption"
            text="Mondays hit different with a flat white in hand ☕ Pop in before 10 — first sip's on us."
          />
          <PreviewCard
            icon={<Video className="h-4 w-4" />}
            label="TikTok idea"
            text="POV: a 30-second 'morning open' time-lapse with trending audio + on-screen menu reveal."
          />
          <PreviewCard
            icon={<CalendarDays className="h-4 w-4" />}
            label="This week's plan"
            text="Mon Reel · Tue Story poll · Wed Carousel · Thu BTS · Fri Feature · Sat Reel · Sun Quote"
          />
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" className="border-border bg-card/40 hover:bg-card">
            <Link to="/examples">
              See full examples <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
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
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="mb-2 flex items-center gap-2 text-xs font-medium text-primary">
        {icon}
        {label}
      </div>
      <p className="text-sm leading-relaxed text-foreground/90">{text}</p>
    </div>
  );
}

function MiniCta() {
  return (
    <section className="border-t border-border/60 bg-background py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Wand2 className="mx-auto h-8 w-8 text-primary" />
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          Want a free taster pack?
        </h2>
        <p className="mt-4 text-muted-foreground">
          DM <span className="font-medium text-foreground">{HANDLE}</span> on Instagram or TikTok and
          I'll send you a custom sample — captions, video ideas and a one-week plan for your page.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 bg-gradient-primary px-6 text-primary-foreground hover:opacity-90"
          >
            <a href={IG_URL} target="_blank" rel="noreferrer">
              <Instagram className="mr-2 h-4 w-4" /> DM on Instagram
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 border-border bg-card/40 px-6 hover:bg-card"
          >
            <a href={TT_URL} target="_blank" rel="noreferrer">
              <TikTokIcon className="mr-2 h-4 w-4" /> DM on TikTok
            </a>
          </Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Same handle on both platforms — easy to remember.
        </p>
      </div>
    </section>
  );
}