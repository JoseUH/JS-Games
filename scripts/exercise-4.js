let board$$ = document.querySelector(".board");
let attempts$$ = document.querySelector(".attempts");

const imgXUrl = "./assets/exercise-4/x.png";
const imgChestUrl = "../assets/exercise-4/chest.png";
const imgSkullUrl = "./assets/exercise-4/skull.png";

let random;
let clicks = 0;
let attempt = 0;

let startGame = () => {

  clicks = 0;
  attempt = 0;
  generateBoard();
  generateRandom();

};

let generateBoard = () => {

  board$$.innerHTML = ``;

  const rows = prompt("Introduce número de filas");
  const cols = prompt("Introduce número de columnas");

  for (let i = 0; i < rows; i++) {
    const tr$$ = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const td$$ = document.createElement("td");

      const img$$ = document.createElement("img");
      img$$.setAttribute("src", imgXUrl);

      td$$.addEventListener("click", () => flip(img$$));
      td$$.appendChild(img$$);
      tr$$.appendChild(td$$);
    }
    board$$.appendChild(tr$$);
  }

  attempts$$.textContent = attempt;

};

let generateRandom = () => {

  let imgs$$ = document.querySelectorAll("img");
  let longitud = imgs$$.length;
  random = Math.floor(Math.random() * longitud) + 1;
  console.log(random);

};

let flip = (img$$) => {

  clicks += 1;
  attempt += 1;
  attempts$$.textContent = attempt;

  if (clicks === random) {

    img$$.setAttribute("src", imgChestUrl);

    let interval = setTimeout(() => {

      alert("Solo te costo " + attempt + " intentos");
      let button$$ = document.createElement("button");
      button$$.textContent = "Reset";
      button$$.addEventListener("click", startGame);
      board$$.appendChild(button$$);

    }, 1000);

  } else {

    img$$.setAttribute("src", imgSkullUrl);
    
  }

};


