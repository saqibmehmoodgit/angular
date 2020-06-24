import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-crisis-center-home',
  templateUrl: './crisis-center-home.component.html',
  styleUrls: ['./crisis-center-home.component.css']
})
export class CrisisCenterHomeComponent {
  @Output() sizeChange = new EventEmitter<number>();
  @Input()  size: number ;
  inc() {
   
    this.sizeChange.emit(this.size);
  }
 }
