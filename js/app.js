const banner = document.getElementById("banner");
const container = document.getElementById("produtos-container");
const searchInput = document.getElementById("searchInput");

function format(v) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function criarCard(p) {
  return `
    <div class="card">
      <img src="${p.imagem}">
      <h3>${p.nome}</h3>
      <div class="preco">${format(p.preco)}</div>
      <div class="card-actions">
        <div class="qty">
          <button>-</button><span>1</span><button>+</button>
        </div>
        <button class="buy">Comprar</button>
      </div>
    </div>
  `;
}

/* ===== DESTAQUES ===== */
produtos.filter(p => p.destaque).forEach(p => {
  banner.innerHTML += criarCard(p);
});

/* ===== CATEGORIAS ===== */
categorias.forEach(cat => {
  const lista = produtos.filter(p => p.categoria === cat.id);
  if (!lista.length) return;

  const section = document.createElement("section");
  section.innerHTML = `<h2>${cat.nome}</h2><div class="product-row"></div>`;
  const row = section.querySelector(".product-row");

  lista.forEach(p => row.innerHTML += criarCard(p));
  container.appendChild(section);
});

/* ===== BUSCA ===== */
searchInput.addEventListener("input", e => {
  const termo = e.target.value.toLowerCase();
  container.innerHTML = "";

  categorias.forEach(cat => {
    const lista = produtos.filter(p =>
      p.categoria === cat.id &&
      p.nome.toLowerCase().includes(termo)
    );
    if (!lista.length) return;

    const section = document.createElement("section");
    section.innerHTML = `<h2>${cat.nome}</h2><div class="product-row"></div>`;
    const row = section.querySelector(".product-row");

    lista.forEach(p => row.innerHTML += criarCard(p));
    container.appendChild(section);
  });
});
