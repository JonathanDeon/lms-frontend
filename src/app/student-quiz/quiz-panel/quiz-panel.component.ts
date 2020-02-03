import { Component, OnInit, Input, Output, EventEmitter,DoCheck } from '@angular/core';

import { Question } from '../../models/question.model';
 import { AnsweredQuestion } from '../../models/answeredQuestion.model';


import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz-panel',
  templateUrl: './quiz-panel.component.html',
  styleUrls: ['./quiz-panel.component.css']
})
export class QuizPanelComponent implements OnInit,DoCheck {
  @Input() questions: Question[];
  @Input() answeredQuestions: AnsweredQuestion[];
  @Input() currentQuestion: Question;
  @Input() currentIndex: number;
  @Output() navigate: EventEmitter<any> = new EventEmitter<any>();
  @Output() timeUp: EventEmitter<any> = new EventEmitter<any>();
  

  count: number = 3000;
  countDown;
  constructor() { 
  }

  ngDoCheck() {
    if (this.count === 0) {
      this.count = -1;
      this.timeUp.emit();
    }
  }

  setButtonClass(index) {
    if (index === this.currentIndex) {
      return 'btn-primary';
    } else if (this.isAnswered(index)) {
      return 'btn-info';
    } else if(this.questions[index].flagged) {
      return 'btn-warning';
    } else {
      return 'btn-default';
    }
  }

  isAnswered(index) {
    let answered = this.answeredQuestions.findIndex(result => 
      result.question === this.questions[index]
    );

    if (answered != -1 && this.answeredQuestions[answered].selectedAnswer !== '-') {
      return true;
    }
  }


  ngOnInit() {
    this.countDown = Observable.timer(0,1000)
    .take(this.count)
    .map(()=> --this.count);
  }

  goTo(index) {
    let indexes = {
      currentIndex: this.currentIndex,
      newIndex: index
    }
    this.navigate.emit(indexes);
  }


}
