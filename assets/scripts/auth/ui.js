'use strict'

const store = require('./../store')

// toggle feature, pulled from: https://www.pair.com/support/kb/how-to-use-jquery-to-show-hide-a-form-on-click/
// shows sign-up / sign-in and hides image plus button.
$(document).ready(function () {
  $('#newGameButton-initial').click(function () {
    $('#sign-up-form').show()
    $('#signInForm').show()
    $('#initialize').hide()
  })
})

// this is for hiding and showing changepassword form; play with feature if extra time.
// $(document).click(function () {
//   $('#changePasswordButton').click(function () {
//     $('#change-password-form').show()
//     $('#changePasswordButton').hide()
//   })
// })

const signUpFailure = function () {
  $('#message').text('Sign up failed, try again')
}

const signUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' +
  response.user.email)
  $('#sign-up-form').hide()
}

const signInSuccess = function (response) {
  $('#message').text('Your token is ' +
  response.user.token)
  // save user in the api resonse to our store object
  store.user = response.user
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#sign-up-form').hide()
  $('#signInForm').hide()
  $('#board').show()
  $('#signOutButton').show()
  $('#changePasswordButton').show()
}

const signInFailure = function () {
  $('#message').text('Sign in failed, try again')
}

const onChangePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
}

const onChangePasswordFailure = function () {
  $('#message').text('Change password failed, try again')
}

const onSignOutSuccess = function () {
  $('#message').text('Signed out successfully')
  store.user = null
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#board').hide()
  $('#initialize').hide()
}

const onSignOutFailure = function () {
  $('#message').text('Sign out failed')
}

const onNewGameSuccess = function (response) {
  $('#message').text('New Game ' + response.user.email)
// have to first count games then recall it from api.
// numOfGame.
  // store.games.length = numOfGames.
}

const onNewGameFailure = function (response) {
  $('#message').text('Insert More Quarters')
}

const onDrawSuccess = function (response) {
  $('#message').text('It is a draw!')
}

const onDrawFailure = function (response) {
  $('#message').text('This failed, they ' +
  'have taken the battle elsewhere!')
}

const onUpdateGameSuccess = function (response) {
  $('#message').text('Game Updated')
  $('#sign-up-form').show()
  $('#signInForm').show()
}

const onUpdateGameFailure = function (response) {
  $('#message').text('Update Failure')
}

const onViewGameSuccess = function (response) {
  $('#message').text('Games Played:' +
  response.games.length)
}

const onViewGameFailure = function (response) {
  $('#message').text('View Games Failure')
}

const onUpdateMoveSuccess = function (response) {
  $('#message').text('Update Move Failure')
}

const onUpdateMoveFailure = function (response) {
  $('#message').text('Update Move Failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onNewGameSuccess,
  onNewGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onViewGameFailure,
  onViewGameSuccess,
  onDrawSuccess,
  onDrawFailure,
  onUpdateMoveSuccess,
  onUpdateMoveFailure
}
