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

// Importando os componentes modulares que já criamos
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import HospitalCard from '../components/HospitalCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] selection:bg-blue-100">
      {/* 1. NAVEGAÇÃO PREMIUM */}
      <Navbar />
      
      {/* 2. HERO SECTION COM BUSCA (O que criaste anteriormente) */}
      <Hero />

   {/* Grid de Serviços no page.tsx */}
<section className="py-12 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
    {[
      { icon: <Stethoscope size={24} />, label: "Hospitais", color: "text-blue-600" },
      { icon: <Pill size={24} />, label: "Farmácias", color: "text-emerald-500" },
      { icon: <CalendarDays size={24} />, label: "Marcação", color: "text-indigo-600" },
      { icon: <FileText size={24} />, label: "Prescrições", color: "text-orange-500" },
      { icon: <Activity size={24} />, label: "Resultados", color: "text-rose-500" },
      { icon: <Video size={24} />, label: "Telemedicina", color: "text-cyan-500" },
    ].map((item, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -5 }}
        className="p-6 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm flex flex-col items-center group cursor-pointer"
      >
        <div className={`w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-3 ${item.color} group-hover:scale-110 transition-transform`}>
          {item.icon}
        </div>
        <span className="font-bold text-slate-900 text-sm">{item.label}</span>
      </motion.div>
    ))}
  </div>
</section>

      {/* 4. HOSPITAIS EM DESTAQUE (Utilizando o HospitalCard modular) */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Hospitais em Destaque</h2>
              <p className="text-slate-500 mt-2 font-medium">Os centros mais bem avaliados perto de si.</p>
            </div>
            <button className="text-blue-600 font-bold flex items-center gap-2">
              Ver todos <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* CONNECT REAL HOSPITAL DATA HERE */}
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

      {/* 5. NÚMEROS E ESTATÍSTICAS (O componente que criaste) */}
      <StatsSection />

      {/* 6. CTA FINAL (Simples e Direto) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-blue-600 rounded-[3.5rem] p-16 text-center relative overflow-hidden shadow-3xl shadow-blue-200">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Sua saúde merece o melhor cuidado</h2>
            <button className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-bold hover:scale-105 transition-all">
              Começar Agora
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
        </div>
      </section>

      {/* FOOTER SIMPLES */}
      <footer className="py-12 text-center text-slate-400 text-xs font-bold uppercase tracking-widest">
        © 2026 MediLif — Transformando a saúde em Angola.
      </footer>
    </main>
  );
}