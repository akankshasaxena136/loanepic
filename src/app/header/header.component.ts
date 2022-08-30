import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router, RouterLink } from '@angular/router'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name = 'ngx sharebuttons';

  @Output() public sidenavToggle = new EventEmitter();

  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;
  activeLinkIndex = -1; 

  imageSrc = "assets/lelogo.jpg";
  imageAlt = 'iPhone'
  constructor(private router: Router) { 
  }
  
  ngOnInit(): void {
  }

  public onToggleSidenav = () => { 
    this.sidenavToggle.emit();
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
