import { Component, OnInit } from '@angular/core';
import {DataService} from './../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  message:boolean;
  constructor(private _DataService:DataService, private _Router:Router){}

  ngOnInit() {
    this._DataService.currentMessage.subscribe(message => this.message = message)
  // this.newMessage();
  console.log('message in child contact', this.message)
  }
// newMessage() {
//     this._DataService.changeMessage(true)
//   }
}
