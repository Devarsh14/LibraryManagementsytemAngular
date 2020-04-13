import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { AdduserComponent } from './adduser/adduser.component';


@NgModule({
  declarations: [AdduserComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ],
  // This is required to use component from this module to other module where this module is consuming.
  exports:[
    AdduserComponent

  ]
})
export class UserManagementModule { }
