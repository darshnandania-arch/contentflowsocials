import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, IG_URL, TT_URL, HANDLE, TikTokIcon } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Instagram, Sparkles } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — PostPilot" },
      { name: "description", content: "Simple, honest pricing for content plans, video ideas, captions and editing." },
      { property: "og:title", content: "Pricing — PostPilot" },
      { property: "og:description", content: "Starter, Growth and Monthly plans — plus custom packages on request." },
    ],
  }),
  component: PricingPage,
});

const TIERS = [
  {
    name: "Starter Pack",
    price: "£10",
    cadence: "one-off",
    desc: "Test the waters with a quick content boost.",
    features: ["5 Instagram captions", "5 video / content ideas", "Delivered within 48 hours"],
  },
  {
    name: "Growth Pack",
    price: "£25",
    cadence: "one-off",
    desc: "A full week of content, ready to post.",
    features: ["7-day content plan", "10 captions (IG + TikTok)", "5 video ideas", "Posting schedule"],
    featured: true,
  },
  {
    name: "Monthly Plan",
    price: "£50",
    cadence: "per month",
    desc: "Ongoing content support so you never run out.",
    features: ["4 weekly plans", "Unlimited captions", "TikTok scripts", "Priority DM support"],
  },
];

function PricingPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Pricing"
        title="Simple, honest pricing"
        description="No contracts. Cancel anytime. Need something different? Just message me — pricing flexes around what you actually need."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {TIERS.map((t) => (
              <div
                key={t.name}
                className={
                  "relative rounded-2xl border bg-card p-8 " +
                  (t.featured
                    ? "border-primary/50 shadow-elegant ring-1 ring-primary/30"
                    : "border-border")
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
                <Button asChild className="mt-8 w-full bg-gradient-primary text-primary-foreground hover:opacity-90">
                  <Link to="/contact">Get started</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Custom pricing card */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-gradient-hero p-8 md:p-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                  <Sparkles className="h-3 w-3 text-primary" /> Custom packages
                </div>
                <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
                  Need something tailored? Let's talk.
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Big launch, a heavy editing month, or a niche your business sits inside — we can
                  discuss your needs and sort pricing accordingly. Most chats start with a quick DM
                  and end with a plan you actually feel good about.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Button asChild className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                  <a href={IG_URL} target="_blank" rel="noreferrer">
                    <Instagram className="mr-2 h-4 w-4" /> DM {HANDLE}
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-border bg-card/40 hover:bg-card">
                  <a href={TT_URL} target="_blank" rel="noreferrer">
                    <TikTokIcon className="mr-2 h-4 w-4" /> DM on TikTok
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
            <MessageCircle className="mr-1 inline h-4 w-4 text-primary" />
            Every plan starts with a free sample so you can see the quality before paying a penny.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}