/* ============================================================
   CONFIGURAÇÕES GERAIS
   ============================================================ */

// Número fixo do WhatsApp da farmácia (formato internacional, sem +)
const WHATSAPP_NUMERO = "5518988092571";

/* ============================================================
   CATEGORIAS
   ============================================================ */

const categorias = [
  {
    id: "emagrecimento",
    nome: "Emagrecimento",
    mostrarNoMenu: true
  },
  {
    id: "desempenhofisico",
    nome: "Desempenho Físico",
    mostrarNoMenu: true
  },
  {
    id: "saude",
    nome: "Saúde",
    mostrarNoMenu: true
  },
  {
    id: "quedacapilar",
    nome: "Queda Capilar",
    mostrarNoMenu: true
  },

   {
    id: "beleza",
    nome: "Beleza",
    mostrarNoMenu: true
  }
];

/* ============================================================
   PRODUTOS
   ============================================================ */

const produtos = [
  {
    id: 1,
    nome: "Emagrecimento",
    categoria: "emagrecimento",
    preco: 90.00,
    descricao: "Energia intensa, foco absoluto e performance contínua. Termogênese inteligente com disposição prolongada.",
    imagem: "assets/img/imgpoteteste.png",
    destaque: true
  },
  {
    id: 2,
    nome: "Desempenho Físico",
    categoria: "desempenhofisico",
    preco: 12.50,
    descricao: "Auxilia no tratamento de dores leves a moderadas.",
    imagem: "assets/img/imgpoteteste.png",
    destaque: false
  },
  {
    id: 3,
    nome: "Saúde",
    categoria: "saude",
    preco: 49.90,
    descricao: "Proteção diária contra raios UVA e UVB.",
    imagem: "assets/img/imgpoteteste.png",
    destaque: true
  },
  {
    id: 4,
    nome: "Queda Capilar",
    categoria: "quedacapilar",
    preco: 29.90,
    descricao: "Contribui para a imunidade e ação antioxidante.",
    imagem: "assets/img/imgpoteteste.png",
    destaque: true
  },
  {
    id: 5,
    nome: "Beleza",
    categoria: "beleza",
    preco: 15.90,
    descricao: "Limpeza suave para todos os tipos de pele.",
    imagem: "assets/img/imgpoteteste.png",
    destaque: true
  },
   {
    id: 6,
    nome: "Emagrecimento 1",
    categoria: "emagrecimento",
    preco: 90.00,
    descricao: "Energia intensa, foco absoluto e performance contínua. Termogênese inteligente com disposição prolongada.",
    imagem: "assets/img/imgpoteteste.png",
    destaque: true
  }
];

/* ============================================================
   OBSERVAÇÕES IMPORTANTES
   ============================================================ */

/*
- Para adicionar uma nova categoria:
  1) Crie um novo objeto em `categorias`
  2) Use o mesmo `id` no campo `categoria` do produto

- Para adicionar um novo produto:
  1) Copie um bloco dentro do array `produtos`
  2) Altere id, nome, categoria, preco, descricao e imagem

- Para exibir no banner de destaques:
  destaque: true

- As imagens devem estar na pasta /assets/img/
*/
