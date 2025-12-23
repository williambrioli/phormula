/* ============================================================
   SEARCH.JS – BUSCA ESTILO MARKETPLACE
   ============================================================ */

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

/* Normaliza texto (minúscula + sem acento) */
function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/* Renderiza lista */
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

/* Evento de digitação */
searchInput.addEventListener("input", () => {
  const termo = normalizarTexto(searchInput.value.trim());

  if (!termo) {
    searchResults.classList.remove("active");
    return;
  }

  const resultados = produtos.filter(produto =>
    normalizarTexto(produto.nome).includes(termo)
  );

  renderResultados(resultados);
});

/* Fecha ao clicar fora */
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-wrapper")) {
    searchResults.classList.remove("active");
  }
});
