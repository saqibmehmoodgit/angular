import { Component, OnInit, HostBinding, OnChanges, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit /// ,OnChanges
 {
  constructor(
  ) {}

  ngOnInit() {
  }

  // cancel() {
  //   this.gotoCrises();
  // }

  // save() {
  //   this.crisis.name = this.editName;
  //   this.gotoCrises();
  // }

  // canDeactivate(): Observable<boolean> | boolean {
  //   // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
  //   if (!this.crisis || this.crisis.name === this.editName) {
  //     return true;
  //   }
  //   // Otherwise ask the user with the dialog service and return its
  //   // observable which resolves to true or false when the user decides
  //   return this.dialogService.confirm('Discard changes?');
  // }

  // gotoCrises() {
  //   let crisisId = this.crisis ? this.crisis.id : null;
  //   // Pass along the crisis id if available
  //   // so that the CrisisListComponent can select that crisis.
  //   // Add a totally useless `foo` parameter for kicks.
  //   // Relative navigation back to the crises
  //   this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  // }

  // ngOnChanges() {
  //   // for (let propName in changes) {
  //   //   let chng = changes[propName];
  //   //   let cur  = JSON.stringify(chng.currentValue);
  //   //   let prev = JSON.stringify(chng.previousValue);
  //   //   this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    
  //   this.change++;
  //   console.log(' ngon changes ');
  //   }



}
