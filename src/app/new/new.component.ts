import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
elist:any[]=[]
  constructor() {for(let i=0;i<100;i++){
    let obj={
      'id':i,
      'code':"e"+i.toString(),
      'salary':i*10000
    }
    this.elist.push(obj)
  } }
  ngOnInit(): void {
  }

}
