import { Layout, Palette, Code2, Database, Brain, Rocket } from "lucide-react";
import RevealOnScroll from "./ui/RevealOnScroll";

export default function Skills() {
    const skills = [
        {
            category: "Programming Languages",
            icon: Code2,
            description: "Java, Python, JavaScript, SQL",
            color: "text-blue-500",
            bg: "bg-blue-500/20",
            border: "hover:border-blue-500/30"
        },
        {
            category: "AI & ML Stack",
            icon: Brain,
            description: "PyTorch, Hugging Face Transformers, LLMs, NLP, RAG, LangChain, Machine Learning, Deep Learning",
            color: "text-purple-500",
            bg: "bg-purple-500/20",
            border: "hover:border-purple-500/30"
        },
        {
            category: "Frameworks & Tools",
            icon: Rocket,
            description: "React.js, Node.js, Express.js, FastAPI, Git, Docker",
            color: "text-cyan-500",
            bg: "bg-cyan-500/20",
            border: "hover:border-cyan-500/30"
        },
        {
            category: "Frontend Technologies",
            icon: Layout,
            description: "HTML, CSS, Material UI, Vite",
            color: "text-pink-500",
            bg: "bg-pink-500/20",
            border: "hover:border-pink-500/30"
        },
        {
            category: "Databases",
            icon: Database,
            description: "MongoDB, SQLite, Firebase, MySQL",
            color: "text-green-500",
            bg: "bg-green-500/20",
            border: "hover:border-green-500/30"
        },
        {
            category: "Backend & Systems",
            icon: Palette,
            description: "REST APIs, Microservices, OAuth 2.0, JWT, WebSockets",
            color: "text-orange-500",
            bg: "bg-orange-500/20",
            border: "hover:border-orange-500/30"
        }
    ];

    return (
        <section id="skills" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My <span className="text-gradient">Technical Expertise</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Bridging the gap between advanced AI models and production-ready applications.</p>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {skills.map((skill, index) => (
                        <RevealOnScroll key={index} delay={index * 100}>
                            <div className="h-full glass p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 relative overflow-hidden flex flex-col justify-between">
                                {/* Hover Shine Effect */}
                                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-shine" />

                                <div className="relative z-10">
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6 shadow-lg shadow-primary/20`}>
                                        <skill.icon className={`w-6 h-6 ${skill.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{skill.category}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>

                <RevealOnScroll>
                    <div className="mt-20 pt-10 border-t border-white/5">
                        <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-widest">Technologies</p>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            <span className="flex items-center gap-2 text-xl font-bold text-gray-400 hover:text-white transition-colors"><Code2 className="w-5 h-5" /> Python</span>
                            <span className="flex items-center gap-2 text-xl font-bold text-gray-400 hover:text-white transition-colors"><Layout className="w-5 h-5" /> Node.js</span>
                            <span className="flex items-center gap-2 text-xl font-bold text-gray-400 hover:text-white transition-colors"><Database className="w-5 h-5" /> Java</span>
                            <span className="flex items-center gap-2 text-xl font-bold text-gray-400 hover:text-white transition-colors"><Rocket className="w-5 h-5" /> FastAPI</span>
                            <span className="flex items-center gap-2 text-xl font-bold text-gray-400 hover:text-white transition-colors"><Brain className="w-5 h-5" /> LangChain</span>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
