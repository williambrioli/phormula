/* ============================================================
   SEARCH.JS – BUSCA ESTILO MARKETPLACE
   ============================================================ */

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

/* 🔒 PROTEÇÃO: só executa se existir busca na página */
if (searchInput && searchResults) {

  function normalizarTexto(texto) {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function renderResultados(lista) {
    searchResults.innerHTML = "";

    if (!lista.length) {
      searchResults.classList.remove("active");
      return;
    }

    lista.forEach(produto => {
      const item = document.createElement("div");
      item.className = "search-item";

      item.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <span>${produto.nome}</span>
      `;

      item.addEventListener("click", () => {
        window.location.href = `produto.html?id=${produto.id}`;
      });

      searchResults.appendChild(item);
    });

    searchResults.classList.add("active");
  }

  searchInput.addEventListener("input", () => {
    const termo = normalizarTexto(searchInput.value.trim());

    if (!termo) {
      searchResults.classList.remove("active");
      return;
    }

    const baseProdutos =
  window.produtos ||
  window.produtosData ||
  (window.DATA && window.DATA.produtos) ||
  [];

const resultados = baseProdutos.filter(produto =>
  normalizarTexto(produto.nome).includes(termo)
);
    renderResultados(resultados);
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrapper")) {
      searchResults.classList.remove("active");
    }
  });

}
