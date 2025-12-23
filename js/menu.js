// ================================
// MENU DE CATEGORIAS (GLOBAL)
// ================================

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu-categorias");
  if (!menu || typeof produtos === "undefined") return;

  // categorias únicas
  const categorias = [...new Set(produtos.map(p => p.categoria))];

  menu.innerHTML = "";

  categorias.forEach(cat => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = `index.html#${cat}`;
    a.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);

    li.appendChild(a);
    menu.appendChild(li);
  });
});
