import { NgModule, NO_ERRORS_SCHEMA }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { defaultRoutingModule } from './defualt-routings.module';
import {GalleriaModule} from 'primeng/galleria';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    FormsModule,
    GalleriaModule,
    defaultRoutingModule
  ],
  declarations: [
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, 
    NO_ERRORS_SCHEMA
  ]
})
export class defualtModule {}
