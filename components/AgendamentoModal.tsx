'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  X, User, Phone, Stethoscope, Mail, Upload,
  Calendar as CalendarIcon, Send, CheckCircle2, ChevronRight, FileText
} from 'lucide-react';
import { Hospital } from '@/lib/data';

interface AgendamentoModalProps {
  hospital: Hospital;
  onClose: () => void;
}

export default function AgendamentoModal({ hospital, onClose }: AgendamentoModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("O ficheiro deve ter menos de 2MB.");
        e.target.value = "";
        return;
      }
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(onClose, 2500);
  };

  const inputBase = "w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-600 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all font-lato text-sm";
  const labelBase = "block text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-wider font-lato";

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
      {/* Overlay com desfoque suave */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]" 
      >
        {/* Cabeçalho Fixo */}
        <div className="p-6 md:p-8 pb-4 border-b border-slate-50 flex justify-between items-start bg-white z-10">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight font-lato">Agendamento Online</h2>
            <p className="text-blue-600 font-bold text-xs mt-1 flex items-center gap-1 uppercase tracking-tight">
              {hospital.name} <ChevronRight size={12} />
            </p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Corpo com Scroll */}
        <div className="overflow-y-auto p-6 md:p-8 custom-scrollbar">
          {isSubmitted ? (
            <div className="py-12 text-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} strokeWidth={1.5} />
              </motion.div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Pedido Enviado!</h2>
              <p className="text-slate-500 text-sm">O {hospital.name} entrará em contacto brevemente.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelBase}>Nome Completo</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                    <input type="text" required placeholder="João Manuel" className={`${inputBase} pl-11`} />
                  </div>
                </div>
                <div>
                  <label className={labelBase}>E-mail</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                    <input type="email" required placeholder="seu@email.com" className={`${inputBase} pl-11`} />
                  </div>
                </div>
              </div>

              {/* Upload BI */}
              <div>
                <label className={labelBase}>Bilhete de Identidade (BI) - Máx 2MB</label>
                <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-slate-100 rounded-2xl cursor-pointer bg-slate-50/50 hover:bg-slate-50 transition-all border-spacing-4">
                  <div className="flex flex-col items-center justify-center pt-4 pb-4">
                    {fileName ? (
                      <div className="flex items-center gap-2 text-green-600 font-bold bg-green-50 px-4 py-2 rounded-lg">
                        <FileText size={18} />
                        <span className="text-[10px]">{fileName}</span>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-6 h-6 mb-2 text-slate-300" />
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Selecionar Ficheiro</p>
                      </>
                    )}
                  </div>
                  <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} required />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelBase}>Contacto</label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                    <input type="tel" required placeholder="9xx xxx xxx" className={`${inputBase} pl-11`} />
                  </div>
                </div>
                <div>
                  <label className={labelBase}>Especialidade</label>
                  <div className="relative group">
                    <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                    <select required className={`${inputBase} pl-11 appearance-none bg-white cursor-pointer`}>
                      <option value="">Selecionar especialidade</option>
                      {hospital.specialties && hospital.specialties.length > 0 ? (
                        hospital.specialties.map((spec, idx) => (
                          <option key={idx} value={spec}>{spec}</option>
                        ))
                      ) : (
                        <option disabled>Nenhuma especialidade disponível</option>
                      )}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className={labelBase}>Data da Consulta</label>
                <div className="relative group">
                  <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                  <input type="date" required className={`${inputBase} pl-11`} />
                </div>
              </div>

              <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-xl shadow-slate-100 active:scale-95 mt-4">
                <Send size={16} /> Confirmar Solicitação
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}