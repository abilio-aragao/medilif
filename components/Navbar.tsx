'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Home, Building2, Stethoscope, Pill, 
  ShieldAlert, Info, ArrowRight 
} from 'lucide-react';

import logoImg from '@/public/assets/logo.png'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  const menuItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Hospitais', href: '../hospitais', icon: Building2 },
    { name: 'Clínicas', href: '/clinicas', icon: Stethoscope },
    { name: 'Farmácias', href: '/farmacias', icon: Pill },
    { name: 'Doenças', href: '/doencas', icon: ShieldAlert },
    { name: 'Sobre', href: '/sobre', icon: Info },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) { 
          setIsOpen(false);
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
          className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 font-sans"
        >
          <div className="max-w-7xl mx-auto">
            <div className="glass bg-white/80 backdrop-blur-md rounded-[2rem] border border-white/50 shadow-xl px-8 py-3 flex items-center justify-between">
              
              {/* LOGO*/}
              <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                <div className="w-14 h-14 flex items-center justify-center overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-105">
                  <Image 
                    src={logoImg} 
                    alt="MediLif Logo" 
                    placeholder="blur"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-slate-900 to-emerald-800 bg-clip-text text-transparent">
                  Med<span className="text-emerald-500">Lif</span>
                </span>
              </Link>

              {/* DESKTOP MENU */}
              <div className="hidden md:flex items-center gap-8">
                {menuItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={idx}
                      href={item.href}
                      className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-emerald-600 cursor-pointer transition-colors group"
                    >
                      <Icon size={15} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* CTA & MOBILE TOGGLE */}
              <div className="flex items-center gap-4">
                <Link href="/hospitais">
                  <button className="hidden md:flex bg-gradient-to-r from-emerald-500 via-teal-600 to-blue-600 text-white px-8 py-3 rounded-2xl font-bold text-sm shadow-[0_4px_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_20px_rgba(52,211,153,0.5)] transition-all flex items-center gap-2 active:scale-95">
                    Começar <ArrowRight size={14} />
                  </button>
                </Link>
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden p-2 text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
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
                  className="absolute top-[5.5rem] left-6 right-6 bg-white rounded-[2rem] p-6 shadow-2xl border border-slate-100 md:hidden flex flex-col gap-2"
                >
                  <ul className="space-y-1">
                    {menuItems.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <li key={idx}>
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-4 p-3.5 rounded-2xl text-base font-bold text-slate-700 hover:text-emerald-600 hover:bg-emerald-50/30 transition-all"
                          >
                            <div className="p-2 bg-slate-50 text-slate-400 rounded-xl">
                              <Icon size={18} />
                            </div>
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                    <li className="pt-4 border-t border-slate-100 mt-2">
                      <Link href="/hospitais" onClick={() => setIsOpen(false)}>
                        <button className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 text-white py-4 rounded-2xl font-bold text-sm shadow-[0_4px_15px_rgba(16,185,129,0.2)] flex items-center justify-center gap-2">
                          Começar
                        </button>
                      </Link>
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