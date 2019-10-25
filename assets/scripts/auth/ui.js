const store = require('../store.js')

const successMessage = function (successText) {
  $('.auth-evs-messages').text(successText).fadeTo(0, 1)
  $('.auth-evs-messages').text(successText).fadeTo(7000, 0)
  $('.dropdown-menu').collapse('hide')
  $('form').trigger('reset')
}

const failMessage = function (failText) {
  $('.auth-evs-messages').text(failText).fadeTo(0, 1)
  $('.auth-evs-messages').text(failText).fadeTo(7000, 0)
  $('.dropdown-menu').collapse('hide')
  $('form').trigger('reset')
}

const onSignInSuccess = function (resData) {
  store.user = resData.user
  $('.logged-out').hide()
  $('.logged-in').show()
  successMessage(store.user.email + ' is signed in')
}

const onSignOutSuccess = function () {
  $('.logged-out').show()
  $('.logged-in').hide()
  successMessage('All questioned out? You\'ll be back.')
  $('#q_input').attr('placeholder', 'Oracle, I have a question!')
}

const onChangePwSuccess = function () {
  successMessage('The Oracle has grudgingly granted you a new password.')
}

const onFail = function () {
  failMessage('Well, that didn\'t work at all. Try it again, champ.')
}

module.exports = {
  onFail,
  onSignInSuccess,
  onSignOutSuccess,
  onChangePwSuccess,
  successMessage,
  failMessage
}
