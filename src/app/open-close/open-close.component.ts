import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations'
@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [trigger("open_close", [
    state("open", style({
      backgroundColor: "yellow",
      opacity: 1,
      height: "200px"
    })),
    state("closed", style({
      backgroundColor: "yellow",
      opacity: 0.5,
      height: "300px"
    })),
    transition("open=>closed", [
      animate('1s')
    ]),
    transition("closed=>open", [
      animate('0.5s')
    ])
  ])]
  // this are meta datas
})
export class OpenCloseComponent implements OnInit {
isOpen=true
  constructor() { }

  ngOnInit(): void {
  }
toggle(){
  this.isOpen=this.isOpen==true?false:true
}
}
