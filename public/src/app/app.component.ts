import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {

  constructor(private _DataService:DataService, private _Router:Router) { }

}

