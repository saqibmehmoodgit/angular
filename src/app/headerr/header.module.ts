import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { HeaderRoutingModule } from './header-routing.module';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    HeaderRoutingModule
  ],
  declarations: [
    
  ]
})
export class HeaderModule {}
