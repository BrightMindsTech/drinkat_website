import { useState } from "react";
import { CupSoda, Beef } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import palmTree from "@/assets/palm-tree.png";
import WarpedCheckerboard from "./WarpedCheckerboard";
import {
  playfulHoverTap,
  riseIn,
  scaleIn,
  sectionStagger,
  sectionViewport,
} from "@/lib/motion";
import {
  drinkCategories,
  foodCategories,
  extras,
  sides,
  featuredItems,
  type MenuItem,
  type Category,
  type FeaturedItem,
} from "./menu/menuData";

/* ───────── PRICE BADGES ───────── */

function PriceBadges({ item }: { item: MenuItem }) {
  const sizeLabels: Record<string, string> = {
    S: "صغير",
    M: "وسط",
    L: "كبير",
  };

  if (item.prices.length === 1) {
    const p = item.prices[0];
    return (
      <div className="font-rounded text-sm font-bold text-white">
        {p.price} <span className="text-xs font-normal">JD</span>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-3">
      {item.prices.map((p, i) => (
        <div key={i} className="flex flex-col items-center">
          <span className="font-arabic text-[10px] text-white/80 mb-0.5">
            {sizeLabels[p.label] || p.label}
          </span>
          <span className="font-rounded text-sm font-bold text-white">
            {p.price} <span className="text-[10px] font-normal">JD</span>
          </span>
        </div>
      ))}
    </div>
  );
}

const FEATURED_INTERVAL_MS = 2500;

/** Local featured photos from public folder (cycle through 4 images for 7 items) */
const FEATURED_IMAGE_NAMES = ["featured-item1.jpeg", "featured-item2.jpeg", "featured-item3.jpeg", "featured-item4.jpeg"];
function getFeaturedImageUrl(_item: FeaturedItem, index: number): string {
  const name = FEATURED_IMAGE_NAMES[index % FEATURED_IMAGE_NAMES.length];
  return `/${name}`;
}

function FeaturedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const total = featuredItems.length;
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="w-full max-w-md mx-auto mb-10 md:mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionStagger(reducedMotion)}
    >
      <motion.p className="font-rounded font-semibold text-primary-foreground/80 text-xs uppercase tracking-widest text-center mb-3" variants={riseIn(reducedMotion, 14)}>
        Featured
      </motion.p>
      <Swiper
        modules={[Autoplay, A11y]}
        onSwiper={setSwiper}
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
        loop={total > 1}
        slidesPerView={1}
        speed={reducedMotion ? 0 : 500}
        allowTouchMove={total > 1}
        autoplay={
          reducedMotion || total <= 1
            ? false
            : {
                delay: FEATURED_INTERVAL_MS,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
        }
        className="overflow-hidden rounded-2xl"
      >
        {featuredItems.map((item, index) => (
          <SwiperSlide key={item.name}>
            <motion.div
              className="w-full rounded-2xl overflow-hidden bg-primary-foreground/10 border border-primary-foreground/20 aspect-[4/3]"
              variants={scaleIn(reducedMotion)}
            >
              <img
                src={getFeaturedImageUrl(item, index)}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      {total > 1 && (
        <motion.div className="flex justify-center gap-2 mt-3" variants={riseIn(reducedMotion, 10)}>
          {featuredItems.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => swiper?.slideToLoop(i)}
              className={`h-1.5 rounded-full transition-all w-6 ${i === activeIndex ? "bg-primary-foreground" : "bg-primary-foreground/40"}`}
              aria-label={`Featured ${i + 1}`}
              {...playfulHoverTap(reducedMotion)}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

function CategoryBlock({ cat, reducedMotion }: { cat: Category; reducedMotion: boolean }) {
  return (
    <motion.div className="mb-6 last:mb-0" variants={riseIn(reducedMotion, 16)}>
      <h3 className="text-lg font-script text-primary-foreground mb-2">
        {cat.title} · <span className="font-arabic">{cat.titleAr}</span>
      </h3>
      <div className="space-y-0 border border-primary-foreground/20 rounded-xl overflow-hidden bg-primary-foreground/10">
        {cat.items.map((item, idx) => (
          <motion.div
            key={item.name}
            className="flex items-center justify-between px-4 py-2.5 border-b border-primary-foreground/10 last:border-0"
            variants={riseIn(reducedMotion, 12 + idx)}
          >
            <span className={`font-semibold text-primary-foreground text-sm ${/[\u0600-\u06FF]/.test(item.name) ? "font-arabic" : "font-rounded"}`}>{item.name}</span>
            <PriceBadges item={item} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function SimpleListBlock({ title, titleAr, items, reducedMotion }: { title: string; titleAr: string; items: MenuItem[]; reducedMotion: boolean }) {
  return (
    <motion.div className="mb-6 last:mb-0" variants={riseIn(reducedMotion, 16)}>
      <h3 className="text-lg font-script text-primary-foreground mb-2">
        {title} · <span className="font-arabic">{titleAr}</span>
      </h3>
      <div className="space-y-0 border border-primary-foreground/20 rounded-xl overflow-hidden bg-primary-foreground/10">
        {items.map((item, idx) => (
          <motion.div
            key={item.name}
            className="flex items-center justify-between px-4 py-2.5 border-b border-primary-foreground/10 last:border-0"
            variants={riseIn(reducedMotion, 12 + idx)}
          >
            <span className={`font-semibold text-primary-foreground text-sm ${/[\u0600-\u06FF]/.test(item.name) ? "font-arabic" : "font-rounded"}`}>{item.name}</span>
            <PriceBadges item={item} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ───────── MAIN COMPONENT ───────── */

const MenuSection = () => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      id="menu"
      className="bg-primary py-16 md:py-24 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionStagger(reducedMotion, 0.06)}
    >
      {/* Bright top line – stands out from menu */}
      <div
        className="absolute top-0 left-0 right-0 z-20 h-5 w-full"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.95) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255,255,255,0.95) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.95) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.95) 75%)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
          boxShadow: "0 2px 8px rgba(255,255,255,0.3)",
        }}
      />
      {/* Palm trees – top of section, wind sway, whiter */}
      <div className="absolute top-0 left-0 -translate-x-1/3 sm:-translate-x-1/4 md:-translate-x-1/6 pointer-events-none z-[1]">
        <img src={palmTree} alt="" className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-auto opacity-50 md:opacity-60 animate-sway-wind drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] [filter:brightness(0)_invert(1)]" />
      </div>
      <div className="absolute top-0 right-0 translate-x-1/3 sm:translate-x-1/4 md:translate-x-1/6 pointer-events-none z-[1] -scale-x-100">
        <img src={palmTree} alt="" className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-auto opacity-50 md:opacity-60 animate-sway-wind-slow drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] [filter:brightness(0)_invert(1)]" />
      </div>
      <WarpedCheckerboard invert />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="text-center mb-8" variants={riseIn(reducedMotion, 20)}>
          <motion.h2 className="font-script text-4xl md:text-6xl !text-primary-foreground mb-3" {...playfulHoverTap(reducedMotion)}>
            Menu Drinkat
          </motion.h2>
          <motion.p className="font-rounded font-semibold text-primary-foreground/80 uppercase tracking-[0.2em] text-sm" variants={riseIn(reducedMotion, 14)}>
            Made fresh, served with a smile
          </motion.p>
        </motion.div>

        <FeaturedCarousel />

        <motion.h3 className="font-rounded font-bold text-primary-foreground/90 text-sm uppercase tracking-widest text-center mb-6" variants={riseIn(reducedMotion, 16)}>
          Full menu
        </motion.h3>

        {/* Mobile: full menu visible (no accordion). Desktop: 2-col grid */}
        <motion.div className="md:hidden space-y-8" variants={sectionStagger(reducedMotion, 0.1)}>
          <div>
            <motion.h4 className="font-script text-xl text-primary-foreground mb-4 flex items-center gap-2" variants={riseIn(reducedMotion, 14)} {...playfulHoverTap(reducedMotion)}>
              <CupSoda className="w-5 h-5" /> Drinks
            </motion.h4>
            {drinkCategories.map((cat) => (
              <CategoryBlock key={cat.id} cat={cat} reducedMotion={reducedMotion} />
            ))}
          </div>
          <div>
            <motion.h4 className="font-script text-xl text-primary-foreground mb-4 flex items-center gap-2" variants={riseIn(reducedMotion, 14)} {...playfulHoverTap(reducedMotion)}>
              <Beef className="w-5 h-5" /> Food
            </motion.h4>
            {foodCategories.map((cat) => (
              <CategoryBlock key={cat.id} cat={cat} reducedMotion={reducedMotion} />
            ))}
            <SimpleListBlock title="Extras" titleAr="أشياء زيادة" items={extras} reducedMotion={reducedMotion} />
            <SimpleListBlock title="Sides" titleAr="أشياء سوفت" items={sides} reducedMotion={reducedMotion} />
          </div>
        </motion.div>

        <motion.div className="hidden md:grid md:grid-cols-2 gap-x-10 gap-y-8 max-w-5xl mx-auto" variants={sectionStagger(reducedMotion, 0.12)}>
          <div>
            <motion.h4 className="font-script text-xl text-primary-foreground mb-4 flex items-center gap-2" variants={riseIn(reducedMotion, 14)} {...playfulHoverTap(reducedMotion)}>
              <CupSoda className="w-5 h-5" /> Drinks
            </motion.h4>
            {drinkCategories.map((cat) => (
              <CategoryBlock key={cat.id} cat={cat} reducedMotion={reducedMotion} />
            ))}
          </div>
          <div>
            <motion.h4 className="font-script text-xl text-primary-foreground mb-4 flex items-center gap-2" variants={riseIn(reducedMotion, 14)} {...playfulHoverTap(reducedMotion)}>
              <Beef className="w-5 h-5" /> Food
            </motion.h4>
            {foodCategories.map((cat) => (
              <CategoryBlock key={cat.id} cat={cat} reducedMotion={reducedMotion} />
            ))}
            <SimpleListBlock title="Extras" titleAr="أشياء زيادة" items={extras} reducedMotion={reducedMotion} />
            <SimpleListBlock title="Sides" titleAr="أشياء سوفت" items={sides} reducedMotion={reducedMotion} />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MenuSection;
