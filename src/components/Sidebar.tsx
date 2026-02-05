import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Sidebar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    
    const tools = [
        "Gemini App",
        "Google Vids",
        "NotebookLM",
        "Workspace Studio",
        "AI in MSI Operations",
        "Gemini Knowledge Base (GKB)",
        "Gemini Support Pages in BatChat",
        "MSI AI Tools List",
        "MSI GenAI Portal",
    ];

    return (
        <motion.aside
            initial={false}
            animate={{
                width: isCollapsed ? "4rem" : "16rem"
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut"
            }}
            className="bg-slate-100 text-slate-800 hidden lg:flex flex-col border-r border-slate-300 h-screen sticky top-0 overflow-hidden"
        >
            {/* Header with toggle button */}
            <div className="p-6 flex items-center justify-between border-b border-slate-300">
                <motion.div
                    animate={{
                        opacity: isCollapsed ? 0 : 1,
                        width: isCollapsed ? 0 : "auto"
                    }}
                    transition={{ duration: 0.2 }}
                    className="font-bold text-xs text-slate-500 uppercase tracking-widest overflow-hidden whitespace-nowrap"
                >
                    Gen-AI @MSI
                </motion.div>
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-1.5 hover:bg-slate-200 rounded-lg transition-colors flex-shrink-0"
                    aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                    {isCollapsed ? (
                        <ChevronRight className="w-4 h-4 text-slate-600" />
                    ) : (
                        <ChevronLeft className="w-4 h-4 text-slate-600" />
                    )}
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto">
                {tools.map((tool) => (
                    <div
                        key={tool}
                        className="px-6 py-4 hover:bg-slate-200 cursor-pointer border-b border-slate-200 text-sm font-medium transition-colors flex items-center"
                        title={isCollapsed ? tool : undefined}
                    >
                        <motion.span
                            animate={{
                                opacity: isCollapsed ? 0 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden whitespace-nowrap"
                        >
                            {tool}
                        </motion.span>
                        {isCollapsed && (
                            <span className="text-xs font-bold">
                                {tool.substring(0, 2).toUpperCase()}
                            </span>
                        )}
                    </div>
                ))}
            </nav>
        </motion.aside>
    );
};

export default Sidebar;