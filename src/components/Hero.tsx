import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Video, BookOpen, Briefcase, Lightbulb, Database, MessageSquare, List, Target } from "lucide-react";
import { AppService } from "../configuration/services/appService.js";

const Hero: React.FC = () => {
    const [showTools, setShowTools] = useState(false);

    // Map of app IDs to their Lucide icons
    // Map of app IDs to their Lucide icons with Brand Colors
    const iconMap: Record<string, JSX.Element> = {
        'gemini': <Sparkles className="w-10 h-10 stroke-[url(#gemini-gradient)]" strokeWidth={2.5} />,
        'googlevids': <Video className="w-10 h-10 text-[#00A496]" strokeWidth={2.5} />,
        'notebooklm': <BookOpen className="w-10 h-10 text-[#4285F4]" strokeWidth={2.5} />,
        'workspace-studio': <Briefcase className="w-10 h-10 text-[#FBBC04]" strokeWidth={2.5} />,
        'ai-msi-operations': <Lightbulb className="w-10 h-10 text-hub-accent" strokeWidth={2.5} />,
        'gemini-knowledge-base': <Database className="w-10 h-10 text-[#F48FB1]" strokeWidth={2.5} />,
        'gemini-support': <MessageSquare className="w-10 h-10 text-[#80DEEA]" strokeWidth={2.5} />,
        'msi-ai-tools-list': <List className="w-10 h-10 text-hub-accent" strokeWidth={2.5} />,
        'msi-genai-portal': <Target className="w-10 h-10 text-hub-accent" strokeWidth={2.5} />,
    };

    // Get GenAI tools from centralized config
    const genaiTools = AppService.getAllApps().filter(app => 
        ['gemini', 'googlevids', 'notebooklm', 'workspace-studio', 
         'ai-msi-operations', 'gemini-knowledge-base', 'gemini-support', 
         'msi-ai-tools-list', 'msi-genai-portal'].includes(app.id)
    );

    return (
        <header className="relative py-24 px-12 bg-gradient-to-br from-slate-900 via-[#0f172a] to-blue-900 border-b border-slate-800 overflow-hidden">
            <svg width="0" height="0" className="absolute">
                <defs>
                    <linearGradient id="gemini-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4285F4" />
                        <stop offset="50%" stopColor="#F48FB1" />
                        <stop offset="100%" stopColor="#80DEEA" />
                    </linearGradient>
                </defs>
            </svg>
            {/* Animated background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-hub-accent/10 via-purple-500/10 to-pink-500/10 animate-pulse opacity-50"></div>
            
            {/* Floating orbs for visual interest */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-hub-accent/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight animate-fade-in">
                    The AI-Powered International <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-hub-accent via-blue-400 to-purple-400 animate-gradient">
                        System Integration Hub
                    </span>
                </h1>
                <p className="text-xl text-slate-400 italic mb-10 max-w-2xl">
                    "Our Projects are faster, smarter, and more successful with AI."
                </p>
                <button 
                    onClick={() => setShowTools(!showTools)}
                    className="px-10 py-4 border-2 border-hub-accent rounded-full text-hub-accent font-bold hover:bg-hub-accent hover:text-slate-900 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] animate-pulse-slow"
                >
                    Start Your AI Journey
                </button>

            <AnimatePresence>
                {showTools && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-8 overflow-hidden"
                    >
                        <div className="space-y-8">
                            <h3 className="text-sm font-bold text-hub-accent uppercase tracking-widest flex items-center gap-2">
                                <span className="w-1 h-4 bg-hub-accent rounded-full"></span>
                                GENAI @MSI
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                                {genaiTools.map((tool, index) => (
                                    <motion.div
                                        key={tool.id}
                                        onClick={() => AppService.navigateToApp(tool.id)}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="flex flex-col items-center gap-4 cursor-pointer group no-underline"
                                    >
                                        <div className="w-40 h-40 rounded-3xl bg-slate-800/40 backdrop-blur-sm border-2 border-slate-700/50 hover:border-hub-accent/70 flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-hub-accent/20 transition-all group-hover:scale-110">
                                            <div className="text-hub-accent group-hover:scale-125 transition-transform">
                                                {iconMap[tool.id] || <span className="text-5xl">{tool.icon}</span>}
                                            </div>
                                        </div>
                                        <span className="text-lg font-bold text-white text-center max-w-[160px] leading-tight drop-shadow-lg">{tool.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            </div>
        </header>
    );
};
export default Hero;