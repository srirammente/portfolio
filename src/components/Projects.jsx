import { Github, ExternalLink } from "lucide-react";
import RevealOnScroll from "./ui/RevealOnScroll";

export default function Projects() {
    const projects = [
        {
            title: "MCP CineRAG",
            category: "AI-Driven Backend",
            description: "Full-stack AI movie discovery platform using React (frontend), Node.js orchestration, and a FastAPI-based RAG microservice.",
            highlights: [
                "Two-stage retrieval pipeline (bi-encoder semantic search → cross-encoder reranking) to improve recommendation relevance",
                "Offloaded reranking to async workers; cached results in Redis, reducing repeated-query latency",
                "LangGraph-based agent workflows for multi-step reasoning (search → reviews → sentiment → ranking)",
                "Evaluated retrieval with Recall@K and MRR; profiled RAG latency across retrieval, reranking, and generation",
                "MCP-compatible tools with OpenAPI-documented endpoints for safe LLM-to-backend orchestration"
            ],
            tech: ["React", "Node.js", "FastAPI", "LangGraph", "Redis", "RAG", "MCP"],
            color: "from-purple-500/20 to-pink-500/20",
            github: "https://github.com/srirammente/MCP-LLM-Streaming-Platform",
            live: null
        },
        {
            title: "Gen Z Typing Assistant",
            category: "ML / NLP",
            description: "AI backend combining PEFT (LoRA) fine-tuned language models with RAG to balance tone adaptation and factual grounding.",
            highlights: [
                "RAPTOR-inspired hierarchical retrieval for multi-level slang understanding (term, theme, tone)",
                "Multi-stage retrieval with sentence-window expansion and cross-encoder reranking",
                "LangGraph agent workflows to validate responses, retry uncertain generations, and self-correct",
                "FastAPI inference backend with async requests, SSE streaming, and concurrency-safe execution",
                "Confidence scoring and output validation to reduce incorrect slang interpretations",
                "ETL pipeline to embed, cluster, and index slang datasets into a vector database"
            ],
            tech: ["Python", "PEFT/LoRA", "FastAPI", "LangGraph", "RAG", "Vector DB"],
            color: "from-yellow-500/20 to-orange-500/20",
            github: null,
            live: null
        },
        {
            title: "Summarized Email Notifier",
            category: "Full Stack AI",
            description: "Multi-user email intelligence backend using FastAPI with Google OAuth 2.0 (Web Auth Flow) and JWT-based session authentication.",
            highlights: [
                "Event-driven pipeline: Gmail push notifications, Redis queues, background workers for async summarization and classification",
                "LLM-based summarization and classification with Pydantic schemas for meetings, deadlines, action items",
                "Semantic caching and deduplication, reducing redundant AI calls by ~35–40% and improving latency",
                "Retry logic, timeouts, and dead-letter queues for reliability under transient failures",
                "Real-time updates via WebSockets for instant delivery of summarized emails",
                "~1.5s average and ~2.1s p95 processing latency under load; Dockerized backend with CI for testing and deployment"
            ],
            tech: ["FastAPI", "Google OAuth 2.0", "JWT", "Redis", "WebSockets", "Docker", "Gmail API"],
            color: "from-blue-500/20 to-purple-500/20",
            github: "https://github.com/srirammente/email-summarizer",
            live: null
        },
        {
            title: "Email Agent",
            category: "Full Stack AI",
            description: "Prompt-driven email summarizer with a React (Vite) frontend and FastAPI backend. Monorepo configured for frontend deployment on Netlify and backend on Render.",
            highlights: [
                "Full-stack monorepo: React (Vite) frontend and FastAPI backend with Netlify + Render deployment",
                "Inbox fetch, mock inbox loading, and email detail view with POST /emails/{id}/process for summarization",
                "Agent chat (POST /agent/chat) and Prompt Brain (GET/POST /prompts) for customizable LLM behavior",
                "Configurable prompts via env (SUMMARY_PROMPT, CATEGORY_PROMPT, ACTION_ITEMS_PROMPT) and runtime API",
                "Draft management via /drafts endpoints; CORS and FRONTEND_ORIGIN for secure cross-origin requests",
                "Gemini API integration for summarization, categorization, and action-item extraction; SPA redirects on Netlify"
            ],
            tech: ["React", "Vite", "FastAPI", "Gemini API", "Netlify", "Render"],
            color: "from-green-500/20 to-blue-500/20",
            github: "https://github.com/srirammente/email-agent",
            live: "https://email-agent-ovqj.netlify.app/"
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
