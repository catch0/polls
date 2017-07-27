import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'
import { RouterModule } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AllquestionsComponent } from './allquestions/allquestions.component';
import { QuestionComponent } from './question/question.component';
import { NewquestionComponent } from './newquestion/newquestion.component';

//services
import {UserService} from './user.service';
import {QuestionService} from './question.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AllquestionsComponent,
    QuestionComponent,
    NewquestionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    UserService,
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
