import { AuthenticateService } from './../services/authenticate.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isCollapsed = true;

  constructor(private route: Router, private service: AuthenticateService) {
    console.log('flag: '+service.isUserLoggedIn());
    
    if(service.isUserLoggedIn()){
      this.route.navigate['navbar'];
    }
    else{
      this.route.navigate[''];
    }
   }

  logout(){
    this.service.logout();
    this.route.navigate[''];
  }

}
