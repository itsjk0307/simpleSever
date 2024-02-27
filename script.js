var questions = [
  "What is your name?",
  "Where are you from?",
  "How old are you?",
];
var answers = [];

let i = 0;

do {
  answers.push(prompt(questions[i]));
  i++;
} while (i < questions.length);
