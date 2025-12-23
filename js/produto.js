// ================================
// PÁGINA DE PRODUTO
// ================================

// pega o id da URL
const params = new URLSearchParams(window.location.search);
const produtoId = params.get("id");

// busca o produto
const produto = produtos.find(p => p.id === produtoId);

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
        <img src="${produto.imagem}" alt="${produto.nome}">
        ${produto.videos?.length ? `
          <button class="produto-video-btn" onclick="abrirVideo('${produto.videos[0]}')">
            ▶
          </button>
        ` : ""}
      </div>

      <div class="produto-info">
        <h1>${produto.nome}</h1>
        <p class="produto-preco">R$ ${produto.preco.toFixed(2)}</p>

        <button class="btn-comprar">Comprar</button>
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
// MODAL DE VÍDEO
// ================================

function abrirVideo(src) {
  const modal = document.createElement("div");
  modal.className = "video-modal";

  modal.innerHTML = `
    <div class="video-content">
      <button class="video-close" onclick="this.parentElement.parentElement.remove()">✕</button>
      <video controls autoplay>
        <source src="${src}" type="video/mp4">
      </video>
    </div>
  `;

  document.body.appendChild(modal);
}
