import { ExternalLink, Trophy, Calendar, Zap, Award } from "lucide-react";
import RevealOnScroll from "./ui/RevealOnScroll";

export default function LeetCode() {
    return (
        <section id="leetcode" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Competitive <span className="text-gradient">Programming</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Consistent problem solving and algorithm optimization on LeetCode.
                        </p>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                    <div className="glass rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5 blur-3xl -z-10"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

                            {/* Profile Info */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-[#2c2c2c] rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-inner border border-white/5">
                                        <span className="text-[#ffa116]">LC</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Likhith Sriram</h3>
                                        <p className="text-gray-400 text-sm">Rank 18,102 • Top 18.7%</p>
                                    </div>
                                </div>

                                <a
                                    href="https://leetcode.com/u/srirammente/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ffa116]/10 text-[#ffa116] border border-[#ffa116]/20 hover:bg-[#ffa116]/20 transition-colors font-medium w-full justify-center lg:justify-start"
                                >
                                    View Profile <ExternalLink className="w-4 h-4" />
                                </a>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                        <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wider mb-1">
                                            <Trophy className="w-3 h-3 text-yellow-500" /> Contest Rating
                                        </div>
                                        <div className="text-2xl font-bold text-white">1,637</div>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                        <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wider mb-1">
                                            <Award className="w-3 h-3 text-purple-500" /> Badges
                                        </div>
                                        <div className="text-2xl font-bold text-white">21</div>
                                    </div>
                                </div>
                            </div>

                            {/* Solved Stats */}
                            <div className="bg-dark/50 p-6 rounded-2xl border border-white/5">
                                <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-primary" /> Problem Solving
                                </h4>

                                <div className="flex items-center justify-center mb-8 relative">
                                    {/* Circle Diagram Placeholder - using pure CSS or SVG would be complex, simplified numeric display */}
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-white">1,110</div>
                                        <div className="text-sm text-gray-500">Solved</div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-400">Easy</span>
                                        <span className="text-white font-medium">325</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                                        <div className="bg-[#00b8a3] h-full rounded-full" style={{ width: `${(325 / 1110) * 100}%` }}></div>
                                    </div>

                                    <div className="flex items-center justify-between text-sm pt-2">
                                        <span className="text-gray-400">Medium</span>
                                        <span className="text-white font-medium">651</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                                        <div className="bg-[#ffc01e] h-full rounded-full" style={{ width: `${(651 / 1110) * 100}%` }}></div>
                                    </div>

                                    <div className="flex items-center justify-between text-sm pt-2">
                                        <span className="text-gray-400">Hard</span>
                                        <span className="text-white font-medium">134</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                                        <div className="bg-[#ef4743] h-full rounded-full" style={{ width: `${(134 / 1110) * 100}%` }}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Activity Stats */}
                            <div className="space-y-6">
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">1,579</div>
                                        <div className="text-sm text-gray-400">Submissions (Past Year)</div>
                                    </div>
                                </div>

                                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">139 Days</div>
                                        <div className="text-sm text-gray-400">Max Streak</div>
                                    </div>
                                </div>

                                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                    <div className="text-sm text-gray-400 mb-2">Most Recent Badge</div>
                                    <div className="text-white font-bold flex items-center gap-2">
                                        <Award className="w-5 h-5 text-yellow-500" /> 500 Days Badge
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
