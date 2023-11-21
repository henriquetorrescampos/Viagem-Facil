function mostrarSenha() {
  let inputPass = document.getElementById("password");
  let btnShowPass = document.getElementById("btn-password1");

  if (inputPass.type === "password") {
    inputPass.setAttribute("type", "text");
    btnShowPass.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
  } else {
    inputPass.setAttribute("type", "password");
    btnShowPass.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
  }
}
function mostrarSenha1() {
  let inputPass = document.getElementById("repassword");
  let btnShowPass = document.getElementById("btn-repassword");

  if (inputPass.type === "password") {
    inputPass.setAttribute("type", "text");
    btnShowPass.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
  } else {
    inputPass.setAttribute("type", "password");
    btnShowPass.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
  }
}

function updateCarousel() {
  const offset = -currentIndex * 300; // 300px de largura para cada item
  carousel.style.transform = `translateX(${offset}px)`;
}

function fazerLogin() {
  document.getElementById("fazerLogin").addEventListener("click", function () {
    window.location.href = "./login.html";
  });
}

function validarForm() {
  var camposObrigatorios = document.querySelectorAll(".required");
  var formValido = true;

  camposObrigatorios.forEach(function (campo) {
    if (campo.value.trim() === "") {
      campo.classList.add("error");
      formValido = false;
    } else {
      campo.classList.remove("error");
    }
  });

  if (!formValido) {
    alert("Preencha todos os campos obrigatórios em vermelho.");
  } else {
    // O formulário está válido, você pode enviar os dados ou fazer o que for necessário aqui.

    alert("Formulário válido. Não há ação de envio configurada.");
  }
}

// Obtém o elemento de input com o id 'searchInput'
const searchInput = document.getElementById("searchInput");

// Obtém o elemento de container de sugestões com o id 'suggestionsContainer'
const suggestionsContainer = document.getElementById("suggestionsContainer");

// Dados fictícios para sugestões
const suggestions = ["Orlando", "Osasco", "Orleans", "Ouro preto"];

// Adiciona um ouvinte de evento para mudanças no input
searchInput.addEventListener("input", function () {
  // Obtém o valor do input em letras minúsculas
  const inputValue = this.value.toLowerCase();

  // Filtra as sugestões com base no valor do input
  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(inputValue)
  );

  // Chama a função para exibir as sugestões filtradas
  exibirSugestoes(filteredSuggestions);
  if (inputValue === "") {
    suggestionsContainer.style.display = "none";
  }
});

// Adiciona um ouvinte de evento para cliques nas sugestões
suggestionsContainer.addEventListener("click", function (event) {
  // Verifica se o elemento clicado é uma sugestão
  if (event.target.classList.contains("suggestion")) {
    // Obtém o texto da sugestão clicada
    const selectedSuggestion = event.target.innerText;

    // Redireciona para uma nova página com base na sugestão clicada
    window.location.href = `https://www.example.com/${selectedSuggestion}`;
  }
});

// Função para exibir sugestões
function exibirSugestoes(sugestoes) {
  // Verifica se há sugestões a serem exibidas
  if (sugestoes.length > 0) {
    // Cria o HTML para as sugestões filtradas
    const sugestoesHTML = sugestoes
      .map((sugestao) => `<div class="suggestion">${sugestao}</div>`)
      .join("");

    // Atualiza o conteúdo do container de sugestões e exibe o container
    suggestionsContainer.innerHTML = sugestoesHTML;
    suggestionsContainer.style.display = "block";
  } else {
    // Se não houver sugestões, limpa o conteúdo e oculta o container
    suggestionsContainer.innerHTML = "";
    suggestionsContainer.style.display = "none";
  }
}
