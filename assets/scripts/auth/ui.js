'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
}

const signUpFailure = function (error) {
  console.error(error)
}

const signInSuccess = function (data) {
  console.log('Signed In! Data:', data)
  $('#sign-in-message').html('You are signed in!')
  $('#sign-in-message').css('color', 'green')
  store.user = data.user // save it to store.js
  console.log('Stored User:', store)
}

const signInFailure = function (error) {
  console.log('An error has occurred!')
  console.error(error)
  $('#sign-in-message').html('Error - Check Console')
  $('#sign-in-message').css('color', 'red')
}

const changePasswordSuccessful = function (data) {
  console.log('Successfully changed password!')
  $('#change-password-message').html('You have successfully changed your password!')
  $('#change-password-message').css('color', 'green')
}

const changePasswordFailure = function (error) {
  console.log('An error has occurred!')
  console.error(error)
  $('#change-password-message').html('Error - Check Console')
  $('#change-password-message').css('color', 'red')
}

const signOutSuccessful = function () {
  console.log('Successfully signed out!')
  $('#sign-out-user-message').html('You have successfully signed out!')
  $('#sign-out-user-message').css('color', 'green')
  store.user = null
  console.log('what is in store still:', store)
}

const signOutFailure = function (error) {
  console.log('An error has occurred!')
  console.error(error)
  $('#sign-out-user-message').html('Error - Check Console')
  $('#sign-out-user-message').css('color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccessful,
  changePasswordFailure,
  signOutSuccessful,
  signOutFailure
}
