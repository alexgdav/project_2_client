const config = require('../config.js')

const store = require('../store.js')

const createQuestion = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/questions',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'POST',
    data: formData
  })
}

const getAllQuestions = function () { // currently not using this one
  return $.ajax({
    url: config.apiUrl + '/questions',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'GET'
  })
}

const deleteQuestion = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/questions/' + formData.question.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'DELETE'
  })
}

const editQuestion = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/questions/' + formData.question.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'PATCH',
    data: formData
  })
}

const getOneQuestion = function (formData) { // currently not using this one
  return $.ajax({
    url: config.apiUrl + '/questions/' + formData.question.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'GET'
  })
}

module.exports = {
  createQuestion,
  deleteQuestion,
  editQuestion,
  getAllQuestions,
  getOneQuestion
}
