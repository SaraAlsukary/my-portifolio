'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portifolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // ✅ مراقبة الأقسام (IntersectionObserver)
  useEffect(() => {
    if (!isHomePage) return;

    const sectionsEls = document.querySelectorAll<HTMLElement>("section[id]");
    if (!sectionsEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    sectionsEls.forEach((section) => observer.observe(section));

    // ✅ return في المكان الصحيح
    return () => {
      observer.disconnect();
    };
  }, [isHomePage]);

  return (
    <div className="relative w-full">
      {/* Top bar */}
      <div className="flex items-center gap-4">
        {/* Burger icon */}
        <button
          onClick={() => setOpen(!open)}
          className="relative h-8 w-8"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute left-0 top-1/2 h-[2px] w-full bg-white transition
              ${open ? "opacity-0" : "-translate-y-2"}`}
          />
          <span
            className={`absolute left-0 top-1/2 h-[2px] w-full bg-white transition
              ${open ? "rotate-45" : ""}`}
          />
          <span
            className={`absolute left-0 top-1/2 h-[2px] w-full bg-white transition
              ${open ? "-rotate-45" : "translate-y-2"}`}
          />
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="text-white font-bold text-lg tracking-widest"
        >
          SARA
        </Link>
      </div>

      {/* Navigation */}
      <nav
        className={`
          absolute left-0 top-full w-full bg-black overflow-hidden
          transition-[max-height] duration-500
          ${open ? "max-h-[300px] py-6" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col gap-4 px-6">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <Link
                href={`/#${id}`}
                onClick={() => setOpen(false)}
                className={`
                  block text-sm transition
                  ${
                    isHomePage && activeSection === id
                      ? "text-[var(--primary-color)] pl-4"
                      : "text-white hover:text-[var(--primary-color)]"
                  }
                `}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
