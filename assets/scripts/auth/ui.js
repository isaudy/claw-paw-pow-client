'use strict'

const store = require('./../store')

const signUpSuccess = function(response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
  $('#sign-up-form').hide()
}

const signUpFailure = function(error) {
  $('#message').text('Sign up failed, try again')
}

const signInSuccess = function(response) {
  $('#message').text('Your token is ' + response.user.token)
  // save user in the api resonse to our store object
  store.user = response.user
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
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
  $('#sign-up-form').show()
  $('#sign-in-form').show()
}

const onSignOutFailure = function () {
  $('#message').text('Sign out failed')
}

const onNewGameSuccess = function (response) {
  $('#message').text('New Game ' + response.user.email)
}

const onNewGameFailure = function (response) {
  $('#message').text('Insert More Quarters')
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
  onNewGameFailure
}
