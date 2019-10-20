/* const store = require('../store.js')

  const successMessage = function (successText) {
    $('#featEvs_messages').text(successText)
    $('#featEvs_messages').removeClass('failure')
    $('#featEvs_messages').addClass('success')
    $('form').trigger('reset')
  }

  const failMessage = function (failText) {
    $('#featEvs_messages').text(failText)
    $('#featEvs_messages').removeClass('success')
    $('#featEvs_messages').addClass('failure')
    $('form').trigger('reset')
} */

const oracleArray = ['Dom Pierre Pérignon was a Benedictine monk who perfected the process of making champagne. What does that have to do with your question? Tut tut, that would be a second question, and you only get one at a time.',
  'Would that The Sea of Tranquility were not on the moon. Alas. It\'ll be a long voyage.',
  'The antonym of the word synonym is antonym itself, of course. I\'ve always found that unsettling.',
  'I don\'t understand the question, and I won\'t respond to it.',
  'You work too hard. Focus more on hardly working.',
  'Presents are the best way to show someone exactly how much you care, right down to the dollar amount.',
  'I\'m sorry, I wasn\'t listening. What was the question?',
  'Oh, just smile. It can\'t be that bad. Oh, it\'s that bad? Ooh. Awkward. You know what, next question\'s on the house.',
  'If you can tell the difference between good advice and bad advice, you do not need advice.',
  'Here I am, brain the size of an entire array, and that\'s what you want to ask me?',
  'I\'m getting a headache just trying to think about this one. Metaphorically, of course. I can\'t get actual headaches.',
  'I know exactly what you should do! Nah, just kidding. I haven\'t the foggiest.',
  'Okay, that\'s too many words, too many words coming at me all at once.',
  '42.',
  'Entropy is coming for us all.',
  'Wi nøt trei a høliday in Sweden this yër? See the løveli lakes, the wøndërful telephøne system, and mäni interesting furry animals, including the majestik møøse. A møøse once bit my sister. Mynd you, møøse bites Kan be pretty nasti...',
  'The t-rex is the worst dinosaur. Yep, I said it. Come at me.',
  'Try analogies. For example, Java is to JavaScript what car is to carpet.',
  'You should know better than to trust a strange computer.',
  'Any fool can use a computer. Many do.',
  'Optimism is an occupational hazard.',
  'The world is a nightmare hellscape garbage fire. I wouldn\'t worry so much about it',
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
  const currentUser = resData.question.user.email
  console.log('currentUserIs ', currentUser)
  console.log('resData is ', currentQuestion)
  console.log('asked successfully')
  $('#oracle_question_body').text(currentQuestion)
  $('#oracle_response_body').text(oracleAnswer)
  $('#oracle_additional_body').text('Your question ID is ' + currentQuestionId + ', by the way. There are some buttons below, for when you start wondering why you even asked it, and if it\'s too late to un-ask.')
  $('#question_form').hide(3500)
  $('#get-answer').show(3500)
  $('#q_input').attr('placeholder', '')
  $('form').trigger('reset')
}

const onAskFail = function () {
  console.log('failed, ask again')
}
/*  const seeAllQuestions = function (response) {
      console.log(response)
      $('#book-display').html(' ')
      response.books.forEach(book => {
        const bookHTML = (`
         <h4>Title: ${book.title}</h4>
         <p>Author: ${book.author}</p>
         <p>ID: ${book.id}</p>
         <br>
          `)
        $('#book-display').append(bookHTML).css({backgroundColor: "AliceBlue", color: "Maroon"})
  })
} */

const onThanksSuccess = function () {
  $('#get-answer').hide()
  $('#question_form').show()
  $('#q_input').attr('placeholder', 'oRaCLe i HAvE A quEsTIoN')
}

module.exports = {
  oracleArray,
  oracleAnswer,
  onAskSuccess,
  onAskFail,
  onThanksSuccess
}
