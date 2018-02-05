import { Component, OnInit } from '@angular/core';
import {DataService} from './../data.service';
import { Router } from '@angular/router';
import {Chart} from 'chart.js';



declare var Materialize:any
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
sodl:any;
totalPortfolioValue=0;
pieArray:any=[];
pieChartData:any=[];
pieChartLabels:any=[];
myChart:any;
barArray:any=[];
myBarChart:any;
barDate:any=[];
barCoin:any=[];
barTotalThen:any=[];
barTotalNow:any=[];


constructor(private _DataService:DataService, private _Router:Router){}

  ngOnInit() {
    this._DataService.currentMessage.subscribe(message => this.message = message)
    console.log('message in child dash', this.message)

    this.getPort();
    
    Materialize.showStaggeredList('#animateme')
    
  }

 

getPort(){
  this._DataService.getUserPort().subscribe((data)=>{
    this.cryptoList=JSON.parse(data["_body"]);
    for(var i=0;i<this.cryptoList.length;i++){
        this.cryptoArray.push(this.cryptoList[i]['name']);
        this.nameAmount.push({id:this.cryptoList[i]['_id'],name:this.cryptoList[i]['name'], date: this.cryptoList[i]['date'],time:this.cryptoList[i]['time'], amount:this.cryptoList[i]['amount'], pricethen:this.cryptoList[i]['pricethen'],totalthen:this.cryptoList[i]['totalthen'], pricenow:null})
      }
        this.arraystring=this.cryptoArray.join()
        //fine until here
        this._DataService.getCurrentforPort(this.arraystring).subscribe((data:any)=>{
        this.receivedData=data;
        //data is a nested object, converting to an array of objects
         for(var x in this.receivedData){
            this.beforeArray.push({crypto:x,price:this.receivedData[x]['USD']});
          }

          //testing new push
          for(var z=0;z<this.nameAmount.length;z++){
            for(var k=0;k<this.beforeArray.length;k++){
              if(this.beforeArray[k].crypto==this.nameAmount[z].name){
                this.nameAmount[z].pricenow=this.beforeArray[k].price;
              }
            }
          }
          //newpushworks!
            //changing to new function
            for(var y=0;y<this.nameAmount.length;y++){
              this.currenttotal=this.nameAmount[y].pricenow*this.nameAmount[y].amount;
              this.difference=this.currenttotal-this.nameAmount[y].totalthen;
              if(this.difference>=0){
                var hodl=true;
              }else{
                var hodl=false;
              }
              this.coindelta=(this.difference/this.nameAmount[y].totalthen);
              this.afterArray.push({id:this.nameAmount[y].id,name:this.nameAmount[y].name, date:this.nameAmount[y].date, time:this.nameAmount[y].time,pricethen:this.nameAmount[y].pricethen,currentprice: this.nameAmount[y].pricenow,amount:this.nameAmount[y].amount, totalthen:this.nameAmount[y]['totalthen'],currenttotal:this.currenttotal, difference:this.difference, change:this.coindelta, pos_neg:hodl})
              this.totalinvested+=Number(this.nameAmount[y]['totalthen']);
              this.netgain+=this.difference;
              //new for piechart
              this.totalPortfolioValue+=this.currenttotal;
              this.pieArray.push({coin:this.nameAmount[y].name, coinTotal:this.currenttotal, percent:null})
              //barchart logic
              // this.nameAmount[y].date=new Date(this.nameAmount[y].date);
              this.barArray.push({coin:this.nameAmount[y].name,date:this.nameAmount[y].date,totalThen:this.nameAmount[y]['totalthen'],currentTotal:this.currenttotal});
              
              //
        }

              console.log('barArray is', this.barArray)
              for(var b=0;b<this.barArray.length;b++){
              this.barCoin.push(this.barArray[b].coin);
              this.barDate.push(this.barArray[b].date)
              this.barTotalThen.push(this.barArray[b].totalThen)
              this.barTotalNow.push(this.barArray[b].currentTotal)
              }

              console.log('afterarray', this.afterArray)
              console.log('pie array', this.pieArray)
              console.log('totalport', this.totalPortfolioValue)
              
              //pie chart functionality
              var finalPieArray=[];
              this.pieArray.forEach(function(a){
                if(!this[a.coin]){
                  this[a.coin]={coin:a.coin,coinTotal:0, coinDom:0};
                  finalPieArray.push(this[a.coin]);
                }
                this[a.coin].coinTotal+=a.coinTotal;
              }, Object.create(null));    
                 
                console.log('fin-al', finalPieArray)
                for(var p=0;p<finalPieArray.length;p++){
                  this.pieChartData.push(finalPieArray[p].coinTotal);
                  this.pieChartLabels.push(finalPieArray[p].coin);
                 
                }
               
                this.myChart=new Chart('canvas', {
                  type:'pie',
                  data: {
                          labels:
                                  this.pieChartLabels
                                ,

                          datasets: [
                            {
                              data: this.pieChartData,
                              backgroundColor:['#b2ffb2','#acf6f8','#f9ff8e','#fa8072','#3381ab','#162e2f','#3366CC','#DC3912','#FF9900','#109618','#990099','#3B3EAC','#0099C6','#DD4477','#66AA00','#B82E2E','#316395','#994499','#22AA99','#AAAA11','#6633CC','#E67300','#8B0707','#329262','#5574A6','#3B3EAC']

                            }
                                    ],
                        },
                  options:{   legend: {
                                        position:'left',
                                        labels:{padding:18,fontColor:'lightcyan'}  
                                      },
                              tooltips: {
                                        callbacks: {
                                          label: function(tooltipItem, data) {
                                            var allData = data.datasets[tooltipItem.datasetIndex].data;
                                            var tooltipLabel = data.labels[tooltipItem.index];
                                            var tooltipData = allData[tooltipItem.index];
                                            var total = 0;
                                            for (var i in allData) {
                                              total += allData[i];
                                            }
                                            var tooltipPercentage = Math.round((tooltipData / total) * 100);
                                            return tooltipLabel + ': ' + '$'+(Math.round(tooltipData*100)/100) + ' (' + tooltipPercentage + '%)';
                                          }
                                        }
                                      }
                                    }
                })
        //end pie chart functionality

        //bart chart functionality
        Chart.defaults.global.defaultFontColor = 'lightcyan';

        this.myBarChart=new Chart('canvas2',{


          type:'bar',
          data: {
                          labels: 
                                  this.barCoin,
                      


                          datasets: [
                            
                            {
                              label:'Amount bought',
                              data:this.barTotalThen,
                              type:'bar',
                              fill:false,
                              backgroundColor:"rgba(66, 244, 238, 0.7)",
                            },
                            {
                              label:'Market Worth',
                              data:this.barTotalNow,
                              type:'line',
                              borderColor:'#b2ffb2',
                            }
                                    ],
                        },
                        options:{   legend: {
                                        position:'left',
                                        labels:{padding:18,fontColor:'lightcyan'}  
                                            },
                                    labels:{fontColor:'lightcyan'},
    
                                    tooltips: {
                                              callbacks: {
                                                label: function(tooltipItem, data) {
                                                  var allData = data.datasets[tooltipItem.datasetIndex].data;
                                                  var tooltipLabel = data.labels[tooltipItem.index];
                                                  var tooltipData = allData[tooltipItem.index];
                                                  var total = 0;
                                                  for (var i in allData) {
                                                    total += allData[i];
                                                  }
                                                  return '$'+(Math.round(tooltipData*100)/100);
                                                }
                                              }
                                            }
                                          },
                                    scales: {
                                                yAxes: [{
                                                    ticks: {
                                                        beginAtZero:true,
                                                        fontColor:'black',
                                                    },
                                                    scaleLabel:{
                                                      display: true,
                                                      labelString: '$',
                                                    }
                                                }],
                                    }
        })

        this.portdelta=(Number(this.netgain/this.totalinvested));  
        if(this.portdelta>=0){
          this.sodl=true;
        }else{
          this.sodl=false;
        }
      });
  })


}

onDelete(cryptoid){

  this._DataService.deleteTrade(cryptoid).subscribe((data)=>{
    console.log('data from delete', data)
    this.cryptoList.length=0;
    this.cryptoArray.length=0;
    this.nameAmount.length=0;
    this.beforeArray.length=0;
    this.afterArray.length=0;
    this.totalinvested=0;
    this.totalPortfolioValue=0;
    this.netgain=0;
    this.pieArray.length=0;
    this.barArray.length=0;
    this.pieChartData.length=0;
    this.pieChartLabels.length=0;
    this.getPort();

  })
    console.log('delete successful') 
  }
 

}
