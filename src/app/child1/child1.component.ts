import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Output()
messageEvent=new EventEmitter<string>();
event_message="Hey User cliked the button,"+ new Date().getHours()
sentmessage(){
  this.messageEvent.emit(this.event_message)
}
}