import { Component, OnInit } from '@angular/core';

declare var $: any; // Declare jQuery to use Bootstrap JavaScript

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Close the collapsed navbar when a link is clicked
    $('.navbar-nav a').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });
  }
}
