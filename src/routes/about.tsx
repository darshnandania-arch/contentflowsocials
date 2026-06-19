import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, IG_URL, TT_URL, HANDLE, TikTokIcon } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Instagram, Sparkles, Target, Zap, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — PostPilot" },
      { name: "description", content: "The story, approach and obsession behind PostPilot." },
      { property: "og:title", content: "About — PostPilot" },
      { property: "og:description", content: "Built by a content nerd for creators and small businesses who'd rather create than caption." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About"
        title="Hi, I'm Darsh — the post pilot."
        description="I build short-form content systems for people who'd rather create than spend their evenings staring at a blank caption box."
      />

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I started ContentFlow after watching too many talented people — café owners, barbers, gym
              coaches, creators with real things to say — give up on Instagram and TikTok simply
              because the <span className="text-foreground">"what do I even post?"</span> question
              wore them out.
            </p>
            <p>
              The truth is, you don't need to be a marketer to grow online. You just need a system that
              tells you what to film, what to write, and when to hit post. That's the whole job — and
              it's the thing I'm genuinely obsessed with.
            </p>
            <p>
              I've spent years studying what actually works on short-form: the hooks that stop the
              scroll, the formats the algorithm rewards this month, and the captions that turn a viewer
              into a customer or a fan. I bake all of that into every plan I send.
            </p>
            <p>
              No fluff agency vibes. No 47-page brand decks. Just clean, sharp content you can post
              tomorrow morning and actually feel proud of.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            <Pillar icon={Target} title="Built to convert" body="Every caption and idea is engineered to either grow you or sell for you." />
            <Pillar icon={Zap} title="Fast turnarounds" body="Most packs land in your DMs within 48 hours." />
            <Pillar icon={Heart} title="Genuinely care" body="Your page isn't a ticket in a queue — I treat it like my own." />
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-card p-8 text-center">
            <Sparkles className="mx-auto h-7 w-7 text-primary" />
            <h3 className="mt-3 text-2xl font-bold tracking-tight">Let's make your feed feel alive again.</h3>
            <p className="mt-3 text-muted-foreground">
              DM <span className="font-medium text-foreground">{HANDLE}</span> on either platform — same handle on both.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                <a href={IG_URL} target="_blank" rel="noreferrer">
                  <Instagram className="mr-2 h-4 w-4" /> Instagram
                </a>
              </Button>
              <Button asChild variant="outline" className="border-border bg-card/40 hover:bg-card">
                <a href={TT_URL} target="_blank" rel="noreferrer">
                  <TikTokIcon className="mr-2 h-4 w-4" /> TikTok
                </a>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/contact">Or visit contact →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Pillar({ icon: Icon, title, body }: { icon: typeof Target; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 text-center">
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="mt-4 font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}