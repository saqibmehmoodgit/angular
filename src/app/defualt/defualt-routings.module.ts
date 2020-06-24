import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { defaultComponent } from './defualt/defualt.component';


const defualtRoutes: Routes = 
[
  //  {
  //    path: '',
  //    component: defaultComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: CrisisListComponent,
  //       children: [
  //         {
  //           path: ':id',
  //           component: CrisisDetailComponent,
  //           canDeactivate: [CanDeactivateGuard],
  //           resolve: {
  //             crisis: CrisisDetailResolverService
  //           }
  //         },
  //         {
  //           path: '',
  //           component: CrisisCenterHomeComponent
  //         }
  //       ]
  //     }
  //   ],
    
  // }
  
];

@NgModule({
  imports: [
    RouterModule.forChild(defualtRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class defaultRoutingModule { }
