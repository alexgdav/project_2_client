'use strict'
const authEvs = require('./auth/events.js')
const featureEvs = require('./feature/events.js')
const featureUi = require('./feature/ui.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvs.onSignUp)
  $('#sign-in').on('submit', authEvs.onSignIn)
  $('#sign-out').on('submit', authEvs.onSignOut)
  $('#change-pw').on('submit', authEvs.onChangePw)
  $('#question_create').on('submit', featureEvs.onAsk)
  $('#thanks_oracle').on('click', featureUi.onThanksSuccess)
})
