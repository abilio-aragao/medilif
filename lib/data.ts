// @/lib/data.ts

export interface Hospital {
  id: number;
  name: string;
  location: string;
  address: string;
  rating: number;
  reviews: number;
  image: string;
  type: 'Hospital' | 'Clínica' | 'Centro Médico';
  specialties: string[];
}

export interface Medicamento {
  id: string;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  image: string;
}

export interface Farmacia {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  deliveryTime: string;
  isOpen24h: boolean;
  stock: Medicamento[];
}
export const HOSPITAIS_DATA: Hospital[] = [
  { 
    id: 1, 
    name: "Hospital Endiama", 
    location: "Ilha de Luanda", 
    address: "Av. Murtala Mohammed, Ilha de Luanda",
    rating: 4.9, 
    reviews: 1240, 
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=500", 
    type: "Hospital",
    specialties: ["Clínica Geral", "Cardiologia", "Estomatologia", "Ginecologia", "Pediatria", "Ortopedia"]
  },
  { 
    id: 2, 
    name: "Clínica Sagrada Esperança", 
    location: "Ilha de Luanda", 
    address: "Av. Agostinho Neto, Ilha de Luanda",
    rating: 4.8, 
    reviews: 850, 
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=500", 
    type: "Clínica",
    specialties: ["Dermatologia", "Oftalmologia", "Ortopedia", "Urologia", "Clínica Geral", "Gastroenterologia"]
  },
  { 
    id: 3, 
    name: "Hospital Girassol", 
    location: "Maianga, Luanda", 
    address: "Av. Comandante Gika, 225",
    rating: 4.9, 
    reviews: 3100, 
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=500", 
    type: "Hospital",
    specialties: ["Neurocirurgia", "Oncologia", "Cirurgia Geral", "Cardiologia", "Clínica Geral", "Nefrologia"]
  },
  { 
    id: 4, 
    name: "Centro Médico Endiama Viana", 
    location: "Viana, Luanda", 
    address: "Estrada de Viana, Km 12",
    rating: 4.7, 
    reviews: 320, 
    image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?q=80&w=500", 
    type: "Centro Médico",
    specialties: ["Clínica Geral", "Pediatria", "Ginecologia", "Enfermagem"]
  },
  { 
    id: 5, 
    name: "Hospital Central de Luanda", 
    location: "Ingombota, Luanda", 
    address: "Rua Amílcar Cabral",
    rating: 4.5, 
    reviews: 2100, 
    image: "https://images.unsplash.com/photo-1586773860418-d3b9797d16d0?q=80&w=500", 
    type: "Hospital",
    specialties: ["Urgências", "Cirurgia", "Medicina Interna", "Ortopedia", "Clínica Geral"]
  },
  { 
    id: 6, 
    name: "Clínica Multiperfil", 
    location: "Morro Bento, Luanda", 
    address: "Via S8, Morro Bento",
    rating: 4.7, 
    reviews: 940, 
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=500", 
    type: "Clínica",
    specialties: ["Diálise", "Fisioterapia", "Cardiologia", "Clínica Geral", "Check-up"]
  },
  { 
    id: 7, 
    name: "Hospital Geral de Benguela", 
    location: "Benguela", 
    address: "Zona Central, Benguela",
    rating: 4.3, 
    reviews: 760, 
    image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?q=80&w=500", 
    type: "Hospital",
    specialties: ["Maternidade", "Pediatria", "Cirurgia", "Clínica Geral"]
  },
  { 
    id: 8, 
    name: "Centro Médico da Paz", 
    location: "Talatona, Luanda", 
    address: "Via AL15, Talatona",
    rating: 4.8, 
    reviews: 520, 
    image: "https://images.unsplash.com/photo-1504813184591-01592f2bb94b?q=80&w=500", 
    type: "Centro Médico",
    specialties: ["Psicologia", "Nutrição", "Clínica Geral", "Medicina Dentária"]
  },
  { 
    id: 9, 
    name: "Hospital Militar Principal", 
    location: "Luanda", 
    address: "Rua da Missão",
    rating: 4.4, 
    reviews: 1100, 
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=500", 
    type: "Hospital",
    specialties: ["Traumatologia", "Cirurgia", "Reabilitação", "Clínica Geral"]
  },
  { 
    id: 10, 
    name: "Clínica Girassol Kilamba", 
    location: "Centralidade do Kilamba", 
    address: "Quarteirão X, Edifício 4",
    rating: 4.6, 
    reviews: 430, 
    image: "https://images.unsplash.com/photo-1538108197394-72f0015d2e1d?q=80&w=500", 
    type: "Clínica",
    specialties: ["Pediatria", "Ginecologia", "Clínica Geral", "Análises Clínicas"]
  },
  { 
    id: 11, 
    name: "Hospital Josina Machel", 
    location: "Maianga, Luanda", 
    address: "Rua da Liberdade",
    rating: 4.2, 
    reviews: 2800, 
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=500", 
    type: "Hospital",
    specialties: ["Neurologia", "Oftalmologia", "Otorrinolaringologia", "Clínica Geral"]
  },
  { 
    id: 12, 
    name: "Hospital Materno Infantil", 
    location: "Camama, Luanda", 
    address: "Via Expressa, Luanda",
    rating: 4.8, 
    reviews: 1500, 
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=500", 
    type: "Hospital",
    specialties: ["Obstetrícia", "Neonatologia", "Pediatria", "Ginecologia"]
  },
  { 
    id: 13, 
    name: "Clínica Luanda Medical Center", 
    location: "Ingombota, Luanda", 
    address: "Rua Rainha Ginga",
    rating: 4.9, 
    reviews: 980, 
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=500", 
    type: "Clínica",
    specialties: ["Imagiologia", "Cardiologia", "Medicina Desportiva", "Clínica Geral"]
  },
  { 
    id: 14, 
    name: "Hospital Municipal do Lobito", 
    location: "Lobito, Benguela", 
    address: "Bairro da Luz, Lobito",
    rating: 4.1, 
    reviews: 640, 
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=500", 
    type: "Hospital",
    specialties: ["Saúde Pública", "Clínica Geral", "Pediatria"]
  },
  { 
    id: 15, 
    name: "Centro Médico Caridade", 
    location: "Cacuaco, Luanda", 
    address: "Zona Industrial de Cacuaco",
    rating: 4.3, 
    reviews: 210, 
    image: "https://images.unsplash.com/photo-1502740384197-60d15e293302?q=80&w=500", 
    type: "Centro Médico",
    specialties: ["Clínica Geral", "Enfermagem", "Vacinamento"]
  },
  { 
    id: 16, 
    name: "Hospital Geral do Huambo", 
    location: "Huambo", 
    address: "Av. da Independência",
    rating: 4.4, 
    reviews: 890, 
    image: "https://images.unsplash.com/photo-1519494083224-216dc8221652?q=80&w=500", 
    type: "Hospital",
    specialties: ["Cirurgia", "Medicina Interna", "Ortopedia", "Clínica Geral"]
  },
  { 
    id: 17, 
    name: "Clínica Mediang", 
    location: "Samba, Luanda", 
    address: "Rua Direta da Samba",
    rating: 4.5, 
    reviews: 340, 
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=500", 
    type: "Clínica",
    specialties: ["Ginecologia", "Pediatria", "Clínica Geral"]
  },
  { 
    id: 18, 
    name: "Hospital do Prenda", 
    location: "Samba, Luanda", 
    address: "Bairro do Prenda",
    rating: 4.0, 
    reviews: 1200, 
    image: "https://images.unsplash.com/photo-1579154236594-e178f54716ee?q=80&w=500", 
    type: "Hospital",
    specialties: ["Urgências", "Ortopedia", "Clínica Geral"]
  },
  { 
    id: 19, 
    name: "Clínica do Sol", 
    location: "Alvalade, Luanda", 
    address: "Av. Comandante Stona",
    rating: 4.7, 
    reviews: 560, 
    image: "https://images.unsplash.com/photo-1631217816690-909897e46ec0?q=80&w=500", 
    type: "Clínica",
    specialties: ["Estomatologia", "Dermatologia", "Clínica Geral"]
  },
  { 
    id: 20, 
    name: "Centro Médico Girassol Talatona", 
    location: "Talatona, Luanda", 
    address: "Condomínio Dolce Vita",
    rating: 4.8, 
    reviews: 410, 
    image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=500", 
    type: "Centro Médico",
    specialties: ["Medicina do Trabalho", "Clínica Geral", "Fisioterapia"]
  },
];

