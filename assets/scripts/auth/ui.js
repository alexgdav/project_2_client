const store = require('../store.js')

const successMessage = function (successText) {
  $('#authEvs_messages').text(successText)
  $('#authEvs_messages').removeClass('failure')
  $('#authEvs_messages').addClass('success')
  $('form').trigger('reset')
}

const failMessage = function (failText) {
  $('#authEvs_messages').text(failText)
  $('#authEvs_messages').removeClass('success')
  $('#authEvs_messages').addClass('failure')
  $('form').trigger('reset')
}

const onSignInSuccess = function (resData) {
  store.user = resData.user
  $('.logged-out').hide()
  $('.logged-in').show()
  successMessage('The Oracle sees you, ' + store.user.email)
}

const onSignOutSuccess = function () {
  $('.logged-out').show()
  $('.logged-in').hide()
  successMessage('All questioned out? Farewell.')
}

const onChangePwSuccess = function () {
  successMessage('The Oracle has granted you a new password.')
}

const onFail = function () {
  failMessage('Your request has displeased the Oracle. Try again, if you dare.')
}

module.exports = {
  onFail,
  onSignInSuccess,
  onSignOutSuccess,
  onChangePwSuccess,
  successMessage,
  failMessage
}
