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
  // console.log('full form Data is', fullFormData)
  const formData = fullFormData.question.id
  // console.log('form Data is', formData)
  api.deleteQuestion(formData)
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteAndEditFail)
}

// onEdit triggered from the new question asked modal
const onEdit = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  // console.log(formData)
  api.editQuestion(formData)
    .then(ui.onEditSuccess)
    .catch(ui.onDeleteAndEditFail)
}

const onIndex = event => {
  event.preventDefault()
  api.indexQuestions()
    .then(ui.onIndexQuestionsSuccess)
    .catch(ui.onAskAndIndexFail)
}

const onShow = event => {
  event.preventDefault()
  const fullFormData = getFormFields(event.target)
  const formData = fullFormData.question.id
  // console.log('formData is', formData)
  api.showQuestion(formData)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFail)
}

const onEditAll = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  // console.log('id is', id)
  const formData = getFormFields(event.target)
  // console.log('before', formData)
  formData.question.id = id
  // console.log(formData.question.id)
  // console.log('after', formData)
  api.editQuestion(formData)
    .then(function () {
      onIndex(event)
    })
    .then(ui.onEditAllSuccess)
    .catch(ui.onEditAllFail)
}

const onUnaskAll = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  //  console.log('id is', id)
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
