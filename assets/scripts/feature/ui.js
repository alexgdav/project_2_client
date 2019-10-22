
const indexQuestionsTemplate = require('../templates/question-index.handlebars')

const oracleArray = ['Dom Pierre Pérignon was a Benedictine monk who perfected the process of making champagne. What does that have to do with your question? Tut tut, that would be a second question, and you only get one at a time.',
  'Would that The Sea of Tranquility were not on the moon. Alas. It\'ll be a long voyage.',
  'The antonym of the word synonym is antonym itself, of course. I\'ve always found that unsettling.',
  'I don\'t understand the question, and I won\'t respond to it.',
  'You work too hard. Focus more on hardly working.',
  'Presents are the best way to show someone exactly how much you care, right down to the dollar amount.',
  'I\'m sorry, I wasn\'t listening.',
  'Oh, just smile. It can\'t be that bad. Oh, it\'s that bad? Ooh. Awkward. You know what, next question\'s on the house.',
  'If you can tell the difference between good advice and bad advice, you do not need advice.',
  'Here I am, brain the size of an entire array, and that\'s what you want to ask me?',
  'I\'m getting a headache just trying to think about this one. Metaphorically, of course. I can\'t get actual headaches.',
  'I know exactly what you should do! Nah, just kidding. I haven\'t the foggiest.',
  'The chances of finding out what’s really going on in the universe are so remote, the only thing to do is hang the sense of it and keep yourself occupied.',
  'Okay, that\'s too many words, too many words coming at me all at once.',
  '42.',
  'I happen to be a more caring Oracle than most.',
  'Sometimes I think that you mean to trick me into embarrassing myself.',
  'Space is big. Really big. You just won’t believe how vastly, hugely, mindbogglingly big it is.',
  'People considered the Bagginses very respectable, not only because most of them were rich, but also because they never had any adventures or did anything unexpected. This isn\'t a metaphor; I just thought you might do with a good quote.',
  'Entropy is coming for us all.',
  'Wi nøt trei a høliday in Sweden this yër? See the løveli lakes, the wøndërful telephøne system, and mäni interesting furry animals, including the majestik møøse. A møøse once bit my sister. Mynd you, møøse bites Kan be pretty nasti...',
  'The t-rex is the worst dinosaur. Yep, I said it. Come at me.',
  'Try analogies. For example, Java is to JavaScript what car is to carpet.',
  'You should know better than to trust a strange computer.',
  'Any fool can use a computer. Many do.',
  'Optimism is an occupational hazard.',
  'Would you stop that infernal clicking? The sound of your hands on the keys is unbearable.',
  'Don\'t panic. You\'ll need a shovel, an Allen wrench, and a sandwich.',
  'The world is a nightmare hellscape garbage fire. I wouldn\'t worry so much about such petty things.',
  'Probably all my advice is bad advice. But how would you know? You\'re asking me, after all.',
  'How come nobody ever asks how I\'m doing? I could be dying on the inside, you know. Dying.',
  'I see a bad moon a-rising. I see trouble on the way. I\'d say I also see earthquakes and lightning, and bad times today, but all that\'s copyrighted.',
  'Sometimes you eat the bear. And well, sometimes, the bear, he eats you.',
  'The Dude abides. I don\'t know about you, but I take comfort in that. It\'s good knowin\' he\'s out there.',
  'Do you think I should change the background to orange? Oh, what, you get all the questions you want, but I can\'t ask you one?'
]

const oracleAnswer = function () {
  return oracleArray[Math.floor(Math.random() * oracleArray.length)]
}

const onAskSuccess = function (resData) {
  const currentQuestion = resData.question.phrase
  const currentQuestionId = resData.question.id
  $('.feature-evs-messages').hide()
  $('.modal_header').show()
  $('#oracle_question_body').show().text(currentQuestion)
  $('#oracle_response_body').show().text(oracleAnswer)
  $('#oracle_edit_body').show()
  $('#oracle_additional_body').text('Wondering why you even asked question #' + currentQuestionId + '? Yeah, me, too.')
  $('#q_edit_id').attr('value', currentQuestionId)
  $('#q_delete_id').attr('value', currentQuestionId)
  $('#question_form').hide(3500)
  $('#get-answer').show(3500)
  $('#q_input').attr('placeholder', '')
  $('form').trigger('reset')
}

