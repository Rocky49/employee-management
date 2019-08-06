import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {
    path:'',
    component: EmployeeComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'notfound',
    component: FileNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
