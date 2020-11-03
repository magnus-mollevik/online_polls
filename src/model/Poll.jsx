class Poll {
    pollName;
    creatorId;
    questions = [];

    constructor(pollName, creatorId) {
        this.pollName = pollName;
        this.CreatorId = creatorId;
    }

    addQuestion(question) {
        this.questions.push(question);
    }
}

class Question {
    id;
    question;
    answers = []

    constructor(question) {
        this.question = question
    }

    addAnswer(answer) {
        this.answers.push(new Answer(answer));
    }

}

class Answer {
    answer;
    count = 0;

    constructor(answer) {
        this.answer = answer
    }
}
