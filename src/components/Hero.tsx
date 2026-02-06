import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Video, BookOpen, Briefcase, Lightbulb, Database, MessageSquare, List, Target } from "lucide-react";

const Hero: React.FC = () => {
    const [showTools, setShowTools] = useState(false);

    const tools = [
        { name: "Gemini App", icon: <Sparkles className="w-5 h-5" />, url: "https://gemini.google.com" },
        { name: "Google Vids", icon: <Video className="w-5 h-5" />, url: "https://workspace.google.com/products/vids/" },
        { name: "NotebookLM", icon: <BookOpen className="w-5 h-5" />, url: "https://notebooklm.google.com" },
        { name: "Workspace Studio", icon: <Briefcase className="w-5 h-5" />, url: "https://workspace.google.com" },
        { name: "AI in MSI Operations", icon: <Lightbulb className="w-5 h-5" />, url: "https://batchat.motorolasolutions.com/home/ls/community/generative-ai-enablement" },
        { name: "Gemini Knowledge Base (GKB)", icon: <Database className="w-5 h-5" />, url: "https://batchat.motorolasolutions.com/home/gemini-knowledge-base-gkb" },
        { name: "Gemini Support Pages in BatChat", icon: <MessageSquare className="w-5 h-5" />, url: "https://batchat.motorolasolutions.com/home/ls/content/4761540631509933/gemini-batchat-support-pages" },
        { name: "MSI AI Tools List", icon: <List className="w-5 h-5" />, url: "https://docs.google.com/spreadsheets/d/1WbKF08kwUI2yEYbN2zxB1VNzj4tVLKSFHcgZYGNYIh8/edit?gid=2051282919#gid=2051282919" },
        { name: "MSI GenAI Portal", icon: <Target className="w-5 h-5" />, url: "https://msi-genai.stage.commandcentral.com/login" },
    ];

    return (
        <header className="relative py-24 px-12 bg-gradient-to-br from-slate-900 via-[#0f172a] to-blue-900 border-b border-slate-800 overflow-hidden">
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
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {tools.map((tool, index) => (
                                    <motion.a
                                        key={tool.name}
                                        href={tool.url !== "#" ? tool.url : undefined}
                                        target={tool.url !== "#" ? "_blank" : undefined}
                                        rel={tool.url !== "#" ? "noopener noreferrer" : undefined}
                                        onClick={(e) => tool.url === "#" && e.preventDefault()}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="flex flex-col items-center gap-4 cursor-pointer group no-underline"
                                    >
                                        <div className="w-28 h-28 rounded-2xl bg-slate-800/40 backdrop-blur-sm border-2 border-slate-700/50 hover:border-hub-accent/70 flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-hub-accent/20 transition-all group-hover:scale-110">
                                            <div className="text-hub-accent group-hover:scale-125 transition-transform">
                                                {tool.icon}
                                            </div>
                                        </div>
                                        <span className="text-sm font-semibold text-white text-center max-w-[120px] leading-tight">{tool.name}</span>
                                    </motion.a>
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