import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Platform = {
  key: string;
  name: string;
  icon: React.ReactNode;
  placeholder: string;
  prefix: string;
  ring: string;
  bg: string;
};

const PLATFORMS: Platform[] = [
  {
    key: "instagram",
    name: "Instagram",
    icon: <Instagram className="h-5 w-5" />,
    placeholder: "yourhandle",
    prefix: "@",
    ring: "ring-coral",
    bg: "bg-coral-soft",
  },
  {
    key: "facebook",
    name: "Facebook",
    icon: <Facebook className="h-5 w-5" />,
    placeholder: "yourpage",
    prefix: "fb.com/",
    ring: "ring-sky",
    bg: "bg-sky-soft",
  },
  {
    key: "reddit",
    name: "Reddit",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M22 12c0-1.1-.9-2-2-2-.5 0-1 .2-1.4.6-1.4-1-3.3-1.6-5.3-1.7l.9-4.2 2.9.6c0 .8.6 1.4 1.4 1.4s1.4-.6 1.4-1.4S19.3 4 18.5 4c-.5 0-1 .3-1.3.7l-3.3-.7c-.2 0-.4.1-.4.3L12.5 9c-2.1.1-3.9.7-5.4 1.7-.4-.4-.9-.6-1.4-.6-1.1 0-2 .9-2 2 0 .8.5 1.5 1.2 1.8 0 .2-.1.4-.1.6 0 2.7 3.1 4.9 7 4.9s7-2.2 7-4.9c0-.2 0-.4-.1-.6.8-.3 1.3-1 1.3-1.9zM7 13.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5S9.3 15 8.5 15 7 14.3 7 13.5zm8.4 3.7c-.9.9-2.6 1-3.4 1s-2.5-.1-3.4-1c-.1-.1-.1-.4 0-.5s.4-.1.5 0c.6.6 1.8.8 2.9.8s2.3-.2 2.9-.8c.1-.1.4-.1.5 0s.1.4 0 .5zm-.4-2.2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
      </svg>
    ),
    placeholder: "yoursub",
    prefix: "r/",
    ring: "ring-amber",
    bg: "bg-amber-soft",
  },
  {
    key: "linkedin",
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    placeholder: "your-name",
    prefix: "in/",
    ring: "ring-primary",
    bg: "bg-accent",
  },
];

export function PlatformPicker() {
  const [active, setActive] = useState<string>("instagram");
  const [handle, setHandle] = useState("");
  const navigate = useNavigate();
  const platform = PLATFORMS.find((p) => p.key === active)!;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/dashboard" });
  };

  return (
    <div
      id="get-started"
      className="rounded-3xl border bg-card p-5 shadow-[0_30px_80px_-40px_oklch(0.27_0.05_185/0.35)] md:p-7"
    >
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        1. Pick your platform
      </p>
      <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4">
        {PLATFORMS.map((p) => {
          const isActive = p.key === active;
          return (
            <button
              key={p.key}
              type="button"
              onClick={() => setActive(p.key)}
              className={[
                "group flex items-center justify-center gap-2 rounded-2xl border px-3 py-3 text-sm font-medium transition-all",
                isActive
                  ? `${p.bg} border-transparent ring-2 ${p.ring} shadow-sm`
                  : "bg-background hover:bg-muted",
              ].join(" ")}
            >
              <span
                className={
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground group-hover:text-foreground"
                }
              >
                {p.icon}
              </span>
              <span>{p.name}</span>
            </button>
          );
        })}
      </div>

      <p className="mt-5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        2. Add your handle
      </p>
      <form onSubmit={onSubmit} className="mt-3 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex flex-1 items-center">
          <span className="pointer-events-none absolute left-4 text-sm font-medium text-muted-foreground">
            {platform.prefix}
          </span>
          <Input
            value={handle}
            onChange={(e) => setHandle(e.target.value.replace(/\s/g, ""))}
            placeholder={platform.placeholder}
            className="h-12 rounded-2xl border-2 bg-background pl-14 text-base shadow-none"
            aria-label={`${platform.name} handle`}
          />
        </div>
        <Button
          type="submit"
          size="lg"
          className="h-12 rounded-2xl bg-mint-950 px-6 text-base font-semibold text-primary-foreground hover:bg-mint-950/90"
        >
          Mint my insights
          <ArrowRight className="h-4 w-4" />
        </Button>
      </form>
      <p className="mt-3 text-xs text-muted-foreground">
        Free forever. No credit card. Insights in under 30 seconds.
      </p>
    </div>
  );
}
