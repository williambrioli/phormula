document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  if (!searchInput || !searchResults) return;

  function normalizar(texto) {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function obterProdutos() {
    if (Array.isArray(window.produtos)) return window.produtos;
    if (window.DATA && Array.isArray(window.DATA.produtos)) return window.DATA.produtos;
    if (Array.isArray(window.produtosData)) return window.produtosData;
    return [];
  }

  searchInput.addEventListener("input", () => {
    const termo = normalizar(searchInput.value.trim());
    searchResults.innerHTML = "";

    if (!termo) {
      searchResults.classList.remove("active");
      return;
    }

    const produtos = obterProdutos();
    if (!produtos.length) return;

    produtos
      .filter(p => normalizar(p.nome).includes(termo))
      .slice(0, 10)
      .forEach(p => {
        const div = document.createElement("div");
        div.className = "search-item";
        div.innerHTML = `
          <img src="${p.imagem}" alt="${p.nome}">
          <span>${p.nome}</span>
        `;
        div.onclick = () => {
          window.location.href = `produto.html?id=${p.id}`;
        };
        searchResults.appendChild(div);
      });

    searchResults.classList.add("active");
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".search-wrapper")) {
      searchResults.classList.remove("active");
    }
  });
});

