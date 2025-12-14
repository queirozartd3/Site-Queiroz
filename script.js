function mostrarPopupCarrinho() {
    const popup = document.getElementById("cart-popup");
    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);
  }
  
  function scrollToCart() {
    document.querySelector(".cart-box").scrollIntoView({ behavior: "smooth" });
  }
  
  const produtos = [



  

        {
      nome: "Roda Dcent DW903",
      descricao: "Roda produzida em impressão 3D, feita em resina e sem pintura, com pneus em ABS preto fosco. Disponível para eixo 2 mm, eixo sextavado ou pino adaptador. Suporte de eixo direto no pneu.",
      imagens: [
        "Fotos/Rodas/9031.png",
        "Fotos/Rodas/9032.png",
        "Fotos/Rodas/9033.png",
      ],
      opcoes: [
  { nome: "Jogo 30mm",  preco: 39.90 },
  { nome: "Jogo 35mm",  preco: 47.90 },
  { nome: "Jogo 40mm",  preco: 54.90 },
  { nome: "Jogo 45mm",  preco: 61.90 },
  { nome: "Jogo 50mm",  preco: 67.90 },
  { nome: "Jogo 55mm",  preco: 79.90 },
  { nome: "Jogo 60mm",  preco: 92.90 },
  { nome: "Jogo 65mm",  preco: 106.90 },
  { nome: "Jogo 70mm",  preco: 119.90 },
  { nome: "Jogo 75mm",  preco: 139.90 },
  { nome: "Jogo 80mm",  preco: 159.90 },
  { nome: "Jogo 85mm",  preco: 179.90 },
  { nome: "Jogo 90mm",  preco: 214.90 },
  { nome: "Jogo 95mm",  preco: 239.90 },
  { nome: "Jogo 100mm", preco: 274.90 },
  { nome: "Jogo 105mm", preco: 324.90 },
  { nome: "Jogo 110mm", preco: 354.90 },
  { nome: "Jogo 115mm", preco: 389.90 },
  { nome: "Jogo 120mm", preco: 469.90 },
  { nome: "Jogo 125mm", preco: 544.90 },
  { nome: "Jogo 130mm", preco: 630.00 }
],
    },

    {
      nome: "Roda DUB S218",
      descricao: "Roda produzida em impressão 3D, feita em resina e sem pintura, com pneus em ABS preto fosco. Disponível para eixo 2 mm, eixo sextavado ou pino adaptador. Suporte de eixo direto no pneu.",
      imagens: [
        "Fotos/Rodas/dub.png",
        "Fotos/Rodas/dub2.png",
        "Fotos/Rodas/dub3.png",    
      ],
      opcoes: [
  { nome: "Jogo 30mm",  preco: 39.90 },
  { nome: "Jogo 35mm",  preco: 47.90 },
  { nome: "Jogo 40mm",  preco: 54.90 },
  { nome: "Jogo 45mm",  preco: 61.90 },
  { nome: "Jogo 50mm",  preco: 67.90 },
  { nome: "Jogo 55mm",  preco: 79.90 },
  { nome: "Jogo 60mm",  preco: 92.90 },
  { nome: "Jogo 65mm",  preco: 106.90 },
  { nome: "Jogo 70mm",  preco: 119.90 },
  { nome: "Jogo 75mm",  preco: 139.90 },
  { nome: "Jogo 80mm",  preco: 159.90 },
  { nome: "Jogo 85mm",  preco: 179.90 },
  { nome: "Jogo 90mm",  preco: 214.90 },
  { nome: "Jogo 95mm",  preco: 239.90 },
  { nome: "Jogo 100mm", preco: 274.90 },
  { nome: "Jogo 105mm", preco: 324.90 },
  { nome: "Jogo 110mm", preco: 354.90 },
  { nome: "Jogo 115mm", preco: 389.90 },
  { nome: "Jogo 120mm", preco: 469.90 },
  { nome: "Jogo 125mm", preco: 544.90 },
  { nome: "Jogo 130mm", preco: 630.00 }
],
    },

      {
      nome: "Roda Lexani LX30",
      descricao: "Roda produzida em impressão 3D, feita em resina e sem pintura, com pneus em ABS preto fosco. Disponível para eixo 2 mm, eixo sextavado ou pino adaptador. Suporte de eixo direto no pneu.",
      imagens: [
        "Fotos/Rodas/lx301.png",
        "Fotos/Rodas/lx302.png",
        "Fotos/Rodas/lx303.png",
      ],
      opcoes: [
  { nome: "Jogo 30mm",  preco: 39.90 },
  { nome: "Jogo 35mm",  preco: 47.90 },
  { nome: "Jogo 40mm",  preco: 54.90 },
  { nome: "Jogo 45mm",  preco: 61.90 },
  { nome: "Jogo 50mm",  preco: 67.90 },
  { nome: "Jogo 55mm",  preco: 79.90 },
  { nome: "Jogo 60mm",  preco: 92.90 },
  { nome: "Jogo 65mm",  preco: 106.90 },
  { nome: "Jogo 70mm",  preco: 119.90 },
  { nome: "Jogo 75mm",  preco: 139.90 },
  { nome: "Jogo 80mm",  preco: 159.90 },
  { nome: "Jogo 85mm",  preco: 179.90 },
  { nome: "Jogo 90mm",  preco: 214.90 },
  { nome: "Jogo 95mm",  preco: 239.90 },
  { nome: "Jogo 100mm", preco: 274.90 },
  { nome: "Jogo 105mm", preco: 324.90 },
  { nome: "Jogo 110mm", preco: 354.90 },
  { nome: "Jogo 115mm", preco: 389.90 },
  { nome: "Jogo 120mm", preco: 469.90 },
  { nome: "Jogo 125mm", preco: 544.90 },
  { nome: "Jogo 130mm", preco: 630.00 }
],
    },

    {
      nome: "Roda Lexani Advicate",
      descricao: "Roda produzida em impressão 3D, feita em resina e sem pintura, com pneus em ABS preto fosco. Disponível para eixo 2 mm, eixo sextavado ou pino adaptador. Suporte de eixo direto no pneu.",
      imagens: [
        "Fotos/Rodas/lexani1.png",
        "Fotos/Rodas/lexani2.png",
        "Fotos/Rodas/lexani3.png",
      ],
      opcoes: [
  { nome: "Jogo 30mm",  preco: 39.90 },
  { nome: "Jogo 35mm",  preco: 47.90 },
  { nome: "Jogo 40mm",  preco: 54.90 },
  { nome: "Jogo 45mm",  preco: 61.90 },
  { nome: "Jogo 50mm",  preco: 67.90 },
  { nome: "Jogo 55mm",  preco: 79.90 },
  { nome: "Jogo 60mm",  preco: 92.90 },
  { nome: "Jogo 65mm",  preco: 106.90 },
  { nome: "Jogo 70mm",  preco: 119.90 },
  { nome: "Jogo 75mm",  preco: 139.90 },
  { nome: "Jogo 80mm",  preco: 159.90 },
  { nome: "Jogo 85mm",  preco: 179.90 },
  { nome: "Jogo 90mm",  preco: 214.90 },
  { nome: "Jogo 95mm",  preco: 239.90 },
  { nome: "Jogo 100mm", preco: 274.90 },
  { nome: "Jogo 105mm", preco: 324.90 },
  { nome: "Jogo 110mm", preco: 354.90 },
  { nome: "Jogo 115mm", preco: 389.90 },
  { nome: "Jogo 120mm", preco: 469.90 },
  { nome: "Jogo 125mm", preco: 544.90 },
  { nome: "Jogo 130mm", preco: 630.00 }
],

    },
    {
      nome: "Medio Grave com Pintura",
      descricao: "Medio Grave feitos em resina e pintados à mão, com detalhes realistas e acabamento fino.",
      imagens: [
        "Fotos/render3.png",
        "Fotos/render1.png",
        "Fotos/render2.png"
      ],
      opcoes: [
  { nome: "Kit  10mm (10 unid.)", preco: 2.40 * 10},
  { nome: "Kit  11mm (10 unid.)", preco: 2.50 * 10},
  { nome: "Kit  12mm (10 unid.)", preco: 2.60 * 10},
  { nome: "Kit  13mm (10 unid.)", preco: 2.70 * 10},
  { nome: "Kit  14mm (10 unid.)", preco: 2.80 * 10},
  { nome: "Kit  15mm (10 unid.)", preco: 2.90 * 10},
  { nome: "Kit  16mm (10 unid.)", preco: 3.00 * 10},
  { nome: "Kit  17mm (10 unid.)", preco: 3.10 * 10},
  { nome: "Kit  18mm (10 unid.)", preco: 3.20 * 10},
  { nome: "Kit  19mm (10 unid.)", preco: 3.30 * 10},
  { nome: "Kit  20mm (10 unid.)", preco: 3.40 * 10},
      ]
    },
    {
      nome: "6X9 Zetta com Pintura",
      descricao: "Mini falantes 6x9 feitos em resina e pintados à mão, com detalhes realistas e acabamento fino.",
      imagens: [
        "Fotos/Som/zz6x91.png",
        "Fotos/Som/zz6x92.png",
        "Fotos/Som/zz6x93.png",
      ],
      opcoes: [
  { nome: "Kit 15mm (10 unid.)", preco: 2.30 * 10},
  { nome: "Kit 16mm (10 unid.)", preco: 2.40 * 10},
  { nome: "Kit 17mm (10 unid.)", preco: 2.50 * 10},
  { nome: "Kit 18mm (10 unid.)", preco: 2.60 * 10},
  { nome: "Kit 19mm (10 unid.)", preco: 2.70 * 10},
  { nome: "Kit 20mm (10 unid.)", preco: 2.80 * 10},
  { nome: "Kit 21mm (10 unid.)", preco: 2.90 * 10},
  { nome: "Kit 22mm (10 unid.)", preco: 3.00 * 10},
  { nome: "Kit 23mm (10 unid.)", preco: 3.10 * 10},
  { nome: "Kit 24mm (10 unid.)", preco: 3.20 * 10},
  { nome: "Kit 25mm (10 unid.)", preco: 3.30 * 10},
  { nome: "Kit 26mm (10 unid.)", preco: 3.40 * 10},
  { nome: "Kit 27mm (10 unid.)", preco: 3.50 * 10},
  { nome: "Kit 28mm (10 unid.)", preco: 3.60 * 10},
      ]
    },

    {
      nome: "Tweeter com Pintura",
      descricao: "Tweeter feitos em resina e pintados à mão, com detalhes realistas",
      imagens: [
        "Fotos/Suporte Controle.jpg",
        "Fotos/Suporte Controle.jpg",
        "Fotos/Suporte Controle.jpg"
      ],
      opcoes: [
  { nome: "Kit  8mm (10 unid.)", preco: 2.20 * 10 },
  { nome: "Kit  9mm (10 unid.)", preco: 2.30 * 10 },
  { nome: "Kit 10mm (10 unid.)", preco: 2.40 * 10 },
  { nome: "Kit 11mm (10 unid.)", preco: 2.50 * 10 },
  { nome: "Kit 12mm (10 unid.)", preco: 2.60 * 10 },
  { nome: "Kit 13mm (10 unid.)", preco: 2.70 * 10 },
  { nome: "Kit 14mm (10 unid.)", preco: 2.80 * 10 },
  { nome: "Kit 15mm (10 unid.)", preco: 2.90 * 10 },
      ]
    },
    {
      nome: "Rack de teto",
      descricao: "Rack de teto para mini Fiat Toro Roma",
      imagens: [
        "Fotos/Suporte Controle.jpg",
        "Fotos/Suporte Controle.jpg",
        "Fotos/Suporte Controle.jpg"
      ],
      opcoes: [
        { nome: "1 unidade", preco: 39.90 },
        { nome: "2 unidades", preco: 59.90 },
        { nome: "3 unidades", preco: 89.90 },
      ]
    }
  ];
  
  const carrinho = [];
  
  function renderProdutos() {
    const container = document.getElementById("product-list");
    produtos.forEach((produto, index) => {
      const opcoesHTML = produto.opcoes.map((op, i) =>
        `<option value="${i}">${op.nome} - R$ ${op.preco.toFixed(2)}</option>`
      ).join("");
  
      const imagensHTML = produto.imagens.map(img => `<img src="${img}" alt="${produto.nome}" style="flex: 0 0 100%;">`).join("");
  
      container.innerHTML += `
        <div class="product">
          <div class="carousel-container">
            <div class="carousel-images" id="carousel-${index}" style="width: ${produto.imagens.length * 33.4}%;">
              ${imagensHTML}
            </div>
            <button class="carousel-btn prev" onclick="mudarImagem(${index}, -1)">‹</button>
            <button class="carousel-btn next" onclick="mudarImagem(${index}, 1)">›</button>
          </div>
          <h2>${produto.nome}</h2>
          <div class="description">${produto.descricao}</div>
          <select id="select-${index}">${opcoesHTML}</select>
          <button class="btn-add" onclick="addToCart(${index})">Adicionar ao Carrinho</button>
        </div>
      `;
    });
  }
  
  function addToCart(index) {
    const select = document.getElementById(`select-${index}`);
    const opcaoIndex = select.value;
    const produto = produtos[index];
    const variacao = produto.opcoes[opcaoIndex];
    const nomeFinal = `${produto.nome} (${variacao.nome})`;
  
    const existente = carrinho.find(item => item.nome === nomeFinal);
    if (existente) {
      existente.qtd++;
    } else {
      carrinho.push({ nome: nomeFinal, preco: variacao.preco, qtd: 1 });
    }
  
    renderCarrinho();
    mostrarPopupCarrinho();
  }
  function mostrarPopupCarrinho() {
    const popup = document.getElementById("cart-popup");
    popup.style.display = "block";
  
    // Reinicia a animação se for chamado rapidamente
    popup.classList.remove("fade");
    void popup.offsetWidth; // Trigger reflow
    popup.classList.add("fade");
  
    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);
  }
  
  
  function renderCarrinho() {
    const container = document.getElementById("cart-items");
    container.innerHTML = "";
    let total = 0;
    const totalProdutos = carrinho.length;
    const badge = document.getElementById("cart-count");
    badge.innerText = totalProdutos;
    badge.style.display = totalProdutos > 0 ? "inline-block" : "none";
    
  
    carrinho.forEach((item, index) => {
      const subtotal = item.qtd * item.preco;
      total += subtotal;
  
      container.innerHTML += `
        <div class="cart-item">
          <span>${item.nome}<br><small>${item.qtd}x R$ ${item.preco.toFixed(2)}</small></span>
          <div class="controls">
            <button class="btn-qty" onclick="alterarQtd(${index}, -1)">-</button>
            <span>${item.qtd}</span>
            <button class="btn-qty" onclick="alterarQtd(${index}, 1)">+</button>
          </div>
        </div>
      `;
    });
  
    document.getElementById("cart-total").innerText = `Total: R$ ${total.toFixed(2)}`;
  }
  
  function alterarQtd(index, delta) {
    carrinho[index].qtd += delta;
    if (carrinho[index].qtd <= 0) {
      carrinho.splice(index, 1);
    }
    renderCarrinho();
  }
  function enviarWhatsApp() {
    if (carrinho.length === 0) {
      mostrarAlerta("Seu carrinho está vazio.");
      return;
    }
    
    // Aqui segue o restante do seu envio pro WhatsApp...
  
  
  function mostrarAlerta(mensagem) {
    const alerta = document.getElementById("alerta-personalizado");
    const texto = document.getElementById("alerta-texto");
    
    texto.innerText = mensagem;
    alerta.style.display = "block";
  
    // Some automaticamente depois de 3 segundos
    setTimeout(() => {
      alerta.style.display = "none";
    }, 2000);
  }
  
    let mensagem = "Olá! Quero fazer um pedido:\n\n";
    let total = 0;
  
    carrinho.forEach(item => {
      const sub = item.qtd * item.preco;
      mensagem += `• ${item.nome} - ${item.qtd}x R$ ${item.preco.toFixed(2)} = R$ ${sub.toFixed(2)}\n`;
      total += sub;
    });
  
    mensagem += `\nTotal: R$ ${total.toFixed(2)}`;
    const telefone = "5511963853664";
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }
  
  const posicoesCarrossel = [];
  
  function mudarImagem(index, direcao) {
    const container = document.getElementById(`carousel-${index}`);
    const total = container.children.length;
    if (posicoesCarrossel[index] === undefined) posicoesCarrossel[index] = 0;
  
    posicoesCarrossel[index] += direcao;
    if (posicoesCarrossel[index] < 0) posicoesCarrossel[index] = total - 1;
    if (posicoesCarrossel[index] >= total) posicoesCarrossel[index] = 0;
  
    container.style.transform = `translateX(-${posicoesCarrossel[index] * 100}%)`;
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    renderProdutos();
  });
  function toggleCart() {
    const cart = document.getElementById("cart-box");
    cart.classList.toggle("ativo");
  }
  function toggleCarrinho() {
    const painel = document.getElementById("carrinho");
    painel.classList.toggle("aberto");
  }
  const menuIcon = document.getElementById('menu-icon');
  const sideMenu = document.getElementById('side-menu');
  const closeBtn = document.getElementById('close-btn');
  const overlay = document.getElementById('overlay');
  const menuLinks = sideMenu.querySelectorAll('a[data-section]');
  const menuContent = document.getElementById('menu-content');
  
  let activeSection = null; // para controlar qual seção está ativa
  
  menuIcon.addEventListener('click', () => {
    sideMenu.style.width = '300px';
    overlay.style.display = 'block';
  });
  
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  
  function closeMenu() {
    sideMenu.style.width = '0';
    overlay.style.display = 'none';
    hideContent();
    activeSection = null;
  }
  
  // Conteúdos
  const sections = {
    contato: `
      <h3>Fale Conosco</h3>
      <p>Você pode entrar em contato conosco pelo WhatsApp ou e-mail.<br>
      WhatsApp: (11) 96385-3664<br>
      E-mail: queirozartd3@gmail.com</p>
    `,
    sobre: `
      <h3>Sobre Nós</h3>
      <p>Somos apaixonados por miniaturas 3D e criamos modelos únicos com muita dedicação.
      Nosso estúdio é focado em entregar qualidade e detalhes incríveis em cada peça.</p>
    `
  };
  
  // Função para esconder com animação
  function hideContent() {
    menuContent.classList.remove('show');
    setTimeout(() => {
      menuContent.innerHTML = '';
    }, 300); // espera o fade-out antes de limpar
  }
  
  // Atualiza o conteúdo ao clicar nos links
  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = link.getAttribute('data-section');
  
      if (activeSection === section) {
        hideContent();
        activeSection = null;
      } else {
        menuContent.classList.remove('show'); // esconde antes
        setTimeout(() => {
          menuContent.innerHTML = sections[section] || '';
          menuContent.classList.add('show'); // mostra com fade
        }, 300); // pequena espera para o fade-out
        activeSection = section;
      }
    });
  });
  
  
  


  