import RetroBorder from "./RetroBorder";
import WarpedCheckerboard from "./WarpedCheckerboard";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-16 md:py-24 relative">
      <WarpedCheckerboard />
      <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
        <RetroBorder />

        <div className="my-8">
          <StarOrnament />
        </div>

        <h2 className="font-script text-4xl md:text-6xl text-primary mb-6">
          Our Story
        </h2>

        <p className="font-rounded text-primary/80 text-lg md:text-xl leading-relaxed mb-6">
          Since 2019, Drinkat has been fueling Jordan's coffee lovers with bold flavors and a warm,
          welcoming atmosphere. What started as a single café has grown into a beloved local brand
          with three branches across the kingdom.
        </p>

        <p className="font-rounded text-primary/80 text-lg md:text-xl leading-relaxed mb-10">
          We craft every cup with care, serve our food fresh daily, and treat every customer like family.
          From university campuses to busy streets — wherever you find us, you'll find great coffee and good vibes.
        </p>

        <div className="grid grid-cols-3 gap-8 my-12">
          <StatBlock number="5+" label="Years Brewing" />
          <StatBlock number="3" label="Branches" />
          <StatBlock number="1" label="Big Family" />
        </div>

        <div className="my-8">
          <RetroBorder />
        </div>
      </div>
    </section>
  );
};

const StatBlock = ({ number, label }: { number: string; label: string }) => (
  <div>
    <div className="font-script text-3xl md:text-5xl text-primary">{number}</div>
    <div className="font-rounded font-semibold text-primary/60 text-xs uppercase tracking-widest mt-1">
      {label}
    </div>
  </div>
);

const StarOrnament = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" className="text-primary mx-auto">
    <polygon
      points="20,2 24,14 38,14 27,22 31,36 20,28 9,36 13,22 2,14 16,14"
      fill="currentColor"
    />
  </svg>
);

export default AboutSection;
