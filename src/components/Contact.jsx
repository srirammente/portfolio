import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import RevealOnScroll from "./ui/RevealOnScroll";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <RevealOnScroll>
                    <div className="glass rounded-3xl p-8 md:p-12 border border-white/10 shadow-purple-500/5 flex flex-col md:flex-row gap-12 group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">

                        {/* Contact Info */}
                        <div className="flex-1 space-y-8">
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-4">Let's Create <br /><span className="text-gradient">Something Amazing</span></h2>
                                <p className="text-gray-400 leading-relaxed">
                                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's build the future of AI together.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <a href="mailto:srirammente@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-all group p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                                        <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Mail Me</p>
                                        <span className="font-medium group-hover:text-primary transition-colors">srirammente@gmail.com</span>
                                    </div>
                                </a>

                                <a href="tel:+919966369489" className="flex items-center gap-4 text-gray-300 hover:text-white transition-all group p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                                        <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Call Me</p>
                                        <span className="font-medium group-hover:text-primary transition-colors">+91 9966369489</span>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 text-gray-300 p-4">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Location</p>
                                        <span className="font-medium">Hyderabad, Telangana</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <a href="https://github.com/srirammente" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:scale-110 transition-transform hover:bg-white/10 text-white border border-white/5 hover:border-primary/50 group/icon">
                                    <Github className="w-5 h-5 group-hover/icon:text-primary transition-colors" />
                                </a>
                                <a href="#" className="p-3 glass rounded-full hover:scale-110 transition-transform hover:bg-white/10 text-white border border-white/5 hover:border-primary/50 group/icon">
                                    <Linkedin className="w-5 h-5 group-hover/icon:text-primary transition-colors" />
                                </a>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="flex-1 bg-black/20 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                                    <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600" placeholder="Tell me about your project..."></textarea>
                                </div>
                                <button type="button" className="w-full py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-bold hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/25 active:scale-95 text-lg">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
