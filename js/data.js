/* ============================================================
   CONFIGURAÇÕES GERAIS
   ============================================================ */

// Número fixo do WhatsApp da farmácia (formato internacional, sem +)
const WHATSAPP_NUMERO = "5511999999999";

/* ============================================================
   CATEGORIAS
   ============================================================ */

const categorias = [
  {
    id: "analgesicos",
    nome: "Analgésicos"
  },
  {
    id: "cosmeticos",
    nome: "Cosméticos"
  },
  {
    id: "vitaminas",
    nome: "Vitaminas"
  },
  {
    id: "higiene",
    nome: "Higiene"
  }
];

/* ============================================================
   PRODUTOS
   ============================================================ */

const produtos = [
  {
    id: 1,
    nome: "Dipirona 500mg",
    categoria: "analgesicos",
    preco: 9.90,
    descricao: "Indicado para alívio de dores e redução da febre.",
    imagem: "assets/img/dipirona.jpg",
    destaque: true
  },
  {
    id: 2,
    nome: "Paracetamol 750mg",
    categoria: "analgesicos",
    preco: 12.50,
    descricao: "Auxilia no tratamento de dores leves a moderadas.",
    imagem: "assets/img/paracetamol.jpg",
    destaque: false
  },
  {
    id: 3,
    nome: "Protetor Solar FPS 50",
    categoria: "cosmeticos",
    preco: 49.90,
    descricao: "Proteção diária contra raios UVA e UVB.",
    imagem: "assets/img/protetor-solar.jpg",
    destaque: true
  },
  {
    id: 4,
    nome: "Vitamina C 1000mg",
    categoria: "vitaminas",
    preco: 29.90,
    descricao: "Contribui para a imunidade e ação antioxidante.",
    imagem: "assets/img/vitamina-c.jpg",
    destaque: true
  },
  {
    id: 5,
    nome: "Sabonete Líquido Neutro",
    categoria: "higiene",
    preco: 15.90,
    descricao: "Limpeza suave para todos os tipos de pele.",
    imagem: "assets/img/sabonete.jpg",
    destaque: false
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
