import { Link } from "react-router-dom";
import { ImageOff } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { playfulHoverTap, riseIn, sectionStagger, sectionViewport } from "@/lib/motion";
import type { Category } from "./menuData";
import { cn } from "@/lib/utils";

type CategoryGridProps = {
  categories: Category[];
  className?: string;
  /** When true, tiles use primary palette text (for embedding on dark sections). */
  embedded?: boolean;
};

export function CategoryGrid({ categories, className, embedded = false }: CategoryGridProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto justify-items-center",
        className,
      )}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionStagger(reducedMotion, 0.05)}
    >
      {categories.map((cat) => (
        <motion.div
          key={cat.id}
          className="w-full max-w-[200px] sm:max-w-none"
          variants={riseIn(reducedMotion, 14)}
        >
          <Link
            to={`/menu/${cat.id}`}
            className={cn(
              "group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              embedded && "focus-visible:ring-offset-background",
            )}
            {...playfulHoverTap(reducedMotion)}
          >
            <div
              className={cn(
                "relative aspect-square rounded-2xl border overflow-hidden flex items-center justify-center transition-all duration-300",
                "bg-muted/80 border-border/60",
                "group-hover:shadow-lg group-hover:-translate-y-1",
                embedded && "bg-white/95 border-white/40 shadow-sm",
              )}
            >
              {cat.imageSrc ? (
                <img
                  src={cat.imageSrc}
                  alt=""
                  className="max-h-[85%] max-w-[85%] object-contain object-center"
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground p-4">
                  <ImageOff className="w-10 h-10 opacity-40" aria-hidden />
                  <span className="text-[10px] uppercase tracking-wider text-center font-rounded opacity-60 line-clamp-2">
                    {cat.title}
                  </span>
                </div>
              )}
            </div>
            <p className="mt-3 text-center font-rounded font-bold text-xs sm:text-sm uppercase tracking-wide px-1 text-primary">
              {cat.title}
            </p>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
