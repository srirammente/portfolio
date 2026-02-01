import RevealOnScroll from "./ui/RevealOnScroll";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        Education <span className="text-gradient">& Certifications</span>
                    </h2>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Education Column */}
                    <div className="space-y-8">
                        <RevealOnScroll>
                            <div className="flex items-center gap-3 mb-6">
                                <GraduationCap className="w-6 h-6 text-primary" />
                                <h3 className="text-2xl font-semibold text-white">Education</h3>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={100}>
                            <div className="glass p-6 rounded-xl border border-white/5 relative group hover:bg-white/5 transition-all">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-transparent rounded-l-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-xl font-bold text-white">B.Tech in Computer Science & Engineering</h4>
                                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">2022 - Present</span>
                                </div>
                                <p className="text-gray-300 font-medium">VIT-AP Amaravathi, Andhra Pradesh</p>
                                <p className="text-gray-500 text-sm mt-1">CGPA: 8.23 / 10</p>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={200}>
                            <div className="glass p-6 rounded-xl border border-white/5 relative group hover:bg-white/5 transition-all">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/20 rounded-l-xl opacity-50 group-hover:opacity-100 group-hover:bg-primary/50 transition-all"></div>
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-xl font-bold text-white">Intermediate (MPC)</h4>
                                    <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">2020 - 2022</span>
                                </div>
                                <p className="text-gray-300 font-medium">Fiitjee Junior College, Hyderabad</p>
                                <p className="text-gray-500 text-sm mt-1">Percentage: 92.7%</p>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={300}>
                            <div className="glass p-6 rounded-xl border border-white/5 relative group hover:bg-white/5 transition-all">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/20 rounded-l-xl opacity-50 group-hover:opacity-100 group-hover:bg-primary/50 transition-all"></div>
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-xl font-bold text-white">Class 10</h4>
                                    <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">2020</span>
                                </div>
                                <p className="text-gray-300 font-medium">DAV Public School, Hyderabad</p>
                                <p className="text-gray-500 text-sm mt-1">Percentage: 91.6%</p>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Certifications & Achievements */}
                    <div className="space-y-8">
                        <RevealOnScroll>
                            <div className="flex items-center gap-3 mb-6">
                                <Award className="w-6 h-6 text-accent" />
                                <h3 className="text-2xl font-semibold text-white">Certifications</h3>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={100}>
                            <a href="https://drive.google.com/file/d/1hViIICZYOoRNQWCxEV-A1AYI_poMkZlT/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="block glass p-6 rounded-xl border border-white/5 hover:border-accent/30 hover:bg-white/5 transition-all group">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors">Microsoft Certified Azure AI Fundamentals</h4>
                                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-accent transition-colors" />
                                </div>
                                <p className="text-gray-400 text-sm mt-2">Validated knowledge of machine learning and AI workloads on Azure.</p>
                            </a>
                        </RevealOnScroll>

                        <RevealOnScroll delay={200}>
                            <a href="https://drive.google.com/file/d/1sWZOdQy2Wi6B6IMVvLDAnFXv09HFqPMM/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="block glass p-6 rounded-xl border border-white/5 hover:border-accent/30 hover:bg-white/5 transition-all group">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors">Oracle Cloud Infrastructure 2025 GenAI Professional</h4>
                                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-accent transition-colors" />
                                </div>
                                <p className="text-gray-400 text-sm mt-2">Certified proficiency in building and deploying Generative AI solutions on OCI.</p>
                            </a>
                        </RevealOnScroll>

                    </div>
                </div>
            </div>
        </section>
    );
}
