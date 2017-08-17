import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs';
import { Question }       from './question';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuestionService {
	url = "https://api.stackexchange.com/2.2/questions?pagesize=10&order=desc&sort=votes&tagged=angular&site=stackoverflow";
	constructor(private http:Http) { }
	getQuestionsWithPromise(): Promise<Question[]> {
		return this.http.get(this.url).toPromise()
			.then(this.extractData)
			.catch(this.handleErrorPromise);
	}
	private extractData(res: Response) {
		let body = res.json();
		return body;
	}
	private handleErrorPromise (error: Response | any) {
		console.error(error.message || error);
		return Promise.reject(error.message || error);
	}	
}
