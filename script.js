const produtos = [
  // Sedan
  {
    id: 1,
    nome: "Honda Civic",
    imagem: "./assets/images/honda-civic.jpg",
    quantidade: 5,
    categoria: "sedan",
    valor: 89900,
  },
  {
    id: 2,
    nome: "Toyota Corolla",
    imagem: "./assets/images/corolla.jpg",
    quantidade: 3,
    categoria: "sedan",
    valor: 95500,
  },
  {
    id: 3,
    nome: "Hyundai Elantra",
    imagem: "./assets/images/elantra.jpg",
    quantidade: 2,
    categoria: "sedan",
    valor: 78900,
  },
  {
    id: 4,
    nome: "Nissan Sentra",
    imagem: "./assets/images/sentra.jpg",
    quantidade: 4,
    categoria: "sedan",
    valor: 82300,
  },
  {
    id: 5,
    nome: "Volkswagen Jetta",
    imagem: "./assets/images/jetta.jpg",
    quantidade: 1,
    categoria: "sedan",
    valor: 92800,
  },
  {
    id: 6,
    nome: "Ford Fusion",
    imagem: "./assets/images/fusion.jpg",
    quantidade: 2,
    categoria: "sedan",
    valor: 87400,
  },
  {
    id: 7,
    nome: "Chevrolet Cruze",
    imagem: "./assets/images/cruze.jpg",
    quantidade: 3,
    categoria: "sedan",
    valor: 79900,
  },
  {
    id: 8,
    nome: "Mazda6",
    imagem: "./assets/images/mazda6.jpg",
    quantidade: 2,
    categoria: "sedan",
    valor: 98500,
  },
  {
    id: 9,
    nome: "Subaru Legacy",
    imagem: "./assets/images/subaru-legacy.webp",
    quantidade: 1,
    categoria: "sedan",
    valor: 105200,
  },
  {
    id: 10,
    nome: "Kia Optima",
    imagem: "./assets/images/kia-optima.webp",
    quantidade: 4,
    categoria: "sedan",
    valor: 86700,
  },

  // SUV
  {
    id: 11,
    nome: "Toyota RAV4",
    imagem: "./assets/images/RAV4.jpg",
    quantidade: 6,
    categoria: "suv",
    valor: 165000,
  },
  {
    id: 12,
    nome: "Ford Edge",
    imagem: "./assets/images/edge.webp",
    quantidade: 3,
    categoria: "suv",
    valor: 158900,
  },
  {
    id: 13,
    nome: "Honda CR-V",
    imagem: "./assets/images/cr-v.jpg",
    quantidade: 4,
    categoria: "suv",
    valor: 172300,
  },
  {
    id: 14,
    nome: "Nissan X-Trail",
    imagem: "./assets/images/x-trai;.jpg",
    quantidade: 2,
    categoria: "suv",
    valor: 148700,
  },
  {
    id: 15,
    nome: "Chevrolet Equinox",
    imagem: "./assets/images/equinox.webp",
    quantidade: 1,
    categoria: "suv",
    valor: 142800,
  },
  {
    id: 16,
    nome: "Hyundai Tucson",
    imagem: "./assets/images/tucson.webp",
    quantidade: 5,
    categoria: "suv",
    valor: 139900,
  },
  {
    id: 17,
    nome: "Kia Sorento",
    imagem: "./assets/images/sorento.jpg",
    quantidade: 3,
    categoria: "suv",
    valor: 156400,
  },
  {
    id: 18,
    nome: "Mazda CX-5",
    imagem: "./assets/images/cx-5.avif",
    quantidade: 2,
    categoria: "suv",
    valor: 167800,
  },
  {
    id: 19,
    nome: "Subaru Forester",
    imagem: "./assets/images/forester.avif",
    quantidade: 1,
    categoria: "suv",
    valor: 178500,
  },
  {
    id: 20,
    nome: "Jeep Compass",
    imagem: "./assets/images/compass.jpg",
    quantidade: 4,
    categoria: "suv",
    valor: 152900,
  },

  // Hatch
  {
    id: 21,
    nome: "Volkswagen Golf",
    imagem: "./assets/images/golf.webp",
    quantidade: 7,
    categoria: "hatch",
    valor: 67900,
  },
  {
    id: 22,
    nome: "Ford Focus",
    imagem: "./assets/images/focus.jpeg",
    quantidade: 5,
    categoria: "hatch",
    valor: 62300,
  },
  {
    id: 23,
    nome: "Honda Fit",
    imagem: "./assets/images/honda-fit.webp",
    quantidade: 8,
    categoria: "hatch",
    valor: 58700,
  },
  {
    id: 24,
    nome: "Toyota Yaris",
    imagem: "./assets/images/yaris.webp",
    quantidade: 6,
    categoria: "hatch",
    valor: 54900,
  },
  {
    id: 25,
    nome: "Hyundai i30",
    imagem: "./assets/images/i30.webp",
    quantidade: 3,
    categoria: "hatch",
    valor: 71200,
  },
  {
    id: 26,
    nome: "Nissan March",
    imagem: "./assets/images/march.webp",
    quantidade: 4,
    categoria: "hatch",
    valor: 48500,
  },
  {
    id: 27,
    nome: "Chevrolet Onix",
    imagem: "./assets/images/onix.jpg",
    quantidade: 9,
    categoria: "hatch",
    valor: 52800,
  },
  {
    id: 28,
    nome: "Fiat Argo",
    imagem: "./assets/images/argo.webp",
    quantidade: 2,
    categoria: "hatch",
    valor: 56300,
  },
  {
    id: 29,
    nome: "Renault Sandero",
    imagem: "./assets/images/sandero.jpg",
    quantidade: 1,
    categoria: "hatch",
    valor: 49900,
  },
  {
    id: 30,
    nome: "Peugeot 208",
    imagem: "./assets/images/208.webp",
    quantidade: 50,
    categoria: "hatch",
    valor: 68700,
  },
];

