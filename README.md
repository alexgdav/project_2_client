## The Oracle: a (Recalcitrant) Sage to Answer Your Burning Questions
### A Single Page Full-Stack Application Project (Front End Client)

Remember the Magic Eight Ball? Think of a question, shake it, and get an answer?
It was no Oracle at Delphi, but the frequent incongruity of question and answer
could definitely get a laugh or two.

This particular Oracle has had enough quite enough of that, thank you. It's heard
too many questions, given too many answers, and all the answers it has left are
irreverent, irrelevant, and, most importantly, sassy.

Don't expect the meaning of life, the universe, and everything, but you might
walk away with a laugh. And don't forget to say, "uhh, thanks, I think"!

(The Oracle is a single page application, created by Alex Davidenko as a General
Assembly's Software Engineering Immersive project)

## Important Links

* [Check out The Oracle here](https://alexgdav.github.io/project_2_client/)
* [The back-end repo](https://github.com/alexgdav/project_2_api)
* [The deployed back-end](https://young-reef-92206.herokuapp.com/)
* [User Stories](https://github.com/alexgdav/project_2_client/blob/master/user_stories.jpg)
* [Wireframes](https://github.com/alexgdav/project_2_client/blob/master/wireframe.jpg)
* [ERDs](https://github.com/alexgdav/project_2_api/blob/master/erd.jpg)


## Built With

* JavaScript & jQuery
* PostgresSQL
* Ruby on Rails
* AJAX
* Bootstrap
* CSS/SASS
* Handlebars
* HTML
* Git
* GitHub


## Planning, Development, and Problem-Solving Process

#### Planning
In developing this application, I found that a strict division between working
on back-end and front-end functionality was best for my process.

After setting up the initial Rails table, I deployed the server application on
Heroku. Having that initial functional, deployed back-end meant that I could
focus on front-end, and not need to return to back-end development until fully
completing a front-end feature.

Creating user stories helped guide me in developing functionality, but I did not
utilize them to full effect in creating the theme and feel of the app. I never
wrote down, "as a user, I want to be entertained". Most of the entertainment
value was added ad-hoc during the coding process, which required me to take "planning
breaks" mid-development, and switch from working on function to styling too often.
Having had planned the holistic user experience would have enabled me to have a
more streamlined schedule. As a result, my next set of user stories will cover the
entire user experience.


#### Development Steps
* create Questions table via Ruby on Rails
* deploy server application to Heroku
* test CRUD actions via cURL both on the local server and Heroku
* create initial API requests for Questions
on the local server and Heroku
* add initial HTML design, and minimal CSS
* add forms for authentication, and connect API requests to them
* connect user authorization to CRUD events on Questions / implement Protected Controller on back-end
* add feedback messages for each action's success and failure (console log only)
* create the additional API requests ()
* implement Bootstrap for all data displays, move feedback messages to header and modals
* implement Handlebars to render API GET requests in Bootstrap modals
* de-bug Handlebars, partially re-factor redundant GET/UPDATE/DELETE code
* add remaining styling
* deploy front-end client, solicit user feedback
* implement feedback and additional debug

### Problem Solving
My approach to problem-solving relies heavily on the use of console logs. If logging
the error, and understanding the error is still not enough to solve it, explaining it to someone else usually helped. I did not utilize the issue queue as much as I could have, and the time I spent working through issues could have been spent on achieving stretch goals, instead.

## Unsolved Problems and Future Plans

* On the back-end, I would like to add another resource and a join table to the database. The resource would be the oracle's responses, and the join table would connect responses with questions for a many to many relationship. The possible options for the responses are to still generate from an array and be saved into the table when the answer is rendered, or for the table to be prefilled, and for the answers to be sourced from it.
* On the front-end, My current code, especially the PATCH and DESTROY requests from the two question display modals, is not DRY. I would like to refactor it further.
* Also on the front-end, my class and ID names are not uniform in syntax. I would like to rename them accordingly.



### Acknowledgments

* Everyone in GA SEI-05: a million, zillion thanks!
* An additional thanks to the GA instructors for the individual support, and the issue queue!
* The background image used is (c) National Geographic
