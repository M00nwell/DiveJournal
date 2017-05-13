import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private firebaseService:FirebaseService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.firebaseService.login();
    this.firebaseService.user.subscribe(user => {
      if(user)
      {
        location.reload();
      }
    })  
  }

  logout() {
    this.firebaseService.logout();
    this.router.navigate(['']);
  }

  signUp() {
  }

}
