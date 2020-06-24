import { Component, OnInit, HostBinding, OnChanges, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'offsure',
  templateUrl: './offsure.component.html',
  styleUrls: ['./offsure.component.css']
})
export class offsureComponent implements OnInit /// ,OnChanges
 {
  constructor(
  ) {}

  images: any[];
    
    ngOnInit() {
        this.images = [];
        this.images.push({source:'assets/facebook.jpg', alt:'Description for Image 1', title:'Title 1'});
        this.images.push({source:'assets/footer-2.jpg', alt:'Description for Image 2', title:'Title 2'});
        this.images.push({source:'assets/footer-3.jpg.jpg', alt:'Description for Image 3', title:'Title 3'});
        // this.images.push({source:'assets//footer-4.jpg', alt:'Description for Image 4', title:'Title 4'});
        // this.images.push({source:'assets/showcase/images/demo/galleria/galleria5.jpg', alt:'Description for Image 5', title:'Title 5'});
        // this.images.push({source:'assets/showcase/images/demo/galleria/galleria6.jpg', alt:'Description for Image 6', title:'Title 6'});
        // this.images.push({source:'assets/showcase/images/demo/galleria/galleria7.jpg', alt:'Description for Image 7', title:'Title 7'});
        // this.images.push({source:'assets/showcase/images/demo/galleria/galleria8.jpg', alt:'Description for Image 8', title:'Title 8'});
        // this.images.push({source:'assets/showcase/images/demo/galleria/galleria9.jpg', alt:'Description for Image 9', title:'Title 9'});
        // this.images.push({source:'assets/showcase/images/demo/galleria/galleria10.jpg', alt:'Description for Image 10', title:'Title 10'});
        // this.images.push({source:'assets/showcase/images/demo/galleria/galleria11.jpg', alt:'Description for Image 11', title:'Title 11'});
        // this.images.push({source:'assets/showcase/images/demo/galleria/galleria12.jpg', alt:'Description for Image 12', title:'Title 12'});
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
