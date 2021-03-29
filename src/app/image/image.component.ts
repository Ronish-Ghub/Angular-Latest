import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations'

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  animations: [trigger("img", [
    state("default", style({transform: 'rotate(0)'})),
    state("rotated", style({transform: 'rotate(-360deg)'})),
    state("scale1", style({transform: 'scale(1)'})),
    state("scale2", style({transform: 'scale(1.7)'})),
    transition("rotated<=>default",[ animate('2000ms')]),
    transition("scale1<=>scale2",[animate('2000ms linear')])
  ])]
  // this are meta datas
})
export class ImageComponent implements OnInit {
isdefault=true
isscal=true
  constructor() { }

  ngOnInit(): void {
  }
togg(){
this.isdefault=this.isdefault==true?false:true
}
scal(){
this.isscal=this.isscal==true?false:true
}
}
