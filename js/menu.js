// ============================================================
// MENU DE CATEGORIAS (GLOBAL)
// Funciona no index.html e no produto.html
// Respeita mostrarNoMenu do data.js
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const menuCategorias = document.getElementById("menu-categorias");

  // segurança
  if (!menuCategorias || typeof categorias === "undefined") return;

  menuCategorias.innerHTML = "";

  categorias.forEach(cat => {
    if (!cat.mostrarNoMenu) return;

    const li = document.createElement("li");
    const a = document.createElement("a");

    // link sempre aponta para o index
    a.href = `index.html#${cat.id}`;
    a.textContent = cat.nomeMenu || cat.nome;

    li.appendChild(a);
    menuCategorias.appendChild(li);
  });
});
