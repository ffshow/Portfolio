import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NavbarModule } from './navbar/navbar.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    NavbarModule

  ],
  exports: [
    BrowserModule,
    HttpClientModule,
    NavbarModule
  ],
  declarations: []
})
export class CoreModule { }
