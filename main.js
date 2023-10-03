function mostrarSenha(){
  let inputPass = document.getElementById('password')
  let btnShowPass = document.getElementById('btn-password1')

  if(inputPass.type === 'password'){
      inputPass.setAttribute('type','text')
      btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
  } else {
      inputPass.setAttribute('type','password')
      btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill',)   
  }
}
function mostrarSenha1(){
  let inputPass = document.getElementById('repassword')
  let btnShowPass = document.getElementById('btn-repassword')

  if(inputPass.type === 'password'){
      inputPass.setAttribute('type','text')
      btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
  } else {
      inputPass.setAttribute('type','password')
      btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill',)   
  }
}
function abrirMenu(){
    document.getElementById('menuOculto').style.width="150px"
    document.getElementById('paginaCadastro').style.marginLeft="150px"
}
function fecharMenu(){
    document.getElementById('menuOculto').style.width="0"
    document.getElementById('paginaCadastro').style.marginLeft="0"
}
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
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

const modal = document.querySelector(".modal-container")

function openModal(){
    modal.classList.add("active")
}

function closeModal(){
  modal.classList.remove("active") 
}