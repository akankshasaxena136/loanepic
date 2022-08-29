import { Component, OnInit } from '@angular/core';
import {BreakpointObserver,Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isPhonePortrait = false;
  name: any;


  constructor( private responsive: BreakpointObserver) {

  }

  ngOnInit() {
    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {

        this.isPhonePortrait = false; 

        if (result.matches) {
          this.isPhonePortrait = true;
        }

  });
  }
  
}

