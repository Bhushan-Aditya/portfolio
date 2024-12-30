import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
                <form className="space-y-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                    <textarea
                        rows="4"
                        placeholder="Your Message"
                        className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white"
                    >
                        Send Message
                    </motion.button>
                </form>
            </div>
        </section>
    );
}