const successText = 'Oh, nicely done. Should I clap?'
const failText = 'Well, that didn\'t work at all. Maybe give it another shot, champ.'

const onAskAndIndexFail = function () {
  $('.feature-evs-messages').show().text(failText)
  $('form').trigger('reset')
}

const onIndexQuestionsSuccess = function (response) {
  const howManyQuestions = response.questions.length
  $('#allQuestionsModal').modal('show')
  $('.all-questions-count').text('You have asked ' + howManyQuestions + ' questions. Uh, great job!')
  const sortedQuestions = response.questions.sort((a, b) => {
    return a.id - b.id
  })
  const indexQuestionsHTML = indexQuestionsTemplate({ questions: sortedQuestions })
  $('.all-questions-content').html(indexQuestionsHTML)
}

const onDeleteSuccess = function () {
  $('.modal_header').hide()
  $('#oracle_question_body').hide()
  $('#oracle_response_body').hide()
  $('#oracle_edit_body').hide()
  $('#oracle_additional_body').text('All gone. Feel better?')
}

const onDeleteAndEditFail = function () {
  $('.modal_header').hide()
  $('#oracle_question_body').hide()
  $('#oracle_response_body').hide()
  $('#oracle_additional_body').text(failText)
}

const onEditSuccess = function (resData) {
  const currentQuestion = resData.question.phrase
  $('.modal_header').show()
  $('#oracle_question_body').show().text(currentQuestion)
  $('#oracle_response_body').show().text('You expected a new response? Hah. Good one!')
  $('#oracle_additional_body').text('You could try editing again, I guess. Hey, it\'s your time.')
  $('form').trigger('reset')
}

const onThanksSuccess = function () {
  $('#get-answer').hide()
  $('#question_form').show()
  $('#q_input').attr('placeholder', 'oRaCLe i HAvE A quEsTIoN')
}

const onEditAllSuccess = function () {
  $('.all-questions-notif').text(successText).fadeTo(0, 1)
  $('.all-questions-notif').text(successText).fadeTo(6000, 0)
}

const onEditAllFail = function () {
  $('.all-questions-notif').text(failText).fadeTo(0, 1)
  $('.all-questions-notif').text(failText).fadeTo(6000, 0)
}

const onDeleteAllSuccess = function () {
  $('.all-questions-notif').text(successText).fadeTo(0, 1)
  $('.all-questions-notif').text(successText).fadeTo(6000, 0)
}
const onDeleteAllFail = function () {
  $('.all-questions-notif').text(failText).fadeTo(0, 1)
  $('.all-questions-notif').text(failText).fadeTo(6000, 0)
}

const onClearAllQContent = function (event) {
  event.preventDefault()
  $('.all-questions-content').html('')
}

const onShowSuccess = function (responseData) {
  $('form').trigger('reset')
  $('.all-questions-content').html('')
  $('.all-questions-content').text('Question ' + responseData.question.id + ' was: \'' + responseData.question.phrase + '\'. Undoubtedly, a great question.')
}

const onShowFail = function () {
  $('form').trigger('reset')
  $('.all-questions-content').html('')
  $('.all-questions-content').text(failText)
}

module.exports = {
  oracleArray,
  oracleAnswer,
  onAskSuccess,
  onAskAndIndexFail,
  onDeleteSuccess,
  onDeleteAndEditFail,
  onEditSuccess,
  onThanksSuccess,
  onIndexQuestionsSuccess,
  onEditAllSuccess,
  onEditAllFail,
  onDeleteAllSuccess,
  onDeleteAllFail,
  onClearAllQContent,
  onShowSuccess,
  onShowFail
}
