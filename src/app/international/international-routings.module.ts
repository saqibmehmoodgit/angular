import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const internationalModuleRoutes: Routes = 
[
  // {
  //   path: '',
  //   component: CrisisCenterComponent,
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
    RouterModule.forChild(internationalModuleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class internationalRoutingModule { }
