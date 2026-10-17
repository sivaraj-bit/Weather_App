
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinkClass =
    "rounded-lg px-3 py-3 transition hover:bg-white/10 hover:text-sky-400 md:px-0 md:py-0 md:hover:bg-transparent";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-2"
        >
          <span aria-hidden="true" className="text-2xl sm:text-3xl">
            🌤️
          </span>

          <span className="text-lg font-extrabold sm:text-xl">
            Weather<span className="text-sky-400">Wise</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#home" className="transition hover:text-sky-400">
            Home
          </a>

          <a href="#weather" className="transition hover:text-sky-400">
            Weather
          </a>

          <a href="#about" className="transition hover:text-sky-400">
            About
          </a>
        </div>

        {/* Desktop button */}
        <a
          href="#weather"
          className="hidden rounded-full bg-sky-500 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-sky-400 md:inline-flex"
        >
          Check Weather
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="rounded-lg border border-white/10 p-2 text-xl transition hover:bg-white/10 md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        hidden={!menuOpen}
        className="border-t border-white/10 px-4 py-4 md:hidden"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1">
          <a href="#home" onClick={closeMenu} className={navLinkClass}>
            Home
          </a>

          <a href="#weather" onClick={closeMenu} className={navLinkClass}>
            Weather
          </a>

          <a href="#about" onClick={closeMenu} className={navLinkClass}>
            About
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