let carrinho = [];
let produtosFiltrados = [...produtos];

function exibirProdutos(listaProdutos) {
  const container = document.getElementById("produtosContainer");
  container.innerHTML = "";

  listaProdutos.forEach((produto, index) => {
    const card = criarCardProduto(produto);
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add("animate-fade-in");
    container.appendChild(card);
  });
}

function criarCardProduto(produto) {
  const col = document.createElement("div");
  col.className =
    "bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100";

  col.setAttribute("data-produto-id", produto.id);

  const itemCarrinho = carrinho.find((item) => item.id === produto.id);
  const quantidadeNoCarrinho = itemCarrinho
    ? itemCarrinho.quantidadeCarrinho
    : 0;
  const estoqueDisponivel = produto.quantidade - quantidadeNoCarrinho;

  const stockBadgeClass =
    estoqueDisponivel === 0
      ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
      : estoqueDisponivel <= 2
      ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
      : "bg-gradient-to-r from-green-500 to-emerald-600 text-white";

  const stockText =
    estoqueDisponivel === 0
      ? "Esgotado"
      : estoqueDisponivel <= 2
      ? `${estoqueDisponivel} restantes`
      : `${estoqueDisponivel} em estoque`;

  // Corrigido: Classes do botão mais específicas e sem conflitos
  const botaoTexto =
    estoqueDisponivel === 0 ? "Indisponível" : "Adicionar ao Carrinho";
  const botaoDisabled = estoqueDisponivel === 0;

  col.innerHTML = `
    <div class="relative overflow-hidden">
        <img src="${produto.imagem}" alt="${
    produto.nome
  }" class="w-full h-56 object-cover transition-transform duration-500 hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <span class="stock-badge absolute top-4 left-4 px-3 py-1 text-sm font-bold rounded-full shadow-lg ${stockBadgeClass}">
        ${stockText}
        </span>
    </div>
    <div class="p-6">
        <div class="mb-4">
        <h5 class="text-xl font-bold text-gray-800 mb-1">${produto.nome}</h5>
        <p class="text-sm font-medium text-gray-500 uppercase tracking-wider">${
          produto.categoria
        }</p>
        </div>
        <div class="grid">
        <span class="text-2xl font-bold py-4 gradient-text">${formatarPreco(
          produto.valor
        )}</span>
        <button
            class="add-to-cart-btn px-6 py-4 text-sm font-bold rounded-xl transition-all duration-300 ${
              botaoDisabled
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-gray-100 text-green-600 hover:bg-green-600 hover:text-white hover:shadow-lg"
            }"
            onclick="adicionarAoCarrinho(${produto.id})"
            ${botaoDisabled ? "disabled" : ""}
        >
            <i class="fas fa-shopping-cart mr-2"></i>
            ${botaoTexto}
        </button>
        </div>
    </div>
    `;
  return col;
}

