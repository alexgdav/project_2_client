const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// standard onAsk function, triggered whenever a new question is asked
const onAsk = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.createQuestion(formData)
    .then(ui.onAskSuccess)
    .catch(ui.onAskAndIndexFail)
}

// onUnask triggered from the new question asked modal
const onUnask = event => {
  event.preventDefault()
  const fullFormData = getFormFields(event.target)
  const formData = fullFormData.question.id
  api.deleteQuestion(formData)
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteAndEditFail)
}

// onEdit triggered from the new question asked modal
const onEdit = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.editQuestion(formData)
    .then(ui.onEditSuccess)
    .catch(ui.onDeleteAndEditFail)
}

// onIndex is triggered from the all questions display modal
const onIndex = event => {
  event.preventDefault()
  api.indexQuestions()
    .then(ui.onIndexQuestionsSuccess)
    .catch(ui.onAskAndIndexFail)
}

// onShow is triggered from the all questions display modal
const onShow = event => {
  event.preventDefault()
  const fullFormData = getFormFields(event.target)
  const formData = fullFormData.question.id
  api.showQuestion(formData)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFail)
}

// the Edit for questions displayed in the all questions display modal
const onEditAll = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const formData = getFormFields(event.target)
  formData.question.id = id
  api.editQuestion(formData)
    .then(function () {
      onIndex(event)
    })
    .then(ui.onEditAllSuccess)
    .catch(ui.onEditAllFail)
}

// the delete triggered from the all questions display modal
const onUnaskAll = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteQuestion(id)
    .then(function () {
      onIndex(event)
    })
    .then(ui.onDeleteAllSuccess)
    .catch(ui.onDeleteAllFail)
}

module.exports = {
  onAsk,
  onUnask,
  onEdit,
  onIndex,
  onEditAll,
  onUnaskAll,
  onShow

}
