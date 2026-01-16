export default function Footer() {
    return (
        <footer className="relative py-8 bg-black/40 border-t border-white/5 overflow-hidden">
            {/* Gradient Top Border */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
                    © 2026 <span className="text-white font-medium">Likhith Sriram Mente</span>. All rights reserved.
                </p>
                <p className="text-gray-400 text-sm flex items-center gap-2">
                    Made with <span className="text-red-500 animate-pulse">❤️</span> and <span className="text-primary font-medium">React</span>
                </p>
            </div>
        </footer>
    );
}
