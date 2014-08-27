# Queue

A queuing system built using [Ember.js](http://www.emberjs.com) with
[Ember CLI](http://www.ember-cli.com). Allows students to 'queue up' for help,
giving instructors a list of which students need help in the order they asked.
_This is a port of my
[ember-queue](http://github.com/dustinbrownman/ember-queue) project to Ember
CLI._

## Installation

* `git clone` this repository
* `cd queue`
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200

## Building

* `ember build`

## User stories:
- As a student I want to ask for help so a teacher will come over. __DONE__
- As a teacher I want to see a list of students who have asked for help in the
order they requested so I can keep track of who needs help. __DONE__
- As a student I want to see a confirmation message so I know my help ticket
went through. __DONE__
- As a teacher, I want students to answer a series of questions before they can
request so I am not overwhelmed by questions students can figure out on their
own. __DONE__
- As a student, I want to be able to say I no longer need help so a teacher
doesn't have to come over anymore. __DONE__
- As a teacher, I want to see statistics on how long tickets are staying open so
I know if I'm reaching students in a timely manner. __DONE__
- As a teacher, I want to be able to navigate between the queue and statistics so
I can easily switch back and forth.