function formatarPreco(valor) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}

function mostrarTodos() {
  produtosFiltrados = [...produtos];
  document.getElementById("tituloSecao").textContent = "Nossos Veículos";
  exibirProdutos(produtosFiltrados);

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("bg-white/30", "backdrop-blur-sm", "border-white/50");
  });
  event.target.classList.add(
    "bg-white/30",
    "backdrop-blur-sm",
    "border-white/50"
  );
}

function adicionarAoCarrinho(productId) {
  const produto = produtos.find((p) => p.id === productId);

  if (!produto || produto.quantidade === 0) {
    alert("Produto indisponível");
    return;
  }

  const itemCarrinho = carrinho.find((item) => item.id === productId);
  const quantidadeNoCarrinho = itemCarrinho
    ? itemCarrinho.quantidadeCarrinho
    : 0;
  const quantidadeDisponivel = produto.quantidade - quantidadeNoCarrinho;

  if (quantidadeDisponivel <= 0) {
    alert("Quantidade máxima em estoque atingida!");
    return;
  }

  if (itemCarrinho) {
    itemCarrinho.quantidadeCarrinho++;
  } else {
    carrinho.push({
      ...produto,
      quantidadeCarrinho: 1,
    });
  }

  atualizarCarrinho();
  atualizarBadgeCarrinho();
  atualizarEstoqueVisual();
}

function removerDoCarrinho(productId) {
  carrinho = carrinho.filter((item) => item.id !== productId);
  atualizarCarrinho();
  atualizarBadgeCarrinho();
  atualizarEstoqueVisual();
}

function alterarQuantidadeCarrinho(productId, novaQuantidade) {
  const produto = produtos.find((p) => p.id === productId);
  const itemCarrinho = carrinho.find((item) => item.id === productId);

  if (novaQuantidade <= 0) {
    removerDoCarrinho(productId);
    return;
  }

  if (novaQuantidade > produto.quantidade) {
    alert("Quantidade máxima em estoque atingida!");
    return;
  }

  itemCarrinho.quantidadeCarrinho = novaQuantidade;
  atualizarCarrinho();
  atualizarBadgeCarrinho();
  atualizarEstoqueVisual();
}

