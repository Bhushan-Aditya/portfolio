import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white">
            <div className="text-center px-6">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Aditya Bhushan
                </motion.h1>
                <motion.p
                    className="text-xl md:text-2xl text-gray-300 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Full Stack Developer | Innovating Digital Solutions
                </motion.p>
                <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-medium shadow-lg hover:shadow-2xl transition-all"
                >
                    Discover My Work
                </motion.a>
            </div>
        </section>
    );
}


