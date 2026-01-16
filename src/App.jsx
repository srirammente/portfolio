import { useState, useEffect } from "react";
import BackgroundBlobs from './components/BackgroundBlobs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import LeetCode from './components/LeetCode';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/ui/CursorGlow';

function ScrollProgress() {
    const [scrollWidth, setScrollWidth] = useState(0);

    const handleScroll = () => {
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
        setScrollWidth((scrolled / height) * 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-accent z-50 transition-all duration-300 ease-out" style={{ width: `${scrollWidth}%` }}></div>
    );
}

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-dark min-h-screen text-white overflow-hidden selection:bg-primary/30 selection:text-white pb-20 md:pb-0">
            <CursorGlow />
            <ScrollProgress />
            <BackgroundBlobs />
            <Navbar />
            <main>
                <Hero />
                <Education />
                <LeetCode />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App;
