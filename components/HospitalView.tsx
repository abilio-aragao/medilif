'use client';

import { motion } from 'framer-motion';
import { 
  X, MapPin, Phone, Clock, Star, 
  ShieldCheck, Calendar, Stethoscope, Activity 
} from 'lucide-react';


interface Hospital {
  id: number;
  name: string;
  address: string;
  image: string;
  rating: number;
}

interface HospitalViewProps {
  hospital: Hospital | null;
  onClose: () => void;
  onOpenAgendamento: (hospital: Hospital) => void;
}

export default function HospitalView({ hospital, onClose, onOpenAgendamento }: HospitalViewProps) {
  if (!hospital) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="fixed inset-0 z-[150] bg-white overflow-y-auto"
    >
      {/* ... resto do código igual ao anterior, mas usando Activity se precisar ... */}
      {/* Exemplo de uso correto do ícone se quiseres adicionar: <Activity size={20} /> */}
      
      {/* Mantém o botão de fechar e o conteúdo que já tinhas */}
      <div className="relative h-[40vh] w-full">
        <img src={hospital.image} className="w-full h-full object-cover" alt={hospital.name} />
        <button onClick={onClose} className="absolute top-8 left-8 p-4 bg-white/20 backdrop-blur-md rounded-full text-white"><X/></button>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 -mt-20 relative z-10 pb-24">
        <div className="bg-white rounded-[3rem] p-12 shadow-2xl">
           <h1 className="text-5xl font-black text-slate-900 mb-4">{hospital.name}</h1>
           <button 
              onClick={() => onOpenAgendamento(hospital)}
              className="bg-blue-600 text-white px-10 py-6 rounded-3xl font-black"
           >
             Agendar Consulta
           </button>
        </div>
      </div>
    </motion.div>
  );
}