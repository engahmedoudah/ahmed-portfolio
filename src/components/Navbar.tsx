import { useState } from "react";
import { Menu, X } from "lucide-react";
import personal from "../data/personal.json";
import site from "../data/site.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const initials = personal.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <header className="site-header">
      <nav className="nav-wrap page-width" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label={`${personal.name}, home`}>
          <span className="brand-mark" aria-hidden="true">
            {initials}
          </span>
          <span>{personal.name}</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div
          id="primary-navigation"
          className={`nav-links${isOpen ? " is-open" : ""}`}
        >
          {site.navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
