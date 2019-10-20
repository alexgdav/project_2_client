const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onAsk = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createQuestion(formData)
    .then(ui.onAskSuccess)
    .catch(ui.onAskFail)
}

module.exports = {
  onAsk
}
