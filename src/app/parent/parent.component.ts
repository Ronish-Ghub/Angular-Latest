import { Component, OnInit, ViewChild } from '@angular/core';
import { AfterViewInit} from '@angular/core'
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit {

  constructor() { }
messagefromchild:any

  ngAfterViewInit(): void {
    this.messagefromchild=this.child.message
  }
  ngOnInit(): void {
  }
  @ViewChild(ChildComponent)child: any
}
