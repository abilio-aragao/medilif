'use client';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Hospitais Parceiros', val: '500+', color: 'bg-blue-600' },
  { label: 'Médicos Ativos', val: '2.000+', color: 'bg-cyan-500' },
  { label: 'Consultas Realizadas', val: '50k+', color: 'bg-indigo-600' },
  { label: 'Pacientes Satisfeitos', val: '98%', color: 'bg-emerald-500' },
];

export default function StatsSection() {
  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-12 grid md:grid-cols-4 gap-8 relative overflow-hidden">
        {stats.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-center md:border-r border-slate-800 last:border-0"
          >
            <h3 className="text-5xl font-black text-white mb-2">{s.val}</h3>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">{s.label}</p>
          </motion.div>
        ))}
  
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-blue-500/10 to-transparent" />
      </div>
    </section>
  );
}