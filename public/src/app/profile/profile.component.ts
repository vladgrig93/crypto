import { Component, OnInit } from '@angular/core';
import {DataService} from './../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser:any={}
  homeClicked:boolean;
  otherClicked:boolean;
  message:boolean;
  constructor(private _DataService:DataService, private _Router:Router) {}

  ngOnInit() {
    this.homeClicked=false;
    this.otherClicked=false;
    this.getUserInfo();
    this.newMessage();
    this._DataService.currentMessage.subscribe(message => this.message = message)
    console.log('message in parent profile', this.message)

  }

  newMessage() {
    this._DataService.changeMessage(true)
  }

  onHomeClick(){
    if(this.homeClicked==false){
      this.homeClicked=true;
    // }else{
    //   this.homeClicked=false;
    // }
  }
}
otherClick(){
  if(this.otherClicked==false){
    this.otherClicked=true;
  }

}



onSignOut(){
  console.log('logoff clicked')
    this._DataService.logOut().subscribe(()=>{
      console.log('destroying current user')
      this._Router.navigate(['/']);
    })
}

getUserInfo(){
  this._DataService.getUser().subscribe((data)=>{
      this.currentUser=JSON.parse(data['_body'])
      console.log('thisisthebody', this.currentUser)
    })
}
}
