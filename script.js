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
      nome: "Roda Lexani Advicate",
      descricao: "Roda produzida em impressão 3D, feita em resina e sem pintura, com pneus em ABS preto fosco. Disponível para eixo 2 mm, eixo sextavado ou pino adaptador. Suporte de eixo direto no pneu.",
      imagens: [
        "Fotos/Rodas/LexaniAdvicate/lexani1.png",
        "Fotos/Rodas/LexaniAdvicate/lexani2.png",
        "Fotos/Rodas/LexaniAdvicate/lexani3.png",

      ],
      opcoes: [
  { nome: "Roda 50mm", preco: 55 + 12 },   // = 67
  { nome: "Roda 55mm", preco: 65 + 15 },   // = 80
  { nome: "Roda 60mm", preco: 75 + 18 },   // = 93
  { nome: "Roda 65mm", preco: 85 + 22 },   // = 107
  { nome: "Roda 70mm", preco: 95 + 25 },   // = 120
  { nome: "Roda 75mm", preco: 110 + 30 },  // = 140
  { nome: "Roda 80mm", preco: 125 + 34 },  // = 159
  { nome: "Roda 85mm", preco: 140 + 40 },  // = 180
  { nome: "Roda 90mm", preco: 170 + 45 },  // = 215
  { nome: "Roda 95mm", preco: 190 + 50 },  // = 240
  { nome: "Roda 100mm", preco: 220 + 55 }, // = 275
  { nome: "Roda 105mm", preco: 260 + 65 }, // = 325
  { nome: "Roda 110mm", preco: 285 + 70 }, // = 355
  { nome: "Roda 115mm", preco: 310 + 80 }, // = 390
  { nome: "Roda 120mm", preco: 380 + 90 }, // = 470
  { nome: "Roda 125mm", preco: 450 + 95 }, // = 545
  { nome: "Roda 130mm", preco: 520 + 110 } // = 630
      ]
    },


    {
      nome: "Roda Lexani Advicate",
      descricao: "Roda produzida em impressão 3D, feita em resina e sem pintura, com pneus em ABS preto fosco. Disponível para eixo 2 mm, eixo sextavado ou pino adaptador. Suporte de eixo direto no pneu.",
      imagens: [
        "Fotos/Rodas/Lexani_Advicate/lexani1.png",
        "Fotos/Rodas/Lexani_Advicate/lexani2.png",
        "Fotos/Rodas/Lexani_Advicate/lexani3.png",
        
      ],
      opcoes: [
  { nome: "Roda 50mm", preco: 55 + 12 },   // = 67
  { nome: "Roda 55mm", preco: 65 + 15 },   // = 80
  { nome: "Roda 60mm", preco: 75 + 18 },   // = 93
  { nome: "Roda 65mm", preco: 85 + 22 },   // = 107
  { nome: "Roda 70mm", preco: 95 + 25 },   // = 120
  { nome: "Roda 75mm", preco: 110 + 30 },  // = 140
  { nome: "Roda 80mm", preco: 125 + 34 },  // = 159
  { nome: "Roda 85mm", preco: 140 + 40 },  // = 180
  { nome: "Roda 90mm", preco: 170 + 45 },  // = 215
  { nome: "Roda 95mm", preco: 190 + 50 },  // = 240
  { nome: "Roda 100mm", preco: 220 + 55 }, // = 275
  { nome: "Roda 105mm", preco: 260 + 65 }, // = 325
  { nome: "Roda 110mm", preco: 285 + 70 }, // = 355
  { nome: "Roda 115mm", preco: 310 + 80 }, // = 390
  { nome: "Roda 120mm", preco: 380 + 90 }, // = 470
  { nome: "Roda 125mm", preco: 450 + 95 }, // = 545
  { nome: "Roda 130mm", preco: 520 + 110 } // = 630
      ]
    },


    {
      nome: "Roda DUB S218",
      descricao: "Roda produzida em impressão 3D, feita em resina e sem pintura, com pneus em ABS preto fosco. Disponível para eixo 2 mm, eixo sextavado ou pino adaptador. Suporte de eixo direto no pneu.",
      imagens: [
        "Fotos/Rodas/Dubs218/dub.png",
        "Fotos/Rodas/Dubs218/dub2.png",
        "Fotos/Rodas/Dubs218/dub3.png",
        
      
      ],
      opcoes: [
  { nome: "Roda 50mm", preco: 55 + 12 },   // pneu estimado ≈ R$12
  { nome: "Roda 55mm", preco: 65 + 15 },   // = 80
  { nome: "Roda 60mm", preco: 75 + 18 },   // = 93
  { nome: "Roda 65mm", preco: 85 + 22 },   // = 107
  { nome: "Roda 70mm", preco: 95 + 25 },   // = 120
  { nome: "Roda 75mm", preco: 110 + 30 },  // = 140
  { nome: "Roda 80mm", preco: 125 + 34 },  // = 159
  { nome: "Roda 85mm", preco: 140 + 40 },  // = 180
  { nome: "Roda 90mm", preco: 170 + 45 },  // = 215
  { nome: "Roda 95mm", preco: 190 + 50 },  // = 240
  { nome: "Roda 100mm", preco: 220 + 55 }, // = 275
  { nome: "Roda 105mm", preco: 260 + 65 }, // = 325
  { nome: "Roda 110mm", preco: 285 + 70 }, // roda estimada ≈ R$285, total = 355
  { nome: "Roda 115mm", preco: 310 + 80 }, // roda estimada ≈ R$310, total = 390
  { nome: "Roda 120mm", preco: 380 + 90 }, // = 470
  { nome: "Roda 125mm", preco: 450 + 95 }, // roda estimada ≈ R$450, total = 545
  { nome: "Roda 130mm", preco: 520 + 110 } // = 630
      ]
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
  { nome: "Kit Médios Graves 10mm (10 unid.)", preco: 2.40 * 10},
  { nome: "Kit Médios Graves 11mm (10 unid.)", preco: 2.50 * 10},
  { nome: "Kit Médios Graves 12mm (10 unid.)", preco: 2.60 * 10},
  { nome: "Kit Médios Graves 13mm (10 unid.)", preco: 2.70 * 10},
  { nome: "Kit Médios Graves 14mm (10 unid.)", preco: 2.80 * 10},
  { nome: "Kit Médios Graves 15mm (10 unid.)", preco: 2.90 * 10},
  { nome: "Kit Médios Graves 16mm (10 unid.)", preco: 3.00 * 10},
  { nome: "Kit Médios Graves 17mm (10 unid.)", preco: 3.10 * 10},
  { nome: "Kit Médios Graves 18mm (10 unid.)", preco: 3.20 * 10},
  { nome: "Kit Médios Graves 19mm (10 unid.)", preco: 3.30 * 10},
  { nome: "Kit Médios Graves 20mm (10 unid.)", preco: 3.40 * 10},
      ]
    },
    {
      nome: "Falate 6X9 com Pintura",
      descricao: "Mini falantes 6x9 feitos em resina e pintados à mão, com detalhes realistas e acabamento fino.",
      imagens: [
        "Fotos/Suporte Controle.jpg",
        "Fotos/Suporte Controle.jpg",
        "Fotos/Suporte Controle.jpg"
      ],
      opcoes: [
       { nome: "Kit Auto Falantes 16mm (10 unid.)", preco: 2.40 * 10},
  { nome: "Kit Auto Falantes 17mm (10 unid.)", preco: 2.50 * 10},
  { nome: "Kit Auto Falantes 18mm (10 unid.)", preco: 2.60 * 10},
  { nome: "Kit Auto Falantes 19mm (10 unid.)", preco: 2.70 * 10},
  { nome: "Kit Auto Falantes 20mm (10 unid.)", preco: 2.80 * 10},
  { nome: "Kit Auto Falantes 21mm (10 unid.)", preco: 2.90 * 10},
  { nome: "Kit Auto Falantes 22mm (10 unid.)", preco: 3.00 * 10},
  { nome: "Kit Auto Falantes 23mm (10 unid.)", preco: 3.10 * 10},
  { nome: "Kit Auto Falantes 24mm (10 unid.)", preco: 3.20 * 10},
  { nome: "Kit Auto Falantes 25mm (10 unid.)", preco: 3.30 * 10},
  { nome: "Kit Auto Falantes 26mm (10 unid.)", preco: 3.40 * 10},
  { nome: "Kit Auto Falantes 27mm (10 unid.)", preco: 3.50 * 10},
  { nome: "Kit Auto Falantes 28mm (10 unid.)", preco: 3.60 * 10},
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
  { nome: "Kit Tweeters 8mm (10 unid.)", preco: 2.20 * 10 },
  { nome: "Kit Tweeters 9mm (10 unid.)", preco: 2.30 * 10 },
  { nome: "Kit Tweeters 10mm (10 unid.)", preco: 2.40 * 10 },
  { nome: "Kit Tweeters 11mm (10 unid.)", preco: 2.50 * 10 },
  { nome: "Kit Tweeters 12mm (10 unid.)", preco: 2.60 * 10 },
  { nome: "Kit Tweeters 13mm (10 unid.)", preco: 2.70 * 10 },
  { nome: "Kit Tweeters 14mm (10 unid.)", preco: 2.80 * 10 },
  { nome: "Kit Tweeters 15mm (10 unid.)", preco: 2.90 * 10 },
      ]
    },
    {
      nome: "Rack de teto",
      descricao: "Rack de teto para mini fiat toro roma",
      imagens: [
        "Fotos/Suporte Controle.jpg",
        "Fotos/Suporte Controle.jpg",
        "Fotos/Suporte Controle.jpg"
      ],
      opcoes: [
        { nome: "1 unidade", preco: 40 },
        { nome: "2 unidades", preco: 60 }
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
  
  
  


  