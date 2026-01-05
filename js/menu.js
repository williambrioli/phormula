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

  let count = 0;

  // cria o item "+ Mais"
  const liMais = document.createElement("li");
  liMais.className = "menu-mais";

  const spanMais = document.createElement("span");
  spanMais.textContent = "+ Mais ▾";

  const submenu = document.createElement("ul");
  submenu.className = "submenu-mais";

  liMais.appendChild(spanMais);
  liMais.appendChild(submenu);

  categorias.forEach(cat => {
    if (!cat.mostrarNoMenu) return;

    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = `index.html#${cat.id}`;
    a.textContent = cat.nomeMenu || cat.nome;

    li.appendChild(a);

    // 🔑 até 3 itens no menu principal
    if (count < 3) {
      menuCategorias.appendChild(li);
    } else {
      submenu.appendChild(li);
    }

    count++;
  });

  // adiciona o "+ Mais" apenas se houver itens extras
  if (submenu.children.length > 0) {
    menuCategorias.appendChild(liMais);
  }
});
