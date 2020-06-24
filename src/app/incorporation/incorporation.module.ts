import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { incorporationRoutingModule } from './incorporation-routings.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    incorporationRoutingModule
  ],
  declarations: [
    
  ]
})
export class IncorporationModule {}
