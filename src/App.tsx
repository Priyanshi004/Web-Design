import React from 'react';
import Hero from './components/Hero.tsx';
import CapabilityCard from './components/CapabilityCard.tsx';
import CommunityList from './components/CommunityList.tsx';
import SafetyCard from './components/SafetyCard.tsx';
import { AppService } from './configuration/services/appService.js';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      <main className="flex-1">
        {/* Hero: The International System Integration Hub */}
        <Hero />
        
        {/* PMO Portal - Standalone Section */}
        <section className="relative py-16 px-12 bg-[#0f172a] border-b border-slate-800 overflow-hidden">
          {/* Background decorative pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 border border-hub-accent rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 border border-purple-500 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-blue-500 rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div 
              onClick={() => AppService.navigateToApp('pmo-portal')}
              className="relative bg-gradient-to-br from-slate-800/50 via-slate-800/30 to-blue-900/30 backdrop-blur-sm border border-slate-700/50 hover:border-hub-accent/50 rounded-2xl p-12 shadow-2xl hover:shadow-hub-accent/30 transition-all hover:scale-[1.01] cursor-pointer group overflow-hidden"
            >
              {/* Animated background shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-hub-accent/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative">
                {/* Header with icon and title */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-xl group-hover:shadow-blue-500/50 transition-all group-hover:scale-110 flex-shrink-0">
                    <svg className="w-20 h-20 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/>
                    </svg>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-hub-accent mb-3">
                      International SI PMO Portal
                    </h3>
                    <p className="text-slate-300 text-lg max-w-2xl">
                      Your central hub for project management, resource allocation, and strategic planning across all international system integration initiatives.
                    </p>
                  </div>
                </div>

                {/* Key Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/30 group-hover:border-hub-accent/20 transition-all">
                    <div className="text-hub-accent text-3xl mb-3">📊</div>
                    <h4 className="font-bold text-white mb-2">Project Tracking</h4>
                    <p className="text-slate-400 text-sm">Real-time visibility into all active projects</p>
                  </div>
                  
                  <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/30 group-hover:border-hub-accent/20 transition-all">
                    <div className="text-purple-400 text-3xl mb-3">👥</div>
                    <h4 className="font-bold text-white mb-2">Resource Management</h4>
                    <p className="text-slate-400 text-sm">Optimize team allocation and capacity</p>
                  </div>
                  
                  <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/30 group-hover:border-hub-accent/20 transition-all">
                    <div className="text-blue-400 text-3xl mb-3">📈</div>
                    <h4 className="font-bold text-white mb-2">Analytics & Reports</h4>
                    <p className="text-slate-400 text-sm">Data-driven insights for better decisions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="max-w-7xl mx-auto p-12 space-y-20">
          {/* Section: AI-Powered Project Management */}
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-white uppercase">
                AI-Powered Project Management 
              </h2>
              <p className="text-hub-accent font-semibold tracking-widest text-sm mt-1">
                OPTIMIZE WORKFLOWS & PREDICT SUCCESS 
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <CapabilityCard 
                title="Intelligent Planning" 
                description="Automatized Project Management Plan creation " 
                icon="🧠"
                appId="ai-planning" 
              />
              <CapabilityCard 
                title="Predictive Analytics" 
                description="Early risk detection & management plan adjustment " 
                icon="🔍"
                appId="predictive-analytics" 
              />
              <CapabilityCard 
                title="Smart Collaboration" 
                description="AI-driven communication & insights " 
                icon="🎧"
                appId="smart-collaboration" 
              />
            </div>
          </section>

          {/* Section: Communities and Safety Rules */}
          <section className="grid lg:grid-cols-2 gap-16 items-start pb-20">
             <CommunityList />
             <SafetyCard />
          </section>
        </div>

        {/* Footer: Strategic Objectives & Values */}
        <footer className="bg-slate-900/50 py-10 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="bg-blue-600 px-6 py-3 font-bold text-sm rounded text-center">
              SI STRATEGIC OBJECTIVES 
            </div>
            <div className="bg-blue-600 px-6 py-3 font-bold text-sm rounded text-center">
              SIX CORE VALUES OF MOTOROLA SOLUTIONS EMPLOYEES 
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;