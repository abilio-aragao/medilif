export interface Hospital {
  id: number;
  name: string;
  location: string;
  address: string; // Adicionado para bater com o HospitalView
  rating: number;  // Alterado para number para cálculos de estrelas
  reviews: number; // Alterado para number
  image: string;
  type: 'Hospital' | 'Clínica' | 'Centro Médico';
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
    type: "Hospital" 
  },
  { 
    id: 2, 
    name: "Clínica Sagrada Esperança", 
    location: "Ilha de Luanda", 
    address: "Av. Agostinho Neto, Ilha de Luanda",
    rating: 4.8, 
    reviews: 850, 
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=500", 
    type: "Clínica" 
  },
  { 
    id: 3, 
    name: "Hospital Girassol", 
    location: "Maianga, Luanda", 
    address: "Av. Comandante Gika, 225",
    rating: 4.9, 
    reviews: 3100, 
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=500", 
    type: "Hospital" 
  },
  { 
    id: 4, 
    name: "Centro Médico Endiama Viana", 
    location: "Viana, Luanda", 
    address: "Estrada de Viana, Km 12",
    rating: 4.7, 
    reviews: 320, 
    image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?q=80&w=500", 
    type: "Centro Médico" 
  },
  { 
    id: 5, 
    name: "Hospital Central de Luanda", 
    location: "Ingombota, Luanda", 
    address: "Rua Amílcar Cabral",
    rating: 4.5, 
    reviews: 2100, 
    image: "https://images.unsplash.com/photo-1586773860418-d3b9797d16d0?q=80&w=500", 
    type: "Hospital" 
  },
  { 
    id: 6, 
    name: "Clínica Multiperfil", 
    location: "Morro Bento, Luanda", 
    address: "Via S8, Morro Bento",
    rating: 4.7, 
    reviews: 940, 
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=500", 
    type: "Clínica" 
  },
  { 
    id: 7, 
    name: "Hospital Geral de Benguela", 
    location: "Benguela", 
    address: "Zona Central, Benguela",
    rating: 4.3, 
    reviews: 760, 
    image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?q=80&w=500", 
    type: "Hospital" 
  },
  { 
    id: 8, 
    name: "Centro Médico da Paz", 
    location: "Talatona, Luanda", 
    address: "Via AL15, Talatona",
    rating: 4.8, 
    reviews: 520, 
    image: "https://images.unsplash.com/photo-1504813184591-01592f2bb94b?q=80&w=500", 
    type: "Centro Médico" 
  },
  { 
    id: 9, 
    name: "Hospital Militar Principal", 
    location: "Luanda", 
    address: "Rua da Missão",
    rating: 4.4, 
    reviews: 1100, 
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=500", 
    type: "Hospital" 
  },
  { 
    id: 10, 
    name: "Clínica Girassol Kilamba", 
    location: "Centralidade do Kilamba", 
    address: "Quarteirão X, Edifício 4",
    rating: 4.6, 
    reviews: 430, 
    image: "https://images.unsplash.com/photo-1538108197394-72f0015d2e1d?q=80&w=500", 
    type: "Clínica" 
  },
  { 
    id: 11, 
    name: "Hospital Josina Machel", 
    location: "Maianga, Luanda", 
    address: "Rua da Liberdade",
    rating: 4.2, 
    reviews: 2800, 
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=500", 
    type: "Hospital" 
  },
  { 
    id: 12, 
    name: "Hospital Materno Infantil", 
    location: "Camama, Luanda", 
    address: "Via Expressa, Luanda",
    rating: 4.8, 
    reviews: 1500, 
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=500", 
    type: "Hospital" 
  },
  { 
    id: 13, 
    name: "Clínica Luanda Medical Center", 
    location: "Ingombota, Luanda", 
    address: "Rua Rainha Ginga",
    rating: 4.9, 
    reviews: 980, 
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=500", 
    type: "Clínica" 
  },
  { 
    id: 14, 
    name: "Hospital Municipal do Lobito", 
    location: "Lobito, Benguela", 
    address: "Bairro da Luz, Lobito",
    rating: 4.1, 
    reviews: 640, 
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=500", 
    type: "Hospital" 
  },
  { 
    id: 15, 
    name: "Centro Médico Caridade", 
    location: "Cacuaco, Luanda", 
    address: "Zona Industrial de Cacuaco",
    rating: 4.3, 
    reviews: 210, 
    image: "https://images.unsplash.com/photo-1502740384197-60d15e293302?q=80&w=500", 
    type: "Centro Médico" 
  },
  { 
    id: 16, 
    name: "Hospital Geral do Huambo", 
    location: "Huambo", 
    address: "Av. da Independência",
    rating: 4.4, 
    reviews: 890, 
    image: "https://images.unsplash.com/photo-1519494083224-216dc8221652?q=80&w=500", 
    type: "Hospital" 
  },
  { 
    id: 17, 
    name: "Clínica Mediang", 
    location: "Samba, Luanda", 
    address: "Rua Direta da Samba",
    rating: 4.5, 
    reviews: 340, 
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=500", 
    type: "Clínica" 
  },
  { 
    id: 18, 
    name: "Hospital do Prenda", 
    location: "Samba, Luanda", 
    address: "Bairro do Prenda",
    rating: 4.0, 
    reviews: 1200, 
    image: "https://images.unsplash.com/photo-1579154236594-e178f54716ee?q=80&w=500", 
    type: "Hospital" 
  },
  { 
    id: 19, 
    name: "Clínica do Sol", 
    location: "Alvalade, Luanda", 
    address: "Av. Comandante Stona",
    rating: 4.7, 
    reviews: 560, 
    image: "https://images.unsplash.com/photo-1631217816690-909897e46ec0?q=80&w=500", 
    type: "Clínica" 
  },
  { 
    id: 20, 
    name: "Centro Médico Girassol Talatona", 
    location: "Talatona, Luanda", 
    address: "Condomínio Dolce Vita",
    rating: 4.8, 
    reviews: 410, 
    image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=500", 
    type: "Centro Médico" 
  },
];