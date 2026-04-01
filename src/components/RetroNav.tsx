import drinkatLogo from "@/assets/drinkat-logo.png";
import { motion, useReducedMotion } from "framer-motion";
import { playfulHoverTap, riseIn, sectionStagger } from "@/lib/motion";

const RetroNav = () => {
  const navItems = ["Home", "Menu", "About", "Visit Us"];
  const reducedMotion = useReducedMotion();

  return (
    <motion.nav
      className="bg-transparent py-4 px-6 sticky top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={sectionStagger(reducedMotion, 0.05)}
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.a href="#home" variants={riseIn(reducedMotion, 18)} {...playfulHoverTap(reducedMotion)}>
          <img src={drinkatLogo} alt="Drinkat logo" className="h-12 md:h-14 w-auto" />
        </motion.a>
        <motion.ul className="hidden md:flex items-center gap-8" variants={riseIn(reducedMotion, 18)}>
          {navItems.map((item) => (
            <li key={item}>
              <motion.a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="font-rounded font-semibold text-primary tracking-wide uppercase text-sm hover:opacity-70 transition-opacity"
                {...playfulHoverTap(reducedMotion)}
              >
                {item}
              </motion.a>
            </li>
          ))}
        </motion.ul>
        <motion.button
          className="font-rounded font-bold text-xs md:text-sm uppercase tracking-wider bg-primary text-primary-foreground px-4 md:px-6 py-2 md:py-2.5 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
          variants={riseIn(reducedMotion, 18)}
          {...playfulHoverTap(reducedMotion)}
        >
          order drinkat
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default RetroNav;
