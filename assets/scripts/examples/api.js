'use strict'

const config = require('../config')
const store = require('../store')

const createExample = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/examples',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateExample = function (data) {
  console.log('update data is:', data)
  // console.log('data.example.id is:', data.example.id)
  return $.ajax({
    url: config.apiOrigin + '/examples/' + data.example.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const destroyExample = function (data) {
  console.log('this worked?')
  console.log('data.example.id is:', data.example.id)
  return $.ajax({
    url: config.apiOrigin + '/examples/' + data.example.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createExample,
  updateExample,
  destroyExample
}
