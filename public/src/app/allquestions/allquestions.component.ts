import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { QuestionService } from '../question.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-allquestions',
  templateUrl: './allquestions.component.html',
  styleUrls: ['./allquestions.component.css']
})
export class AllquestionsComponent implements OnInit {
  currentUser = { _id: '' };
  newQuestion = { user: '' };
  questions:any[] = [];

  constructor(
    private _userService:UserService,
    private _questionService:QuestionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCurrentUser();
    this.getQuestions();
  }

  getQuestions(){
    return this._questionService.getQuestions()
    .then(questions => this.questions = questions)
    .catch(err => console.log(err));
  }

  getCurrentUser(){
    this.currentUser = this._userService.getCurrentUser();
  }

logout(){
  this._userService.logout();
  this.router.navigateByUrl('/');
}

isLoggedIn(){
  if(this._userService.getCurrentUser()==null){
    this.router.navigateByUrl('/');
  }
}

}