export const CATEGORIAS_FILTRO = [
  { id: "Clínica Geral", label: "Clínica Geral", desc: "Consultas de rotina", gradient: "from-emerald-400 to-emerald-600" },
  { id: "Cardiologia", label: "Cardiologia", desc: "Saúde do coração", gradient: "from-rose-500 to-red-600" },
  { id: "Pediatria", label: "Pediatria", desc: "Cuidado infantil", gradient: "from-blue-400 to-blue-600" },
  { id: "Ginecologia", label: "Ginecologia", desc: "Saúde da mulher", gradient: "from-purple-500 to-indigo-600" },
  { id: "Ortopedia", label: "Ortopedia", desc: "Ossos e articulações", gradient: "from-amber-500 to-orange-600" },
  { id: "Urgências", label: "Urgências 24h", desc: "Atendimento imediato", gradient: "from-slate-700 to-slate-900" }
];
export const FARMACIAS_DATA: Farmacia[] = [
  {
    id: 'f1',
    name: 'Farmácia Angola Popular',
    location: 'Maianga, Luanda',
    rating: 4.9,
    reviews: 412,
    deliveryTime: '20-40 min',
    isOpen24h: true,
    image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=600',
    stock: [
      { id: 'm1', name: 'Paracetamol 500mg (20 Comprimidos)', price: 1500, category: 'Analgesicos', inStock: true, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=200' },
      { id: 'm2', name: 'Amoxicilina 500mg', price: 3400, category: 'Antibioticos', inStock: true, image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=200' },
      { id: 'm3', name: 'Vitamina C Zinco Efervescente', price: 2100, category: 'Suplementos', inStock: true, image: 'https://images.unsplash.com/photo-1616679911721-eff6eec18fcd?q=80&w=200' },
    ]
  },
  {
    id: 'f2',
    name: 'Farmácia Mecofarma',
    location: 'Talatona, Luanda',
    rating: 4.7,
    reviews: 298,
    deliveryTime: '30-50 min',
    isOpen24h: false,
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=600',
    stock: [
      { id: 'm1', name: 'Paracetamol 500mg (20 Comprimidos)', price: 1600, category: 'Analgesicos', inStock: true, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=200' },
      { id: 'm4', name: 'Ibuprofeno 400mg', price: 1850, category: 'Analgesicos', inStock: false, image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=200' },
    ]
  }
,

  {
    id: 'f3',
    name: 'Farmácia Alvalade Saúde',
    location: 'Alvalade, Luanda',
    rating: 4.8,
    reviews: 312,
    deliveryTime: '20-35 min',
    isOpen24h: true,
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=600',
    stock: [
      { id: 'm1', name: 'Paracetamol 500mg (20 Comprimidos)', price: 1500, category: 'Analgésicos', inStock: true, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=200' },
      { id: 'm5', name: 'Desloratadina 5mg Antialérgico', price: 2800, category: 'Anti-histamínicos', inStock: true, image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=200' },
    ]
  },
  {
    id: 'f4',
    name: 'Farmácia Kilamba Vida',
    location: 'Kilamba, Luanda',
    rating: 4.6,
    reviews: 189,
    deliveryTime: '30-50 min',
    isOpen24h: false,
    image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=600',
    stock: [ { id: 'm1', name: 'Paracetamol 500mg (20 Comprimidos)', price: 1600, category: 'Analgesicos', inStock: true, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=200' },
      { id: 'm4', name: 'Ibuprofeno 400mg', price: 1850, category: 'Analgesicos', inStock: false, image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=200' },]
  },
  {
    id: 'f5',
    name: 'Mecofarma Talatona Premium',
    location: 'Talatona, Luanda',
    rating: 4.9,
    reviews: 520,
    deliveryTime: '15-30 min',
    isOpen24h: true,
    image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=600',
    stock: [ { id: 'm1', name: 'Paracetamol 500mg (20 Comprimidos)', price: 1600, category: 'Analgesicos', inStock: true, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=200' },
      { id: 'm4', name: 'Ibuprofeno 400mg', price: 1850, category: 'Analgesicos', inStock: false, image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=200' },]
  },
  { id: 'f6', name: 'Farmácia Nova Viana', location: 'Viana, Luanda', rating: 4.5, reviews: 145, deliveryTime: '40-60 min', isOpen24h: false, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600', stock: [ { id: 'm1', name: 'Paracetamol 500mg (20 Comprimidos)', price: 1600, category: 'Analgesicos', inStock: true, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=200' },
      { id: 'm4', name: 'Ibuprofeno 400mg', price: 1850, category: 'Analgesicos', inStock: false, image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=200' },] },
  { id: 'f7', name: 'Farmácia Central Lobito', location: 'Lobito, Benguela', rating: 4.7, reviews: 210, deliveryTime: '25-40 min', isOpen24h: true, image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=600', stock: [ { id: 'm1', name: 'Paracetamol 500mg (20 Comprimidos)', price: 1600, category: 'Analgesicos', inStock: true, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=200' },
      { id: 'm4', name: 'Ibuprofeno 400mg', price: 1850, category: 'Analgesicos', inStock: false, image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=200' },] },
  { id: 'f8', name: 'Farmácia Maravilha Samba', location: 'Samba, Luanda', rating: 4.8, reviews: 367, deliveryTime: '30-45 min', isOpen24h: false, image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=600', stock: [ { id: 'm1', name: 'Paracetamol 500mg (20 Comprimidos)', price: 1600, category: 'Analgesicos', inStock: true, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=200' },
      { id: 'm4', name: 'Ibuprofeno 400mg', price: 1850, category: 'Analgesicos', inStock: false, image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=200' },] },
  { id: 'f9', name: 'Farmácia Prenda Saúde', location: 'Samba, Luanda', rating: 4.3, reviews: 98, deliveryTime: '20-35 min', isOpen24h: false, image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=600', stock: [] },
  { id: 'f10', name: 'Farmácia Luanda Sul', location: 'Viana, Luanda', rating: 4.6, reviews: 223, deliveryTime: '35-55 min', isOpen24h: false, image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=600', stock: [ { id: 'm1', name: 'Paracetamol 500mg (20 Comprimidos)', price: 1600, category: 'Analgesicos', inStock: true, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=200' },
      { id: 'm4', name: 'Ibuprofeno 400mg', price: 1850, category: 'Analgesicos', inStock: false, image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=200' },] },
  { id: 'f11', name: 'Farmácia Benguela Premium', location: 'Benguela', rating: 4.9, reviews: 489, deliveryTime: '15-30 min', isOpen24h: true, image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=600', stock: [] },
  { id: 'f12', name: 'Farmácia Multiperfil Morro Bento', location: 'Morro Bento, Luanda', rating: 4.7, reviews: 310, deliveryTime: '25-40 min', isOpen24h: false, image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=600', stock: [ { id: 'm1', name: 'Paracetamol 500mg (20 Comprimidos)', price: 1600, category: 'Analgesicos', inStock: true, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=200' },
      { id: 'm4', name: 'Ibuprofeno 400mg', price: 1850, category: 'Analgesicos', inStock: false, image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=200' },] },
];


export const CATEGORIAS_FARMACIA = [
  { id: 'todos', label: 'Todos', color: 'from-emerald-500 to-cyan-500' },
  { id: 'Analgesicos', label: 'Analgesicos', color: 'from-purple-500 to-indigo-500' },
  { id: 'Antibioticos', label: 'Antibióticos', color: 'from-cyan-500 to-blue-500' },
  { id: 'Suplementos', label: 'Suplementos', color: 'from-emerald-500 to-teal-500' }
];