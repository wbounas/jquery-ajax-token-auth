'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onExampleCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('this is this:', this)
  // console.log('this is data:', data)
  data.example.id = data.id
  api.createExample(data)
    .then(ui.exampleCreateSuccessful)
    .catch(ui.exampleCreateFailure)
}

const onExampleUpdate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateExample(data)
    .then(ui.exampleUpdateSuccessful)
    .catch(ui.exampleUpdateFailure)
}

const onExampleDestroy = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('data is:', data.example.id)
  api.destroyExample(data)
    .then(ui.exampleDestroySuccessful)
    .catch(ui.exampleDestroyFailure)
}

const addHandlers = () => {
  $('#create-example').on('submit', onExampleCreate)
  $('#update-example').on('submit', onExampleUpdate)
  $('#destroy-example').on('submit', onExampleDestroy)
}

module.exports = {
  onExampleCreate,
  onExampleUpdate,
  onExampleDestroy,
  addHandlers
}
