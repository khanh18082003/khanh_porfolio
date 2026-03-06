import Container from "./Container";
import ThemeToggle from "../ui/ThemeToggle";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900/80">
      <Container className="flex h-16 items-center justify-between">
        <Link
          className="flex items-center gap-3 text-lg font-bold text-slate-900 dark:text-slate-100"
          to="/#hero"
        >
          <img
            src="/logo.svg"
            alt="NTK logo"
            className="h-14 w-14 shrink-0 object-cover border-2 border-emerald-600 dark:border-emerald-300 rounded-full"
          />
          <span className="hidden sm:inline">Nguyen Trung Khanh</span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-6">
          <div className="hidden items-center gap-6 sm:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-semibold text-slate-600 transition-colors duration-300 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center border-l border-slate-200 pl-6 dark:border-slate-700">
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
