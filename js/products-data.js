// Dados dos produtos - separado do código principal para facilitar manutenção
const productsData = [
  {
    id: 1,
    name: "Câmera De Segurança Wi-fi Rotacional Myra 360° Grau Elsys",
    price: "Consulte o preço",
    category: "security",
    image: "img/produtos/D_NQ_NP_2X_650798-MLU77331272615_062024-F.webp",
    shipping: "Conheça o produto!",
    description: "MYRA 360° é de uso interno, ideal para o ambiente familiar, podendo ser utilizada como babá eletrônica ou pet monitor.",
    features: [
      "Resolução de imagem de 1080p (1920x1080px) para imagens nítidas.",
      "Campo visual de 360º para monitoramento abrangente.",
      "Zoom óptico de 3x para detalhes próximos.",
      "Visão noturna com IR-CUT para segurança noturna.",
      "Áudio bidirecional permite comunicação remota.",
      "Compatibilidade com o aplicativo ELSYS HOME para controle fácil."
    ],
    featured: true,
    new: false
  },
  {
    id: 2,
    name: "Amplimax Fit Modem 4g Internet Rural Eprl18 Elsys",
    price: "Consulte o preço",
    category: "networking",
    image: "img/produtos/elsys-moldem-fit1.webp",
    shipping: "Conheça o produto!",
    description: "AMPLIMAX FIT é um modem 4G com uma antena de alto ganho integrada, permitindo que você aproveite ao máximo seus dados móveis com qualidade 4G e custo-benefício sob medida.",
    features: [
      "Antena heptaband integrada para alcance de Internet 2G/3G/4G.",
      "Instalação em mastro ou parede para flexibilidade.",
      "Proteção contra raios UV e entrada de água e poeira.",
      "Busca cega de sinal para eficiência superior.",
      "Compatível com todas as operadoras telefônicas do Brasil.",
      "Acessível para uso doméstico e comercial."
    ],
    featured: true,
    new: true
  },
  {
    id: 3,
    name: "Receptor De Tv Via Satelite Elsys Sathd Satmax 6",
    price: "Consulte o preço",
    category: "accessories",
    image: "img/produtos/receptor-tv-satmax.webp",
    shipping: "Conheça o produto!",
    description: "Satmax 6 é a nova geração de receptor de TV digital via satélite da Elsys, compatível com a Banda Ku e Banda C, que traz alta definição de imagem e som, sem nenhuma mensalidade, totalmente livre! Conta com um processador rápido e oferece uma experiência fluida de navegação e uso.",
    features: [
      "Resolução máxima de saída: 1080 p.",
      "Conectores de saída: HDMI.",
      "Conectores de entrada: Coxial.",
      "Sintoniza canais do SATHD Regional",
      "Sem mensalidade",  
      "Compatível com Star One D2 (70°W) e Sky B1 (43°W)"
    ],
    featured: false,
    new: false
  },
  {
    id: 4,
    name: "Kit 2 Satmax 6 Tv Via Satelite Elsys Sathd Cor Preto",
    price: "Consulte o preço",
    category: "accessories",
    image: "img/produtos/kit-satmax-tv.webp",
    shipping: "Conheça o produto!",
    description: "Satmax 6 é a nova geração de receptor de TV digital via satélite da Elsys, compatível com a Banda Ku e Banda C, que traz alta definição de imagem e som, sem nenhuma mensalidade, totalmente livre! Conta com um processador rápido e oferece uma experiência fluida de navegação e uso.",
    features: [
      "Resolução máxima de saída: 1080 p.",
      "Conectores de saída: HDMI.",
      "Conectores de entrada: Coxial.",
      "Sintoniza canais do SATHD Regional",
      "Sem mensalidade",  
      "Compatível com Star One D2 (70°W) e Sky B1 (43°W)"
    ],
    featured: true,
    new: true
  },
  {
    id: 5,
    name: "Câmera de segurança Elsys ESC-WB3F com resolução de 2MP visão noturna incluída branca",
    price: "Consulte o preço",
    category: "security",
    image: "img/produtos/camera-elsys-inteligente.webp",
    shipping: "Conheça o produto!",
    description: "possui funções que auxiliam na segurança como alerta de movimento, microfone, compatibilidade com DVR/NVR e visão noturna. Além disso, as imagens podem ser visualizadas através do aplicativo ELSYS Home de onde estiver.",
    features: [
      "Resolução Full HD de 2MP para imagens nítidas e detalhadas.",
      "Zoom óptico de 3x para visão ampliada de detalhes.",
      "Conectividade Wi-Fi e LAN para fácil instalação.",
      "Detecção de movimento com alerta em tempo real.",
      "Visão noturna com alcance de até 30 m.",
      "Classificação de resistência à água IP66 para uso externo seguro."
    ],
    featured: false,
    new: false
  },
  {
    id: 6,
    name: "Kit Amplimax Fit Dados + Amplimax Dados E Voz",
    price: "Consulte o preço",
    category: "networking",
    image: "img/produtos/kit-amplimax-dados-voz.webp",
    shipping: "Conheça o produto!",
    description: "AmpliMAX permite acesso à Internet e realização de chamadas telefônicas mesmo em locais de difícil acesso. Integra um modem 4G e uma antena direcional de alto ganho com saída Ethernet e para telefone.",
    features: [
      "Unidades por kit: 2.",
      "Banda única de 2g.",
      "Possui 3 antenas externas e uma interna.",
      "Tem uma velocidade de 12.5 MB/s.",
      "Corte automático e manual"
    ],
    featured: false,
    new: true
  },
  {
    id: 7,
    name: "Elsys Modem Roteador 2g 3g 4G FIT EPRL18 INTERNET RURAL 18 FIT SOMENTE DADOS 3 unidades.",
    price: "Consulte o preço",
    category: "networking",
    image: "img/produtos/kit-3amplimax.webp",
    shipping: "Conheça o produto!",
    description: "KIT COM 3 UNIDADES DE AMPLIMAX FIT",
    features: [
      "Unidades por kit: 3.",
      "Conexão PoE para instalação simples e eficiente.",
      "Antena externa para maior sinal e alcance.",
      "Resistente à água e poeira.",
      "Proteção contra raios UV para maior durabilidade."

    ],
    featured: true,
    new: false
  },
  {
    id: 8,
    name: "Receptor De Parabólica Digital Fullhd Com Lnbf Simples Elsys Preto",
    price: "Consulte o preço",
    category: "networking",
    image: "img/produtos/receptor-parabolica-elsys.webp",
    shipping: "Conheça o produto!",
    description: "SATMAX 6, receptor digital via satélite Full HD compatível com a nova parabólica Banda Ku, preparado para o sinal 5G.",
    features: [
      "Possui conector de entrada RCA.",
      "Sua resolução mínima é de 1080.",
      "Sua resolução máxima é de 1080p.",
      "Inclui controle remoto.",
      "Ideal para escritórios e comércios"

    ],
    featured: false,
    new: true
  },
  {
    id: 9,
    name: "Kit 10 Lnbf Universal Simples Offset Banda Ku Full Hd Elsys",
    price: "Consulte o preço",
    category: "networking",
    image: "img/produtos/kit10-parabolica.webp",
    shipping: "Conheça o produto!",
    description: "SATMAX 6, receptor digital via satélite Full HD compatível com a nova parabólica Banda Ku, preparado para o sinal 5G.",
    features: [
      "Possui conector de entrada RCA.",
      "Ideal para escritórios e comércios",
      "Formato de venta: Unidade",
      "Com entrada Coaxial e saída Coaxial.",
      "O material de revestimento do conector é abs."

    ],
    featured: false,
    new: true
  },
  {
    id: 10,
    name: "Kit 5 Lnbf Universal Simples Offset Banda Ku Full Hd Elsys",
    price: "Consulte o preço",
    category: "networking",
    image: "img/produtos/kit5-parabolica.webp",
    shipping: "Conheça o produto!",
    description: "SATMAX 6, receptor digital via satélite Full HD compatível com a nova parabólica Banda Ku, preparado para o sinal 5G.",
    features: [
      "Possui conector de entrada RCA.",
      "Ideal para escritórios e comércios",
      "Formato de venta: Unidade",
      "Com entrada Coaxial e saída Coaxial.",
      "O material de revestimento do conector é abs."
    
    ],
    
    featured: false,
    new: true
  },
  {
    id: 11,
    name: "Kit 10 Lnbf Universal Simples Offset Banda Ku 4K Elsys",
    price: "Consulte o preço",
    category: "networking",
    image: "img/produtos/kit10-parabolica.webp",
    shipping: "Conheça o produto!",
    description: "SATMAX 6, receptor digital via satélite Full HD compatível com a nova parabólica Banda Ku, preparado para o sinal 5G.",
    features: [
      "Possui conector de entrada RCA.",
      "Ideal para escritórios e comércios",
      "Formato de venta: Unidade",
      "Com entrada Coaxial e saída Coaxial.",
      "O material de revestimento do conector é abs."

    ],
    featured: false,
    new: true
  },
  {
    id: 12,
    name: "Kit 5 Lnbf Universal Simples Offset Banda Ku 4K Elsys",
    price: "Consulte o preço",
    category: "networking",
    image: "img/produtos/kit5-parabolica.webp",
    shipping: "Conheça o produto!",
    description: "SATMAX 6, receptor digital via satélite Full HD compatível com a nova parabólica Banda Ku, preparado para o sinal 5G.",
    features: [
      "Possui conector de entrada RCA.",
      "Ideal para escritórios e comércios",
      "Formato de venta: Unidade",
      "Com entrada Coaxial e saída Coaxial.",
      "O material de revestimento do conector é abs."
    
    ],
    
    featured: false,
    new: true
  },
  {
    id: 13,
    name: "Lnbf Universal Duplo Offset Ku Full Hd Elsys Com Brinde",
    price: "Consulte o preço",
    category: "networking",
    image: "img/produtos/lnbf-universal-duplo.webp",
    shipping: "Conheça o produto!",
    description: "LNBF Elsys Banda Ku Universal Duplo – 2 Saída Compatível com antenas de 45cm, 60cm e 90cm",
    features: [
      "Unidades por kit: 1",
      "Formato de venta: Unidade",
      "O material de revestimento do conector é abs.",
      "Com entrada 2 e saída 2.",
      "Brinde"
    
    ],
    
    featured: false,
    new: true
  },
  {
    id: 14,
    name: "Lnbf Universal Duplo Offset Ku Full Hd Elsys Com Brinde",
    price: "Consulte o preço",
    category: "networking",
    image: "img/produtos/lnbf-universal-4.webp",
    shipping: "Conheça o produto!",
    description: "LNBF Elsys Banda Ku Universal Duplo – 4 Saída Compatível com antenas de 45cm, 60cm e 90cm",
    features: [
      "Unidades por kit: 1",
      "Formato de venta: Unidade",
      "O material de revestimento do conector é abs.",
      "Com entrada F e saída 4.",
      "Brinde"
    
    ],
    
    featured: false,
    new: true
  },
  {
    id: 15,
    name: "Receptor Satmax 6 Sat Hd Digital Regional Banda Ku Elsys Preto",
    price: "Consulte o preço",
    category: "networking",
    image: "img/produtos/receptor-satmax-brinde.webp",
    shipping: "Conheça o produto!",
    description: "SATMAX 6, receptor digital via satélite Full HD compatível com a nova parabólica Banda Ku, preparado para o sinal 5G.",
    features: [
      "Formatos de entrada compatíveis: HDMI.",
      "Quantidade de portas: 2",
      "Resolução máxima de saída: 1080p.",
      "Conectores de saída: HDMI.",
      "Brinde"
      
    ],
    
    featured: false,
    new: true
  },
];

// Categorias disponíveis
const categories = [
  { id: "all", name: "Todos os Produtos", icon: "fas fa-th-large" },
  { id: "security", name: "Segurança", icon: "fas fa-shield-alt" },
  { id: "networking", name: "Redes", icon: "fas fa-wifi" },
  { id: "energy", name: "Energia", icon: "fas fa-bolt" },
  { id: "accessories", name: "Acessórios", icon: "fas fa-headset" }
];