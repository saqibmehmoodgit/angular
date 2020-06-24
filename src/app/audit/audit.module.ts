import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { auditRoutingModule } from './audit-routings.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    auditRoutingModule
  ],
  declarations: [
    
  ]
})
export class AuditModule {}
