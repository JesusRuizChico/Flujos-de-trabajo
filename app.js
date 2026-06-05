/**
 * San Juan Digital - Arquitectura Core Aplicación Web Modular
 */

// Simulación de infraestructura de base de datos a nivel de negocio (Catálogo Estático)
const catalogoServicios = [
    {
        id: "saas-01",
        nombre: "Sitio Corporativo Modular",
        descripcion: "Arquitectura escalable basada en componentes efímeros optimizados para motores de búsqueda (SEO).",
        precio: "$6,500 MXN",
        tag: "Web"
    },
    {
        id: "saas-02",
        nombre: "E-Commerce Enterprise",
        descripcion: "Pasarela de pagos distribuida con inventario asíncrono y panel administrativo avanzado.",
        precio: "$14,000 MXN",
        tag: "SaaS"
    },
    {
        id: "saas-03",
        nombre: "Custom Web Application",
        descripcion: "Sistemas web a la medida integrados con APIs de Inteligencia Artificial y bases de datos robustas.",
        precio: "$22,500 MXN",
        tag: "App"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("dynamic-product-grid");
    
    if (!gridContainer) {
        console.error("Error crítico: El contenedor del catálogo no existe en el DOM.");
        return;
    }

    // Inicializar inyección de tarjetas de componentes de forma dinámica
    renderCatalog(catalogoServicios, gridContainer);
    initUIInteractions();
});

function renderCatalog(items, container) {
    container.innerHTML = ""; // Limpieza del contenedor
    
    items.forEach(item => {
        const cardNode = document.createElement("article");
        cardNode.classList.add("product-card");
        cardNode.setAttribute("data-id", item.id);
        
        cardNode.innerHTML = `
            <div class="icon-wrapper">${item.tag}</div>
            <h3>${item.nombre}</h3>
            <p>${item.descripcion}</p>
            <div class="price-tag">${item.precio}</div>
        `;
        
        container.appendChild(cardNode);
    });
    console.log("Infraestructura de catálogo renderizada exitosamente.");
}

function initUIInteractions() {
    const menuBtn = document.querySelector(".mobile-menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if(menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            menuBtn.classList.toggle("is-active");
        });
    }
}