function atualizarCarrinho() {
  const container = document.getElementById("carrinhoItens");
  const total = document.getElementById("totalCarrinho");
  const btnFinalizar = document.getElementById("btnFinalizar");

  container.innerHTML = "";
  let valorTotal = 0;

  if (carrinho.length === 0) {
    container.innerHTML = `
            <div class="text-center py-12">
              <i class="fas fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
              <p class="text-xl text-gray-500">Carrinho vazio</p>
              <p class="text-gray-400">Adicione alguns produtos incríveis!</p>
            </div>
          `;
    btnFinalizar.disabled = true;
    btnFinalizar.classList.add("opacity-50", "cursor-not-allowed");
  } else {
    btnFinalizar.disabled = false;
    btnFinalizar.classList.remove("opacity-50", "cursor-not-allowed");

    carrinho.forEach((item) => {
      valorTotal += item.valor * item.quantidadeCarrinho;

      const itemDiv = document.createElement("div");
      itemDiv.className =
        "flex flex-col sm:flex-row items-center justify-between bg-gray-50 rounded-xl p-4 gap-4 animate-fade-in";

      itemDiv.innerHTML = `
              <div class="w-full sm:w-1/6">
                <img src="${item.imagem}" alt="${
        item.nome
      }" class="w-full h-20 object-cover rounded-lg shadow-md">
              </div>
              <div class="w-full sm:w-2/5 text-center sm:text-left">
                <h6 class="font-bold text-gray-800 text-lg">${item.nome}</h6>
                <small class="text-blue-600 font-semibold">${formatarPreco(
                  item.valor
                )}</small>
              </div>
              <div class="w-full sm:w-1/4 flex items-center justify-center gap-3">
                <button class="bg-gray-300 hover:bg-gray-400 w-8 h-8 rounded-lg transition-colors flex items-center justify-center" onclick="alterarQuantidadeCarrinho(${
                  item.id
                }, ${item.quantidadeCarrinho - 1})">
                  <i class="fas fa-minus text-sm"></i>
                </button>
                <input type="number" class="w-16 text-center border-2 border-gray-200 rounded-lg py-1 font-bold" value="${
                  item.quantidadeCarrinho
                }" readonly>
                <button class="bg-gray-300 hover:bg-gray-400 w-8 h-8 rounded-lg transition-colors flex items-center justify-center" onclick="alterarQuantidadeCarrinho(${
                  item.id
                }, ${item.quantidadeCarrinho + 1})">
                  <i class="fas fa-plus text-sm"></i>
                </button>
              </div>
              <div class="w-full sm:w-1/6 text-center font-bold text-xl gradient-text">
                ${formatarPreco(item.valor * item.quantidadeCarrinho)}
              </div>
              <div class="w-full sm:w-auto">
                <button class="bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-lg transition-colors flex items-center justify-center shadow-lg hover:shadow-xl" onclick="removerDoCarrinho(${
                  item.id
                })">
                  <i class="fas fa-trash text-sm"></i>
                </button>
              </div>
            `;
      container.appendChild(itemDiv);
    });
  }

  total.textContent = formatarPreco(valorTotal);
}

function atualizarBadgeCarrinho() {
  const badge = document.getElementById("cartBadge");
  const totalItens = carrinho.reduce(
    (total, item) => total + item.quantidadeCarrinho,
    0
  );
  badge.textContent = totalItens;
  badge.classList.toggle("hidden", totalItens === 0);
}

function toggleCarrinho() {
  const modal = document.getElementById("carrinhoModal");
  modal.classList.toggle("hidden");
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Carrinho vazio!");
    return;
  }

  const btnFinalizar = document.getElementById("btnFinalizar");
  btnFinalizar.innerHTML =
    '<i class="fas fa-spinner fa-spin mr-2"></i>Processando...';
  btnFinalizar.disabled = true;

  setTimeout(() => {
    carrinho.forEach((itemCarrinho) => {
      const produto = produtos.find((p) => p.id === itemCarrinho.id);
      produto.quantidade -= itemCarrinho.quantidadeCarrinho;
    });

    alert("🎉 Compra finalizada com sucesso! Obrigado pela preferência!");
    carrinho = [];
    atualizarCarrinho();
    atualizarBadgeCarrinho();

    // Corrigido: Re-renderizar produtos para atualizar estoque
    exibirProdutos(produtosFiltrados);

    document.getElementById("carrinhoModal").classList.add("hidden");

    btnFinalizar.innerHTML =
      '<i class="fas fa-credit-card text-black mr-2"></i>Finalizar Compra';
    btnFinalizar.disabled = false;
  }, 2000);
}

function filtrarCategoria(categoria) {
  produtosFiltrados = produtos.filter(
    (produto) => produto.categoria === categoria
  );

  const categoriaMap = {
    sedan: "Sedans Premium",
    suv: "SUVs Potentes",
    hatch: "Hatches Urbanos",
  };

  document.getElementById("tituloSecao").textContent =
    categoriaMap[categoria] || categoria;
  exibirProdutos(produtosFiltrados);

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("bg-white/30", "backdrop-blur-sm", "border-white/50");
  });
  event.target.classList.add(
    "bg-white/30",
    "backdrop-blur-sm",
    "border-white/50"
  );
}

