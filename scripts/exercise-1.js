let cardArray = [
  {
    id: 1,
    name: "earth",
    img: "../assets/exercise-1/earth.svg",
  },
  {
    id: 2,
    name: "jupiter",
    img: "../assets/exercise-1/jupiter.svg",
  },
  {
    id: 3,
    name: "mars",
    img: "../assets/exercise-1/mars.svg",
  },
  {
    id: 4,
    name: "mercury",
    img: "../assets/exercise-1/mercury.svg",
  },
  {
    id: 5,
    name: "saturn",
    img: "../assets/exercise-1/saturn.svg",
  },
  {
    id: 6,
    name: "uranus",
    img: "../assets/exercise-1/uranus.svg",
  },
  {
    id: 7,
    name: "earth",
    img: "../assets/exercise-1/earth.svg",
  },
  {
    id: 8,
    name: "jupiter",
    img: "../assets/exercise-1/jupiter.svg",
  },
  {
    id: 9,
    name: "mars",
    img: "../assets/exercise-1/mars.svg",
  },
  {
    id: 10,
    name: "mercury",
    img: "../assets/exercise-1/mercury.svg",
  },
  {
    id: 11,
    name: "saturn",
    img: "../assets/exercise-1/saturn.svg",
  },
  {
    id: 12,
    name: "uranus",
    img: "../assets/exercise-1/uranus.svg",
  },
];

cardArray = cardArray.sort(function() { return Math.random() - 0.5 });
const tablero$$ = document.querySelector(".b-grid");
const attempts$$= document.querySelector(".attempts")
let clicks = 0;
let attempts = 0;

let card1$$;
let card2$$;

const comprobar = (card1$$, card2$$) => {
    
 
    clicks = 0;
    console.log(card1$$, card2$$);
    if (card1$$.id === card2$$.id) {
        console.log("has acertado");
        card1$$.setAttribute("src", "../assets/exercise-1/tick.svg")
        card2$$.setAttribute("src", "../assets/exercise-1/tick.svg")
    } else {

        attempts += 1;
        attempts$$.textContent = attempts;

        console.log("no has acertado");
        card1$$.setAttribute("src", "../assets/exercise-1/universe.svg")
        card2$$.setAttribute("src", "../assets/exercise-1/universe.svg")
    }


}

const choose = (event) => {

    event.target.setAttribute("src", event.target.id);

    clicks++;
    if (clicks === 1) {
        card1$$ = event.target;
    }
    if (clicks === 2) {
        card2$$ = event.target;
        setTimeout(() => {
            comprobar(card1$$, card2$$);
        }, 1000);
    }

}

const startGame = () => {
  attempts = 0;
    for (const card of cardArray) {
        const card$$ = document.createElement("img");
        card$$.setAttribute("src", "../assets/exercise-1/universe.svg");
        card$$.setAttribute("id", card.img);
        card$$.className = "card";
        card$$.addEventListener("click", choose);
        tablero$$.appendChild(card$$);
    }
    attempts$$.textContent = attempts;
  
}

startGame();