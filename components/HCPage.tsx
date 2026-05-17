'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Users2, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HospitalCard from '@/components/HospitalCard';
import HospitalView from '@/components/HospitalView';
import { HOSPITAIS_DATA, CATEGORIAS_FILTRO, Hospital } from '@/lib/data';

interface HCPageProps {
  type: 'Hospital' | 'Clínica';
  title: string;
  subtitle: string;
  heroImage: string;
}

export default function HCPage({ type, title, subtitle, heroImage }: HCPageProps) {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);

  // Filtragem Inteligente
  const filteredData = HOSPITAIS_DATA.filter((item) => {
    const isCorrectType = type === 'Hospital' 
      ? item.type === 'Hospital' 
      : (item.type === 'Clínica' || item.type === 'Centro Médico');
    
    const matchesSpecialty = selectedSpecialty 
      ? item.specialties.includes(selectedSpecialty) 
      : true;

    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.location.toLowerCase().includes(searchQuery.toLowerCase());

    return isCorrectType && matchesSpecialty && matchesSearch;
  });

  const equipeMedica = [
    { name: "Dr. Mateus Manuel", role: "Neurocirurgião", hospital: "Hospital Girassol", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400" },
    { name: "Dra. Alina Silva", role: "Pediatra", hospital: "Clínica Sagrada Esperança", img: "https://images.unsplash.com/photo-1594824813573-246434e3b96f?q=80&w=400" },
    { name: "Dr. Carlos Rocha", role: "Cardiologista", hospital: "Luanda Medical Center", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400" }
  ];

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-emerald-100 antialiased overflow-x-hidden text-slate-900">
      <Navbar />

      {/* 1. HERO SECTION - ALTA VISIBILIDADE COM IMAGEM REAL */}
      <section className="relative min-h-[50vh] md:min-h-[55vh] w-full flex items-center justify-center overflow-hidden bg-slate-900 pt-36 pb-24">
        <div className="absolute inset-0">
          <img src={heroImage} className="w-full h-full object-cover brightness-[0.35]" alt={title} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-50" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6"
          >
            {title}
          </motion.h1>
          <p className="text-slate-200 text-base md:text-xl max-w-2xl mx-auto font-bold drop-shadow-md leading-relaxed">
            {subtitle}
          </p>
        </div>
      </section>

      {/* 2. BARRA DE PESQUISA FLUTUANTE (Sobreposta entre o Hero e o Conteúdo) */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-30 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full max-w-3xl relative group mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-[2.5rem] blur-xl opacity-10 group-focus-within:opacity-20 transition-opacity" />
          <div className="relative bg-white border border-slate-200 rounded-[2.5rem] p-2 flex items-center shadow-xl shadow-slate-200/50">
            <div className="pl-6 text-cyan-500">
              <Search size={24} />
            </div>
            <input 
              type="text" 
              placeholder="Pesquise por nome da unidade médica ou bairro..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none px-4 py-4 text-slate-900 font-bold placeholder:text-slate-400 text-base md:text-lg"
            />
            <button className="bg-gradient-to-r from-purple-500 via-purple-600 to-cyan-500 text-white font-black px-6 md:px-8 py-3.5 md:py-4 rounded-[2rem] hover:scale-105 transition-all active:scale-95 shadow-lg shadow-purple-500/20 cursor-pointer text-sm">
              Pesquisar
            </button>
          </div>
        </motion.div>
      </section>

      {/* 3. SEÇÃO DE FILTROS (ESPECIALIDADES COM LOOK CLEAN) */}
      <section className="max-w-7xl mx-auto px-6 mb-20 relative z-20">
        <div className="bg-white rounded-[3rem] p-8 md:p-10 shadow-sm border border-slate-200/80">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">Filtrar por Especialidade</h3>
              <p className="text-slate-400 font-bold text-xs uppercase tracking-wider mt-0.5">Selecione uma especialidade para refinar as unidades médicas</p>
            </div>
            {selectedSpecialty && (
              <button 
                onClick={() => setSelectedSpecialty(null)}
                className="text-xs font-black text-purple-600 bg-purple-50 hover:bg-purple-100 px-4 py-2 rounded-full transition-all self-start sm:self-auto cursor-pointer border border-purple-100"
              >
                Limpar Filtro ×
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {CATEGORIAS_FILTRO.map((cat) => {
              const isSelected = selectedSpecialty === cat.id;
              return (
                <motion.div
                  key={cat.id}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedSpecialty(isSelected ? null : cat.id)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all border relative overflow-hidden group flex flex-col justify-between min-h-[110px] ${
                    isSelected 
                      ? 'bg-gradient-to-br from-emerald-500 via-emerald-600 to-cyan-500 text-white border-transparent shadow-md' 
                      : 'bg-slate-50 text-slate-800 border-slate-100 hover:bg-white hover:border-purple-200 hover:shadow-md'
                  }`}
                >
                  <div className="relative z-10">
                    <p className="text-sm font-black tracking-tight mb-1">{cat.label}</p>
                    <p className={`text-[11px] font-medium leading-tight ${isSelected ? 'text-cyan-50/90' : 'text-slate-400'}`}>
                      {cat.desc}
                    </p>
                  </div>
                  <div className="flex justify-end mt-2 relative z-10">
                    <ChevronRight size={14} className={isSelected ? 'text-white' : 'text-slate-400 group-hover:text-purple-500 transition-colors'} />
                  </div>
                  <div className="absolute -right-4 -bottom-4 w-12 h-12 bg-cyan-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. GRID DE RESULTADOS */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            {type === 'Hospital' ? 'Hospitais Disponíveis' : 'Clínicas & Centros Médicos'} 
            <span className="text-slate-400 font-bold text-sm ml-3">({filteredData.length})</span>
          </h2>
        </div>

        {filteredData.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredData.map((hospital) => (
              <div 
                key={hospital.id} 
                onClick={() => setSelectedHospital(hospital)} 
                className="cursor-pointer group"
              >
                <HospitalCard 
                  name={hospital.name}
                  location={hospital.location}
                  rating={hospital.rating.toString()}
                  reviews={hospital.reviews.toString()}
                  image={hospital.image}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-[3rem] border border-dashed border-slate-200 max-w-2xl mx-auto">
            <p className="text-slate-400 font-black text-lg">Nenhuma unidade médica encontrada</p>
            <p className="text-slate-400 text-sm mt-1">Tente ajustar os filtros ou redefinir a sua pesquisa por localização.</p>
          </div>
        )}
      </section>

      {/* 5. EQUIPE MÉDICA (FUNDO ESCURO PREMIUM CUSTOMIZADO) */}
      <section className="bg-slate-950 py-28 px-6 relative overflow-hidden border-t border-slate-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] -ml-40 -mb-40" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
            <div className="text-center md:text-left">
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-xs font-black uppercase tracking-[0.2em]">
                Corpo Clínico de Elite
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mt-3 tracking-tighter">
                Especialistas em Destaque
              </h2>
            </div>
            
            <div className="flex items-center gap-4 bg-slate-900/80 border border-white/5 backdrop-blur-md p-5 rounded-[2rem] shadow-2xl">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                <Users2 size={24} />
              </div>
              <div>
                <p className="text-white font-black text-base">+500 Especialistas</p>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mt-0.5">Cadastrados na MedLif</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {equipeMedica.map((med, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -8 }} 
                className="bg-slate-900/40 border border-white/5 rounded-[2.5rem] p-6 flex items-center gap-5 hover:border-purple-500/30 transition-all duration-300 shadow-xl backdrop-blur-sm"
              >
                <img 
                  src={med.img} 
                  className="w-20 h-20 rounded-2xl object-cover border border-white/10 shadow-inner flex-shrink-0" 
                  alt={med.name} 
                />
                <div className="min-w-0">
                  <h4 className="text-white font-black text-lg truncate tracking-tight">{med.name}</h4>
                  <p className="text-emerald-400 text-xs font-black uppercase tracking-wider mt-1">{med.role}</p>
                  
                  <div className="inline-flex items-center gap-1.5 bg-white/5 text-purple-300 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider mt-3 border border-white/5 max-w-full">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                    <span className="truncate">{med.hospital}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Hospital View Modal */}
      <AnimatePresence>
        {selectedHospital && (
          <HospitalView hospital={selectedHospital} onClose={() => setSelectedHospital(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}