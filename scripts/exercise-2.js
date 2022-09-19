let squares$$ = document.querySelectorAll(".b-square")
let score$$ = document.querySelector(".score");
const timeOut$$ = document.querySelector(".timeOut");


let random;
let anterior;
let score = 0;
let timeOut;


const startGame = () => {

  timeOut = 30;
  timeOut$$.textContent = timeOut;

    for (const square of squares$$) {
        
        square.addEventListener("click", touch)
    }
    move()
    
    let interval = setInterval(()=>{
        if (timeOut !== 0) {
            timeOut -= 1;
            move();
          } else {
            if (score >= 10) {
              alert("Enhorabuena");
            }
            else{
              alert("La liaste nico")
            }
            score = 0;
            score$$.textContent = score;
            squares$$[anterior].classList.remove("b-mole");
            clearInterval(interval);
          }
    },1000)
 

}
const move = () => {

    anterior = random;
    random = Math.floor(Math.random() * 9);

    if (anterior !== undefined) {
        if (squares$$[anterior].className.includes("b-mole")) {
          squares$$[anterior].classList.remove("b-mole");
        }
      }

    
    squares$$[random].classList.add("b-mole");
    timeOut$$.textContent = timeOut;

}
const touch = (event) => {
    
    if (event.target.className.includes("mole")) {
         
            score += 1;
          } else {
            score -= 1;
          }
          score$$.textContent = score;
}
