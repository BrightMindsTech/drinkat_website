import { motion, useReducedMotion } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { playfulHoverTap } from "@/lib/motion";

const PHONE_DISPLAY = "07 9663 2111";
const PHONE_HREF = "tel:+962796632111";
const EMAIL = "drinkatjo@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

const ContactFab = () => {
  const reducedMotion = useReducedMotion();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          type="button"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border-4 border-primary bg-primary text-primary-foreground pl-4 pr-5 py-3 font-rounded font-bold text-sm uppercase tracking-wider shadow-[6px_6px_0_0_hsl(var(--foreground)/0.15)] hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          initial={reducedMotion ? false : { scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          {...playfulHoverTap(reducedMotion)}
          aria-label="Open contact options"
        >
          <MessageCircle className="h-5 w-5 shrink-0" />
          Contact us
        </motion.button>
      </DialogTrigger>
      <DialogContent className="max-w-md border-4 border-primary rounded-2xl bg-retro-cream shadow-[12px_12px_0_0_hsl(var(--primary))]">
        <DialogHeader>
          <DialogTitle className="font-script text-3xl text-primary text-center">
            Contact Info
          </DialogTitle>
          {/* <DialogDescription className="font-rounded text-primary/70 text-center">
            Call or email — same friendly team.
          </DialogDescription> */}
        </DialogHeader>
        <div className="flex flex-col gap-4 pt-2">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-4 rounded-xl border-2 border-primary bg-card p-4 font-rounded font-bold text-primary hover:bg-secondary/80 transition-colors"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Phone className="h-5 w-5" />
            </span>
            <span className="text-lg tabular-nums">{PHONE_DISPLAY}</span>
          </a>
          <a
            href={MAILTO}
            className="flex items-center gap-4 rounded-xl border-2 border-primary bg-card p-4 font-rounded font-bold text-primary hover:bg-secondary/80 transition-colors break-all"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Mail className="h-5 w-5" />
            </span>
            <span className="text-base">{EMAIL}</span>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFab;
