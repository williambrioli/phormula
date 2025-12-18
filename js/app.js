const menu = document.getElementById("menu-categorias");
const container = document.getElementById("produtos-container");
const destaques = document.getElementById("destaques");

// MENU
categorias.forEach(cat => {
  if (cat.mostrarNoMenu) {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#${cat.id}">${cat.nome}</a>`;
    menu.appendChild(li);
  }
});

// DESTAQUES
produtos.filter(p => p.destaque).forEach(p => {
  destaques.appendChild(cardProduto(p));
});

// CATEGORIAS
categorias.forEach(cat => {
  const sec = document.createElement("section");
  sec.className = "section";
  sec.id = cat.id;

  const h2 = document.createElement("h2");
  h2.textContent = cat.nome;

  const grid = document.createElement("div");
  grid.className = "product-grid";

  produtos.filter(p => p.categoria === cat.id).forEach(p => {
    grid.appendChild(cardProduto(p));
  });

  sec.appendChild(h2);
  sec.appendChild(grid);
  container.appendChild(sec);
});

// CARD
function cardProduto(p) {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <img src="${p.imagem}">
    <h3>${p.nome}</h3>
    <p class="price">R$ ${p.preco.toFixed(2)}</p>
    <button class="btn">Comprar</button>
  `;
  return div;
}

// MENU MOBILE
document.getElementById("menuToggle").onclick = () => {
  document.getElementById("navMenu").classList.toggle("active");
};
