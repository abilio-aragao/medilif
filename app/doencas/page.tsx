'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, ChevronRight, Heart, Brain, Bone, Eye, Sparkles, BookOpen, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Categorias/Filtros Anatómicos
const CATEGORIAS_SISTEMAS = [
  { id: 'todos', label: 'Todas as Patologias', desc: 'Índice completo', icon: BookOpen },
  { id: 'cardio', label: 'Sistema Cardiovascular', desc: 'Coração e circulação', icon: Heart },
  { id: 'neuro', label: 'Sistema Nervoso', desc: 'Cérebro e conexões', icon: Brain },
  { id: 'musculo', label: 'Sistema Musculoesquelético', desc: 'Ossos e articulações', icon: Bone },
  { id: 'visao', label: 'Sistema Visual', desc: 'Olhos e visão', icon: Eye },
];

const DOENCAS_DATA = [
  {
    id: '1',
    name: 'Hipertensão Arterial',
    category: 'cardio',
    type: 'Doença Crónica',
    readTime: '4 min de leitura',
    summary: 'A força prolongada do sangue contra as paredes das artérias pode eventualmente causar problemas de saúde graves, como doenças cardíacas se não for tratada.',
    symptoms: ['Cefaleias persistentes', 'Tonturas inexplicáveis', 'Zumbido nos ouvidos'],
    prevention: 'Redução de sódio, atividade física regular e gestão de stress.',
    specialist: 'Cardiologia'
  },
  {
    id: '2',
    name: 'Enxaqueca Neurológica',
    category: 'neuro',
    type: 'Condição Recorrente',
    readTime: '5 min de leitura',
    summary: 'Mais do que uma simples dor de cabeça, é uma condição neurológica complexa que causa crises incapacitantes acompanhadas de perturbações sensoriais.',
    symptoms: ['Fotofobia severa', 'Náuseas e vómitos', 'Dor latejante unilateral'],
    prevention: 'Identificação de gatilhos alimentares, sono regular e hidratação.',
    specialist: 'Neurologia'
  },
  {
    id: '3',
    name: 'Artrite Reumatóide',
    category: 'musculo',
    type: 'Doença Autoimune',
    readTime: '6 min de leitura',
    summary: 'O sistema imunitário ataca erroneamente os tecidos saudáveis do próprio corpo, provocando uma inflamação crónica dolorosa nas articulações.',
    symptoms: ['Rigidez matinal severa', 'Inchaço articular simétrico', 'Fadiga extrema'],
    prevention: 'Tratamento precoce com imunomoduladores e fisioterapia.',
    specialist: 'Reumatologia / Ortopedia'
  }
];