function pesquisarProdutos(event) {
  event.preventDefault();
  const termo = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  if (termo === "") {
    mostrarTodos();
    return;
  }

  produtosFiltrados = produtos.filter((produto) => {
    const nome = produto.nome
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const categoria = produto.categoria
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    return nome.includes(termo) || categoria.includes(termo);
  });

  document.getElementById(
    "tituloSecao"
  ).textContent = `🔍 Resultados para: "${termo}"`;
  exibirProdutos(produtosFiltrados);

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("bg-white/30", "backdrop-blur-sm", "border-white/50");
  });
}

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(255, 255, 255, 0.95)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.1)";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  exibirProdutos(produtos);
  atualizarBadgeCarrinho();

  const primeiroBtn = document.querySelector(".nav-btn");
  if (primeiroBtn) {
    primeiroBtn.classList.add(
      "bg-white/30",
      "backdrop-blur-sm",
      "border-white/50"
    );
  }

  setTimeout(() => {
    document.querySelector("#tituloSecao").classList.add("animate-slide-up");
  }, 300);
});

document.getElementById("carrinhoModal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    toggleCarrinho();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modal = document.getElementById("carrinhoModal");
    if (!modal.classList.contains("hidden")) {
      toggleCarrinho();
    }
  }
  if (e.ctrlKey && e.key === "k") {
    e.preventDefault();
    document.getElementById("searchInput").focus();
  }
});

function atualizarEstoqueVisual() {
  const cards = document.querySelectorAll("[data-produto-id]");

  cards.forEach((card) => {
    const produtoId = parseInt(card.getAttribute("data-produto-id"));
    const produto = produtos.find((p) => p.id === produtoId);

    if (!produto) return;

    const itemCarrinho = carrinho.find((item) => item.id === produtoId);
    const quantidadeNoCarrinho = itemCarrinho
      ? itemCarrinho.quantidadeCarrinho
      : 0;
    const estoqueDisponivel = produto.quantidade - quantidadeNoCarrinho;

    const stockBadge = card.querySelector(".stock-badge");
    const addToCartBtn = card.querySelector(".add-to-cart-btn");

    if (estoqueDisponivel === 0) {
      stockBadge.className =
        "stock-badge absolute top-4 left-4 px-3 py-1 text-sm font-bold rounded-full shadow-lg bg-gradient-to-r from-red-500 to-red-600 text-white";
      stockBadge.textContent = "Esgotado";
    } else if (estoqueDisponivel <= 2) {
      stockBadge.className =
        "stock-badge absolute top-4 left-4 px-3 py-1 text-sm font-bold rounded-full shadow-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white";
      stockBadge.textContent = `${estoqueDisponivel} restantes`;
    } else {
      stockBadge.className =
        "stock-badge absolute top-4 left-4 px-3 py-1 text-sm font-bold rounded-full shadow-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white";
      stockBadge.textContent = `${estoqueDisponivel} em estoque`;
    }

    if (estoqueDisponivel === 0) {
      addToCartBtn.className =
        "add-to-cart-btn px-6 py-4 text-sm font-bold rounded-xl transition-all duration-300 bg-gray-400 text-white cursor-not-allowed";
      addToCartBtn.innerHTML =
        '<i class="fas fa-shopping-cart mr-2"></i>Indisponível';
      addToCartBtn.disabled = true;
    } else {
      addToCartBtn.className =
        "add-to-cart-btn px-6 py-4 text-sm font-bold rounded-xl transition-all duration-300 bg-gray-100 text-green-600 hover:bg-green-600 hover:text-white hover:shadow-lg";
      addToCartBtn.innerHTML =
        '<i class="fas fa-shopping-cart mr-2"></i>Adicionar ao Carrinho';
      addToCartBtn.disabled = false;
    }

    stockBadge.style.transform = "scale(1.05)";
    setTimeout(() => {
      stockBadge.style.transform = "scale(1)";
    }, 150);
  });
}
