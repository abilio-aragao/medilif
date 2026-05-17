'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Target, Leaf, Sparkles, Activity } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PILARES = [
  {
    icon: ShieldCheck,
    title: 'Segurança Certificada',
    desc: 'Conectamos apenas unidades médicas e farmacêuticas rigorosamente validadas pelo Ministério da Saúde.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    icon: HeartPulse,
    title: 'Foco no Paciente',
    desc: 'Desenhamos tecnologia para encurtar distâncias e humanizar o acesso à saúde em Angola.',
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  },
  {
    icon: Target,
    title: 'Precisão Digital',
    desc: 'Informação clara sobre consultas, especialidades e prateleiras digitais em tempo real.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50'
  }
];

const METRICAS = [
  { valor: '+50', label: 'Unidades Parceiras' },
  { valor: '+500', label: 'Especialistas Médicos' },
  { valor: '24/7', label: 'Suporte & Triagem' },
  { valor: '100%', label: 'Capital Angolano' }
];

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-purple-100 antialiased overflow-x-hidden text-slate-900">
      <Navbar />

      {/* 1. HERO SECTION - IDENTIDADE VISUAL UNIFICADA */}
      <section className="relative min-h-[50vh] md:min-h-[55vh] w-full flex items-center justify-center overflow-hidden bg-slate-900 pt-36 pb-24">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1600" 
            className="w-full h-full object-cover brightness-[0.25]" 
            alt="Equipa MedLif Angola" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-50" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6">
            Conectando Luanda à <br />
            <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text">Medicina.</span>
          </h1>
          <p className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto font-bold drop-shadow-md leading-relaxed">
            A MedLif é um ecossistema digital integrado que unifica Hospitais, Clínicas, Farmácias e Literacia Médica numa única experiência premium.
          </p>
        </div>
      </section>

      {/* 2. SECÇÃO MANIFESTO / HISTÓRIA (Layout de Leitura Fluida) */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-20">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-black text-purple-600 uppercase tracking-widest block">Quem Somos</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Transformamos a complexidade médica em cliques de simplicidade.
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed">
              Nascida da necessidade de modernizar a jornada do paciente em Luanda, a MedLif preenche a lacuna entre quem precisa de cuidados e as melhores instituições de saúde de Angola. 
            </p>
            <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
              Não somos apenas uma plataforma; somos a infraestrutura invisível que garante que encontra a clínica certa para a sua necessidade, o especialista indicado para o seu sintoma e o medicamento exato na prateleira digital mais próxima de si.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-cyan-500 rounded-[3rem] blur-3xl opacity-10" />
            <div className="relative bg-white border border-slate-200 p-8 rounded-[3rem] shadow-xl shadow-slate-200/50">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 border border-purple-100">
                <Activity size={24} />
              </div>
              <blockquote className="text-slate-800 font-black text-xl italic tracking-tight leading-relaxed mb-4">
                A nossa missão é salvar tempo. No ecossistema da saúde, tempo é sinónimo de qualidade de vida.
              </blockquote>
              <cite className="text-xs font-black text-slate-400 uppercase tracking-wider not-italic">
                — Conselho Técnico MedLif
              </cite>
            </div>
          </div>

        </div>
      </section>

      {/* 3. GRID DOS TRÊS PILARES DE EXCELÊNCIA */}
      <section className="bg-white border-y border-slate-200/60 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-cyan-500 text-xs font-black uppercase tracking-widest">Compromisso</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-2">Os Valores que Guiam a Rede</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PILARES.map((pilar, idx) => {
              const IconComponent = pilar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] hover:bg-white hover:border-purple-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 ${pilar.bg} ${pilar.color} rounded-2xl flex items-center justify-center mb-6 border border-white`}>
                    <IconComponent size={22} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3">
                    {pilar.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-bold leading-relaxed">
                    {pilar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DE MÉTRICAS E IMPACTO (FUNDO ESCURO PREMIUM) */}
      <section className="bg-slate-950 py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] -mt-40" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] -mb-40" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
           
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 tracking-tighter">
              A nossa rede cresce para proteger a sua família.
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {METRICAS.map((metrica, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900/40 border border-white/5 p-8 rounded-[2.5rem] text-center backdrop-blur-sm"
              >
                <p className="text-4xl md:text-5xl font-black text-white bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
                  {metrica.valor}
                </p>
                <p className="text-slate-400 text-xs font-black uppercase tracking-wider mt-3">
                  {metrica.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}