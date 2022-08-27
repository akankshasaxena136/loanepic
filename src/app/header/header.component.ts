import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;
  activeLinkIndex = -1; 

  imageSrc = "assets/lelogo.jpg";
  imageAlt = 'iPhone'
  constructor(private router: Router) { 
  }
  
  ngOnInit(): void {
  }

  openMenu() {
    this.trigger.toggleMenu();
  } 
  closeMenu() {
    this.trigger.closeMenu();
    console.log('close')
  }   
  aboutus() {
    this.router.navigate(['/home/about-us']);
  }
  contactus() {
    this.router.navigate(['/home/contact-us']);
  }
  openPersonalLoan() {
    this.router.navigate(['/home/services/personal-loan']);
  }

}
