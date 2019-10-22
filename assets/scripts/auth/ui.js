const store = require('../store.js')

const successMessage = function (successText) {
  $('#authEvs_messages').text(successText).fadeTo(0, 1)
  $('#authEvs_messages').text(successText).fadeTo(7000, 0)
  $('#authEvs_messages').removeClass('failure')
  $('#authEvs_messages').addClass('success')
  $('form').trigger('reset')
}

const failMessage = function (failText) {
  $('#authEvs_messages').text(failText).fadeTo(0, 1)
  $('#authEvs_messages').text(failText).fadeTo(7000, 0)
  $('#authEvs_messages').removeClass('success')
  $('#authEvs_messages').addClass('failure')
  $('form').trigger('reset')
}

const onSignInSuccess = function (resData) {
  store.user = resData.user
  $('.logged-out').hide()
  $('.logged-in').show()
  successMessage('The Oracle sees you, ' + store.user.email + '. Actually, I just see your credentials, but to-MAY-to, to-MAH-to.')
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
  failMessage('I have no idea what you were trying to do just then, and I\'m all-knowing.')
}

module.exports = {
  onFail,
  onSignInSuccess,
  onSignOutSuccess,
  onChangePwSuccess,
  successMessage,
  failMessage
}
