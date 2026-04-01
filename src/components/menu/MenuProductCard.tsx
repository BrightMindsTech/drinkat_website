import { CupSoda } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { MenuItem } from "./menuData";
import { PriceBadges } from "./PriceBadges";

type MenuProductCardProps = {
  item: MenuItem;
  className?: string;
};

export function MenuProductCard({ item, className }: MenuProductCardProps) {
  const isArabicHeavy = /[\u0600-\u06FF]/.test(item.name);

  return (
    <Card
      className={cn(
        "overflow-hidden border-border/80 bg-card shadow-sm transition-shadow hover:shadow-md h-full flex flex-col",
        className,
      )}
    >
      <div className="relative aspect-[4/3] bg-muted/70 border-b border-border/60 flex items-center justify-center p-4">
        {item.imageSrc ? (
          <img src={item.imageSrc} alt={item.name} className="max-h-full max-w-full object-contain object-center" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
            <CupSoda className="w-14 h-14" strokeWidth={1.25} aria-hidden />
          </div>
        )}
      </div>
      <CardContent className="p-4 flex flex-col flex-1 gap-3">
        <h2
          className={cn(
            "font-semibold text-primary text-sm leading-snug line-clamp-3 min-h-[2.75rem]",
            isArabicHeavy ? "font-arabic text-right" : "font-rounded",
          )}
        >
          {item.name}
        </h2>
        <div className="mt-auto pt-1 border-t border-border/60">
          <PriceBadges item={item} variant="onCard" />
        </div>
      </CardContent>
    </Card>
  );
}
