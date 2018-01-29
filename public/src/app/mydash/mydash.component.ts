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
cryptoArray:any=[];
nameAmount:any=[];
arraystring:any;
currentpriceObj:any;
receivedData:any;
beforeArray:any=[];
afterArray:any=[];

totalvalue:any;
singlevalue:any;
cryptoname:any;
currentprice:any;
currenttotal:any;
difference:any;
singledifference:any;
coindelta:any;
totalinvested=0;
netgain=0;
portdelta:any;


constructor(private _DataService:DataService, private _Router:Router){}

  ngOnInit() {
    this._DataService.currentMessage.subscribe(message => this.message = message)
    console.log('message in child dash', this.message)
    this.getPort();
  }


getPort(){
  this._DataService.getUserPort().subscribe((data)=>{
    this.cryptoList=JSON.parse(data["_body"]);
    console.log('cyrptolist is', this.cryptoList)
    for(var i=0;i<this.cryptoList.length;i++){
        this.cryptoArray.push(this.cryptoList[i]['name']);
        this.nameAmount.push({id:this.cryptoList[i]['_id'],name:this.cryptoList[i]['name'], date: this.cryptoList[i]['date'],time:this.cryptoList[i]['time'], amount:this.cryptoList[i]['amount'], pricethen:this.cryptoList[i]['pricethen'],totalthen:this.cryptoList[i]['totalthen']})
        }
        this.arraystring=this.cryptoArray.join()
        this._DataService.getCurrentforPort(this.arraystring).subscribe((data:any)=>{
        this.receivedData=data;
        //data is a nested object, converting to an array of objects
         for(var x in this.receivedData){
            this.beforeArray.push({crypto:x,price:this.receivedData[x]['USD']});
          }
          for(var y=0;y<this.beforeArray.length;y++){
            this.currenttotal=this.beforeArray[y].price*this.nameAmount[y].amount;
            this.difference=this.currenttotal-this.nameAmount[y].totalthen;
            this.coindelta=((this.difference/this.nameAmount[y].totalthen)*100);
            this.afterArray.push({id:this.nameAmount[y].id,name:this.nameAmount[y].name, date:this.nameAmount[y].date, time:this.nameAmount[y].time,pricethen:this.nameAmount[y].pricethen,currentprice: this.beforeArray[y].price,amount:this.nameAmount[y].amount, totalthen:this.nameAmount[y]['totalthen'],currenttotal:this.currenttotal, difference:this.difference, change:this.coindelta})
            this.totalinvested+=Number(this.nameAmount[y]['totalthen']);
            this.netgain+=this.difference;
        }
        this.portdelta=(Number(this.netgain/this.totalinvested))*100;          
      });
  })
    console.log('afterArray is', this.afterArray)
}

onDelete(cryptoid){
  this._DataService.deleteTrade(cryptoid).subscribe((data)=>{
    this.cryptoList.length=0 
    this.cryptoArray.length=0;
    this.nameAmount.length=0;
    this.beforeArray.length=0;
    this.afterArray.length=0;
    console.log('delete successful') 
  })
    this.getPort();
  }
}
