import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
            role: "Senior Web Developer",
            company: "IEEE Computer Society",
            period: "2024 - Present",
            responsibilities: [
                "Leading web development initiatives.",
                "Mentoring junior developers.",
                "Enhancing user experiences across projects.",
            ],
        },
        {
            role: "Founder",
            company: "Snugs - Dating App",
            period: "2023 - Present",
            responsibilities: [
                "Developed a matchmaking platform.",
                "Implemented scalable backend systems.",
                "Drove user engagement through analytics.",
            ],
        },
    ];

    return (
        <section id="experience" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    className="text-4xl font-bold text-center mb-16 animate-gradient-x bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    Experience
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-800">{exp.role}</h3>
                            <p className="text-indigo-600 font-medium">{exp.company}</p>
                            <p className="text-gray-500 mb-4">{exp.period}</p>
                            <ul className="space-y-2">
                                {exp.responsibilities.map((task, taskIdx) => (
                                    <li key={taskIdx} className="text-gray-600 flex items-start">
                                        <span className="mr-2 text-indigo-500">•</span>
                                        {task}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


