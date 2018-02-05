import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import {DataService} from './../data.service';
import { Router } from '@angular/router';

declare var jQuery:any;
declare var Materialize:any;
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
elementRef: ElementRef;
objectKeys=Object.keys;//doing this because API is composed of objects, not arrays
fullres:any;
coins:any=[];
newCoin:any={name:"", date:"", time:"", amount:"", pricethen:"", totalthen:""}
senddata:any;
totalvalue:any;
singlevalue:any;
cryptoname:any;
currentprice:any;
currenttotal:any;
difference:any;
net:boolean;
singledifference:any;
singlenet:boolean;
coindelta:any;
error1:boolean;
success:boolean;
message:boolean;
tradedata:any;
tradeObject:any={coinid:"", singlevalue:"", totalvalue:""}
portclicked:any;

  constructor(private _DataService:DataService, private _Router:Router, @Inject(ElementRef) private _elementRef: ElementRef){
            this.elementRef = _elementRef;

  }

ngOnInit(){
    

  this.portclicked=false;
  this._DataService.getAllCoins().subscribe((data:any)=>{
    this.fullres=data;
    for(var value in data.Data){
      this.coins.push(value);
    }
  })
  this._DataService.currentMessage.subscribe(message => this.message = message)
  // this.newMessage();
  // console.log('message in child convert', this.message)

  jQuery(this.elementRef.nativeElement).find('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });
  jQuery(this.elementRef.nativeElement).find('.timepicker').pickatime({
    default: 'now', // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Clear', // text for clear-button
    canceltext: 'Cancel', // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function(){} //Function for after opening timepicker
  })
}


addtoPort(){
  this._DataService.addCryptoPort(this.tradeObject).subscribe((data:any)=>{
      console.log('got back trade data to the component', this.tradedata)
  })
    this.portclicked=true;

}

convert(){
  this._DataService.convertCoin(this.newCoin).subscribe((data:any)=>{
    
    this.tradedata=JSON.parse(data['_body']);
    console.log('DATA BODY is', this.tradedata);
    console.log('CRYPTO ID IS', this.tradedata._id)
    console.log('date is',this.newCoin.date)
    console.log('time is',this.newCoin.time)
    
    var datetime:string=String(this.newCoin.date)+" "+String(this.newCoin.time)+":00.000"
    console.log('datetime', datetime)
    var unixTimestamp = Math.round(new Date(datetime).getTime()/1000);
    this._DataService.getData(this.newCoin.name, unixTimestamp).subscribe((data:any)=>{
      this.senddata=data;
      console.log('got back data', this.senddata);
      if(data[this.newCoin.name].USD==0){
        console.log('Sorry, price data does not exist at that time for this coin')
        this.error1=true;
        this.success=false;
      }else if(data[this.newCoin.name].USD>0){
        this.success=true;
        this.error1=false;
      this.singlevalue=data[this.newCoin.name].USD
      this.totalvalue=data[this.newCoin.name].USD*this.newCoin.amount;
      //combining single/total into one object to pass it when adding to portfolio
      this.tradeObject.singlevalue=this.singlevalue;
      this.tradeObject.totalvalue=this.totalvalue;
      this.tradeObject.coinid=this.tradedata._id;
      //
      this._DataService.getCurrent(this.newCoin.name).subscribe((data:any)=>{
      console.log('current price is:', data.USD)
      this.currentprice=data.USD;
      this.currenttotal=data.USD*this.newCoin.amount;
      console.log('currenttotal is:', this.currenttotal)
      this.difference=this.currenttotal-this.totalvalue;
      console.log('total difference:', this.difference)
      if(this.difference>=0){
        this.net=true;
      }else{
        this.net=false;
      }
      this.singledifference=(this.currentprice)-(this.singlevalue);
      console.log('singledifference:', this.singledifference)
      this.coindelta=(this.singledifference/this.singlevalue);
      console.log('coindelta%:', this.coindelta)
      if(this.singledifference>=0){
        this.singlenet=true;
      }else{
        this.singlenet=false;
      }
    })   
      } 
    })
  
  })
    this.portclicked=false;
}

animate(){
  Materialize.fadeInImage('#coinstatsstagger');
}

}