'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ChevronRight } from 'lucide-react';

interface Hospital {
  name: string;
}

export default function AgendamentoModal({ hospital, onClose }: { hospital: Hospital | null, onClose: () => void }) {
  const [passo, setPasso] = useState(1);
  const [dataSel, setDataSel] = useState('');
  const [horaSel, setHoraSel] = useState('');

  const horas = ["09:00", "10:30", "14:00", "15:30", "17:00"];

  return (
    // ... resto do código igual, agora sem erros de tipo ...
    <div className="fixed inset-0 z-[250] flex items-center justify-center px-6">
       {/* Conteúdo do modal aqui */}
       <p className="text-sm">Hospital: {hospital?.name}</p>
       <button onClick={() => setPasso(2)} className="bg-blue-600 text-white p-4">Confirmar</button>
    </div>
  );
}