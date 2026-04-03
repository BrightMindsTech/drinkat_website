import drinkatLogo from "@/assets/drinkat-logo.png";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { playfulHoverTap, riseIn, sectionStagger } from "@/lib/motion";

const MotionLink = motion(Link);

const navItems: { label: string; to: string }[] = [
  { label: "Home", to: "/#home" },
  { label: "Menu", to: "/menu" },
  { label: "About", to: "/#about" },
  { label: "Visit Us", to: "/#visit-us" },
];

const RetroNav = () => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.nav
      className="bg-transparent py-4 px-6 sticky top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={sectionStagger(reducedMotion, 0.05)}
    >
      <div className="container mx-auto flex items-center justify-between">
        <MotionLink to="/#home" variants={riseIn(reducedMotion, 18)} {...playfulHoverTap(reducedMotion)}>
          <img src={drinkatLogo} alt="Drinkat logo" className="h-12 md:h-14 w-auto" />
        </MotionLink>
        <motion.ul className="hidden md:flex items-center gap-8" variants={riseIn(reducedMotion, 18)}>
          {navItems.map((item) => (
            <li key={item.label}>
              <MotionLink
                to={item.to}
                className="font-rounded font-semibold text-primary tracking-wide uppercase text-sm hover:opacity-70 transition-opacity"
                {...playfulHoverTap(reducedMotion)}
              >
                {item.label}
              </MotionLink>
            </li>
          ))}
        </motion.ul>
        <MotionLink
          to="/menu"
          className="font-rounded font-bold text-xs md:text-sm uppercase tracking-wider bg-primary text-primary-foreground px-4 md:px-6 py-2 md:py-2.5 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap inline-block"
          variants={riseIn(reducedMotion, 18)}
          {...playfulHoverTap(reducedMotion)}
        >
          order drinkat
        </MotionLink>
      </div>
    </motion.nav>
  );
};

export default RetroNav;
