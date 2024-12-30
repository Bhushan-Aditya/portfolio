import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
    const [scrollPosition, setScrollPosition] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrollPosition(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav className={`fixed w-full z-50 transition-all ${scrollPosition ? "bg-white backdrop-blur shadow-lg text-gray-800" : "bg-transparent text-white"} p-4`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <motion.div className="text-2xl font-bold">
                    AB
                </motion.div>
                <div className="hidden md:flex items-center gap-8">
                    {["About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
                        <motion.a key={item} href={`#${item.toLowerCase()}`} className="hover:text-indigo-500 transition duration-300">
                            {item}
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}


