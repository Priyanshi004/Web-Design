import React from 'react';
import { ArrowRight, Users } from 'lucide-react';

const communities = [
  "General Employee Engagement",
  "Sales & Marketing",
  "Services & Support",
  "Supply Chain",
  "Legal",
  "HR",
  "Finance & Audit",
  "Product Development"
];

const CommunityList: React.FC = () => {
  return (
    <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50 hover:border-hub-accent/30 transition-all">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 p-6 flex items-center border-b border-slate-600">
        <Users className="w-6 h-6 text-hub-accent mr-3" />
        <h2 className="text-xl font-bold text-white tracking-wide">Connected Communities</h2>
      </div>
      
      <ul className="divide-y divide-slate-700/30">
        {communities.map((item) => (
          <li 
            key={item} 
            className="px-6 py-4 hover:bg-slate-700/20 cursor-pointer flex justify-between items-center transition-all group"
          >
            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
              AI in {item}
            </span>
            <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-hub-accent group-hover:translate-x-1 transition-all" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityList;