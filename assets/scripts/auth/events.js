'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // console.log('Is it working?')
  // console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // console.log('this is the data:', data)
  // console.log('this is the event:', event)
  // console.log('this is this:', this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // console.log('this is this:', this)
  // console.log('this is data:', data)
  api.changePassword(data)
    .then(ui.changePasswordSuccessful)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  // console.log('this is what is in store:', store)
  event.preventDefault()
  // debugger
  console.log(store)
  api.signOut()
    .then(ui.signOutSuccessful)
    .catch(ui.signOutFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out-user').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
