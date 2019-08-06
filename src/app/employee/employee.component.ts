import { AuthenticateService } from './../services/authenticate.service';
import { EmployeeMaster } from './../model/employee.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee = new EmployeeMaster();

  onSubmit() {
    if (this.service.authenticate(this.employee.username,this.employee.password)) {
      console.log("successful");
      this.route.navigate(['navbar']);
    }
    else {
      console.log("something is wrong");
      this.route.navigate(['notfound']);
    }

  }
  constructor(private service: AuthenticateService,private route: Router) { }

  ngOnInit() {
  }

}
