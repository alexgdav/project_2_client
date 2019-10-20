const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signUp(formData)
    .then(() => api.signIn(formData))
    .then(ui.onSignInSuccess)
    .catch(ui.onFail)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onFail)
}

const onChangePw = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePw(formData)
    .then(ui.onChangePwSuccess)
    .catch(ui.onFail)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut
}
