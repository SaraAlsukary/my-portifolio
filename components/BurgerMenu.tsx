'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace("#", "");
    setActiveSection(id);

    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [isHomePage]);

  useEffect(() => {
    if (!isHomePage) return;

    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isHomePage]);

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("");
    }
  }, [isHomePage]);

  const navClass = (id: string) =>
    isHomePage && activeSection === id
      ? "text-(--primary-color) pl-4"
      : "text-white hover:text-(--primary-color)";

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="relative h-10 w-10 cursor-pointer float-left mt-2.5 mr-2 ml-2"
      >
        <span
          className={`
            absolute top-1/2 left-1/2 h-0.75 w-6 -translate-x-1/2 -translate-y-1/2 my-0.5 mb-2
            bg-(--primary-color) transition-all duration-300
            ${open ? "opacity-0" : "opacity-100"}
          `}
        />

        <span
          className={`
            absolute left-1/2 h-0.75 w-6 -translate-x-1/2
            bg-(--primary-color) transition-all duration-300
            ${open ? "top-1/2 rotate-45" : "top-[35%]"}
          `}
        />

        <span
          className={`
            absolute left-1/2 h-0.75 w-6 -translate-x-1/2
            bg-(--primary-color) transition-all duration-300
            ${open ? "top-1/2 -rotate-45" : "top-[67%]"}
          `}
        />
      </div>

      <Link
        href="/"
        className="text-white float-left ml-5 mr-12.5 mt-2 
        uppercase font-bold text-[20px] tracking-[5] font-poppins-regular"
      >
        Sara
      </Link>

      <nav className="w-full font-poppins-medium text-[1.5rem] absolute top-full left-0">
        <ul
          className={`
            bg-black px-7.5 w-full h-auto clear-both
            transition-all duration-500 ease-in-out overflow-hidden
            ${open ? "max-h-125 pt-6 pb-10" : "max-h-0"}
          `}
        >
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "portifolio", label: "Portfolio" },
            { id: "contact", label: "Contact" },
          ].map(({ id, label }) => (
            <li
              key={id}
              className={`transition-all duration-500
                ${open ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}
              `}
            >
              <Link
                href={`/#${id}`}
                onClick={() => setOpen(false)}
                className={`block w-auto py-3.5 px-0 leading-4 border-none text-[16px]
                  transition-all duration-500 hover:pl-4 ${navClass(id)}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default BurgerMenu;
