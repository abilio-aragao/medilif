'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Star, ShieldCheck, ShoppingBag, Plus, Minus, CheckCircle2 } from 'lucide-react';
import { Farmacia, Medicamento, CATEGORIAS_FARMACIA } from '@/lib/data';

interface FarmaciaViewProps {
  farmacia: Farmacia;
  onClose: () => void;
}

interface ItemCarrinho {
  medicamento: Medicamento;
  quantity: number;
}

export default function FarmaciaView({ farmacia, onClose }: FarmaciaViewProps) {
  const [selectedCat, setSelectedCat] = useState('todos');
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);
  const [compraConcluida, setCompraConcluida] = useState(false);

  // Filtrar o stock da farmácia por categoria
  const medicamentosFiltrados = farmacia.stock.filter(med => 
    selectedCat === 'todos' ? true : med.category === selectedCat
  );

  // Funções do Carrinho
  const adicionarAoCarrinho = (med: Medicamento) => {
    setCarrinho(prev => {
      const existe = prev.find(item => item.medicamento.id === med.id);
      if (existe) {
        return prev.map(item => item.medicamento.id === med.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { medicamento: med, quantity: 1 }];
    });
  };

  const alterarQuantidade = (id: string, delta: number) => {
    setCarrinho(prev => prev.map(item => {
      if (item.medicamento.id === id) {
        const novaQtd = item.quantity + delta;
        return novaQtd > 0 ? { ...item, quantity: novaQtd } : null;
      }
      return item;
    }).filter(Boolean) as ItemCarrinho[]);
  };

  const totalPreco = carrinho.reduce((acc, item) => acc + (item.medicamento.price * item.quantity), 0);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[120] bg-slate-950/60 backdrop-blur-md flex justify-end font-sans text-slate-900"
    >
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="w-full xl:w-[85vw] h-full bg-slate-50 shadow-2xl flex flex-col lg:flex-row overflow-hidden"
      >
        
        {/* LADO ESQUERDO: Catálogo de Produtos da Farmácia */}
        <div className="flex-1 h-full overflow-y-auto pb-12">
          {/* Banner */}
          <div className="relative h-64 w-full bg-slate-950">
            <img src={farmacia.image} className="w-full h-full object-cover brightness-[0.3]" alt={farmacia.name} />
            <button onClick={onClose} className="absolute top-6 left-6 bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition-all border border-white/20 cursor-pointer z-20">
              <X size={20} />
            </button>
            <div className="absolute bottom-6 left-8 text-white z-10">
              <div className="flex items-center gap-2 mb-2">
                {farmacia.isOpen24h && <span className="bg-emerald-500 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">24 Horas</span>}
                <span className="bg-cyan-500/20 border border-cyan-400 text-cyan-300 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">{farmacia.deliveryTime}</span>
              </div>
              <h2 className="text-3xl font-black tracking-tight">{farmacia.name}</h2>
              <p className="text-slate-300 text-sm font-bold flex items-center gap-1.5 mt-1"><MapPin size={14} className="text-purple-400" /> {farmacia.location}</p>
            </div>
          </div>

          {/* Filtros Internos por Categoria de Remédio */}
          <div className="p-8">
            <h3 className="text-lg font-black text-slate-900 mb-4">Departamentos da Farmácia</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {CATEGORIAS_FARMACIA.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCat(cat.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer border ${
                    selectedCat === cat.id 
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white border-transparent shadow-md' 
                      : 'bg-white text-slate-700 border-slate-200 hover:border-purple-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grid de Stock */}
            <h3 className="text-lg font-black text-slate-900 mb-6">Medicamentos Disponíveis</h3>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {medicamentosFiltrados.map((med) => (
                <div key={med.id} className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm flex flex-col justify-between group hover:border-purple-200 transition-colors">
                  <div className="flex gap-4">
                    <img src={med.image} className="w-20 h-20 bg-slate-100 rounded-2xl object-cover border border-slate-200" alt={med.name} />
                    <div>
                      <h4 className="font-black text-slate-900 text-sm leading-tight group-hover:text-purple-600 transition-colors">{med.name}</h4>
                      <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-md font-bold text-slate-500 inline-block mt-1.5">{med.category}</span>
                      <p className="text-lg font-black text-emerald-600 mt-2">{med.price.toLocaleString()} Kz</p>
                    </div>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className={`text-xs font-bold ${med.inStock ? 'text-emerald-500' : 'text-slate-400'}`}>
                      {med.inStock ? '● Em Stock' : '○ Esgotado'}
                    </span>
                    <button 
                      disabled={!med.inStock}
                      onClick={() => adicionarAoCarrinho(med)}
                      className="bg-purple-50 text-purple-600 hover:bg-purple-600 hover:text-white disabled:bg-slate-100 disabled:text-slate-400 p-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Plus size={14} /> Adicionar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LADO DIREITO: Carrinho & Caixa de Compra */}
        <div className="w-full lg:w-96 bg-white border-t lg:border-t-0 lg:border-l border-slate-200 h-full flex flex-col justify-between relative">
          <div className="p-6 border-b border-slate-100 flex items-center gap-2">
            <ShoppingBag className="text-cyan-500" size={20} />
            <h3 className="font-black text-slate-900 text-lg">A tua receita / Carrinho</h3>
            <span className="ml-auto bg-purple-100 text-purple-600 text-xs font-black px-2 py-0.5 rounded-full">{carrinho.length}</span>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {carrinho.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-slate-400 font-bold text-sm">O teu carrinho está vazio.</p>
                <p className="text-xs text-slate-400 mt-1">Adicione medicamentos ao lado para comprar.</p>
              </div>
            ) : (
              carrinho.map((item) => (
                <div key={item.medicamento.id} className="flex items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="max-w-[60%]">
                    <h5 className="font-bold text-slate-900 text-xs truncate">{item.medicamento.name}</h5>
                    <p className="text-xs font-black text-emerald-600 mt-0.5">{(item.medicamento.price * item.quantity).toLocaleString()} Kz</p>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl p-1">
                    <button onClick={() => alterarQuantidade(item.medicamento.id, -1)} className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"><Minus size={12} /></button>
                    <span className="text-xs font-black text-slate-900 w-4 text-center">{item.quantity}</span>
                    <button onClick={() => adicionarAoCarrinho(item.medicamento)} className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"><Plus size={12} /></button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Rodapé do Carrinho com Botão de Finalização */}
          <div className="p-6 bg-slate-50 border-t border-slate-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-slate-500">Total Geral:</span>
              <span className="text-xl font-black text-slate-900">{totalPreco.toLocaleString()} Kz</span>
            </div>
            <button 
              disabled={carrinho.length === 0}
              onClick={() => setCompraConcluida(true)}
              className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-black text-sm py-4 rounded-2xl shadow-lg hover:shadow-cyan-200 transition-all active:scale-[0.98] disabled:from-slate-200 disabled:to-slate-300 disabled:text-slate-400 disabled:shadow-none cursor-pointer"
            >
              Confirmar e Comprar Medicamentos
            </button>
          </div>

          {/* Modal de Sucesso da Compra */}
          <AnimatePresence>
            {compraConcluida && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-white z-30 p-8 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="text-xl font-black text-slate-900">Pedido Confirmado!</h4>
                <p className="text-slate-400 text-xs mt-2 max-w-xs font-medium">Os teus medicamentos já estão a ser separados e embalados pela **{farmacia.name}**.</p>
                <div className="bg-purple-50 text-purple-700 px-4 py-2 rounded-xl font-bold text-xs mt-4 border border-purple-100">Entrega Estimada: {farmacia.deliveryTime}</div>
                <button 
                  onClick={() => { setCompraConcluida(false); setCarrinho([]); onClose(); }}
                  className="mt-8 text-sm font-black text-slate-900 hover:underline cursor-pointer"
                >
                  Fechar Janela
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </motion.div>
    </motion.div>
  );
}