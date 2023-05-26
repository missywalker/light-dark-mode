const fans = document.querySelector(".fans");
//console.log(fans);
fans.addEventListener("mouseover", function () {
  fans.innerText = "123K";
});

const fish = document.querySelector(".fish");
//console.log(fish);
fish.addEventListener("mouseover", function () {
  fish.innerText = "47K";
});
const pets = document.querySelector(".pets");
pets.addEventListener("mouseover", function () {
  pets.innerText = "20K";
});
//console.log(pets);

const toggle = document.querySelector("#toggle");
//console.log(toggle);

const ball = document.querySelector(".ball");
//console.log(ball);

const h1 = document.querySelector("h1");
//console.log(h1);

const body = document.querySelector("body");
//console.log(body);

toggle.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.remove("move-right");
    h1.innerText = "Stealth Quincy";
  } else {
    body.classList.add("light");
    ball.classList.add("move-right");
    h1.innerText = "Party Quincy";
  }
});
