const simple = document.querySelector("p1");
const hex = document.querySelector("#p2");
const btn = document.querySelector("#button");
const color = document.querySelector("#color");

 let colors = ["Red","Blue","Green","Orange","Purple","Gray","Maroon"];

  btn.addEventListener("click",() => {
      let i = Math.floor(Math.random()*16777215).toString(16);

      document.body.style.backgroundColor = "#" + i;
      color.innerHTML = "#"+i;
  });