import { BrowserAnimationsModule } from '@angular/platform-browser/animations' 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OpenCloseComponent } from './open-close/open-close.component';
import { ImageComponent } from './image/image.component'
@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
