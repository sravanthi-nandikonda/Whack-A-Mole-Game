
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#live-time')
const score = document.querySelector('#live-score')

let result=0;
let hitPosition
let currentTime = 60
let timerId = null
let countDownTimerId = null



function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
      })


   let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('click', () => {
      if (square.id == hitPosition) {
        result++
        score.textContent = result
        
        hitPosition = null
      }
    })
  })


  function removeSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
        square.style.backgroundcolor="white";
      })
    }

  function moveMole() {

    timerId = setInterval(randomSquare, 500)
     countDownTimerId = setInterval(countDown, 1000)
  }
  function reset(){
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    timerId=null;
    countDown=null;
    timeLeft.textContent = 0;
    score.textContent = 0;
    
  removeSquare();

  }
function countDown(){
    currentTime--
    timeLeft.textContent = currentTime
   
    if (currentTime == 0) {
      clearInterval(countDownTimerId)
      clearInterval(timerId)
      alert('GAME OVER! Your final score is ' + result)
      reset();
    }

}
