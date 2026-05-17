'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import logoImg from '@/public/assets/logo.png';

export default function Footer() {
  const linksExplorar = [
    { label: 'Hospitais', href: '/hospitais' },
    { label: 'Clínicas', href: '/clinicas' },
    { label: 'Farmácias', href: '/farmacias' },
    { label: 'Doenças & Sintomas', href: '/doencas' },
    { label: 'Sobre Nós', href: '/sobre' },
  ];

  const linksSuporte = [
    { label: 'Central de Ajuda', href: '#' },
    { label: 'Termos de Uso', href: '#' },
    { label: 'Privacidade', href: '#' },
    { label: 'Contacto Directo', href: '#' },
  ];

  return (
    <footer className="bg-white border-t border-slate-200/60 font-sans pt-20 pb-10 px-6 text-slate-500 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-1px bg-linear-to-r from-transparent via-purple-300 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 items-start">
        
        {/* Bloco 1: BRANDING */}
        <div className="flex flex-col gap-4 lg:col-span-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 flex items-center justify-center overflow-hidden rounded-xl bg-slate-50 border border-slate-100 p-1.5">
              <Image 
                src={logoImg} 
                alt="MedLif Logo" 
                placeholder="blur" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">
              Med<span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">Lif</span>
            </span>
          </div>
          <p className="text-sm font-medium text-slate-400 leading-relaxed max-w-sm mt-1">
            O ecossistema inteligente de saúde que conecta pacientes, médicos especialistas, clínicas e farmácias em tempo real por toda Angola.
          </p>
          
          {/* Redes Sociais Premium com Efeito Hover Customizado */}
          <div className="flex items-center gap-2.5 mt-3">
            {[
              { icon: FaFacebookF, color: 'hover:bg-[#1877F2]', label: 'Facebook' },
              { icon: FaInstagram, color: 'hover:bg-[#E1306C]', label: 'Instagram' },
              { icon: FaTwitter, color: 'hover:bg-[#1DA1F2]', label: 'Twitter' }
            ].map((social, i) => {
              const Icon = social.icon;
              return (
                <a 
                  key={i}
                  href="#" 
                  aria-label={social.label}
                  className={`p-2.5 rounded-xl bg-slate-50 text-slate-400 border border-slate-200/60 hover:text-white ${social.color} hover:scale-105 hover:shadow-lg transition-all duration-300`}
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bloco 2: EXPLORAR*/}
        <div className="lg:col-span-2 lg:pl-4">
          <h4 className="text-slate-900 font-black text-xs uppercase tracking-widest mb-6">Explorar</h4>
          <ul className="space-y-3">
            {linksExplorar.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="text-sm font-bold text-slate-500 hover:text-purple-600 transition-colors inline-flex items-center gap-0.5 group">
                  {link.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bloco 3: SUPORTE  */}
        <div className="lg:col-span-2">
          <h4 className="text-slate-900 font-black text-xs uppercase tracking-widest mb-6">Suporte</h4>
          <ul className="space-y-3">
            {linksSuporte.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="text-sm font-bold text-slate-500 hover:text-cyan-600 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bloco 4: CONTACTOS OFICIAIS*/}
        <div className="lg:col-span-4 bg-slate-50/50 border border-slate-100 p-6 rounded-3xl">
          <h4 className="text-slate-900 font-black text-xs uppercase tracking-widest mb-5">Canais de Atendimento</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3.5 text-sm font-bold text-slate-600">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 shrink-0">
                <MapPin size={16} />
              </div>
              <div className="mt-0.5">
                <p className="text-slate-900 leading-none">Sede Central</p>
                <p className="text-xs text-slate-400 font-medium mt-1">Luanda, Angola</p>
              </div>
            </li>
            <li className="flex items-start gap-3.5 text-sm font-bold text-slate-600">
              <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                <Phone size={16} />
              </div>
              <div className="mt-0.5">
                <p className="text-slate-900 leading-none">+244 920 000 000</p>
                <p className="text-xs text-slate-400 font-medium mt-1">Segunda a Sexta · 8h às 18h</p>
              </div>
            </li>
            <li className="flex items-start gap-3.5 text-sm font-bold text-slate-600">
              <div className="w-8 h-8 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-500 shrink-0">
                <Mail size={16} />
              </div>
              <div className="mt-0.5">
                <p className="text-slate-900 leading-none">suporte@medlif.com</p>
                <p className="text-xs text-slate-400 font-medium mt-1">Resposta em até 24h úteis</p>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* RODAPÉ INFERIOR / DIREITOS AUTORAIS */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400">
        <div className="flex items-center gap-1.5">
          <span>© 2026</span>
          <span className="text-slate-700 font-black">MedLif</span>
          <span className="w-1 h-1 bg-slate-300 rounded-full" />
          <span>Todos os direitos reservados.</span>
        </div>
        <div className="flex items-center gap-1 text-slate-400/80">
          Tecnologia para uma vida com mais bem-estar.
        </div>
      </div>
    </footer>
  );
}