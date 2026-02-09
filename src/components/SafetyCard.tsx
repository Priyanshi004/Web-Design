import React from "react";
import { AppService } from "../configuration/services/appService.js";

const SafetyCard: React.FC=()=>(
    <div 
        onClick={() => AppService.navigateToApp('safety-training')}
        className="relative bg-gradient-to-br from-[#0b1221] via-slate-900/50 to-purple-900/20 border border-hub-accent/20 hover:border-hub-accent/40 p-8 rounded-2xl shadow-2xl hover:shadow-hub-accent/20 transition-all group animate-fade-in-up overflow-hidden cursor-pointer"
    >
        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="relative">
            <div className="flex justify-between items-center mb-6">
                <span className="text-hub-accent text-xs font-black tracking-widest uppercase bg-hub-accent/10 px-3 py-1 rounded-full">New to AI Essentials</span>
                <span className="bg-gradient-to-r from-slate-800 to-slate-700 text-[10px] px-3 py-1.5 rounded-full text-slate-300 uppercase font-bold border border-slate-600">Assigned</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 group-hover:from-hub-accent group-hover:to-purple-400 transition-all">
                Safe And Smart: The Rules Of The AI
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                Essential hygiene for the AI era. We cover Data Privacy, Security, and Ethics.
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-hub-accent font-semibold italic"> ("Your chats do not train the model") </span>,
                retention policies (18 months), and organization tips.
            </p>
        </div>
    </div>
);
export default SafetyCard;