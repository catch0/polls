import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { QuestionService } from '../question.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
param_id: string;
question={option1:''};
currentUser ={};

  constructor(
    private _userService:UserService,
  private _questionService:QuestionService,
  private router: Router,
  private _route: ActivatedRoute,
  ) {
    this._route.params.subscribe(param=>this.param_id=param.id)
   }

  ngOnInit() {
    this.getQuestion();
  }

  getQuestion(){
  return this._questionService.show(this.param_id)
  .then(question => this.question = question)
  .catch(err=> console.log(err));
}

  isLoggedIn(){
  if(this._userService.getCurrentUser()==null){
    this.router.navigateByUrl('/');
  }
  }

  getCurrentUser(){
  this.currentUser = this._userService.getCurrentUser();
}

logout(){
this._userService.logout();
this.router.navigateByUrl('/');
}


}
