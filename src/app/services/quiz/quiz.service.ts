import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { generateQuizUrl, generateQuizMarksUrl } from '../../config/constants';

import { Quiz } from '../../models/quizDTO.model';
import { Question } from '../../models/question.model';
import { QuizMark1 } from '../../models/quizMarks/quizMark.model';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { 
  }

  get(id: number) {
    return this.http.get<Quiz>(generateQuizUrl(id));
  }

  getMark(quizId: number,studentId: number) {
    return this.http.get<QuizMark1>(generateQuizMarksUrl(quizId,studentId));
  }

  post(quizMark: QuizMark1) {
    return this.http.post(generateQuizMarksUrl(quizMark.quiz,quizMark.student),quizMark);
  }
}
