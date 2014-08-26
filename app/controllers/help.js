import Ember from 'ember';

var HelpController = Ember.ObjectController.extend({
  actions: {
    createTicket: function() {
      var controller = this;
      model = this.get('model');
      if (model.get('student') && model.get('question')) {
        model.set('open', true);
        model.set('createdAt', new Date());
        model.save()
        .then(function() {
          controller.transitionToRoute('ticket', model);
        });
      } else {
        alert('Please enter your names and questions');
      }
    },

    nextQuestion: function() {
      var questions = this.get('questions')
      var next = questions.shift();
      this.set('currentQuestion', next)
    }
  },

  questions: [
    "Have you gone through all the steps on the Learn How to Program debugging lesson?",
    "Have you asked another pair for help?",
    "Have you spent 15 minutes going through through the problem documenting every step?"
  ],

  currentQuestion: function() {
    return this.get('questions').shift();
  }.property()
});

export default HelpController;
