// ================================
// PÁGINA DE PRODUTO
// ================================

// pega o id da URL
const params = new URLSearchParams(window.location.search);
const produtoId = params.get("id");

// busca o produto
const produto = produtos.find(p => p.id == produtoId);

if (!produto) {
  document.getElementById("produto-topo").innerHTML =
    "<p>Produto não encontrado.</p>";
} else {
  montarProduto(produto);
}

function montarProduto(produto) {

  // ----- TOPO DO PRODUTO -----
  document.getElementById("produto-topo").innerHTML = `
    <div class="produto-card">

      <div class="produto-imagem">
      
      ${produto.mostrarlancamento ? `
    <span class="badge-lancamento-produto">LANÇAMENTO</span>
  ` : ""}
        <img src="${produto.imagem}" alt="${produto.nome}">
        ${produto.mostrarVideo && produto.videoSrc ? `
  <button class="produto-video-btn" onclick="abrirVideo('${produto.videoSrc}', '${produto.videoTipo}')">
    ${produto.videoTipo === "youtube"
      ? `<img src="https://img.youtube.com/vi/${extrairYoutubeId(produto.videoSrc)}/hqdefault.jpg">`
      : `<video src="${produto.videoSrc}" muted autoplay loop playsinline></video>`
    }
    <span class="play-indicador">▶</span>
  </button>
        ` : ""}
      </div>

     <div class="produto-info">

  <h1>${produto.nome}</h1>

  ${produto.descricao?.resumo ? `
  <p class="produto-resumo">
    ${produto.descricao.resumo}
  </p>
` : ""}

  <p class="produto-preco">
    R$ ${produto.preco.toFixed(2)}
  </p>

  <p class="produto-parcelamento">
    ${produto.textoParcelamento || ""}
  </p>

  <!-- AÇÕES: quantidade + comprar -->
  <div class="produto-acoes">

    <div class="produto-quantidade">
  <div class="produto-quantidade-anel">
    <button onclick="alterarQuantidade(-1)">−</button>
    <span id="quantidade">1</span>
    <button onclick="alterarQuantidade(1)">+</button>
  </div>
  </div>

    <button class="btn-comprar" onclick="comprarProduto()">
  Comprar
</button>

  </div>

</div>



  `;

  // ----- DESCRIÇÃO COMPLETA -----
  document.getElementById("produto-descricao").innerHTML = `
    <section>
      <h2>O que é o produto?</h2>
      <p>${produto.descricao.oQueE}</p>
    </section>

    <section>
      <h2>Composição</h2>
      <p>${produto.descricao.composicao}</p>
    </section>

    <section>
      <h2>Como usar</h2>
      <p>${produto.descricao.comoUsar}</p>
    </section>

    <section>
      <h2>Advertências</h2>
      <p>${produto.descricao.advertencias}</p>
    </section>
  `;
}



// ================================
// EXTRAIR VIDEO DO YOUTUBE
// ================================

function extrairYoutubeId(url) {
  const match = url.match(/embed\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : "";
}


// ================================
// MODAL DE VÍDEO
// ================================

function abrirVideo(src, tipo = "mp4") {
  const modal = document.createElement("div");
  modal.className = "video-modal";

  modal.innerHTML = `
    <div class="video-content">
      <button class="video-close">✕</button>

      ${tipo === "youtube"
        ? `<iframe
            src="${src}?autoplay=1"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>`
        : `<video controls autoplay>
            <source src="${src}" type="video/mp4">
          </video>`
      }

    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector(".video-close").onclick = () => modal.remove();
  modal.onclick = (e) => e.target === modal && modal.remove();
}



// ================================
// CONTROLE DE QUANTIDADE
// ================================

let quantidadeAtual = 1;

function alterarQuantidade(valor) {
  quantidadeAtual += valor;

  if (quantidadeAtual < 1) {
    quantidadeAtual = 1;
  }

  document.getElementById("quantidade").textContent = quantidadeAtual;
}

// ================================
// COMPRAR PRODUTO (WHATSAPP)
// ================================

function comprarProduto() {

  if (!produto) return;

  const valorUnitario = produto.preco;
  const quantidade = quantidadeAtual;
  const valorTotal = valorUnitario * quantidade;

  const basePath = window.location.pathname
  .split("/")
  .slice(0, -1)
  .join("/");

const linkProduto =
  `${window.location.origin}${basePath}/produto.html?id=${produto.id}`;

  const mensagem =
    `Olá! Gostaria de fazer um pedido:%0A%0A` +
    `Produto: ${produto.nome}%0A` +
    `Categoria: ${produto.categoria}%0A` +
    `Quantidade: ${quantidade} unidade(s)%0A` +
    `Valor unitário: ${formatarPreco(valorUnitario)}%0A` +
    `Valor total: ${formatarPreco(valorTotal)}%0A%0A` +
    `Link do produto:%0A${linkProduto}`;

  const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`;
  window.open(url, "_blank");
}

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}


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
