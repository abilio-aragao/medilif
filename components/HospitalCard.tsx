'use client';

import { motion } from 'framer-motion';
import { MapPin, Star, Clock } from 'lucide-react';

interface HospitalProps {
  name: string;
  location: string;
  rating: string;
  reviews: string;
  image: string;
}

export default function HospitalCard({ name, location, rating, reviews, image }: HospitalProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group cursor-pointer bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
    >
      {/* Container da Imagem */}
      <div className="relative h-52 rounded-[2rem] overflow-hidden mb-5">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Badge de Disponibilidade */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-wider">Disponível</span>
          </div>
        </div>
      </div>

      {/* Info do Hospital */}
      <div className="px-2 pb-2">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
            {name}
          </h3>
        </div>

        <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
          <div className="flex items-center justify-center w-6 h-6 bg-blue-50 rounded-lg text-blue-600">
            <MapPin size={14} />
          </div>
          <span className="font-medium">{location}</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
          <div className="flex items-center gap-1.5">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-slate-900">{rating}</span>
            <span className="text-slate-400 text-xs font-medium">({reviews})</span>
          </div>
          
          <div className="flex items-center gap-1 text-slate-400 font-bold text-[10px] uppercase">
            <Clock size={12} />
            <span>24h</span>
          </div>
        </div>
      </div>

      {/* PLACEHOLDER PARA LÓGICA DE AGENDAMENTO:
          onClick={() => openBookingModal(hospitalId)} 
      */}
    </motion.div>
  );
}