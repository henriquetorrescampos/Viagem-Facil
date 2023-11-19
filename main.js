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
function abrirMenu() {
  document.getElementById("menuOculto").style.width = "150px";
  document.getElementById("paginaCadastro").style.marginLeft = "150px";
}
function fecharMenu() {
  document.getElementById("menuOculto").style.width = "0";
  document.getElementById("paginaCadastro").style.marginLeft = "0";
}

const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let currentIndex = 0;

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < carouselItems.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

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
