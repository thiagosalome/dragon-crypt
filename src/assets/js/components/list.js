const mainList = document.querySelector(".js-main-list");
const load = document.querySelector(".js-load");
const mainClear = document.querySelector(".js-main-clear")

window.addEventListener("load", () => {
  load.classList.add("active");
  setTimeout(() => {
    load.classList.remove("active");
    let passwords = localStorage.getItem("passwords") === null ? "" : JSON.parse(localStorage.getItem("passwords"));
    if(passwords !== ""){
      let li = '';
      passwords.forEach(item => {
        li += `<li><strong>Senha:</strong> ${item}</li>`;
      });
      mainList.insertAdjacentHTML("beforeend", li);
    }
    else{
      mainList.insertAdjacentHTML("beforeend", "<li>Nenhuma senha cadastrada</li>")
    }
  }, 1000);
})

mainClear.addEventListener("click", e => {
  e.preventDefault();
  localStorage.clear()
  location.reload()
})