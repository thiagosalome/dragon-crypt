import Cipher from "./cipher";

const mainForm = document.querySelector(".js-main-form");
const password = document.querySelector(".js-phrase");
const index = document.querySelector(".js-index");
const suffix = document.querySelector(".js-suffix");

mainForm.addEventListener("submit", e => {
  e.preventDefault();

  if(password.value !== "" || index.value !== "" || suffix.value !== ""){
    let cipher = new Cipher(password, index, suffix);
    let response = cipher.encrypt();
  }
  else{
    alert("Preencha todos os campos")
  }
  
});
