import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {slideInAnimation} from '../app/animations'
import { from, fromEvent, of,interval} from 'rxjs'
import {throttleTime,map,scan,filter,take, catchError } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'test';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  constructor(private _http:HttpClient){}
  ngOnInit(){
// fromEvent(document,"click").pipe{
//   throttleTime(1000),
//   map(event=>event.clinex),
//   scan(count,clientX)=>
// }
// of(1,2,3).subscribe(
//   next=>console.log(next),
//   err=>console.log(err),
//   ()=>console.log("end")
// )
// from(["a","b","c","d"]).
// pipe(filter(x=>x.startsWith("a")),map(x=>x+ "hi")).
// subscribe(next=>{console.log("Next value :",next)}
// )
// interval(2000).pipe(take(5)).subscribe(x=>{console.log(x)})
//   9-4-21
// this._http.get("https://jsonplaceholder.typicode.com/albums").
//   pipe(catchError((x)=>of(1,2,3))).
//   subscribe((data)=>{
//     console.log(data)
//   },
//   (err)=>{console.log("Error",err)})
of(1,2,3,4,5,6,7).pipe(map(x=>{if(x===4)
throw new Error("Error at value 4")
return x}),catchError(x=>of(4,5,6,7))).subscribe(x=>console.log(x),
err=>console.log(err))
}
}
