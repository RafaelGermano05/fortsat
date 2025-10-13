// Aplicação principal - gerencia produtos, filtros e interface
document.addEventListener('DOMContentLoaded', function() {
  // Estado da aplicação
  const state = {
    products: [...productsData],
    filteredProducts: [...productsData],
    currentCategory: 'all',
    currentSort: 'relevance',
    searchTerm: ''
  };

  // Inicialização
  init();

  function init() {
    renderCategories();
    renderProducts(state.filteredProducts);
    setupEventListeners();
    updateCategoryCounts();
  }

  // Renderiza as categorias na sidebar
  function renderCategories() {
    const categoryList = document.getElementById('categoryList');
    categoryList.innerHTML = '';
    
    categories.forEach(category => {
      const categoryItem = document.createElement('li');
      categoryItem.className = 'category-item';
      
      const categoryLink = document.createElement('a');
      categoryLink.className = 'category-link';
      categoryLink.setAttribute('data-category', category.id);
      
      // Destacar categoria "Todos" inicialmente
      if (category.id === 'all') {
        categoryLink.classList.add('active');
      }
      
      categoryLink.innerHTML = `
        <i class="${category.icon}"></i>
        ${category.name}
        <span class="category-count" id="count-${category.id}">0</span>
      `;
      
      categoryItem.appendChild(categoryLink);
      categoryList.appendChild(categoryItem);
    });
  }

  // Atualiza as contagens de produtos por categoria
  function updateCategoryCounts() {
    categories.forEach(category => {
      let count;
      
      if (category.id === 'all') {
        count = state.products.length;
      } else {
        count = state.products.filter(product => product.category === category.id).length;
      }
      
      const countElement = document.getElementById(`count-${category.id}`);
      if (countElement) {
        countElement.textContent = count;
      }
    });
  }

  // Renderiza os produtos na grade
  function renderProducts(productsToRender) {
    const productsGrid = document.getElementById('productsGrid');
    
    if (productsToRender.length === 0) {
      productsGrid.innerHTML = '<div class="no-products">Nenhum produto encontrado para os filtros selecionados.</div>';
      return;
    }
    
    productsGrid.innerHTML = '';
    
    productsToRender.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.setAttribute('data-product-id', product.id);
      productCard.innerHTML = `
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" onerror="this.src='img/placeholder.jpg'">
        </div>
        <div class="product-info">
          <div class="product-name">${product.name}</div>
          <div class="product-shipping">${product.shipping}</div>
          <button class="product-btn" data-bs-toggle="modal" data-bs-target="#productModal">Ver Detalhes</button>
        </div>
      `;
      productsGrid.appendChild(productCard);
    });

    // Adiciona event listeners para os botões de detalhes
    document.querySelectorAll('.product-btn').forEach(button => {
      button.addEventListener('click', function() {
        const productId = this.closest('.product-card').getAttribute('data-product-id');
        const product = state.products.find(p => p.id == productId);
        if (product) {
          openProductModal(product);
        }
      });
    });
  }

  // Abre o modal com os detalhes do produto
  function openProductModal(product) {
    document.getElementById('modalProductImage').src = product.image;
    document.getElementById('modalProductPrice').textContent = `${product.price}`;
    document.getElementById('modalProductInstallments').textContent = product.installments;
    document.getElementById('modalProductDescription').textContent = product.description;
    
    const featuresList = document.getElementById('modalProductFeatures');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      featuresList.appendChild(li);
    });
    
    // Atualiza link do WhatsApp
    const whatsappLink = document.getElementById('whatsappLink');
    const message = `Olá! Gostaria de mais informações sobre: ${product.name} - R$ ${product.price.toFixed(2)}`;
    whatsappLink.href = `https://wa.me/5585999064348?text=${encodeURIComponent(message)}`;
  }

  // Filtra produtos por categoria
  function filterByCategory(category) {
    state.currentCategory = category;
    
    let filtered = [...state.products];
    
    // Filtro por categoria
    if (category !== 'all') {
      filtered = filtered.filter(product => product.category === category);
    }
    
    // Filtro por busca
    if (state.searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    }
    
    // Aplica ordenação
    state.filteredProducts = sortProducts(filtered, state.currentSort);
    
    renderProducts(state.filteredProducts);
  }

  // Ordena produtos conforme critério selecionado
  function sortProducts(products, sortBy) {
    const sorted = [...products];
    
    switch(sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'relevance':
      default:
        // Produtos em destaque primeiro, depois novos, depois o restante
        return sorted.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          if (a.new && !b.new) return -1;
          if (!a.new && b.new) return 1;
          return 0;
        });
    }
  }

  // Configura os event listeners
  function setupEventListeners() {
    // Filtro por categoria
    document.querySelectorAll('.category-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const category = this.getAttribute('data-category');
        
        // Remove active class de todos os links
        document.querySelectorAll('.category-link').forEach(l => {
          l.classList.remove('active');
        });
        
        // Adiciona active class ao link clicado
        this.classList.add('active');
        
        // Filtra produtos
        filterByCategory(category);
      });
    });

    // Ordenação
    const sortSelect = document.getElementById('sortSelect');
    sortSelect.addEventListener('change', function() {
      state.currentSort = this.value;
      state.filteredProducts = sortProducts(state.filteredProducts, state.currentSort);
      renderProducts(state.filteredProducts);
    });

    // Busca de produtos
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    function performSearch() {
      state.searchTerm = searchInput.value;
      filterByCategory(state.currentCategory);
    }
    
    searchInput.addEventListener('input', performSearch);
    searchBtn.addEventListener('click', performSearch);

    // Filtros da navegação (Mais Vendidos, Lançamentos)
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const filter = this.getAttribute('data-filter');
        
        // Remove active class de todos os links de categoria
        document.querySelectorAll('.category-link').forEach(l => {
          l.classList.remove('active');
        });
        
        // Adiciona active class ao link "Todos"
        document.querySelector('.category-link[data-category="all"]').classList.add('active');
        
        // Aplica filtro especial
        let filtered = [...state.products];
        
        if (filter === 'featured') {
          filtered = filtered.filter(product => product.featured);
        } else if (filter === 'new') {
          filtered = filtered.filter(product => product.new);
        }
        
        state.currentCategory = 'all';
        state.filteredProducts = sortProducts(filtered, state.currentSort);
        renderProducts(state.filteredProducts);
      });
    });
  }
});