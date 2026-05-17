'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Pill, 
  Stethoscope, 
  CalendarDays, 
  FileText, 
  Activity, 
  Video,
  ArrowRight
} from 'lucide-react';

// Importação correta dos teus componentes de arquitetura modular
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import HospitalCard from '@/components/HospitalCard';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] selection:bg-emerald-100">
      {/* 1. NAVEGAÇÃO PREMIUM */}
      <Navbar />
      
      {/* 2. HERO SECTION COM BUSCA */}
      <Hero />

      {/* 3. GRID DE MICRO-SERVIÇOS (Paleta integrada com Verde e Lilás) */}
      <section className="py-12 px-6">
        <p className="text-slate-400 uppercase tracking-widest text-[11px] font-bold text-center mb-4">
          Micro-serviços ao seu dispor
        </p>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { icon: <Stethoscope size={24} />, label: "Hospitais", color: "text-emerald-500", bg: "hover:bg-emerald-50/40" },
            { icon: <Pill size={24} />, label: "Farmácias", color: "text-teal-500", bg: "hover:bg-teal-50/40" },
            { icon: <CalendarDays size={24} />, label: "Marcação", color: "text-purple-500", bg: "hover:bg-purple-50/40" },
            { icon: <FileText size={24} />, label: "Prescrições", color: "text-indigo-500", bg: "hover:bg-indigo-50/40" },
            { icon: <Activity size={24} />, label: "Resultados", color: "text-rose-500", bg: "hover:bg-rose-50/40" },
            { icon: <Video size={24} />, label: "Telemedicina", color: "text-blue-500", bg: "hover:bg-blue-50/40" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-[2.5rem] bg-white border border-slate-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col items-center group cursor-pointer transition-all ${item.bg}`}
            >
              <div className={`w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-3 ${item.color} group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <span className="font-bold text-slate-800 text-sm group-hover:text-slate-900 transition-colors">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. HOSPITAIS EM DESTAQUE (Com Hover em Verde Médico) */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Hospitais em Destaque</h2>
              <p className="text-slate-400 mt-2 font-medium text-sm md:text-base">Os centros mais bem avaliados perto de si.</p>
            </div>
            <button className="text-emerald-600 hover:text-emerald-700 font-bold flex items-center gap-2 group transition-colors text-sm">
              Ver todos <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <HospitalCard 
              name="Hospital Central de Luanda" location="Luanda, Angola" rating="4.8" reviews="256"
              image="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=500"
            />
            <HospitalCard 
              name="Hospital Privado do Alvalade" location="Luanda, Angola" rating="4.6" reviews="189"
              image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=500"
            />
            <HospitalCard 
              name="Centro Médico Vida" location="Viana, Angola" rating="4.7" reviews="312"
              image="https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?q=80&w=500"
            />
            <HospitalCard 
              name="Hospital Bom Samaritano" location="Benguela, Angola" rating="4.5" reviews="145"
              image="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=500"
            />
          </div>
        </div>
      </section>

      {/* 5. NÚMEROS E ESTATÍSTICAS */}
      <StatsSection />

      {/* 6. CTA FINAL PREMIUM */}
      <CtaSection />

      {/* 7. FOOTER ALINHADO */}
      <Footer />
    </main>
  );
}