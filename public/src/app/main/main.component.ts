import { Component, OnInit } from '@angular/core';
import {DataService} from './../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  scrollData:any;
  scrollArray:any=[];
  scrollSentence:any;
  constructor(private _DataService:DataService, private _Router:Router) { }

  ngOnInit() {
    this._DataService.getScrollData().subscribe((data:any)=>{
      this.scrollData=data;
      console.log('scrolldata is', this.scrollData)
      for(var object in data){
        this.scrollArray.push("   "+object+": $"+data[object].USD)
      }
      this.scrollSentence=this.scrollArray.join('  | ');
    })
}
}

