const simple = document.querySelector("p1");
const hex = document.querySelector("#p2");
const btn = document.querySelector("#button");
const color = document.querySelector("#color");

 let colors = ["Red","Blue","Green","Orange","Purple","Gray","Maroon"];

  btn.addEventListener("click",() => {
      let i = Math.floor(Math.random()*7);

      document.body.style.backgroundColor = colors[i];
      color.innerHTML = colors[i];
  });