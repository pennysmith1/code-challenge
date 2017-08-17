import { Component, OnInit } from '@angular/core';
import { QuestionService }   from './question.service';
import { Question }          from './question';

@Component({
	selector: 'app-promise',
	templateUrl: './promise.component.html',
	styleUrls: ['./app.component.css']
})

export class PromiseComponent implements OnInit { 
	promiseQuestions: Promise<Question[]>;
	questions: Question[];
	errorMessage: String;
	constructor(private questionService: QuestionService) { }
	ngOnInit(): void {
		this.promiseQuestions = this.questionService.getQuestionsWithPromise();
		this.promiseQuestions.then(
				questions => this.questions = questions,
				error =>  this.errorMessage = <any>error);
   }
}
