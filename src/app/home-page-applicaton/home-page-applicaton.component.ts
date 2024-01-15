import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-applicaton',
  templateUrl: './home-page-applicaton.component.html',
  styleUrls: ['./home-page-applicaton.component.css']
})
export class HomePageApplicatonComponent {

constructor(private route:Router){}

  openLogin(){
    this.route.navigate(["Create-login"])
  }

}
