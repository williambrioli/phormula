/* ============================================================
   APP.JS – LÓGICA PRINCIPAL DO SITE
   ============================================================ */

// Elementos principais
const menuCategorias = document.getElementById("menu-categorias");
const produtosContainer = document.getElementById("produtos-container");
const bannerContainer = document.getElementById("banner-container");
const searchInput = document.getElementById("searchInput");
const whatsappFooter = document.getElementById("whatsappFooter");

// ============================================================
// UTILIDADES
// ============================================================

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function slugParaNomeCategoria(slug) {
  const cat = categorias.find(c => c.id === slug);
  return cat ? cat.nome : "";
}

// ============================================================
// MENU DE CATEGORIAS
// ============================================================

function renderMenuCategorias() {
  menuCategorias.innerHTML = "";

  categorias.forEach(cat => {

    if (!cat.mostrarNoMenu) return;

    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = `#${cat.id}`;
    a.textContent = cat.nomeMenu || cat.nome;

    li.appendChild(a);
    menuCategorias.appendChild(li);
  });
}



// ============================================================
// BANNER DE DESTAQUES
// ============================================================

function renderBanner() {
  const destaques = produtos.filter(p => p.destaque);

  destaques.forEach(produto => {
    const card = criarCardProduto(produto, true);
    bannerContainer.appendChild(card);
  });
}

// ============================================================
// RENDERIZAÇÃO DE PRODUTOS POR CATEGORIA
// ============================================================

function renderProdutos(listaProdutos) {
  produtosContainer.innerHTML = "";

  categorias.forEach(cat => {
    const produtosDaCategoria = listaProdutos.filter(p => p.categoria === cat.id);
    if (produtosDaCategoria.length === 0) return;

     const section = document.createElement("section");
     section.classList.add("categoria-section");
     section.id = cat.id;

     const container = document.createElement("div");
     container.classList.add("container");

     const titulo = document.createElement("h2");
     titulo.textContent = cat.nome;

     const slider = document.createElement("div");
slider.classList.add("slider");

const arrowLeft = document.createElement("button");
arrowLeft.className = "arrow left";
arrowLeft.innerHTML = "‹";

const arrowRight = document.createElement("button");
arrowRight.className = "arrow right";
arrowRight.innerHTML = "›";

const track = document.createElement("div");
track.classList.add("slider-track");

produtosDaCategoria.forEach(produto => {
  const card = criarCardProduto(produto);
  track.appendChild(card);
});

const dots = document.createElement("div");
dots.classList.add("slider-dots");

slider.appendChild(arrowLeft);
slider.appendChild(track);
slider.appendChild(arrowRight);

container.appendChild(titulo);
container.appendChild(slider);
container.appendChild(dots);
section.appendChild(container);
produtosContainer.appendChild(section);
     
  });
}

// ============================================================
// CARD DE PRODUTO
// ============================================================

