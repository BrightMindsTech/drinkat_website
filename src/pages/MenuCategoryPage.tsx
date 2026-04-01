import { Link, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import RetroNav from "@/components/RetroNav";
import RetroFooter from "@/components/RetroFooter";
import ContactFab from "@/components/ContactFab";
import NotFound from "@/pages/NotFound";
import { MenuProductCard } from "@/components/menu/MenuProductCard";
import { getCategoryById } from "@/components/menu/menuData";
import { playfulHoverTap, riseIn, sectionStagger } from "@/lib/motion";

const MenuCategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const reducedMotion = useReducedMotion();
  const category = categoryId ? getCategoryById(categoryId) : undefined;

  if (!category) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <RetroNav />
      <main className="relative pt-24 md:pt-28 pb-16 md:pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={sectionStagger(reducedMotion, 0.06)}>
            <motion.div variants={riseIn(reducedMotion, 12)}>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 font-rounded font-semibold text-primary text-sm uppercase tracking-wide hover:opacity-80 transition-opacity mb-6"
                {...playfulHoverTap(reducedMotion)}
              >
                <ArrowLeft className="w-4 h-4" aria-hidden />
                Back to menu
              </Link>
            </motion.div>

            <motion.h1
              className="font-script text-3xl md:text-4xl text-primary mb-1"
              variants={riseIn(reducedMotion, 16)}
            >
              {category.title}{" "}
              <span className="font-arabic text-2xl md:text-3xl">· {category.titleAr}</span>
            </motion.h1>

            <motion.div
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6"
              variants={riseIn(reducedMotion, 14)}
            >
              {category.items.map((item, idx) => (
                <motion.div key={item.name} variants={riseIn(reducedMotion, 8 + idx * 2)}>
                  <MenuProductCard item={item} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </main>
      <ContactFab />
      <RetroFooter />
    </div>
  );
};

export default MenuCategoryPage;
