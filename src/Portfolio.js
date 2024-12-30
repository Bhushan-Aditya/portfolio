import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Portfolio() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Contact />
        </div>
    );
}



