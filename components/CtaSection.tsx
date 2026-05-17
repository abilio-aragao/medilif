'use client';

import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto bg-linear-to-br from-emerald-600 via-teal-700 to-purple-700 rounded-[3.5rem] p-12 md:p-16 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(16,185,129,0.2)]">
        {/* Luzes de Fundo Estilizadas */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            A sua saúde merece o melhor cuidado
          </h2>
          <p className="text-emerald-50 text-base md:text-lg mb-10 font-medium max-w-xl mx-auto opacity-90">
            Junte-se à plataforma médica que está a revolucionar o acesso à saúde em Luanda de forma rápida e segura.
          </p>
          <button className="bg-white text-emerald-700 hover:text-purple-700 px-10 py-4.5 rounded-2xl font-bold transition-all shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center gap-2 mx-auto active:scale-95 text-sm md:text-base">
            Começar Agora <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}