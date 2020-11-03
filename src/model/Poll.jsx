class Poll {
    pollName;
    creatorId;
    questionsArray = [];

    constructor(pollName, creatorId){
        this.pollName = pollName;
        this.CreatorId = creatorId;
    }

    addQuestion(question){
        this.questionsArray.push(question);
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
    count = 0;
    answer;

    constructor(answer) {
        this.answer = answer
    }
}
