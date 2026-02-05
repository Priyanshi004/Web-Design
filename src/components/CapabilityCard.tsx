import React from "react";

interface Props{
    title:string;
    description:string;
    icon:string;
}

const CapabilityCard: React.FC<Props> = ({title,description,icon})=>(
    <div className="relative p-8 border border-slate-700 rounded-2xl bg-gradient-to-br from-slate-800/30 via-slate-800/20 to-transparent hover:from-slate-800/60 hover:via-slate-800/40 hover:to-blue-900/20 hover:border-hub-accent/50 transition-all group animate-fade-in-up overflow-hidden">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-hub-accent/0 via-hub-accent/5 to-hub-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">{icon}</div>
            <h3 className="font-bold text-lg uppercase mb-3 tracking-wider text-white group-hover:text-hub-accent transition-colors">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{description}</p>
        </div>
    </div>
);
export default CapabilityCard;