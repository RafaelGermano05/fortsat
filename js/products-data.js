// Dados dos produtos - separado do código principal para facilitar manutenção
const productsData = [
  {
    id: 1,
    name: "Câmera De Segurança Wi-fi Rotacional Myra 360° Grau Elsys",
    price: 289.90,
    category: "security",
    image: "img/produtos/D_NQ_NP_2X_650798-MLU77331272615_062024-F.webp",
    installments: "12x R$ 24,16 sem juros",
    shipping: "Frete grátis",
    description: "Câmera de segurança com resolução 4MP, visão noturna e resistência às intempéries. Ideal para monitoramento residencial e comercial.",
    features: [
      "Resolução 4MP (2688x1520)",
      "Visão noturna até 30 metros",
      "IP66 - Resistente à água e poeira",
      "Áudio bidirecional",
      "Compatível com aplicativo móvel"
    ],
    featured: true,
    new: false
  },
  {
    id: 2,
    name: "Roteador WiFi 6 AX1500",
    price: 399.90,
    category: "networking",
    image: "img/produtos/roteador-wifi6.png",
    installments: "10x R$ 39,99 sem juros",
    shipping: "Frete grátis",
    description: "Roteador de alta performance com tecnologia WiFi 6 para conexões mais rápidas e estáveis.",
    features: [
      "Tecnologia WiFi 6 (802.11ax)",
      "Velocidade até 1500Mbps",
      "4 antenas de alto ganho",
      "OFDMA para múltiplos dispositivos",
      "Porta Gigabit WAN e 4 portas LAN"
    ],
    featured: true,
    new: true
  },
  {
    id: 3,
    name: "Nobreak 1500VA Senoidal",
    price: 899.90,
    category: "energy",
    image: "img/produtos/nobreak.png",
    installments: "12x R$ 74,99",
    shipping: "Frete grátis",
    description: "Nobreak com saída senoidal pura, ideal para equipamentos sensíveis e servidores.",
    features: [
      "Capacidade 1500VA/900W",
      "Saída senoidal pura",
      "Tempo de backup: até 30 minutos",
      "6 tomadas com proteção contra surtos",
      "Display LCD com informações"
    ],
    featured: false,
    new: false
  },
  {
    id: 4,
    name: "Fechadura Digital com Biometria",
    price: 649.90,
    category: "security",
    image: "img/produtos/fechadura-digital.png",
    installments: "10x R$ 64,99 sem juros",
    shipping: "Frete grátis",
    description: "Fechadura inteligente com abertura por senha, biometria, cartão e chave mecânica.",
    features: [
      "Abertura por senha, biometria, cartão e chave",
      "Armazena até 100 digitais",
      "Alimentação por pilhas (4xAA)",
      "Função anti-pânico",
      "Compatível com aplicativo"
    ],
    featured: true,
    new: true
  },
  {
    id: 5,
    name: "Switch Gerenciável 24 Portas",
    price: 1299.90,
    category: "networking",
    image: "img/produtos/switch-24portas.png",
    installments: "12x R$ 108,33",
    shipping: "Frete grátis",
    description: "Switch empresarial com 24 portas Gigabit, gerenciamento avançado e PoE.",
    features: [
      "24 portas Gigabit RJ45",
      "4 portas SFP para fibra óptica",
      "PoE+ em 24 portas (até 30W por porta)",
      "Gerenciamento web e CLI",
      "VLAN, QoS, IGMP Snooping"
    ],
    featured: false,
    new: false
  },
  {
    id: 6,
    name: "Impressora Térmica 80mm",
    price: 349.90,
    category: "accessories",
    image: "img/produtos/impressora-termica.png",
    installments: "6x R$ 58,32 sem juros",
    shipping: "Frete grátis",
    description: "Impressora térmica para PDV, compatível com sistemas Android, Windows e Linux.",
    features: [
      "Largura de impressão: 80mm",
      "Velocidade: até 200mm/s",
      "Conexão USB, Ethernet e Wi-Fi",
      "Compatível com Android, Windows, Linux",
      "Corte automático e manual"
    ],
    featured: false,
    new: true
  },
  {
    id: 7,
    name: "DVR 8 Canais com 4 Câmeras",
    price: 799.90,
    category: "security",
    image: "img/produtos/dvr-kit.png",
    installments: "10x R$ 79,99 sem juros",
    shipping: "Frete grátis",
    description: "Kit completo de segurança com DVR 8 canais e 4 câmeras de vigilância.",
    features: [
      "DVR 8 canais com gravação Full HD",
      "4 câmeras de segurança incluídas",
      "Armazenamento de 1TB incluído",
      "Acesso remoto via aplicativo",
      "Visão noturna infravermelha"
    ],
    featured: true,
    new: false
  },
  {
    id: 8,
    name: "Access Point WiFi 6 Professional",
    price: 649.90,
    category: "networking",
    image: "img/produtos/access-point.png",
    installments: "8x R$ 81,24 sem juros",
    shipping: "Frete grátis",
    description: "Access Point empresarial com tecnologia WiFi 6 para ambientes de alta densidade.",
    features: [
      "WiFi 6 (802.11ax) dual-band",
      "Velocidade agregada até 1800Mbps",
      "PoE+ para alimentação",
      "Gestão centralizada via controladora",
      "Ideal para escritórios e comércios"
    ],
    featured: false,
    new: true
  }
];

// Categorias disponíveis
const categories = [
  { id: "all", name: "Todos os Produtos", icon: "fas fa-th-large" },
  { id: "security", name: "Segurança", icon: "fas fa-shield-alt" },
  { id: "networking", name: "Redes", icon: "fas fa-wifi" },
  { id: "energy", name: "Energia", icon: "fas fa-bolt" },
  { id: "accessories", name: "Acessórios", icon: "fas fa-headset" }
];