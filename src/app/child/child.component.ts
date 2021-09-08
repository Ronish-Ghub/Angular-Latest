import { Component, Input, OnInit ,OnChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {

  constructor() { }

  ngOnInit(): void {
    console.log("Oninit funtion")
  }
@Input()
childMessage:any
message="message from child,hello parent"
ngOnChanges(){
  console.log("Onchanges funtion")
}
}
