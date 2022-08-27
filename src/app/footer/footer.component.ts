import { Component, OnInit } from '@angular/core';

export interface Tile {
  text: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tiles: Tile[] = [
    {text: 'Home', href: '/home'},
    {text: 'Our Services', href:'/home/services'},
    {text: 'Personal Loan', href:'/home/services/personal-loan'},
    {text: 'Home Loan', href:'/home/services/home-loan'},
    {text: 'Business Loan', href:'/home/services/business-loan'},
    {text: 'Blogs', href:'/home/blogs'},
    {text: 'About Us', href:'/home/about-us'},
    {text: 'Contact Us', href:'/home/contact-us'}
  ];

}
