import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#about-me", text: "About Me" },
    { href: "#my-projects", text: "My Projects" },
    { href: "#previous-exp", text: "Previous Experience" },
    { href: "#interests", text: "Interests" },
    { href: "#connect", text: "Connect" },
  ];

  return (
    <header>
      <nav
        id="portfolio-navbar"
        className="fixed w-full bg-woodland-muted/85 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="font-semibold md:text-lg sm:text-base">
            {/*Desktop Navbar */}
            <ul className="hidden md:flex justify-evenly text-woodland-secondary">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="hover:text-woodland-accent-text transition-colors duration-500"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}

            <div className="md:hidden flex justify-end">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-woodland-secondary hover:text-woodland-accent-text p-2 focus:outline-none"
                aria-label="toggle menu"
              >
                {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>

            <div
              className={`
                md:hidden
                absolute
                left-0
                right-0
                bg-woodland-muted/90
                backdrop-blur-sm
                transform
                transition-all
                duration-300
                ease-in-out
                ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
              `}
            >
              <ul className="py-4 px-6 space-y-4 text-woodland-secondary">
                {navItems.map((item) => (
                  <li key={item.text}>
                    <a
                      href={item.href}
                      className="block hover:text-woodland-accent-text transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
