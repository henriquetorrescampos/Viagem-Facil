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
const slides = document.querySelectorAll(".carousel-slide");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 1000);

showSlide(currentIndex);

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const carouselItems = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  let currentIndex = 0;

  function goToSlide(index) {
    if (index < 0) {
      index = carouselItems.length - 1;
    } else if (index >= carouselItems.length) {
      index = 0;
    }
    currentIndex = index;
    const translateX = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
  }

  prevButton.addEventListener("click", () => {
    goToSlide(currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    goToSlide(currentIndex + 1);
  });
});
