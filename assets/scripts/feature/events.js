const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onAsk = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.createQuestion(formData)
    .then(ui.onAskSuccess)
    .catch(ui.onAskFail)
}

const onUnask = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.deleteQuestion(formData)
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteFail)
}

module.exports = {
  onAsk,
  onUnask
}
