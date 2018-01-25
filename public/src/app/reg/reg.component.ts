import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from './../data.service';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

newUser:any = {firstname: "", lastname: "", email: "", password: "", passwordConfirm: ""};
errors: any[];
  constructor(private _DataService:DataService, private _Router:Router) { }

  ngOnInit() {
  }
 register(){
  	this._DataService.addUser(this.newUser)
  	.subscribe((data:any)=>{
  		console.log("got response from server:", data);
  		if(data._body==1){
  			console.log("emails already taken");
  			this.errors = data;
  		}else if(data._body==0){
          console.log('passwords dont match')
          this.errors=data;
      }
      else{
  			console.log("added user, redirecting");
  			this._Router.navigate(['/profile']);
      }
  	})
  }
}
