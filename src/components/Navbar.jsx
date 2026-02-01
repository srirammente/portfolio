import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "glass-nav shadow-lg" : ""
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <span className="text-2xl font-bold text-white tracking-tighter">
                            Likhith<span className="text-primary">.</span>
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#home" className="hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Home</a>
                            <a href="#education" className="hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Education</a>
                            <a href="#skills" className="hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Skills</a>
                            <a href="#projects" className="hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                            <a href="https://drive.google.com/file/d/18Q1lu1urKcpR0O2dwMDCq4eoHvNrujB1/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Resume</a>
                            <a href="#contact" className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all text-sm font-medium border border-white/10">Let's Talk</a>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex items-center justify-center">
                    <div className="space-y-8 text-center p-8">
                        <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-white hover:text-primary transition-colors block">Home</a>
                        <a href="#education" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-white hover:text-primary transition-colors block">Education</a>
                        <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-white hover:text-primary transition-colors block">Skills</a>
                        <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-white hover:text-primary transition-colors block">Projects</a>
                        <a href="https://drive.google.com/file/d/18Q1lu1urKcpR0O2dwMDCq4eoHvNrujB1/view?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-white hover:text-primary transition-colors block">Resume</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-primary hover:text-white transition-colors block">Contact Me</a>
                    </div>
                </div>
            )}
        </nav>
    );
}
