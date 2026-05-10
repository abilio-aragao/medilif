'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Lógica para esconder/mostrar ao scroll
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Se scroll para baixo, esconde. Se para cima, mostra.
        if (window.scrollY > lastScrollY && window.scrollY > 100) { 
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-[100] px-6 py-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="glass bg-white/80 backdrop-blur-md rounded-[2rem] border border-white/50 shadow-xl px-8 py-4 flex items-center justify-between">
              
              {/* LOGO */}
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform">
                  +
                </div>
                <span className="text-2xl font-black tracking-tighter text-slate-900">MediLif</span>
              </div>

              {/* DESKTOP MENU */}
              <div className="hidden md:flex items-center gap-10">
                <div className="flex items-center gap-1 text-sm font-bold text-slate-900 hover:text-blue-600 cursor-pointer transition-colors">
                  Serviços <ChevronDown size={14} />
                </div>
                <span className="text-sm font-bold text-slate-900 hover:text-blue-600 cursor-pointer transition-colors">Hospitais</span>
                <span className="text-sm font-bold text-slate-900 hover:text-blue-600 cursor-pointer transition-colors">Especialistas</span>
                <span className="text-sm font-bold text-slate-900 hover:text-blue-600 cursor-pointer transition-colors">Sobre Nós</span>
              </div>

              {/* CTA & MOBILE TOGGLE */}
              <div className="flex items-center gap-4">
                <button className="hidden md:block bg-slate-900 text-white px-8 py-3 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-slate-200">
                  Área do Paciente
                </button>
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden p-2 text-slate-900"
                >
                  {isOpen ? <X /> : <Menu />}
                </button>
              </div>
            </div>

            {/* MOBILE MENU DROPDOWN */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-28 left-6 right-6 glass bg-white/95 rounded-[2rem] p-8 shadow-2xl border border-white md:hidden"
                >
                  <ul className="space-y-6">
                    <li className="text-xl font-bold text-slate-900">Serviços</li>
                    <li className="text-xl font-bold text-slate-900">Hospitais</li>
                    <li className="text-xl font-bold text-slate-900">Especialistas</li>
                    <li className="text-xl font-bold text-slate-900">Sobre</li>
                    <li className="pt-4 border-t border-slate-100">
                      <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold">Entrar</button>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}