import { Component, OnInit } from '@angular/core';
import {DataService} from './../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mydash',
  templateUrl: './mydash.component.html',
  styleUrls: ['./mydash.component.css']
})
export class MydashComponent implements OnInit {
message:boolean;
cryptoList:any;

constructor(private _DataService:DataService, private _Router:Router){}

  ngOnInit() {
    this._DataService.currentMessage.subscribe(message => this.message = message)
    console.log('message in child dash', this.message)
    this.getPort();
  }



getPort(){
  this._DataService.getUserPort().subscribe((data)=>{
    this.cryptoList=JSON.parse(data["_body"]);
    console.log('showing cryptolist', this.cryptoList)
  })
}

}
