'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Clock, Star, 
  Calendar, MessageCircle, ArrowLeft, Map as MapIcon 
} from 'lucide-react';

import AgendamentoModal from '@/components/AgendamentoModal'; 

import { Hospital } from '@/lib/data';

interface HospitalViewProps {
  hospital: Hospital; 
  onClose: () => void;
}

export default function HospitalView({ hospital, onClose }: HospitalViewProps) {
  // Estado interno para controlar o modal de agendamento
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  if (!hospital) return null;


  const publicMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(hospital.name + ' ' + hospital.location)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed inset-0 z-[200] bg-white overflow-y-auto font-sans"
      >
        {/* Cabeçalho Minimalista */}
        <nav className="fixed top-0 left-0 right-0 z-[220] px-6 py-6 flex items-center">
          <button 
            onClick={onClose} 
            className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full text-slate-700 hover:text-blue-600 transition-all shadow-sm font-bold border border-slate-100"
          >
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </button>
        </nav>

        {/* Banner de Topo */}
        <div className="relative h-[40vh] md:h-[50vh] w-full">
          <img 
            src={hospital.image} 
            className="w-full h-full object-cover" 
            alt={hospital.name} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
        </div>

        {/* Conteúdo Principal */}
        <div className="max-w-6xl mx-auto px-6 -mt-20 relative z-10 pb-20">
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-50">
            
            <div className="mb-10 text-center md:text-left">
              <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                {hospital.type}
              </span>
              <h1 className=" text-3xl md:text-5xl font-black text-slate-900 mt-4 leading-tight">
                {hospital.name}
              </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              {/* Coluna de Informações */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 group">
                  <div className="p-4 bg-yellow-50 rounded-2xl text-yellow-500 group-hover:scale-110 transition-transform">
                    <Star size={28} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{hospital.rating} Estrelas</h4>
                    <p className="text-slate-500 font-medium">Baseado em {hospital.reviews} avaliações</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 group-hover:scale-110 transition-transform">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Localização</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      {hospital.address || hospital.location}<br />
                      <span className="text-blue-600 font-semibold">{hospital.location}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-4 bg-green-50 rounded-2xl text-green-600 group-hover:scale-110 transition-transform">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Funcionamento</h4>
                    <p className="text-slate-500 font-medium">Aberto 24h • Segunda a Domingo</p>
                  </div>
                </div>
              </div>

              {/* Coluna do Mapa */}
              <div className="relative group">
                <div className="absolute -top-4 -left-4 bg-white px-4 py-2 rounded-xl shadow-md z-10 flex items-center gap-2 border border-slate-100">
                  <MapIcon size={16} className="text-red-500" />
                  <span className="text-xs font-bold text-slate-700">Google Maps</span>
                </div>
                <div className="w-full h-[300px] md:h-[350px] rounded-[2.5rem] overflow-hidden border-8 border-slate-50 shadow-inner">
                  <iframe 
                    width="100%" height="100%" 
                    src={publicMapUrl}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Ações Centrais */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10 border-t border-slate-50">
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-base flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-95"
              >
                <Calendar size={22} />
                Marcação Online
              </button>

              <a 
                href={`https://wa.me/244900000000?text=Olá, gostaria de fazer um agendamento no ${hospital.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#22c55e] text-white px-10 py-5 rounded-2xl font-black text-base flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-lg shadow-green-100 active:scale-95"
              >
                <MessageCircle size={22} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* RENDERIZAÇÃO DO MODAL DE AGENDAMENTO */}
      <AnimatePresence>
        {isBookingOpen && (
          <AgendamentoModal 
            hospital={hospital} 
            onClose={() => setIsBookingOpen(false)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}