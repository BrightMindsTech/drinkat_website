import drinkatLogo from "@/assets/drinkat-logo.png";

const RetroNav = () => {
  const navItems = ["Home", "Menu", "About", "Visit Us"];

  return (
    <nav className="bg-transparent py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#home">
          <img src={drinkatLogo} alt="Drinkat logo" className="h-12 md:h-14 w-auto" />
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="font-rounded font-semibold text-primary tracking-wide uppercase text-sm hover:opacity-70 transition-opacity"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button className="font-rounded font-bold text-xs md:text-sm uppercase tracking-wider bg-primary text-primary-foreground px-4 md:px-6 py-2 md:py-2.5 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap">
          order drinkat
        </button>
      </div>
    </nav>
  );
};

export default RetroNav;
