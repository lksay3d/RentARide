//Brooklyn Little

// Class Definitions (Handler classes)
class Handler {
  constructor(successor = null) {
    this.successor = successor;
  }

  handleRequest(request) {
    if (this.successor) {
      this.successor.handleRequest(request);
    }
  }
}

class ValidateEmailHandler extends Handler {
  constructor(emailInputId, successor) {
    super(successor);
    this.emailInputId = emailInputId;
  }

  handleRequest(request) {
    if (request === 'validateEmail') {
      var email = document.getElementById(this.emailInputId).value;
      if (email.includes('@')) {
        document.getElementById('email').style.display = 'none';
        super.handleRequest('showSecurityQuestion');
      } else {
        alert('Please enter a valid email address.');
      }
    } else {
      super.handleRequest(request);
    }
  }
}

class ShowSecurityQuestionHandler extends Handler {
  constructor(securityQuestionsId, successor) {
    super(successor);
    this.securityQuestionsId = securityQuestionsId;
  }

  handleRequest(request) {
    if (request === 'showSecurityQuestion') {
      document.getElementById(this.securityQuestionsId).style.display = 'block';
      document.getElementById('securityQuestion' + (currentQuestion + 1)).style.display = 'block';
    } else {
      super.handleRequest(request);
    }
  }
}
class ValidateSecurityAnswerHandler extends Handler {
  constructor(securityQuestions, securityAnswerIds, successor) {
    super(successor);
    this.securityQuestions = securityQuestions;
    this.securityAnswerIds = securityAnswerIds;
  }

  handleRequest(request) {
    if (request === 'validateSecurityAnswer') {
      var answer = document.getElementById(this.securityAnswerIds[currentQuestion]).value;

      if (currentQuestion < this.securityQuestions.length - 1) {
        // Hide current question
        document.getElementById('securityQuestion' + (currentQuestion + 1)).style.display = 'none';

        // Increment currentQuestion
        currentQuestion++;

        // Show next question
        document.getElementById('securityQuestion' + (currentQuestion + 1)).style.display = 'block';
      } else {
        hideAllSecurityQuestions();
        document.getElementById('securityQuestions').style.display = 'none';
        document.getElementById('recoverPass').style.display = 'block';
      }
    } else {
      super.handleRequest(request);
    }
  }
}

class RecoverPasswordHandler extends Handler {
  constructor(passwordInputId, recoverPassId, successMessageId, successor) {
    super(successor);
    this.passwordInputId = passwordInputId;
    this.recoverPassId = recoverPassId;
    this.successMessageId = successMessageId;
  }

  handleRequest(request) {
    if (request === 'recoverPassword') {
      var password = document.getElementById(this.passwordInputId).value;
      document.getElementById(this.recoverPassId).style.display = 'none';
      document.getElementById(this.successMessageId).style.display = 'block';
      currentQuestion = 0;
    } else {
      super.handleRequest(request);
    }
  }
}

// Initialization
var currentQuestion = 0;

var validateEmailHandler = new ValidateEmailHandler('emailInput');
var showSecurityQuestionHandler = new ShowSecurityQuestionHandler('securityQuestions');
var validateSecurityAnswerHandler = new ValidateSecurityAnswerHandler(['question1', 'question2', 'question3'], 
['securityAnswer1', 'securityAnswer2', 'securityAnswer3']);
var recoverPasswordHandler = new RecoverPasswordHandler('passwordInput', 'recoverPass', 'successMessage');

//chain 
validateEmailHandler.successor = showSecurityQuestionHandler;
showSecurityQuestionHandler.successor = validateSecurityAnswerHandler;
validateSecurityAnswerHandler.successor = recoverPasswordHandler;

// Event Handlers
function handleRequest(request) {
  validateEmailHandler.handleRequest(request);
}

function hideAllSecurityQuestions() {
  for (var i = 0; i < 3; i++) {
    document.getElementById('securityQuestion' + (i + 1)).style.display = 'none';
  }
}

function validateEmail() {
  currentQuestion = 0;
  handleRequest('validateEmail');
}

function validateSecurityAnswer(questionNumber) {
  currentQuestion = questionNumber - 1;
  handleRequest('validateSecurityAnswer');
}

function recoverPassword() {
  handleRequest('recoverPassword');
}

