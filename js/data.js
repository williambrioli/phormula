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
    nome: "Manipulados para emagrecimento",
    mostrarNoMenu: true
  },
  {
    id: "desempenhofisico",
    nome: "Manipulados para desempenho físico",
    mostrarNoMenu: true
  },
  {
    id: "saude",
    nome: "Manipulados para saúde e bem-estar",
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
    nome: "Emagrecimento 1",
    categoria: "emagrecimento",
    preco: 90.00,
    descricao: "Energia intensa, foco absoluto e performance contínua. Termogênese inteligente com disposição prolongada.",
    imagem: "assets/img/imgpoteteste.png",
    destaque: true
  },
   {
    id: 3,
    nome: "Emagrecimento 2",
    categoria: "emagrecimento",
    preco: 90.00,
    descricao: "Energia intensa, foco absoluto e performance contínua. Termogênese inteligente com disposição prolongada.",
    imagem: "assets/img/imgpoteteste.png",
    destaque: true
  },
   {
    id: 4,
    nome: "Emagrecimento 3",
    categoria: "emagrecimento",
    preco: 90.00,
    descricao: "Energia intensa, foco absoluto e performance contínua. Termogênese inteligente com disposição prolongada.",
    imagem: "assets/img/imgpoteteste.png",
    destaque: true
  },
   {
    id: 5,
    nome: "Emagrecimento 4 ",
    categoria: "emagrecimento",
    preco: 90.00,
    descricao: "Energia intensa, foco absoluto e performance contínua. Termogênese inteligente com disposição prolongada.",
    imagem: "assets/img/imgpoteteste.png",
    destaque: true
  },
   {
    id: 6,
    nome: "Emagrecimento 5",
    categoria: "emagrecimento",
    preco: 90.00,
    descricao: "Energia intensa, foco absoluto e performance contínua. Termogênese inteligente com disposição prolongada.",
    imagem: "assets/img/imgpoteteste.png",
    destaque: true
  },
  {
    id: 7,
    nome: "Desempenho Físico",
    categoria: "desempenhofisico",
    preco: 12.50,
    descricao: "Auxilia no tratamento de dores leves a moderadas.",
    imagem: "assets/img/imgpoteteste.png",
    destaque: false
  },
   {
    id: 8,
    nome: "Desempenho Físico 1",
    categoria: "desempenhofisico",
    preco: 12.50,
    descricao: "Auxilia no tratamento de dores leves a moderadas.",
    imagem: "assets/img/imgpoteteste.png",
    destaque: false
  },
   {
    id: 9,
    nome: "Desempenho Físico 2",
    categoria: "desempenhofisico",
    preco: 12.50,
    descricao: "Auxilia no tratamento de dores leves a moderadas.",
    imagem: "assets/img/imgpoteteste.png",
    destaque: false
  },
   {
    id: 10,
    nome: "Desempenho Físico 3",
    categoria: "desempenhofisico",
    preco: 12.50,
    descricao: "Auxilia no tratamento de dores leves a moderadas.",
    imagem: "assets/img/imgpoteteste.png",
    destaque: false
  },
   {
    id: 11,
    nome: "Desempenho Físico 4",
    categoria: "desempenhofisico",
    preco: 12.50,
    descricao: "Auxilia no tratamento de dores leves a moderadas.",
    imagem: "assets/img/imgpoteteste.png",
    destaque: false
  },
   {
    id: 12,
    nome: "Desempenho Físico 5",
    categoria: "desempenhofisico",
    preco: 12.50,
    descricao: "Auxilia no tratamento de dores leves a moderadas.",
    imagem: "assets/img/imgpoteteste.png",
    destaque: false
  },
  {
    id: 13,
    nome: "Saúde",
    categoria: "saude",
    preco: 49.90,
    descricao: "Proteção diária contra raios UVA e UVB.",
    imagem: "assets/img/imgpoteteste.png",
    destaque: true
  },
   {
    id: 14,
    nome: "Saúde 1",
    categoria: "saude",
    preco: 49.90,
    descricao: "Proteção diária contra raios UVA e UVB.",
    imagem: "assets/img/imgpoteteste.png",
    destaque: true
  },
   {
    id: 15,
    nome: "Saúde 2",
    categoria: "saude",
    preco: 49.90,
    descricao: "Proteção diária contra raios UVA e UVB.",
    imagem: "assets/img/imgpoteteste.png",
    destaque: true
  },
   {
    id: 16,
    nome: "Saúde 3",
    categoria: "saude",
    preco: 49.90,
    descricao: "Proteção diária contra raios UVA e UVB.",
    imagem: "assets/img/imgpoteteste.png",
    destaque: true
  },
   {
    id: 17,
    nome: "Saúde 4",
    categoria: "saude",
    preco: 49.90,
    descricao: "Proteção diária contra raios UVA e UVB.",
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