export default function DoencasPage() {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filteredDoencas = activeFilter === 'todos' 
    ? DOENCAS_DATA 
    : DOENCAS_DATA.filter(d => d.category === activeFilter);

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-purple-100 antialiased overflow-x-hidden text-slate-900">
      <Navbar />

      {/* 1. HERO SECTION EDITORIAL */}
      <section className="relative min-h-[45vh] w-full flex items-center justify-center overflow-hidden bg-slate-900 pt-36 pb-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600" 
            className="w-full h-full object-cover brightness-[0.25]" 
            alt="Biblioteca de Saúde MedLif" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-50" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.95] mb-6">
            Índice Clínico de <br />
            <span className="text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text">Doenças & Sintomas</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-xl mx-auto font-medium leading-relaxed">
            Explore de forma simples o funcionamento do corpo humano, aprenda a identificar sinais de alerta e entenda os métodos de prevenção.
          </p>
        </div>
      </section>

      {/* 2. LAYOUT PROPRIETÁRIO: BARRA LATERAL + CONTEÚDO EDITORIAL */}
      <section className="max-w-7xl mx-auto px-6 pb-36 pt-4">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* SIDEBAR DE FILTROS ANATÓMICOS */}
          <aside className="w-full lg:w-[320px] lg:sticky lg:top-28 bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-200/80 shrink-0">
            <div className="mb-6 pl-2">
              <h3 className="text-sm font-black text-slate-400 uppercase tracking-wider">Sistemas Anatómicos</h3>
              <p className="text-slate-900 font-bold text-xs mt-0.5">Filtre por especialidade do corpo</p>
            </div>

            <div className="space-y-2">
              {CATEGORIAS_SISTEMAS.map((cat) => {
                const isSelected = activeFilter === cat.id;
                const IconComponent = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`w-full p-4 rounded-2xl flex items-center gap-4 text-left transition-all group border ${
                      isSelected 
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-transparent shadow-md shadow-purple-500/10 font-bold' 
                        : 'bg-white text-slate-700 border-transparent hover:bg-slate-50 hover:border-slate-200'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                      isSelected ? 'bg-white/10 border-white/20 text-white' : 'bg-purple-50 border-purple-100 text-purple-600 group-hover:bg-white'
                    }`}>
                      <IconComponent size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-black tracking-tight leading-tight">{cat.label}</p>
                      <p className={`text-[11px] truncate mt-0.5 ${isSelected ? 'text-purple-100/80' : 'text-slate-400 font-medium'}`}>
                        {cat.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* ÁREA DE CONTEÚDO PRINCIPAL (ARTIGOS) */}
          <div className="flex-1 w-full">
            <div className="mb-6 flex justify-between items-center pl-2">
              <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight">
                Artigos Informativos <span className="text-slate-400 ml-1">({filteredDoencas.length})</span>
              </h2>
            </div>

            {filteredDoencas.length > 0 ? (
              <div className="space-y-8">
                {filteredDoencas.map((doenca, idx) => (
                  <motion.article
                    key={doenca.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white border border-slate-200/80 rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-xl hover:shadow-slate-200/30 transition-all duration-300 relative overflow-hidden group border-l-4 hover:border-l-purple-500"
                    style={{ borderLeftColor: activeFilter === 'todos' ? '#e2e8f0' : undefined }}
                  >
                    {/* Metadados do Artigo */}
                    <div className="flex flex-wrap items-center gap-3 mb-6 text-xs text-slate-400 font-bold">
                      <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full uppercase tracking-wider text-[10px] font-black border border-emerald-100">
                        {doenca.type}
                      </span>
                      <div className="flex items-center gap-1">
                        <Clock size={13} />
                        <span>{doenca.readTime}</span>
                      </div>
                    </div>

                    {/* Título e Sumário Clínico */}
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight group-hover:text-purple-600 transition-colors mb-4">
                      {doenca.name}
                    </h3>
                    <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-4xl mb-8">
                      {doenca.summary}
                    </p>

                    {/* Secções de Detalhe Interno do Artigo */}
                    <div className="grid md:grid-cols-2 gap-8 bg-slate-50 p-6 rounded-3xl border border-slate-100 mb-8">
                      <div>
                        <h4 className="text-[10px] text-slate-400 font-black uppercase tracking-wider mb-3">Sinais de Alerta & Sintomas</h4>
                        <div className="flex flex-wrap gap-2">
                          {doenca.symptoms.map((sintoma, sIdx) => (
                            <span key={sIdx} className="bg-white border border-slate-200/60 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm">
                              {sintoma}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[10px] text-slate-400 font-black uppercase tracking-wider mb-2">Abordagem Preventiva</h4>
                        <p className="text-slate-600 text-xs font-bold leading-relaxed">
                          {doenca.prevention}
                        </p>
                      </div>
                    </div>

                    {/* Rodapé do Artigo com Direcionamento */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="text-xs">
                        <span className="text-slate-400 font-bold">Canal de Apoio Recomendado: </span>
                        <strong className="text-purple-600 font-black uppercase tracking-wider pl-1">{doenca.specialist}</strong>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-black text-slate-400 group-hover:text-purple-600 transition-colors cursor-pointer">
                        Ler artigo completo <ChevronRight size={16} />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-white rounded-[3rem] border border-dashed border-slate-200">
                <p className="text-slate-400 font-black text-lg">Sem publicações nesta área</p>
                <p className="text-slate-400 text-sm mt-1">Brevemente a nossa equipa médica irá submeter novos artigos informativos.</p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 3. AVISO DE ISENÇÃO MÉDICA (FUNDO ESCURO PREMIUM) */}
      <section className="bg-slate-950 py-24 px-6 relative overflow-hidden border-t border-slate-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] -mr-40 -mt-40" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ShieldAlert size={28} />
          </div>
          <span className="text-purple-400 text-xs font-black uppercase tracking-[0.2em]">Nota de Responsabilidade</span>
          <h2 className="text-2xl md:text-4xl font-black text-white mt-3 tracking-tight max-w-2xl mx-auto">
            Este portal tem caráter estritamente educativo.
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-medium max-w-xl mx-auto mt-4 leading-relaxed">
            As informações disponibilizadas não substituem o diagnóstico, aconselhamento ou tratamentos realizados por profissionais de saúde qualificados.
          </p>
          <div className="mt-10">
            <button className="bg-gradient-to-r from-purple-500 via-purple-600 to-cyan-500 text-white font-black px-8 py-4 rounded-2xl hover:scale-105 transition-all shadow-lg shadow-purple-500/20 cursor-pointer text-sm">
              Agendar Triagem Médica
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}