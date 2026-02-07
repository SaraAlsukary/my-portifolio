"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-7 z-50 p-3 rounded-full bg-black text-white cursor-pointer shadow-lg transition-all duration-300
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0"}
      `}
            aria-label="Back to top"
        >
            <ArrowUp size={20} />
        </button>
    );
}