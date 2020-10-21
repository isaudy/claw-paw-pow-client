'use strict'
// Game code pulled from this git: https://github.com/WebDevSimplified/JavaScript-Tic-Tac-Toe
// simple game java and board
// complex css, but excellent study material

// does game moves get logged here??
const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const cellElements = document.querySelectorAll('[data-cell-index]')

const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const newGameButton = document.getElementById('newGameButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn

startGame()

newGameButton.addEventListener('click', startGame)

function startGame () {
  circleTurn = false
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
  })

  setBoardHoverClass()
  winningMessageElement.classList.remove('show')
}

// e = shorthand for error
function handleClick (e) {
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
  placeMark(cell, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
    setBoardHoverClass()
  }
}

// decides game /  update: add picture to winning page
function endGame (draw) {
  if (draw) {
    winningMessageTextElement.innerText = 'They Fought To the Death!'
    // $('drawImage').hide()
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? 'Claws' : 'Paws'} Win!`
    // $('dogsWinImage').hide()
    // $('catsWinImage').hide()
  }
  winningMessageElement.classList.add('show')
}

function isDraw () {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  })
}

function placeMark (cell, currentClass) {
  cell.classList.add(currentClass)
}

function swapTurns () {
  circleTurn = !circleTurn
  // whose turn it is
}

function setBoardHoverClass () {
  board.classList.remove(X_CLASS)
  board.classList.remove(CIRCLE_CLASS)
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS)
  } else {
    board.classList.add(X_CLASS)
  }
}

function checkWin (currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}
