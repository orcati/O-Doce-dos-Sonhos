// Função para validar o formulário de feedback
function validateFeedbackForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    return true;
}

// Função para validar o formulário de contato
function validateContactForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    return true;
}

// Adicionando eventos de submissão aos formulários
document.getElementById("feedback-form").addEventListener("submit", function(event) {
    if (!validateFeedbackForm()) {
        event.preventDefault();
    }
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    if (!validateContactForm()) {
        event.preventDefault();
    }
});

// Função para navegar entre as páginas sem recarregamento
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const href = this.getAttribute("href");
            navigateToPage(href);
        });
    });
});

// Função para navegar para a página desejada
function navigateToPage(page) {
    history.pushState(null, null, page);
    fetchPage(page);
}

// Função para buscar e exibir o conteúdo da página
function fetchPage(page) {
    fetch(page)
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao carregar a página.");
        }
        return response.text();
    })
    .then(data => {
        document.querySelector("body").innerHTML = data;
    })
    .catch(error => {
        console.error(error);
    });
}
// Função para navegar entre as páginas sem recarregamento
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const href = this.getAttribute("href");
            navigateToPage(href);
        });
    });

    // Adicionar evento de clique ao botão "Ver Cardápio"
    const cardapioButton = document.querySelector(".cta-button");
    cardapioButton.addEventListener("click", function(event) {
        event.preventDefault();
        const href = this.getAttribute("href");
        navigateToPage(href);
    });
});

// Função para navegar para a página desejada
function navigateToPage(page) {
    history.pushState(null, null, page);
    fetchPage(page);
}

// Função para buscar e exibir o conteúdo da página
function fetchPage(page) {
    fetch(page)
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao carregar a página.");
        }
        return response.text();
    })
    .then(data => {
        document.querySelector("body").innerHTML = data;
    })
    .catch(error => {
        console.error(error);
    });
}