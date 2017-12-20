'use strict'

const store = require('../store')

const exampleCreateSuccessful = function (data) {
  console.log('Example creation worked! Data ID is:', data.example.id)
  console.log('store is:', store)
  store.data = data.example
  console.log('store.data is:', store.data)
  $('#create-example-message').html(`
    Your example was created! Your Example ID is: ${store.data.id}`)
  $('#create-example-message').css('color', 'green')
}

const exampleCreateFailure = function (error) {
  console.log('Example Create Error has occurred!')
  console.error(error)
  $('#create-example-message').html('Error - check console!')
  $('#create-example-message').css('color', 'red')
}

const exampleUpdateSuccessful = function (data) {
  console.log('update data is:', this)
  // console.log('Update worked! Data is:', data.example)
  // const newString = data.text
  $('#update-example-message').html(`
    Update successful! Your new example is ${this.data}
  `)
  $('#update-example-message').css('color', 'green')
}

const exampleUpdateFailure = function (error) {
  console.log('Error has occurred!')
  console.error(error)
  $('#update-example-message').html('Error - check console!')
  $('#update-example-message').css('color', 'red')
}

const exampleDestroySuccessful = function (data) {
  console.log('Delete Successful!')
  $('#destroy-example-message').html(`Deletion Successful!`)
  $('#destroy-example-message').css('color', 'green')
}

const exampleDestroyFailure = function (error) {
  console.log('Error has occurred!')
  console.error(error)
  $('#destroy-example-message').html('Error - check console!')
  $('#destroy-example-message').css('color', 'red')
}

module.exports = {
  exampleCreateSuccessful,
  exampleCreateFailure,
  exampleUpdateSuccessful,
  exampleUpdateFailure,
  exampleDestroySuccessful,
  exampleDestroyFailure
}
