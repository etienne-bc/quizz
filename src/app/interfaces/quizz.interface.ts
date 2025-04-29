export interface Answer {
  answer: string;
  correct: boolean;
}

export interface Question {
  question: string;
  image: string;
  answers: Answer[];
}

export interface Quizz {
  title: string;
  questions: Question[];
}
