import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable'
import {Observer} from 'rxjs/Observer'
import {Subject} from 'rxjs/Subject'
import 'rxjs/Rx'

@Injectable({
  providedIn: 'root'
})

export class TitleService {
  title : Subject<string>= new Subject<string>()

  constructor() { 
    
    /*Promises
    title:string
   const titlePromice = new Promise(resolve=>{
     setTimeout(()=>{
       resolve("New Title")
     },2000)
   })
   titlePromice.then((value:string)=>{
     this.title= value
   })
   //Observable with count
   const number = Observable.interval(1000)
   number.subscribe((number)=>{
     this.title = `${number}`
   })
*/
/* Observable with Observer
  title:Observable<string> 
  titleObserver:Observer<string>
   this.title = Observable.create ((obs:Observer<string>)=>{
      this.titleObserver=obs
      this.titleObserver.next("Service")
   }).share()
   */
  }
}
