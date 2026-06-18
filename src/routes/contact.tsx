import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, IG_URL, TT_URL, HANDLE, TikTokIcon } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Instagram, ArrowRight, MessageCircle, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ContentFlow" },
      { name: "description", content: "DM @darsh_thepostpilot on Instagram or TikTok for a free sample content pack." },
      { property: "og:title", content: "Contact ContentFlow" },
      { property: "og:description", content: "Same handle on Instagram and TikTok — slide into the DMs and let's talk." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk in the DMs"
        description="No forms. No back-and-forth emails. Just send a quick message on Instagram or TikTok and you'll usually hear back the same day."
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <DmCard
              platform="Instagram"
              icon={<Instagram className="h-6 w-6" />}
              href={IG_URL}
            />
            <DmCard
              platform="TikTok"
              icon={<TikTokIcon className="h-6 w-6" />}
              href={TT_URL}
            />
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-card p-7">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <MessageCircle className="h-4 w-4 text-primary" /> What to say in your DM
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• A quick line about what you do (business, niche, or page link)</li>
              <li>• What you're stuck on — ideas, captions, editing, posting consistency</li>
              <li>• Whether you want a free sample or want to discuss a custom package</li>
            </ul>
            <p className="mt-5 text-sm text-muted-foreground">
              I'll reply with a tailored free sample — no obligation, no awkward sales pitch.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-primary" />
            Usual reply time: under 24 hours.
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function DmCard({
  platform,
  icon,
  href,
}: {
  platform: string;
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-elegant"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
          {icon}
        </span>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">DM on {platform}</p>
          <p className="text-lg font-semibold">{HANDLE}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
        <span>Same handle on Instagram & TikTok</span>
        <span className="inline-flex items-center gap-1 text-primary group-hover:translate-x-0.5 transition-transform">
          Open chat <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </a>
  );
}

void Button;