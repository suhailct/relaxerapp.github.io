const container = document.querySelector(".container");
const para = document.querySelector("#text");

const totalTime = 7500;

const bretheTime = (totalTime / 5) * 2;

const holdTime = totalTime / 5;

bretheAnimate();

function bretheAnimate() {
  para.innerHTML = "Brethe In!";
  container.className = "container grow";
  setTimeout(() => {
    para.innerText = "Hold";
    setTimeout(() => {
      para.innerText = "Brethe Out!";
      container.className = "container shrink";
    }, holdTime);
  }, bretheTime);
}

setInterval(() => {
  bretheAnimate();
}, totalTime);
