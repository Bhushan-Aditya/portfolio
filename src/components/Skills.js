import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
    const skillData = [
        { skill: "React.js", percentage: 90 },
        { skill: "Node.js", percentage: 85 },
        { skill: "JavaScript", percentage: 92 },
        { skill: "Python", percentage: 80 },
        { skill: "MongoDB", percentage: 75 },
    ];

    return (
        <section id="skills" className="py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
                <div className="space-y-8">
                    {skillData.map((data, idx) => (
                        <div key={idx} className="space-y-2">
                            <div className="flex justify-between text-sm mb-1">
                                <span>{data.skill}</span>
                                <span>{data.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                                <motion.div
                                    className="bg-indigo-500 h-full rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${data.percentage}%` }}
                                    transition={{ duration: 1, delay: idx * 0.2 }}
                                ></motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


