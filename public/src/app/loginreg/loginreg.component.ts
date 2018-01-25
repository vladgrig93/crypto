import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from './../data.service';

@Component({
  selector: 'app-loginreg',
  templateUrl: './loginreg.component.html',
  styleUrls: ['./loginreg.component.css']
})
export class LoginregComponent implements OnInit {
  user: any = {email: "", password: ""};
  errors: any[];
  constructor(private _DataService:DataService, private _Router:Router) { }

  ngOnInit() {
  }

  login(){
  	this._DataService.loginUser(this.user)
  	.subscribe((data:any)=>{
  		console.log("got response from server FOR LOGIN:", data);
  		if(data._body == 1){
  			console.log("validation errors");
  			this.errors = data;
  		}else if(data._body == 0){
        console.log('sorry user doesnt exist');
        this.errors=data;
      }else{
  			console.log("logged in user, redirecting");
  			this._Router.navigate(['/profile']);
      }
  	})
  }
}
