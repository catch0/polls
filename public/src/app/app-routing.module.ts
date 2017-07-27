import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AllquestionsComponent } from './allquestions/allquestions.component';
import { QuestionComponent } from './question/question.component';
import { NewquestionComponent } from './newquestion/newquestion.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: LoginComponent},
    { path: 'dashboard', component: AllquestionsComponent},
    { path: 'newquestion', component: NewquestionComponent},
    {path: 'question/:id', component: QuestionComponent},
    {path: 'create', component: NewquestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
