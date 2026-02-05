import React, { useState, useEffect } from 'react';
import { Brain, TrendingUp, Users, ArrowRight, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Intelligent Planning",
      description: "Automated Project Management Plan creation"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Predictive Analytics",
      description: "Early risk detection & Management Plan optimization"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Smart Collaboration",
      description: "AI-driven communication & insights"
    }
  ];

  const tools = [
    { name: "Gemini App", icon: "✦" },
    { name: "Google Vids", icon: "▶" },
    { name: "NotebookLM", icon: "📡" },
    { name: "Workspace Studio", icon: "✈" },
    { name: "AI in MSI Operations", icon: "💡" },
    { name: "Gemini Knowledge Base (GKB)", icon: "✦" },
    { name: "Gemini Support Pages in BatChat", icon: "🦇" },
    { name: "MSI AI Tools List", icon: "📑" },
    { name: "MSI GenAI Portal", icon: "🎯" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-teal-400/10"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `-${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-slate-950" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                MSI AI Hub
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-300 hover:text-teal-300 transition-colors duration-200">Features</a>
              <a href="#tools" className="text-slate-300 hover:text-teal-300 transition-colors duration-200">Tools</a>
              <a href="#training" className="text-slate-300 hover:text-teal-300 transition-colors duration-200">Training</a>
              <button className="bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 font-semibold">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-teal-300 hover:text-teal-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/98 backdrop-blur-xl border-t border-teal-500/20 py-6 px-6 space-y-4 animate-slideDown">
              <a href="#features" className="block text-slate-300 hover:text-teal-300 transition-colors">Features</a>
              <a href="#tools" className="block text-slate-300 hover:text-teal-300 transition-colors">Tools</a>
              <a href="#training" className="block text-slate-300 hover:text-teal-300 transition-colors">Training</a>
              <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 rounded-full font-semibold">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fadeInLeft">
              <div className="inline-block">
                <span className="text-teal-300 text-sm font-semibold tracking-wider uppercase px-4 py-2 bg-teal-500/10 rounded-full border border-teal-500/30">
                  The AI-Powered International System Integration Hub
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-white via-teal-100 to-cyan-200 bg-clip-text text-transparent">
                  AI-POWERED
                </span>
                <br />
                <span className="text-white">PROJECT</span>
                <br />
                <span className="text-white">MANAGEMENT</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 font-light max-w-xl">
                Optimize Workflows & Predict Success
              </p>

              <button className="group bg-gradient-to-r from-teal-500 to-cyan-500 px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <span>Start Your AI Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="pt-8 border-t border-slate-700/50">
                <p className="text-slate-400 italic text-lg">
                  "Our projects are faster, smarter, and more successful with AI."
                </p>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative animate-fadeInRight">
              <div className="relative">
                {/* Central glowing orb */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse" />
                </div>
                
                {/* 3D Isometric grid illustration */}
                <div className="relative z-10 transform perspective-1000 rotate-y-12">
                  <svg viewBox="0 0 400 400" className="w-full h-auto drop-shadow-2xl">
                    {/* Grid lines */}
                    {[...Array(8)].map((_, i) => (
                      <React.Fragment key={i}>
                        <line
                          x1={50 + i * 40}
                          y1="80"
                          x2={50 + i * 40}
                          y2="320"
                          stroke="rgba(20, 184, 166, 0.2)"
                          strokeWidth="1"
                        />
                        <line
                          x1="50"
                          y1={80 + i * 30}
                          x2="370"
                          y2={80 + i * 30}
                          stroke="rgba(20, 184, 166, 0.2)"
                          strokeWidth="1"
                        />
                      </React.Fragment>
                    ))}
                    
                    {/* Robotic arm representation */}
                    <g className="animate-float" style={{ animationDelay: '0s' }}>
                      <circle cx="200" cy="180" r="50" fill="url(#robotGradient)" opacity="0.9" />
                      <circle cx="200" cy="180" r="35" fill="rgba(6, 78, 59, 0.8)" />
                      <circle cx="200" cy="180" r="8" fill="rgb(20, 184, 166)" />
                    </g>
                    
                    {/* Data panels */}
                    <rect x="100" y="100" width="80" height="50" rx="4" fill="rgba(20, 184, 166, 0.15)" stroke="rgb(20, 184, 166)" strokeWidth="1.5" className="animate-float" style={{ animationDelay: '0.5s' }} />
                    <rect x="220" y="100" width="80" height="50" rx="4" fill="rgba(20, 184, 166, 0.15)" stroke="rgb(20, 184, 166)" strokeWidth="1.5" className="animate-float" style={{ animationDelay: '1s' }} />
                    <rect x="100" y="240" width="80" height="50" rx="4" fill="rgba(20, 184, 166, 0.15)" stroke="rgb(20, 184, 166)" strokeWidth="1.5" className="animate-float" style={{ animationDelay: '1.5s' }} />
                    
                    <defs>
                      <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgb(20, 184, 166)" />
                        <stop offset="100%" stopColor="rgb(6, 182, 212)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-teal-500/20 hover:border-teal-400/50 transition-all duration-300 hover:transform hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mb-6 text-teal-300 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 px-6 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                GENAI @MSI
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Integrated AI tools for enhanced productivity</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-1 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{tool.icon}</span>
                  <span className="text-slate-200 font-medium group-hover:text-teal-300 transition-colors">
                    {tool.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-lg p-10 rounded-3xl border border-teal-500/30 shadow-2xl animate-fadeInUp">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="inline-block text-teal-300 text-sm font-semibold tracking-wider uppercase px-4 py-1 bg-teal-500/10 rounded-full border border-teal-500/30 mb-4">
                  NEW TO AI ESSENTIALS
                </span>
              </div>
              <span className="px-4 py-1 bg-slate-700/50 text-slate-400 rounded-full text-sm font-medium">
                ASSIGNED
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Safe & Smart: The Rules of the Road
            </h3>

            <p className="text-slate-300 mb-6 leading-relaxed text-lg">
              What you should know, including the details you didn't think to ask. Essential hygiene for the AI era. We cover data privacy ("Your chats do not train the model"), retention policies (18 months), and organization tips like renaming and pinning chats for long-term project management.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-8 text-slate-400">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📚</span>
                <span className="font-medium">Level 2</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">⏱</span>
                <span className="font-medium">30 mins</span>
              </div>
            </div>

            <div className="border-t border-slate-700/50 pt-6">
              <div className="flex items-center space-x-2 text-slate-400">
                <span className="text-sm font-medium">CT</span>
                <span className="text-sm">Collaborative Technologies Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-12 rounded-3xl shadow-2xl shadow-teal-500/20 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Ready to Transform Your Projects?
            </h2>
            <p className="text-xl text-teal-50 mb-8">
              Join the AI revolution and experience smarter, faster project management today.
            </p>
            <button className="bg-white text-slate-950 px-10 py-4 rounded-full text-lg font-bold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Start Your AI Journey
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 text-teal-300">Platform</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-teal-300 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-teal-300 transition-colors">Tools</a></li>
                <li><a href="#" className="hover:text-teal-300 transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-teal-300">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-teal-300 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-teal-300 transition-colors">Training</a></li>
                <li><a href="#" className="hover:text-teal-300 transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-teal-300">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-teal-300 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-teal-300 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-teal-300 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-teal-300">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-teal-300 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-teal-300 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-teal-300 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
            <p>© 2024 MSI AI Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
      `}</style>
    </div>
  );
};

export default App;