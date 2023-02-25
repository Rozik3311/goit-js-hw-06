let valueEl = Number(document.querySelector("#value").textContent);

let counterValue = document.querySelector("#value");

const dekrBtn = document.querySelector("#counter").firstElementChild;
const inkrBtn = document.querySelector("#counter").lastElementChild;

inkrBtn.addEventListener("click", (event) => {
  //Слухач подii на кнопку
  valueEl += 1;

  counterValue.innerText = valueEl;
});

dekrBtn.addEventListener("click", (event) => {
  //Вимкнення слухача;
  valueEl -= 1;

  counterValue.innerText = valueEl;
});
