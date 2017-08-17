import { NgModule } 	 	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { HttpModule }		from '@angular/http';

import { AppComponent } 	from './app.component';
import { PromiseComponent } from './promise.component';
import { QuestionService } 	from './question.service';
import { KeysPipe } 		from './pipes/keys';

@NgModule({
	imports: [     
		BrowserModule,
		HttpModule
	],
	declarations: [
		AppComponent,
		PromiseComponent,
		KeysPipe
	],
	providers: [
		QuestionService
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule { }
