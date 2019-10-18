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

const onSignUpSuccess = function (resData) {
  store.user = resData.user
  successMessage('Your name has been recorded, ' + store.user.email + '. Please log in.')
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

const onSignUpFail = function () {
  failMessage('Your request has displeased the Oracle. Sign up again, if you dare.')
}

const onSignInFail = function () {
  failMessage('The Oracle declines to see you. Try requesting another audience.')
}

const onSignOutFail = function () {
  failMessage('You may not leave yet.')
}

const onChangePwFail = function () {
  failMessage('Your request has displeased the Oracle. New password has not been granted.')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFail,
  onSignInSuccess,
  onSignInFail,
  onSignOutFail,
  onSignOutSuccess,
  onChangePwSuccess,
  onChangePwFail,
  successMessage,
  failMessage
}
