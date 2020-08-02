import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DialogModule } from "primeng/dialog";
import { TableModule } from "primeng/table";
import {PickListModule} from 'primeng/picklist';
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from "primeng/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports:      
  [ BrowserModule, 
  FormsModule,
    DialogModule,
    TableModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    PickListModule,
    BrowserAnimationsModule 
    ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
