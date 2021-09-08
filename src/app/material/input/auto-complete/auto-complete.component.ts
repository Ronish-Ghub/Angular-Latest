import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from './user';
import { Observable} from 'rxjs'
import { startWith,map} from 'rxjs/operators'
@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  myfield=new FormControl()
  filteredOptions: any
  constructor() { }

  ngOnInit(): void {
    this.filteredOptions=this.myfield.valueChanges.pipe(
      startWith(''),map(value => this._filter(value)));
    
  }
options:string[]=['Anna','John','Martha','Seri']
private _filter(value:string):string[]{
  const filterValue=value.toLowerCase();
  let result=
  this.options.filter(option => option.toLowerCase().indexOf(filterValue)===0);
  return result
}
}
