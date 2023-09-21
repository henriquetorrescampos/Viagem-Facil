function mostrarSenha(){
  let inputPass = document.getElementById('password')
  let btnShowPass = document.getElementById('btn-password','btn-password1')

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
