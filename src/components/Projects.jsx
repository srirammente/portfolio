import { Github, ExternalLink } from "lucide-react";
import RevealOnScroll from "./ui/RevealOnScroll";

export default function Projects() {
    const projects = [
        {
            title: "Email Summarizer",
            category: "Full Stack AI",
            description: "Built a full-stack application to retrieve, summarize, and analyze emails in real-time using Python (FastAPI) and React.",
            highlights: [
                "Integrated Gmail API with OAuth 2.0 for secure access",
                "Employed Pegasus from Hugging Face for efficient local summarization",
                "Event extraction module for key dates and times",
                "Improved email processing efficiency by ~60% using fully local Pegasus summarizer"
            ],
            tech: ["Python", "FastAPI", "React", "Material UI", "Pegasus", "Firebase"],
            color: "from-blue-500/20 to-purple-500/20",
            github: "https://github.com/srirammente/email-summarizer",
            live: null
        },
        {
            title: "MCP LLM Streaming Platform",
            category: "GenAI Web App",
            description: "Developed a Movie Streaming Platform integrating Node.js backend with Model Context Protocol (MCP), enabling Claude Desktop to suggest personalized movie recommendations.",
            highlights: [
                "Reduced user search time by ~40% using contextual prompt-driven movie retrieval",
                "Built frontend using React and Vite with movie display, search, and detailed views",
                "Exposed REST API endpoints and MCP tools for Claude",
                "Engineered backend with Node.js, Express, and SQLite"
            ],
            tech: ["Node.js", "Express", "SQLite", "React", "Vite", "MCP", "TMDB API"],
            color: "from-purple-500/20 to-pink-500/20",
            github: "https://github.com/srirammente/MCP-LLM-Streaming-Platform",
            live: null
        },
        {
            title: "Email Agent",
            category: "Full Stack AI",
            description: "Email agent for inbox management and direct draft redirect. Deployed with Netlify frontend and Render backend, featuring prompt brain for customizable AI behavior.",
            highlights: [
                "Deployed on Netlify (frontend) and Render (backend)",
                "AI-powered chat agent for email interaction",
                "Prompt brain for customizable AI responses",
                "Direct draft creation and management"
            ],
            tech: ["React", "FastAPI", "Netlify", "Render", "MongoDB", "Gemini API"],
            color: "from-green-500/20 to-blue-500/20",
            github: "https://github.com/srirammente/email-agent",
            live: "https://email-agent-ovqj.netlify.app/"
        },
        {
            title: "Gen Z Typing Assistant",
            category: "ML / NLP",
            description: "Fine-tuned a distilled Causal Language Model (DistilGPT2) using Low-Rank Adaptation (LoRA) to create a low-latency slang prediction engine.",
            highlights: [
                "Achieved perplexity = 2.17, ~88% reduction vs GPT-2",
                "Improved predictive accuracy to 80.1%, surpassing GPT-2 (63.8%)",
                "Curated custom 15,000+ phrase Gen Z corpus from Reddit/X",
                "Built real-time interactive demo using Streamlit"
            ],
            tech: ["Python", "PyTorch", "Hugging Face", "PEFT/LoRA", "Streamlit"],
            color: "from-yellow-500/20 to-orange-500/20",
            github: null,
            live: null
        },
    ];

    return (
        <section id="projects" className="py-24 bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured <span className="text-gradient">Projects</span></h2>
                            <p className="text-gray-400">Showcasing innovation in Generative AI and Web Development.</p>
                        </div>
                        <a href="https://github.com/srirammente" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors mt-4 md:mt-0">
                            View Github <Github className="w-4 h-4" />
                        </a>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <RevealOnScroll key={index} delay={index * 100}>
                            <div className="group relative rounded-2xl overflow-hidden glass-card hover:border-primary/50 transition-all duration-300 h-full flex flex-col hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]">
                                {/* Colored Glow on Hover */}
                                <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>

                                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/30"></div>
                                    <div className="w-full h-full bg-grid-pattern opacity-30 transform scale-100 group-hover:scale-110 transition-transform duration-700"></div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="px-3 py-1 bg-black/60 text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/10 backdrop-blur-md">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Title Overlay */}
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-glow transition-all">{project.title}</h3>
                                    </div>
                                </div>

                                <div className="p-6 relative z-20 bg-[#0a0a0a] flex-grow flex flex-col justify-between border-t border-white/5">
                                    <div>
                                        <p className="text-gray-400 text-sm mb-6 leading-relaxed border-b border-white/5 pb-4">{project.description}</p>

                                        {project.highlights && (
                                            <div className="mb-6 space-y-3">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="h-px flex-grow bg-white/10"></div>
                                                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Highlights</span>
                                                    <div className="h-px flex-grow bg-white/10"></div>
                                                </div>
                                                <ul className="space-y-2 pl-2">
                                                    {project.highlights.map((highlight, i) => (
                                                        <li key={i} className="text-xs text-gray-400 flex items-start gap-2 group/item hover:text-gray-300 transition-colors">
                                                            <span className="text-primary mt-0.5 transform group-hover/item:scale-150 transition-transform flex-shrink-0">▹</span>
                                                            <span className="flex-1 leading-relaxed">{highlight}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-5">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="text-xs font-medium text-blue-200 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full hover:bg-blue-500/20 transition-colors cursor-default">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-4">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-sm font-bold text-white bg-white/5 hover:bg-white/10 py-3 rounded-xl transition-all flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 hover:scale-[1.02]">
                                                    <Github className="w-4 h-4" /> Code
                                                </a>
                                            )}
                                            {project.live && (
                                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-sm font-bold text-white bg-gradient-to-r from-primary to-accent hover:opacity-90 py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] hover:shadow-primary/40">
                                                    <ExternalLink className="w-4 h-4" /> Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>

                <RevealOnScroll>
                    <div className="mt-8 text-center md:hidden">
                        <a href="https://github.com/srirammente" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors">
                            View Github <Github className="w-4 h-4" />
                        </a>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
