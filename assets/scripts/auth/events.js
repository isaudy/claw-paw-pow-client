'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onSignUp = function (event) {
  event.preventDefault()

  // get the form from the event
  const form = event.target
  console.log(event)
  // get the data from the form
  const data = getFormFields(form)

  // send the data to the api
  api.signUp(data)
    // handle successful response
    .then(ui.signUpSuccess)
    // handle failed response
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  // get the form from the event
  const form = event.target
  // get the data from the form
  const data = getFormFields(form)
  // send the data to the api
  api.signIn(data)
    // handle successful response
    .then(ui.signInSuccess)
    // handle failed response
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // get the form from the event
  const form = event.target
  // use getFormFields to get data from the form
  const data = getFormFields(form)
  // send data in AJAX request to the API
  api.changePassword(data)
    // handle successul response
    .then(ui.onChangePasswordSuccess)
    // handle failed response
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // send data in AJAX request to the API
  api.signOut()
    // handle successul response
    .then(ui.onSignOutSuccess)
    // handle failed response
    .catch(ui.onSignOutFailure)
}

const onNewGame = function (event) {
  // event.preventDefault()

  // send the data to the api
  api.newGame()
    // handle successful response
    .then(ui.newGameSuccess)
    // handle failed response
    .catch(ui.newGameFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame
}
