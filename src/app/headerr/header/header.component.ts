import { Component, OnInit, HostBinding, OnChanges, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuItem } from 'primeng/api/menuitem';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'header-detail',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit /// ,OnChanges
 {
  faCoffee = faCoffee;
  constructor(
  ) {}
  items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Services',
                items: [{
                 
                        label: 'Accounting', 
                        icon: 'pi pi-angle-right',
                        
                        url: 'intrenational'
                        
                        // items: [
                        //     {label: 'Project'},
                        //     {label: 'Other'},
                        // ]
                    },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            }
            // {
            //     label: 'Edit',
            //     icon: 'pi pi-fw pi-pencil',
            //     items: [
            //         {label: 'Delete', icon: 'pi pi-fw pi-trash'},
            //         {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
            //     ]
            // }
        ];
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
