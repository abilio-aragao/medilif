'use client';

import { 
  LuMail, 
  LuPhone, 
  LuMapPin, 
  LuArrowRight, 
  LuExternalLink 
} from 'react-icons/lu'; // Lucide Icons
import { 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter 
} from 'react-icons/fa'; // Font Awesome Icons (Marcas)

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200">
                +
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900">MediLif</span>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed">
              Redefinindo o acesso à saúde em Angola através da tecnologia e cuidado humano.
            </p>
            
            {/* AGORA VAI FUNCIONAR: Ícones de marcas reais */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-6 uppercase text-[10px] tracking-[0.2em]">Plataforma</h4>
            <ul className="space-y-4 text-slate-500 font-bold text-sm">
              <li className="hover:text-blue-600 cursor-pointer flex items-center gap-2">Encontrar Hospital <LuExternalLink size={12}/></li>
              <li className="hover:text-blue-600 cursor-pointer">Farmácias Parceiras</li>
              <li className="hover:text-blue-600 cursor-pointer">Telemedicina</li>
              <li className="hover:text-blue-600 cursor-pointer">Agendamentos</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-6 uppercase text-[10px] tracking-[0.2em]">Institucional</h4>
            <ul className="space-y-4 text-slate-500 font-bold text-sm">
              <li className="hover:text-blue-600 cursor-pointer">Sobre a MediLif</li>
              <li className="hover:text-blue-600 cursor-pointer">Termos de Uso</li>
              <li className="hover:text-blue-600 cursor-pointer">Contacto</li>
            </ul>
          </div>

          <div className="glass p-8 rounded-[2.5rem] bg-blue-50/50 border border-blue-100 relative overflow-hidden group">
            <h4 className="font-black text-blue-900 mb-4 text-sm">Suporte MediLif</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-800 text-sm font-bold">
                <LuPhone size={16} /> <span>+244 923 000 000</span>
              </div>
              <div className="flex items-center gap-3 text-blue-800 text-sm font-bold">
                <LuMail size={16} /> <span>ajuda@medilif.ao</span>
              </div>
              <div className="flex items-center gap-3 text-blue-800 text-sm font-bold">
                <LuMapPin size={16} /> <span>Luanda, Angola</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">
            © 2026 MediLif — Angola. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]">
            <span>Status: Online</span>
            <span>v1.0.5 - Stable</span>
          </div>
        </div>
      </div>
    </footer>
  );
}