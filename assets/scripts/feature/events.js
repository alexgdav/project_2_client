const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onAsk = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.createQuestion(formData)
    .then(ui.onAskSuccess)
    .catch(ui.onAskFail)
}

const onUnask = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
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

module.exports = {
  onAsk,
  onUnask,
  onEdit
}
