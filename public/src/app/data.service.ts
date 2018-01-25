import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  result:any;
  result2:any;
  price:any;
  scrollresult:any;
  res:any;

  private messageSource = new BehaviorSubject<boolean>(false);
  currentMessage = this.messageSource.asObservable();

  constructor(private _http:Http) {
    
  }
   changeMessage(message: boolean) {
    this.messageSource.next(message)
  }

   getAllCoins(){
     return this._http.get('https://www.cryptocompare.com/api/data/coinlist/')
     .map(result => this.result = result.json());
  }

  getScrollData(){
    return this._http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,BCH,XRP,ADA,XLM,MIOTA,XRB,NEO,XMR,TRX,ZEC,SC,EOS,DASH&tsyms=USD,EUR')
    .map(scrollresult=>this.scrollresult=scrollresult.json());
  }

  getData(name,time){
    console.log('name is', name);
    console.log('time is', time);
    return this._http.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym='+name+'&tsyms=USD,EUR&ts='+time)
    .map(result2 => this.result2 = result2.json());
  }

  getCurrent(name){
    console.log('getting current price for ', name);
    return this._http.get('https://min-api.cryptocompare.com/data/price?fsym='+name+'&tsyms=BTC,USD,EUR')
    .map(price => this.price= price.json());

  }

  convertCoin(coin){
    console.log('hit data service showing coin',coin)
    return this._http.post('/addCoin', coin)

  }

  addCryptoPort(tradeObj){
    console.log('hit trade object data service', tradeObj)
    return this._http.post('/addTrade',tradeObj)
  }

  getUserPort(){
    return this._http.get('/myport');
  }
//USER FUNCTIONS

  addUser(userObj){
    return this._http.post('/users', userObj);

  }
  loginUser(userObj){
     return this._http.post('/login', userObj);
   }

  logOut(){
     return this._http.get('/logout');

  }
  getUser(){
    return this._http.get('/currentuser');
  }


}
