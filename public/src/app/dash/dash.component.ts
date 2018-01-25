import { Component, OnInit } from '@angular/core';
import {DataService} from './../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  homeClicked:boolean;
  otherClicked:boolean;
  message:boolean;

  constructor(private _DataService:DataService, private _Router:Router) { }

  ngOnInit() {
    this.homeClicked=false;
    this.otherClicked=false;
    this.newMessage();
    this._DataService.currentMessage.subscribe(message => this.message = message)
    console.log('message in parent dash logged out', this.message)
  }

  newMessage() {
    this._DataService.changeMessage(false)
  }
  onHomeClick(){
    if(this.homeClicked==false){
      this.homeClicked=true;
  
  }
}
otherClick(){
  if(this.otherClicked==false){
    this.otherClicked=true;
  }

}
}
