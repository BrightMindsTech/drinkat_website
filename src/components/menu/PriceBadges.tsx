import { cn } from "@/lib/utils";
import type { MenuItem } from "./menuData";

const sizeLabels: Record<string, string> = {
  S: "صغير",
  M: "وسط",
  L: "كبير",
};

export type PriceBadgesVariant = "onPrimary" | "onCard";

type PriceBadgesProps = {
  item: MenuItem;
  /** onPrimary: white text on dark primary rows. onCard: primary text on light card. */
  variant?: PriceBadgesVariant;
};

export function PriceBadges({ item, variant = "onPrimary" }: PriceBadgesProps) {
  const onCard = variant === "onCard";

  if (item.prices.length === 1) {
    const p = item.prices[0];
    return (
      <div
        className={cn(
          "font-rounded text-sm font-bold",
          onCard ? "text-primary" : "text-white",
        )}
      >
        {p.price} <span className={cn("text-xs font-normal", onCard && "text-primary/80")}>JD</span>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-start gap-3 sm:gap-4">
      {item.prices.map((p, i) => (
        <div key={i} className="flex flex-col items-start min-w-0">
          <span
            className={cn(
              "font-arabic text-[10px] mb-0.5",
              onCard ? "text-muted-foreground" : "text-white/80",
            )}
          >
            {sizeLabels[p.label] || p.label}
          </span>
          <span className={cn("font-rounded text-sm font-bold", onCard ? "text-primary" : "text-white")}>
            {p.price} <span className={cn("text-[10px] font-normal", onCard && "text-primary/80")}>JD</span>
          </span>
        </div>
      ))}
    </div>
  );
}