function criarCardProduto(produto, isBanner = false) {
  let quantidade = 1;

  const card = document.createElement("div");
  card.classList.add("card");
  card.id = `produto-${produto.id}`;

  card.innerHTML = `
    ${produto.mostrarlancamento ? `<span class="badge-lancamento">Lançamento</span>` : ``}
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h3>${produto.nome}</h3>
    <button class="btn-detalhes">Ver mais</button>
    <p class="descricao">${produto.descricao}</p>
    <span class="preco">${formatarPreco(produto.preco)}</span>
    

    <div class="card-acoes">
  <div class="quantidade">
    <button class="btn-menos">-</button>
    <span class="qtd">1</span>
    <button class="btn-mais">+</button>
  </div>

  <button class="btn-comprar">Comprar</button>
</div>

  `;

  // Elementos internos
  const btnDetalhes = card.querySelector(".btn-detalhes");
  const descricao = card.querySelector(".descricao");
  const btnMenos = card.querySelector(".btn-menos");
  const btnMais = card.querySelector(".btn-mais");
  const qtdSpan = card.querySelector(".qtd");
  const btnComprar = card.querySelector(".btn-comprar");

  // Mostrar / esconder descrição
  btnDetalhes.addEventListener("click", () => {
    descricao.style.display = descricao.style.display === "block" ? "none" : "block";
  });

  // Quantidade
  btnMais.addEventListener("click", () => {
    quantidade++;
    qtdSpan.textContent = quantidade;
  });

  btnMenos.addEventListener("click", () => {
    if (quantidade > 1) {
      quantidade--;
      qtdSpan.textContent = quantidade;
    }
  });

  // Comprar via WhatsApp
btnComprar.addEventListener("click", () => {

  // 1️⃣ calcula o total
  const valorUnitario = produto.preco;
  const valorTotal = valorUnitario * quantidade;
  const linkProduto = `${window.location.origin}${window.location.pathname}%23produto-${produto.id}`;
  // 2️⃣ monta a mensagem
  const mensagem =
    `Olá! Gostaria de fazer um pedido:%0A%0A` +
    `Produto: ${produto.nome}%0A` +
    `Categoria: ${slugParaNomeCategoria(produto.categoria)}%0A` +
    `Quantidade: ${quantidade} unidade(s)%0A` +
    `Valor unitário: ${formatarPreco(valorUnitario)}%0A` +
    `Valor total: ${formatarPreco(valorTotal)}%0A%0A` +
    `Link do produto:%0A${linkProduto}`;

  // 3️⃣ abre o WhatsApp
  const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`;
  window.open(url, "_blank");
});

  // Ajustes visuais se for banner
  if (isBanner) {
    card.style.minWidth = "220px";
  }

  return card;
}

// ============================================================
// BUSCA
// ============================================================

searchInput.addEventListener("input", () => {
  const termo = searchInput.value.toLowerCase();

  const filtrados = produtos.filter(p =>
    p.nome.toLowerCase().includes(termo) ||
    p.descricao.toLowerCase().includes(termo) ||
    slugParaNomeCategoria(p.categoria).toLowerCase().includes(termo)
  );

  renderProdutos(filtrados);
});

// ============================================================
// FOOTER WHATSAPP
// ============================================================

whatsappFooter.href = `https://wa.me/${WHATSAPP_NUMERO}`;

// ============================================================
// INICIALIZAÇÃO
// ============================================================

renderMenuCategorias();
renderBanner();
renderProdutos(produtos);

/* ============================================================
   MENU HAMBÚRGUER FLUTUANTE (MOBILE)
   ============================================================ */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav");
const menuOverlay = document.getElementById("menuOverlay");

menuToggle.addEventListener("click", () => {
  navMenu.classList.add("active");
});

menuOverlay.addEventListener("click", () => {
  navMenu.classList.remove("active");
  
});

/* ============================================================
   FECHAR MENU AO CLICAR EM UMA CATEGORIA (MOBILE)
   ============================================================ */

document.addEventListener("click", function (e) {
  if (e.target.closest(".nav a")) {
    navMenu.classList.remove("active");
    
  }
});

/* ============================================================
   FECHAR MENU AO CLICAR FORA (MENU HAMBÚRGUER)
   ============================================================ */

document.addEventListener("click", function (event) {
  const menu = document.querySelector(".nav");
  const botao = document.getElementById("menuToggle");

  const clicouNoMenu = menu.contains(event.target);
  const clicouNoBotao = botao.contains(event.target);

  if (!clicouNoMenu && !clicouNoBotao) {
    menu.classList.remove("active");
  }
});

// ============================================================
// SLIDER PROFISSIONAL (DESKTOP + MOBILE)
// ============================================================

document.querySelectorAll(".slider").forEach(slider => {
  const track = slider.querySelector(".slider-track");
  const left = slider.querySelector(".arrow.left");
  const right = slider.querySelector(".arrow.right");
  const dots = slider.parentElement.querySelector(".slider-dots");

  if (!track) return;

  const cards = [...track.children];
  const cardWidth = cards[0].offsetWidth + 16;

  const visible =
    window.innerWidth >= 1024 ? Math.min(4, cards.length) : 1;

  const pages = Math.ceil(cards.length / visible);
  let page = 0;

  /* dots */
  if (dots) {
    dots.innerHTML = "";
    for (let i = 0; i < pages; i++) {
      const dot = document.createElement("span");
      if (i === 0) dot.classList.add("active");
      dots.appendChild(dot);

      dot.onclick = () => {
        page = i;
        update();
      };
    }
  }

  function update() {
    track.scrollTo({
      left: page * cardWidth * visible,
      behavior: "smooth"
    });

    if (dots) {
      [...dots.children].forEach((d, i) =>
        d.classList.toggle("active", i === page)
      );
    }
  }

  left?.addEventListener("click", () => {
    page = Math.max(0, page - 1);
    update();
  });

  right?.addEventListener("click", () => {
    page = Math.min(pages - 1, page + 1);
    update();
  });

     /* ============================================================
     SINCRONIZA DOTS COM SCROLL NO MOBILE
     ============================================================ */

  if (window.innerWidth < 1024 && dots) {
    track.addEventListener("scroll", () => {
      const scrollLeft = track.scrollLeft;
      const newPage = Math.round(
        scrollLeft / (cardWidth * visible)
      );

      if (newPage !== page) {
        page = Math.min(Math.max(newPage, 0), pages - 1);

        [...dots.children].forEach((d, i) =>
          d.classList.toggle("active", i === page)
        );
      }
    });
  }

   
  update();
});
