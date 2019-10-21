const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onAsk = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.createQuestion(formData)
    .then(ui.onAskSuccess)
    .catch(ui.onAskAndIndexFail)
}

const onUnask = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)
  api.deleteQuestion(formData)
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteAndEditFail)
}

const onEdit = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
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

const onEditAll = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  console.log(id)
  const formData = getFormFields(event.target)
  console.log(formData)
/*  api.editQuestion(formData, id)
    .then(function () {
      onIndex(event)
    })
    .then(console.log('edited from all q'))
    .catch(console.log('edited from all q failed')) */
}

const onUnaskAll = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  console.log(id)
  console.log('unasked from all q modal')
  /*const formData = getFormFields(event.target)
  api.updateThought(formData, id)
    .then(function () {
      onIndex(event)
    })
    .then(console.log('edited from all q'))
    .catch(console.log('edited from all q failed'))*/
}

module.exports = {
  onAsk,
  onUnask,
  onEdit,
  onIndex,
  onEditAll,
  onUnaskAll

}
