import Cipher from "../abstracts/cipher";

const mainForm = document.querySelector(".js-main-form");
const password = document.querySelector(".js-phrase");
const index = document.querySelector(".js-index");
const suffix = document.querySelector(".js-suffix");
const responsePassword = document.querySelector(".js-response-password");
const load = document.querySelector(".js-load");

mainForm.addEventListener("submit", e => {
  e.preventDefault();
  
  if(password.value !== "" || index.value !== "" || suffix.value !== ""){
    let cipher = new Cipher(password.value, index.value, suffix.value);
    let response = cipher.encrypt();
    load.classList.add("active");
    setTimeout(() => {
      load.classList.remove("active");
      responsePassword.innerHTML = `<strong>Senha gerada: </strong> ${response}`;
      saveStorage(response)
    }, 1000)
  }
  else{
    alert("Preencha todos os campos.")
  }
});

function saveStorage(response){
  let passwords = localStorage.getItem("passwords") === null ? [] : JSON.parse(localStorage.getItem("passwords")); 
  passwords.push(response)
  localStorage.setItem("passwords", JSON.stringify(passwords))
}