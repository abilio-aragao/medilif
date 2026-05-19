'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  MapPin,
  ShoppingBag,
  Plus,
  Minus,
  CheckCircle2,
  CreditCard,
  Landmark,
  FileText,
  Smartphone,
  Loader2,
  RefreshCw,
} from 'lucide-react';

import {
  Farmacia,
  Medicamento,
  CATEGORIAS_FARMACIA,
} from '@/lib/data';

interface FarmaciaViewProps {
  farmacia: Farmacia;
  onClose: () => void;
}

interface ItemCarrinho {
  medicamento: Medicamento;
  quantity: number;
}

export default function FarmaciaView({
  farmacia,
  onClose,
}: FarmaciaViewProps) {
  const [selectedCat, setSelectedCat] = useState('todos');

  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);

  const [formaPagamentoEscolhida, setFormaPagamentoEscolhida] =
    useState<string>('');

  const [erroPagamento, setErroPagamento] = useState(false);

  const [compraConcluida, setCompraConcluida] = useState(false);

  // SIMULAÇÃO DE FLUXOS DE PAGAMENTO REAIS (ANGOLA)
  const [dadosIban, setDadosIban] = useState({ banco: '', titular: '', comprovativo: '' });
  const [telefoneExpress, setTelefoneExpress] = useState('');
  const [referenciaGerada, setReferenciaGerada] = useState({ entidade: '00324', numero: '' });
  const [statusReferencia, setStatusReferencia] = useState<'pendente' | 'processando' | 'pago'>('pendente');

  // Gerar um número de referência aleatório simulado sempre que o total mudar
  const totalPreco = carrinho.reduce(
    (acc, item) =>
      acc +
      item.medicamento.price * item.quantity,
    0
  );

  useEffect(() => {
    if (totalPreco > 0) {
      setReferenciaGerada({
        entidade: '00324',
        numero: Math.floor(100000000 + Math.random() * 900000000).toString()
      });
      setStatusReferencia('pendente');
    }
  }, [totalPreco]);

  // FILTRAR PRODUTOS
  const medicamentosFiltrados = farmacia.stock.filter((med) =>
    selectedCat === 'todos'
      ? true
      : med.category === selectedCat
  );

  // ADICIONAR AO CARRINHO
  const adicionarAoCarrinho = (med: Medicamento) => {
    setCarrinho((prev) => {
      const existe = prev.find(
        (item) => item.medicamento.id === med.id
      );

      if (existe) {
        return prev.map((item) =>
          item.medicamento.id === med.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          medicamento: med,
          quantity: 1,
        },
      ];
    });
  };

  const alterarQuantidade = (
    id: string,
    delta: number
  ) => {
    setCarrinho((prev) =>
      prev
        .map((item) => {
          if (item.medicamento.id === id) {
            const novaQtd = item.quantity + delta;

            return novaQtd > 0
              ? {
                  ...item,
                  quantity: novaQtd,
                }
              : null;
          }

          return item;
        })
        .filter(Boolean) as ItemCarrinho[]
    );
  };

  // GATEWAY SIMULADA: Validação do pagamento por referência
  const simularPagamentoNoBanco = () => {
    setStatusReferencia('processando');
    setTimeout(() => {
      setStatusReferencia('pago');
    }, 2500); // 2 segundos e meio de carregamento falso
  };

  // FINALIZAR COM VALIDAÇÕES EXTRAS
  const lidarComFinalizacao = () => {
    if (!formaPagamentoEscolhida) {
      setErroPagamento(true);
      return;
    }

    // Se escolheu Referência, só deixa avançar se o status for 'pago'
    if (formaPagamentoEscolhida.toLowerCase() === 'referência' && statusReferencia !== 'pago') {
      alert('Atenção: Use o botão "Simular Pagamento no Multicaixa" para validar a transação antes de concluir!');
      return;
    }

    // Se escolheu IBAN, obriga a preencher campos básicos de simulação
    if (formaPagamentoEscolhida.toLowerCase() === 'iban' && (!dadosIban.banco || !dadosIban.titular)) {
      alert('Por favor, introduza o seu banco e o nome do titular para anexar o depósito.');
      return;
    }

    setErroPagamento(false);
    setCompraConcluida(true);
  };

  // CORES PAGAMENTO
  const getCorMetodo = (metodo: string) => {
    switch (metodo.toLowerCase()) {
      case 'multicaixa':
      case 'referência':
        return 'peer-checked:border-blue-500 peer-checked:bg-blue-50/50';

      case 'express':
        return 'peer-checked:border-emerald-500 peer-checked:bg-emerald-50/50';

      case 'iban':
        return 'peer-checked:border-purple-500 peer-checked:bg-purple-50/50';

      default:
        return 'peer-checked:border-amber-500 peer-checked:bg-amber-50/50';
    }
  };

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
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 200,
        }}
        className="
          w-full
          xl:w-[85vw]
          h-screen
          bg-slate-50
          shadow-2xl
          flex
          flex-col
          lg:flex-row
          overflow-hidden
        "
      >
        {/* ESQUERDA */}
        <div className="flex-1 overflow-y-auto min-h-0 pb-12">
          {/* HEADER */}
          <div className="relative h-64 w-full bg-slate-950">
            <img
              src={farmacia.image}
              alt={farmacia.name}
              className="w-full h-full object-cover brightness-[0.3]"
            />

            <button
              onClick={onClose}
              className="absolute top-6 left-6 bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition-all border border-white/20 cursor-pointer z-20"
            >
              <X size={20} />
            </button>

            <div className="absolute bottom-6 left-8 text-white z-10">
              <div className="flex items-center gap-2 mb-2">
                {farmacia.isOpen24h && (
                  <span className="bg-emerald-500 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                    24 Horas
                  </span>
                )}

                <span className="bg-cyan-500/20 border border-cyan-400 text-cyan-300 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                  {farmacia.deliveryTime}
                </span>
              </div>

              <h2 className="text-3xl font-black tracking-tight">
                {farmacia.name}
              </h2>

              <p className="text-slate-300 text-sm font-bold flex items-center gap-1.5 mt-1">
                <MapPin
                  size={14}
                  className="text-purple-400"
                />
                {farmacia.location}
              </p>
            </div>
          </div>

          {/* CONTEÚDO */}
          <div className="p-4 sm:p-6 lg:p-8">
            {/* CATEGORIAS */}
            <h3 className="text-lg font-black text-slate-900 mb-4">
              Departamentos da Farmácia
            </h3>

            <div className="flex flex-wrap gap-3 mb-8">
              {CATEGORIAS_FARMACIA.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() =>
                    setSelectedCat(cat.id)
                  }
                  className={`
                    px-5
                    py-2.5
                    rounded-xl
                    text-xs
                    font-black
                    transition-all
                    cursor-pointer
                    border
                    ${
                      selectedCat === cat.id
                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white border-transparent shadow-md'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-purple-300'
                    }
                  `}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* PRODUTOS */}
            <h3 className="text-lg font-black text-slate-900 mb-6">
              Medicamentos Disponíveis
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {medicamentosFiltrados.map((med) => (
                <div
                  key={med.id}
                  className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm flex flex-col justify-between group hover:border-purple-200 transition-colors"
                >
                  <div className="flex gap-4">
                    <img
                      src={med.image}
                      alt={med.name}
                      className="w-20 h-20 bg-slate-100 rounded-2xl object-cover border border-slate-200"
                    />

                    <div>
                      <h4 className="font-black text-slate-900 text-sm leading-tight group-hover:text-purple-600 transition-colors">
                        {med.name}
                      </h4>

                      <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-md font-bold text-slate-500 inline-block mt-1.5">
                        {med.category}
                      </span>

                      <p className="text-lg font-black text-emerald-600 mt-2">
                        {med.price.toLocaleString()} Kz
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span
                      className={`text-xs font-bold ${
                        med.inStock
                          ? 'text-emerald-500'
                          : 'text-slate-400'
                      }`}
                    >
                      {med.inStock
                        ? '● Em Stock'
                        : '○ Esgotado'}
                    </span>

                    <button
                      disabled={!med.inStock}
                      onClick={() =>
                        adicionarAoCarrinho(med)
                      }
                      className="bg-purple-50 text-purple-600 hover:bg-purple-600 hover:text-white disabled:bg-slate-100 disabled:text-slate-400 p-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Plus size={14} />
                      Adicionar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DIREITA */}
        <div
          className="
            w-full
            lg:w-100
            bg-white
            border-t
            lg:border-t-0
            lg:border-l
            border-slate-200
            flex
            flex-col
            justify-between
            relative
            max-h-[45vh]
            lg:max-h-none
          "
        >
          {/* HEADER */}
          <div className="p-6 border-b border-slate-100 flex items-center gap-2">
            <ShoppingBag
              className="text-cyan-500"
              size={20}
            />

            <h3 className="font-black text-slate-900 text-lg">
              Carrinho
            </h3>

            <span className="ml-auto bg-purple-100 text-purple-600 text-xs font-black px-2 py-0.5 rounded-full">
              {carrinho.length}
            </span>
          </div>

          {/* CONTEÚDO */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 min-h-0">
            {carrinho.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-slate-400 font-bold text-sm">
                  O teu carrinho está vazio.
                </p>

                <p className="text-xs text-slate-400 mt-1">
                  Adicione medicamentos para comprar.
                </p>
              </div>
            ) : (
              <>
                {/* ITENS */}
                <div className="space-y-3">
                  {carrinho.map((item) => (
                    <div
                      key={item.medicamento.id}
                      className="flex items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-100"
                    >
                      <div className="max-w-[60%]">
                        <h5 className="font-bold text-slate-900 text-xs truncate">
                          {item.medicamento.name}
                        </h5>

                        <p className="text-xs font-black text-emerald-600 mt-0.5">
                          {(
                            item.medicamento.price *
                            item.quantity
                          ).toLocaleString()}{' '}
                          Kz
                        </p>
                      </div>

                      <div className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl p-1">
                        <button
                          onClick={() =>
                            alterarQuantidade(
                              item.medicamento.id,
                              -1
                            )
                          }
                          className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"
                        >
                          <Minus size={12} />
                        </button>

                        <span className="text-xs font-black text-slate-900 w-4 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            adicionarAoCarrinho(
                              item.medicamento
                            )
                          }
                          className="p-1 text-slate-500 hover:bg-slate-100 rounded-lg"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* PAGAMENTO ATUALIZADO (Focado em Referência, IBAN e Express) */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-black text-slate-900 mb-3 flex items-center gap-1.5">
                    <CreditCard
                      size={14}
                      className="text-purple-500"
                    />
                    Forma de Pagamento
                  </p>

                  {erroPagamento && (
                    <p className="text-[11px] font-black text-rose-500 mb-2">
                      Selecione uma opção e insira os dados necessários.
                    </p>
                  )}

                  <div className="grid grid-cols-3 gap-2">
                    {['Referência', 'IBAN', 'Express'].map(
                      (metodo, mIdx) => (
                        <label
                          key={mIdx}
                          className="relative block cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="metodo_pagamento"
                            value={metodo}
                            checked={
                              formaPagamentoEscolhida ===
                              metodo
                            }
                            onChange={(e) => {
                              setFormaPagamentoEscolhida(
                                e.target.value
                              );
                              setErroPagamento(false);
                            }}
                            className="sr-only peer"
                          />

                          <div
                            className={`
                              border
                              border-slate-200
                              text-slate-700
                              text-[11px]
                              font-bold
                              py-2.5
                              rounded-xl
                              text-center
                              transition-all
                              peer-checked:font-black
                              ${getCorMetodo(metodo)}
                            `}
                          >
                            {metodo}
                          </div>
                        </label>
                      )
                    )}
                  </div>

                  {/* FORMULÁRIOS DINÂMICOS CONFORME A ESCOLHA */}
                  <AnimatePresence mode="wait">
                    {formaPagamentoEscolhida === 'IBAN' && (
                      <motion.div 
                        initial={{ opacity: 0, y: -5 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: -5 }}
                        className="mt-3 bg-slate-50 border border-purple-100 p-3 rounded-xl space-y-2.5"
                      >
                        <div className="text-[10px] text-slate-600 bg-purple-50 p-2.5 border border-purple-100/60 rounded-xl font-medium">
                          <p className="font-black text-purple-700 flex items-center gap-1"><Landmark size={12}/> Coordenadas de Depósito:</p>
                          <p className="mt-1 font-mono text-slate-800 font-bold">IBAN: AO06.0040.0000.7765.1290.3412.1</p>
                          <p className="font-bold text-slate-600">Banco: BAI | Titular: MedLif Angola Lda.</p>
                        </div>
                        <input 
                          type="text" 
                          placeholder="Teu Banco (Ex: BFA, BAI, BIC)" 
                          value={dadosIban.banco}
                          onChange={(e) => setDadosIban({...dadosIban, banco: e.target.value})}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold outline-none focus:border-purple-400 text-slate-800"
                        />
                        <input 
                          type="text" 
                          placeholder="Nome Completo do Titular" 
                          value={dadosIban.titular}
                          onChange={(e) => setDadosIban({...dadosIban, titular: e.target.value})}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold outline-none focus:border-purple-400 text-slate-800"
                        />
                        <label className="flex items-center justify-center gap-2 border border-dashed border-slate-300 bg-white rounded-xl p-2.5 text-xs text-slate-500 font-bold cursor-pointer hover:bg-slate-100">
                          <FileText size={14} className="text-purple-500" /> {dadosIban.comprovativo ? '✓ Comprovativo Carregado' : 'Carregar Foto do Comprovativo'}
                          <input type="file" className="sr-only" onChange={() => setDadosIban({...dadosIban, comprovativo: 'anexo_ok.jpg'})} />
                        </label>
                      </motion.div>
                    )}

                    {formaPagamentoEscolhida === 'Referência' && (
                      <motion.div 
                        initial={{ opacity: 0, y: -5 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: -5 }}
                        className="mt-3 bg-slate-50 border border-blue-100 p-3 rounded-xl space-y-2.5"
                      >
                        <div className="bg-white border border-slate-200 rounded-xl p-3 text-center font-mono space-y-1.5 relative shadow-2xs">
                          <div className="absolute top-2 right-2">
                            {statusReferencia === 'pendente' && <span className="bg-amber-100 text-amber-700 text-[9px] px-2 py-0.5 rounded-full font-black">Aguardando</span>}
                            {statusReferencia === 'processando' && <span className="bg-blue-100 text-blue-700 text-[9px] px-2 py-0.5 rounded-full font-bold flex items-center gap-0.5"><Loader2 size={10} className="animate-spin" /> A validar</span>}
                            {statusReferencia === 'pago' && <span className="bg-emerald-100 text-emerald-700 text-[9px] px-2 py-0.5 rounded-full font-black">● Pago no Multicaixa</span>}
                          </div>
                          <div>
                            <p className="text-[9px] font-sans text-slate-400 font-bold uppercase">Entidade</p>
                            <p className="text-sm font-black text-slate-800">{referenciaGerada.entidade}</p>
                          </div>
                          <div className="border-t border-slate-100 pt-1">
                            <p className="text-[9px] font-sans text-slate-400 font-bold uppercase">Referência</p>
                            <p className="text-base font-black tracking-wider text-blue-600">{referenciaGerada.numero.replace(/(.{3})/g, '$1 ')}</p>
                          </div>
                          <div className="border-t border-slate-100 pt-1">
                            <p className="text-[9px] font-sans text-slate-400 font-bold uppercase">Valor</p>
                            <p className="text-sm font-black text-emerald-600">{totalPreco.toLocaleString()} Kz</p>
                          </div>
                        </div>

                        {statusReferencia !== 'pago' ? (
                          <button 
                            type="button" 
                            onClick={simularPagamentoNoBanco} 
                            disabled={statusReferencia === 'processando'}
                            className="w-full bg-blue-600 text-white font-black text-xs py-2 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:bg-slate-300"
                          >
                            {statusReferencia === 'processando' ? 'A detetar transação...' : 'Simular Pagamento no Multicaixa'}
                            {statusReferencia !== 'processando' && <RefreshCw size={12} />}
                          </button>
                        ) : (
                          <p className="text-[11px] text-emerald-700 font-black text-center bg-emerald-50 border border-emerald-200 py-2 rounded-xl">✓ Gateway atualizada: O sistema recebeu o pagamento!</p>
                        )}
                      </motion.div>
                    )}

                    {formaPagamentoEscolhida === 'Express' && (
                      <motion.div 
                        initial={{ opacity: 0, y: -5 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: -5 }}
                        className="mt-3 bg-slate-50 border border-emerald-100 p-3 rounded-xl space-y-2"
                      >
                        <p className="text-[11px] text-slate-600 font-medium">Introduza o número de telemóvel registado na app Express.</p>
                        <div className="flex gap-2">
                          <div className="bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-bold text-slate-400 flex items-center shadow-2xs">+244</div>
                          <input 
                            type="tel" 
                            maxLength={9} 
                            placeholder="9XXXXXXXX" 
                            value={telefoneExpress}
                            onChange={(e) => setTelefoneExpress(e.target.value.replace(/\D/g, ''))}
                            className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold outline-none focus:border-emerald-400 text-slate-800 shadow-2xs"
                          />
                        </div>
                        <p className="text-[10px] text-slate-400 font-bold italic flex items-center gap-1"><Smartphone size={12}/> Irá receber um push-notificação para validar com o PIN no telemóvel.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}
          </div>

          {/* FOOTER */}
          <div className="p-6 bg-slate-50 border-t border-slate-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-slate-500">
                Total Geral:
              </span>

              <span className="text-xl font-black text-slate-900">
                {totalPreco.toLocaleString()} Kz
              </span>
            </div>

            <button
              disabled={carrinho.length === 0 || (formaPagamentoEscolhida === 'Referência' && statusReferencia !== 'pago')}
              onClick={lidarComFinalizacao}
              className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-black text-sm py-4 rounded-2xl shadow-lg hover:shadow-cyan-200 transition-all active:scale-[0.98] disabled:from-slate-200 disabled:to-slate-300 disabled:text-slate-400 disabled:shadow-none cursor-pointer"
            >
              {formaPagamentoEscolhida === 'Referência' && statusReferencia !== 'pago' ? 'Aguardando Validação da Ref.' : 'Confirmar Compra'}
            </button>
          </div>

          {/* SUCESSO */}
          <AnimatePresence>
            {compraConcluida && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-white z-30 p-8 flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <CheckCircle2 size={36} />
                </div>

                <h4 className="text-xl font-black text-slate-900">
                  Pedido Pago e Confirmado!
                </h4>

                <p className="text-slate-400 text-xs mt-2 max-w-xs font-medium">
                  O teu pagamento foi liquidado com sucesso. Os teus medicamentos já estão
                  a ser preparados na farmácia.
                </p>

                <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl w-full max-w-xs mt-4 text-left font-mono text-[11px] text-slate-600 space-y-0.5">
                  <p className="font-sans text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Comprovativo Digital
                  </p>
                  <p>● Destino: {farmacia.name}</p>
                  <p>● Total Pago: {totalPreco.toLocaleString()} Kz</p>
                  <p>● Método: Via {formaPagamentoEscolhida}</p>
                  {formaPagamentoEscolhida === 'Referência' && <p>● Ref ID: MCX-{referenciaGerada.numero.slice(0, 5)}</p>}
                  {formaPagamentoEscolhida === 'IBAN' && <p>● Banco Origem: {dadosIban.banco.toUpperCase()}</p>}
                </div>

                <div className="bg-purple-50 text-purple-700 px-4 py-2 rounded-xl font-bold text-xs mt-4 border border-purple-100">
                  Entrega: {farmacia.deliveryTime}
                </div>

                <button
                  onClick={() => {
                    setCompraConcluida(false);
                    setCarrinho([]);
                    setFormaPagamentoEscolhida(
                      ''
                    );
                    setDadosIban({ banco: '', titular: '', comprovativo: '' });
                    setTelefoneExpress('');
                    setStatusReferencia('pendente');
                    onClose();
                  }}
                  className="mt-8 text-sm font-black text-slate-900 hover:underline cursor-pointer"
                >
                  Fechar
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}