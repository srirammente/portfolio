import { ArrowRight, ChevronDown, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import RevealOnScroll from "./ui/RevealOnScroll";

const TypewriterEffect = ({ text, delay = 100 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <span>{displayedText}</span>;
};

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left z-10">
                    <RevealOnScroll>
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
                            <TypewriterEffect text="Full Stack & GenAI Developer" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Likhith Sriram <br />
                            <span className="text-gradient">Mente</span>
                        </h1>
                        <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
                            Full-stack and Generative AI-focused B.Tech CSE student. I build agentic workflows, fine-tune LLMs, and develop scalable web apps.
                        </p>
                    </RevealOnScroll>

                    <RevealOnScroll delay={300}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a href="#projects" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                                View Work
                            </a>
                            <a href="#contact" className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group">
                                Contact Me <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </RevealOnScroll>
                </div>

                <div className="md:w-1/2 mt-12 md:mt-0 relative z-10">
                    <RevealOnScroll delay={200}>
                        <div className="relative w-full max-w-lg mx-auto animate-float">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-2xl blur-2xl opacity-30 transform rotate-6"></div>
                            <div className="relative glass rounded-2xl p-6 border border-white/10 shadow-2xl">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="space-y-3 font-mono text-sm">
                                    <div className="text-gray-400">// My technical profile</div>
                                    <div className="text-purple-400">const <span className="text-yellow-300">developer</span> = &#123;</div>
                                    <div className="pl-4 text-white">name: <span className="text-green-400">'Likhith'</span>,</div>
                                    <div className="pl-4 text-white">focus: <span className="text-green-400">'Generative AI'</span>,</div>
                                    <div className="pl-4 text-white">stack: [<span className="text-green-400">'PyTorch'</span>, <span class="text-green-400">'React'</span>, <span class="text-green-400">'FastAPI'</span>],</div>
                                    <div className="pl-4 text-white">passion: <span className="text-green-400">'Building scalable AI systems'</span></div>
                                    <div className="text-purple-400">&#125;;</div>
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-xl flex items-center gap-3 animate-bounce shadow-xl" style={{ animationDuration: '3s' }}>
                                <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400">Status</div>
                                    <div className="text-sm font-bold text-white">Building the Future</div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
                <ChevronDown className="w-6 h-6" />
            </div>
        </section>
    );
}
