import { useState } from "react";
import WarpedCheckerboard from "./WarpedCheckerboard";

const VisitSection = () => {
  return (
    <section id="visit-us" className="bg-primary py-16 md:py-24 relative">
      <WarpedCheckerboard invert />
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="font-script text-4xl md:text-6xl !text-primary-foreground mb-3">
          Come Visit Us
        </h2>
        <p className="font-rounded font-semibold text-primary-foreground/80 uppercase tracking-[0.2em] text-sm mb-12">
          We'd love to see you
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
          <InfoCard
            icon={<LocationIcon />}
            title="Airport Street"
            lines={["Airport Road Branch", "Amman, Jordan"]}
            videos={["/airport-branch1.mp4", "/airport-branch2.mp4"]}
          />
          <InfoCard
            icon={<LocationIcon />}
            title="Hashemite University"
            lines={["Hashemite University", "Zarqa, Jordan"]}
            videos={["/hu-branch.mp4"]}
          />
          <InfoCard
            icon={<LocationIcon />}
            title="MEU"
            lines={["Middle East University", "Amman, Jordan"]}
            videos={["/meu-branch.mp4"]}
          />
        </div>

        <div className="flex justify-center">
          <a
            href="https://instagram.com/drinkat.jo"
            target="_blank"
            rel="noopener noreferrer"
            className="font-rounded font-bold text-sm uppercase tracking-wider bg-primary-foreground text-primary px-8 py-3 rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            <InstagramIcon />
            @drinkat.jo
          </a>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({
  icon,
  title,
  lines,
  videos,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  videos?: string[];
}) => {
  const [videoIndex, setVideoIndex] = useState(0);
  const hasVideoBg = videos && videos.length > 0;

  return (
    <div
      className={`rounded-2xl p-8 overflow-hidden relative min-h-[200px] ${
        hasVideoBg ? "" : "bg-primary-foreground"
      }`}
    >
      {hasVideoBg && (
        <>
          <video
            key={videoIndex}
            src={videos![videoIndex]}
            muted
            playsInline
            autoPlay
            loop={videos!.length === 1}
            onEnded={videos!.length > 1 ? () => setVideoIndex((i) => (i + 1) % videos!.length) : undefined}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </>
      )}
      <div className="relative z-10">
        <div className="flex justify-center mb-4 text-primary">{icon}</div>
        <h3 className={`font-script text-2xl mb-3 ${hasVideoBg ? "!text-primary-foreground" : "!text-primary"}`}>
          {title}
        </h3>
        {lines.map((line) => (
          <p
            key={line}
            className={`font-rounded text-sm ${hasVideoBg ? "text-primary-foreground/90" : "text-primary/70"}`}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

function LocationIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <path d="M20 4C13.4 4 8 9.4 8 16c0 10 12 20 12 20s12-10 12-20c0-6.6-5.4-12-12-12z" />
      <circle cx="20" cy="16" r="4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <circle cx="20" cy="20" r="16" />
      <line x1="20" y1="10" x2="20" y2="20" />
      <line x1="20" y1="20" x2="28" y2="24" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <path d="M8 6h8l3 8-4 3c2 5 6 9 11 11l3-4 8 3v8c0 1-1 2-2 2C16 36 4 24 3 8c0-1 1-2 2-2h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default VisitSection;
