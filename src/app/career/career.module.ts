import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { CareerRoutingModule } from './career-routings.module';
import {PanelModule} from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FieldsetModule} from 'primeng/fieldset';

import {ButtonModule} from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    CommonModule,
    FormsModule,
    ButtonModule,
    PanelModule,
    CareerRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  
  declarations: [
    
  ]
})
export class CareerModule {}
