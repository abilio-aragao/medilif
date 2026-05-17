'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle2, Search, X, MapPin, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { HOSPITAIS_DATA, Hospital } from '@/lib/data';
import HospitalView from '@/components/HospitalView';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const SLIDE_IMAGES = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000",
  "https://images.unsplash.com/photo-1586773860383-dab5f3bc1bcc?q=80&w=2000",
  "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=2000"
];

const ENTIDADES = [
  "https://images.unsplash.com/photo-1666887360742-974c8fce8e6b?q=80&w=400",
  "https://images.unsplash.com/photo-1642929426263-caf1617ced29?q=80&w=400",
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400",
  "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=400",
  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400",
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400",
  "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400",
  "https://images.unsplash.com/photo-1678695972687-033fa0bdbac9?q=80&w=400"
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Hospital[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide(s => (s + 1) % SLIDE_IMAGES.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    
    const filtered = HOSPITAIS_DATA.filter(h => 
      h.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      h.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      h.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filtered.length > 0) {
      setResults(filtered);
      setShowModal(true);
      setShowError(false);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <div className="w-full bg-slate-50 font-sans overflow-x-hidden text-slate-800 relative">
      
      {/* Luzes de Fundo Combinando Verde, Lilás */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] left-1/4 w-[400px] h-[400px] bg-purple-200/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[40%] left-0 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[150px] pointer-events-none" />

      {/* --- SEÇÃO 1: HERO--- */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out" 
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {SLIDE_IMAGES.map((img, i) => (
            <img key={i} src={img} className="w-full h-full object-cover flex-shrink-0" alt="Hospital" />
          ))}
        </div>
   
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-purple-900/30 to-emerald-950/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/10" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-7xl font-black text-white tracking-tight drop-shadow-md"
          >
            A sua saúde em <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]">um click.</span>
          </motion.h1>
          
          {/* Input de busca adaptado para focar tanto no verde quanto no lilás */}
          <div className="mt-8 w-full max-w-2xl bg-white/90 backdrop-blur-md rounded-full p-1.5 flex shadow-[0_15px_35px_rgba(16,185,129,0.06)] border border-slate-200 focus-within:border-emerald-400 focus-within:shadow-[0_0_20px_rgba(147,51,234,0.2)] transition-all relative">
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Pesquisar hospitais ou especialidades..." 
              className="flex-1 px-6 outline-none bg-transparent text-slate-700 placeholder:text-slate-400 text-sm md:text-base font-medium" 
            />
            {/* Botão de Busca*/}
            <button 
              onClick={handleSearch}
              className="bg-gradient-to-r from-emerald-500 via-purple-600 to-blue-600 text-white p-3 md:px-10 md:py-4 rounded-full font-bold hover:opacity-95 shadow-[0_4px_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all flex items-center justify-center gap-2 min-w-[50px] md:min-w-fit active:scale-95"
            >
              <Search size={20} className="md:size-[18px]" />
              <span className="hidden md:inline">Buscar</span>
            </button>

            {/* Modal de Erro */}
            <AnimatePresence>
              {showError && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-500 to-red-600 text-white px-5 py-2.5 rounded-xl text-sm shadow-lg whitespace-nowrap z-50 font-bold"
                >
                  Nenhum hospital ou clínica encontrado.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- MODAL DE RESULTADOS DA BUSCA --- */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowModal(false)} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white border border-slate-100 w-full max-w-4xl max-h-[80vh] rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-gradient-to-r from-slate-50 via-purple-50/10 to-emerald-50/10">
                <h2 className="text-2xl font-black text-slate-800 tracking-tight">Resultados da Pesquisa</h2>
                <button onClick={() => setShowModal(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"><X /></button>
              </div>
              <div className="overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
                {results.map((hosp) => (
                  <button 
                    key={hosp.id} 
                    onClick={() => {
                      setSelectedHospital(hosp);
                      setShowModal(false);
                    }}
                    className="group flex gap-4 p-4 rounded-2xl border border-slate-100 hover:border-emerald-300 hover:shadow-[0_10px_25px_rgba(16,185,129,0.06)] hover:bg-emerald-50/5 transition-all text-left bg-white"
                  >
                    <img src={hosp.image} className="w-24 h-24 rounded-xl object-cover border border-slate-100" alt={hosp.name} />
                    <div className="flex-1">
                      <span className="text-[10px] font-bold uppercase text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-100">{hosp.type}</span>
                      <h3 className="font-bold text-slate-800 group-hover:text-emerald-600 transition-colors mt-1.5">{hosp.name}</h3>
                      <p className="text-xs text-slate-400 flex items-center gap-1 mt-1"><MapPin size={12} className="text-purple-400" /> {hosp.location}</p>
                      <div className="flex items-center gap-1 mt-2 text-amber-400 text-xs font-bold">
                        <Star size={12} fill="currentColor"/> {hosp.rating} <span className="text-slate-400 font-normal">({hosp.reviews})</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- SEÇÃO 2: CARROSSEL OVAL --- */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden font-lato">
        {/* Título com Degradê Fluido que viaja do Verde do Logo para o Lilás/Índigo */}
        <h4 className="text-xl md:text-3xl font-black text-center px-4 bg-gradient-to-r from-emerald-600 via-purple-600 to-indigo-900 bg-clip-text text-transparent mb-10 md:mb-16 tracking-tight max-w-4xl mx-auto leading-tight">
          Conecte-se aos hospitais e profissionais de saúde de Luanda
        </h4>
        
        <div className="w-full flex justify-center">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[EffectCoverflow, Autoplay]}
            className="w-full max-w-[1900px]"
            slidesPerView={1.2} 
            breakpoints={{
              640: { 
                slidesPerView: 3, 
                coverflowEffect: { stretch: -20, depth: 200 } 
              },
              1024: { 
                slidesPerView: 5, 
                coverflowEffect: { stretch: -40, depth: 250 } 
              }
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0, 
              depth: 150,
              modifier: 1.8,
              slideShadows: false,
            }}
          >
            {ENTIDADES.map((url, i) => (
              <SwiperSlide key={i} className="flex justify-center items-center py-10">
                {/* Sombra de Neon Lilás e Verde mesclada ao redor das pílulas */}
                <div className="w-48 h-64 md:w-56 md:h-72 rounded-[4rem] md:rounded-[6rem] border-8 border-white shadow-[0_15px_35px_rgba(147,51,234,0.08)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.2)] overflow-hidden bg-white transform transition-transform duration-500">
                  <img src={url} className="w-full h-full object-cover" alt="Saúde" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* --- SEÇÃO 3: VÍDEO --- */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
           {/* Subtítulo em Degradê Verde para Lilás */}
           <h2 className="font-black uppercase tracking-[0.2em] text-xl bg-gradient-to-r from-emerald-500 via-teal-600 to-purple-600 bg-clip-text text-transparent">Como funciona a MedLif</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] bg-slate-100 aspect-video relative group border-[6px] border-white">
            {!videoPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={() => setVideoPlaying(true)}>
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover" alt="Thumb" />
                <div className="absolute inset-0 bg-emerald-950/5 group-hover:bg-transparent transition-colors" />
                {/* Botão de Play */}
                <div className="relative z-10 w-20 h-20 bg-gradient-to-tr from-emerald-500 via-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)] transform group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] transition-all">
                  <Play fill="currentColor" size={28} className="ml-1" />
                </div>
              </div>
            ) : (
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/x7Ai8YZBI6A?autoplay=1" allow="autoplay; encrypted-media" allowFullScreen />
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { t: "1. Encontre", s: "Pesquise por médicos ou hospitais próximos de si." },
              { t: "2. Agende", s: "Escolha a especialidade e o horário ideal." },
              { t: "3. Consulte", s: "Realize a sua consulta presencial ou online." },
              { t: "4. Acompanhe", s: "Receba prescrições e exames no seu perfil." }
            ].map((serv, i) => (
              <div key={i} className="p-6 bg-white rounded-3xl flex items-start gap-4 hover:shadow-[0_15px_30px_rgba(16,185,129,0.04)] transition-all border border-slate-100 hover:border-emerald-200 group">
           
                <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0 drop-shadow-[0_2px_8px_rgba(16,185,129,0.2)]" size={22} />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm md:text-base group-hover:text-emerald-600 transition-colors">{serv.t}</h4>
                  <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed mt-1">{serv.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedHospital && (
          <HospitalView 
            hospital={selectedHospital} 
            onClose={() => setSelectedHospital(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}