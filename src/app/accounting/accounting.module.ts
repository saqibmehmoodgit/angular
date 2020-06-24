import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';


import { accountingRoutingModule } from './accounting-routings.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    accountingRoutingModule
  ],
  declarations: [
    
  ]
})
export class AffiliationsModule {}
