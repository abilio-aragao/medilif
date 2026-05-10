'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Play, HeartPulse, X } from 'lucide-react';

// Importamos os dados e o tipo oficial
import { HOSPITAIS_DATA, type Hospital } from '../lib/data';

import HospitalCard from './HospitalCard';
import HospitalView from './HospitalView';
import AgendamentoModal from './AgendamentoModal';

export default function Hero() {
  const [termoBusca, setTermoBusca] = useState('');
  const [showResultados, setShowResultados] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  
  // Estados tipados corretamente com a interface do data.ts
  const [hospitalSelecionado, setHospitalSelecionado] = useState<Hospital | null>(null);
  const [mostrarAgendamento, setMostrarAgendamento] = useState(false);

  // Filtragem
  const resultados = HOSPITAIS_DATA.filter(h => 
    h.name.toLowerCase().includes(termoBusca.toLowerCase()) ||
    h.type.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-screen">
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LADO ESQUERDO: TEXTO E BUSCA */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-6xl lg:text-7xl font-black text-slate-900 leading-[1.0] tracking-tighter">
            Saúde de <span className="text-blue-600">elite</span> <br /> em Angola.
          </h1>
          <p className="mt-8 text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
            A plataforma mais completa para encontrar unidades de saúde e agendar consultas em tempo real.
          </p>

          <div className="mt-12 p-2 glass bg-white/90 rounded-[2.5rem] shadow-2xl border border-white flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1 flex items-center gap-3 px-6 py-4">
              <Search className="text-blue-600" size={20} />
              <input 
                type="text" 
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
                placeholder="Hospital, Clínica ou Centro..." 
                className="bg-transparent border-none outline-none w-full font-semibold text-slate-700 placeholder:text-slate-400"
              />
            </div>
            <button 
              onClick={() => setShowResultados(true)}
              className="w-full md:w-auto bg-blue-600 text-white px-10 py-5 rounded-[2rem] font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
            >
              Buscar
            </button>
          </div>
        </motion.div>

        {/* LADO DIREITO: IMAGEM HERO */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
          <div 
            className="rounded-[3rem] overflow-hidden shadow-3xl border-[12px] border-white relative group cursor-pointer"
            onClick={() => setShowVideoModal(true)}
          >
            <img 
              src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070" 
              className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="MediLif Hospital"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl text-blue-600 z-10">
              <Play fill="currentColor" size={24} />
            </div>
          </div>
          
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute -top-10 -right-5 glass p-6 rounded-3xl shadow-xl border border-white/50 z-20">
            <HeartPulse className="text-red-500 mb-2" size={32} />
            <p className="font-black text-xl">98%</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase">Confiança</p>
          </motion.div>
        </motion.div>
      </div>

      {/* --- MODAIS --- */}

      {/* 1. RESULTADOS DA BUSCA */}
      <AnimatePresence>
        {showResultados && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowResultados(false)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-[#F8FAFC] w-full max-w-5xl max-h-[85vh] overflow-y-auto rounded-[3.5rem] p-8 md:p-12 shadow-2xl">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Resultados</h2>
                <button onClick={() => setShowResultados(false)} className="p-4 bg-white rounded-full text-slate-400 hover:text-slate-900 shadow-sm transition-all"><X size={24}/></button>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resultados.map(h => (
                  <div key={h.id} onClick={() => { setHospitalSelecionado(h); setShowResultados(false); }}>
                    {/* Passamos as props com conversão de tipo caso o HospitalCard ainda seja antigo */}
                    <HospitalCard 
                      {...h} 
                      rating={String(h.rating)} 
                      reviews={String(h.reviews)} 
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. VISTA DO HOSPITAL */}
      <AnimatePresence>
        {hospitalSelecionado && (
          <HospitalView 
            hospital={hospitalSelecionado} 
            onClose={() => setHospitalSelecionado(null)}
            onOpenAgendamento={() => setMostrarAgendamento(true)}
          />
        )}
      </AnimatePresence>

      {/* 3. MODAL DE AGENDAMENTO */}
      <AnimatePresence>
        {mostrarAgendamento && (
          <AgendamentoModal 
            hospital={hospitalSelecionado} 
            onClose={() => setMostrarAgendamento(false)} 
          />
        )}
      </AnimatePresence>

      {/* 4. MODAL DE VÍDEO */}
      <AnimatePresence>
        {showVideoModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl" onClick={() => setShowVideoModal(false)}>
            <div className="relative w-full max-w-4xl aspect-video">
              <iframe className="w-full h-full rounded-3xl" src="https://www.youtube.com/embed/pjKjih1qSTc?autoplay=1" allowFullScreen />
            </div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}