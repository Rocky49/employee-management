import { EmployeeMaster } from './../model/employee.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  flag: boolean;
  authenticate(username:string,password:string) {
    this.flag = false;
    console.log(username + ', ' + password);
    if (username === "rocky" && password === "123456") {

      sessionStorage.setItem('username', username);
      
      this.flag = true;
    }
    console.log("the credentials are:" + this.flag);
    return this.flag;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }
  logout() {
    sessionStorage.removeItem('username');
  }
}
