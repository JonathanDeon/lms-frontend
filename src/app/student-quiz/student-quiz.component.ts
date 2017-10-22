import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz/quiz.service';

@Component({
  selector: 'app-student-quiz',
  templateUrl: './student-quiz.component.html',
  styleUrls: ['./student-quiz.component.css']
})
export class StudentQuizComponent implements OnInit {
  question: any = {
    question: 'R+L= ?',
    answers: [
      'A',
      'B',
      'C',
      'J'
    ]
  }
  constructor(private _quizService: QuizService) { 
    
  }

  ngOnInit() {
    this._quizService.get();
  }

}
