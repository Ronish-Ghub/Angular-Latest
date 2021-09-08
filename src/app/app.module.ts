import { BrowserAnimationsModule } from '@angular/platform-browser/animations' 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { OpenCloseComponent } from './open-close/open-close.component';
import { ImageComponent } from './image/image.component'
import { RouterModule}from '@angular/router';
import { InputComponent } from './material/input/input.component'
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import { AutoCompleteComponent } from './material/input/auto-complete/auto-complete.component';
import { MatAutocompleteModule} from '@angular/material/autocomplete'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatSelectModule} from '@angular/material/select';
import { DateRangeComponent } from './material/input/date-range/date-range.component'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';
import { Parent1Component } from './parent1/parent1.component';
import { NewComponent } from './new/new.component'
import { NgxPaginationModule } from 'ngx-pagination'
@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    ImageComponent,
    InputComponent,
    AutoCompleteComponent,
    DateRangeComponent,
    ParentComponent,
    ChildComponent,
    Child1Component,
    Parent1Component,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
