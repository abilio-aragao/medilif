'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Star, Pill, Truck, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FarmaciaView from '@/components/FarmaciaView';
import { FARMACIAS_DATA, Farmacia } from '@/lib/data';

export default function FarmaciasPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFarmacia, setSelectedFarmacia] = useState<Farmacia | null>(null);

  const filteredFarmacias = FARMACIAS_DATA.filter((f) => {
    const q = searchQuery.toLowerCase();
    return f.name.toLowerCase().includes(q) || 
           f.location.toLowerCase().includes(q) || 
           f.stock.some(m => m.name.toLowerCase().includes(q));
  });

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-emerald-100 antialiased overflow-x-hidden text-slate-900">
      <Navbar />

      {/* 1. HERO SECTION PREMIUM COM IMAGEM DE FUNDO (Igual a Hospitais e Clínicas) */}
      <section className="relative min-h-[50vh] md:min-h-[55vh] w-full flex items-center justify-center overflow-hidden bg-slate-900 pt-36 pb-24">
        <div className="absolute inset-0">
          {/* Imagem de fundo atraente e de alta qualidade */}
          <img 
            src="https://images.unsplash.com/photo-1576091358783-a212ec293ff3?q=80&w=1600" 
            className="w-full h-full object-cover brightness-[0.4]" 
            alt="Farmácias MedLif" 
          />
          {/* Gradiente suave na parte inferior para fundir com a secção clara de baixo */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-50" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6"
          >
            Saúde à distância de <br/>
            <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text">um clique.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-slate-200 text-base md:text-xl max-w-xl mx-auto font-bold drop-shadow-md leading-relaxed"
          >
            Pesquise medicamentos nas prateleiras digitais das melhores farmácias de Luanda e receba em casa com segurança.
          </motion.p>
        </div>
      </section>

      {/* 2. BARRA DE BUSCA PREMIUM (Sobreposta entre o Hero e o Conteúdo) */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-3xl relative group mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-[2.5rem] blur-xl opacity-10 group-focus-within:opacity-20 transition-opacity" />
          <div className="relative bg-white border border-slate-200 rounded-[2.5rem] p-2 flex items-center shadow-xl shadow-slate-200/50">
            <div className="pl-6 text-cyan-500">
              <Search size={24} />
            </div>
            <input 
              type="text" 
              placeholder="Farmácia ou Medicamento em estoque..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none px-4 py-4 text-slate-900 font-bold placeholder:text-slate-400 text-base md:text-lg"
            />
            <button className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-cyan-500 text-white font-black px-6 md:px-8 py-3.5 md:py-4 rounded-[2rem] hover:scale-105 transition-all active:scale-95 shadow-lg shadow-emerald-500/20 cursor-pointer text-sm">
              Ver Stock
            </button>
          </div>
        </motion.div>
      </section>

      {/* 3. SECÇÃO DE CARDS DE FARMÁCIAS */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Farmácias Parceiras</h2>
            <p className="text-slate-400 font-bold mt-1 uppercase text-xs tracking-widest">Unidades com entrega rápida disponível</p>
          </div>
          <div className="hidden md:flex gap-6">
             <div className="flex items-center gap-2 text-slate-500 text-sm font-bold">
                <Truck size={18} className="text-emerald-500" /> Entrega Rápida
             </div>
             <div className="flex items-center gap-2 text-slate-500 text-sm font-bold">
                <ShieldCheck size={18} className="text-purple-500" /> Parceria Verificada
             </div>
          </div>
        </div>

        {filteredFarmacias.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredFarmacias.map((farmacia, idx) => (
              <motion.div
                key={farmacia.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedFarmacia(farmacia)}
                className="group relative cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-cyan-500/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-white border border-slate-200 rounded-[3rem] overflow-hidden hover:border-purple-300 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-slate-200/50">
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={farmacia.image} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      alt={farmacia.name} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                    
                    {farmacia.isOpen24h && (
                      <div className="absolute top-5 right-6 bg-emerald-500 text-white font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        Aberto 24h
                      </div>
                    )}
                    
                    <div className="absolute bottom-4 left-6 flex items-center gap-1.5 text-amber-500 bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm">
                      <Star size={12} fill="currentColor" />
                      <span className="text-xs font-black text-slate-800">{farmacia.rating}</span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-purple-600 transition-colors leading-tight mb-2">
                      {farmacia.name}
                    </h3>
                    <p className="text-slate-400 text-sm font-bold flex items-center gap-1.5 mb-6">
                      <MapPin size={14} className="text-purple-400" /> {farmacia.location}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">Tempo de Entrega</p>
                        <p className="text-slate-800 font-black text-sm flex items-center gap-1.5 mt-1">
                          <Truck size={14} className="text-cyan-500" /> {farmacia.deliveryTime}
                        </p>
                      </div>
                      <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">Disponibilidade</p>
                        <p className="text-slate-800 font-black text-sm flex items-center gap-1.5 mt-1">
                          <Clock size={14} className="text-emerald-500" /> Stock Real
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                      <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Aceder ao Balcão</span>
                      <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-white rounded-[3rem] border border-dashed border-slate-200 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
              <Pill className="text-slate-400" size={24} />
            </div>
            <h4 className="text-lg font-black text-slate-800">Nenhum resultado para a busca</h4>
            <p className="text-slate-400 text-sm mt-1">Verifique os termos digitados ou tente outro medicamento.</p>
          </div>
        )}
      </section>

      <Footer />

      {/* Janela de Compra  */}
      <AnimatePresence>
        {selectedFarmacia && (
          <FarmaciaView farmacia={selectedFarmacia} onClose={() => setSelectedFarmacia(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}