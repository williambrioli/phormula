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
    id: "inicio",
    nome: "#",
    nomeMenu: "Início",
    mostrarNoMenu: true
  },
  {
    id: "emagrecimento",
    nome: "Manipulados para emagrecimento",
    nomeMenu: "Emagrecimento",
    mostrarNoMenu: true
  },
  {
    id: "desempenhofisico",
    nome: "Manipulados para desempenho físico",
    nomeMenu: "Desempenho físico",
    mostrarNoMenu: true
  },
  {
    id: "saude",
    nome: "Manipulados para saúde e bem-estar",
    nomeMenu: "Saúde",
    mostrarNoMenu: true
  }
  
];

/* ============================================================
   PRODUTOS
   ============================================================ */

const produtos = [
  {
    id: "1",
    nome: "Emagrecimento",
    categoria: "emagrecimento",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      
       oQueE: `
      
      O 5-HTP é um precursor da serotonina...otonina...O 5-HTP é um precursor da
      
      `,      
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
         
    destaque: true,
    mostrarlancamento: true,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },


 {
    id: "2",
    nome: "Emagrecimento1",
    categoria: "emagrecimento",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: "O 5-HTP é um precursor da serotonina...",
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
         
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },
   
{
    id: "3",
    nome: "Emagrecimento2",
    categoria: "emagrecimento",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: "O 5-HTP é um precursor da serotonina...",
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
         
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },


{
    id: "4",
    nome: "Emagrecimento3",
    categoria: "emagrecimento",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: "O 5-HTP é um precursor da serotonina...",
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
         
    destaque: true,
    mostrarlancamento: true,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },



{
    id: "5",
    nome: "Emagrecimento4",
    categoria: "emagrecimento",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: "O 5-HTP é um precursor da serotonina...",
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
         
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },
   
   

{
    id: "6",
    nome: "Emagrecimento5",
    categoria: "emagrecimento",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: "O 5-HTP é um precursor da serotonina...",
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
         
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },




   {
    id: "7",
    nome: "Desempenho Físico",
    categoria: "desempenhofisico",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: "O 5-HTP é um precursor da serotonina...",
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
         
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },

   
    {
    id: "8",
    nome: "Desempenho Físico1",
    categoria: "desempenhofisico",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: "O 5-HTP é um precursor da serotonina...",
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
         
    destaque: false,
    mostrarlancamento: true,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },
   
  

    {
    id: "9",
    nome: "Desempenho Físico2",
    categoria: "desempenhofisico",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: "O 5-HTP é um precursor da serotonina...",
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
         
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },

   

    {
    id: "10",
    nome: "Desempenho Físico3",
    categoria: "desempenhofisico",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: "O 5-HTP é um precursor da serotonina...",
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
         
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },
   

    {
    id: "11",
    nome: "Desempenho Físico4",
    categoria: "desempenhofisico",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: "O 5-HTP é um precursor da serotonina...",
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
         
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },
   


    {
    id: "12",
    nome: "Desempenho Físico5",
    categoria: "desempenhofisico",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: "O 5-HTP é um precursor da serotonina...",
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
         
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },

   
 {
    id: "13",
    nome: "Saúde",
    categoria: "saude",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: "O 5-HTP é um precursor da serotonina...",
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
         
    destaque: true,
    mostrarlancamento: true,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },

   {
    id: "14",
    nome: "Saúde1",
    categoria: "saude",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: "O 5-HTP é um precursor da serotonina...",
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
         
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },
  

 {
    id: "15",
    nome: "Saúde2",
    categoria: "saude",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: "O 5-HTP é um precursor da serotonina...",
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
         
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },

   

    {
    id: "16",
    nome: "Saúde3",
    categoria: "saude",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: "O 5-HTP é um precursor da serotonina...",
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
         
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: true,
    textoParcelamento: "ou 1x de R$ 90,00"
    },

   
 {
    id: "17",
    nome: "Saúde4",
    categoria: "saude",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: "O 5-HTP é um precursor da serotonina...",
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
         
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R$ 90,00"
    },

 
   
];

window.produtos = produtos;

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
