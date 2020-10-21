'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./auth/events')

$(() => {
  // your JS code goes here
  $('#newGameButton').on('click', events.onNewGame)
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#signInForm').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-out-form').on('submit', events.onSignOut)

  // used for scoreboard button press to recall and display score
  $('#scoreboardButton').on('click', events.onViewGames)

  // log and update moves section
  // used to log square presses
  $('#scoreboardButton').on('click', events.onViewGamesGame)
  $('#data-cell').on('click', events.onUpdateMove)

  // hide elements until signin action is taken to show them.
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  // hide scoreboard
  $('scoreboardForm').hide()

  // below elements are hidden until "newGameButton-initialize" button is pressed"
  $('#board').hide()
  $('#sign-up-form').hide()
  $('#signInForm').hide()

  // useless until we replace form with button to reveal them
  $('changePasswordButton').hide()
  $('signOutButton').hide()

  // images on winningMessage display hidden and then shown on outcome
  $('drawImage').hide()
  $('dogsWinImage').hide()
  $('catsWinImage').hide()

  // forms are hidden but we should clear them anyway
  // found the code $('#id')[0].reset()
})
