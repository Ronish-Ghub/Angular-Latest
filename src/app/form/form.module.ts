import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [FormComponent, HomeComponent],
  imports: [
    CommonModule,
    FormRoutingModule
  ]
})
export class FormModule { }
