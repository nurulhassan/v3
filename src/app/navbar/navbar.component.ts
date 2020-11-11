import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT } from '@angular/common';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})
export class NavbarComponent implements OnInit {
  constructor(@Inject(DOCUMENT) document) { }
  ngOnInit(): void {
    $("#navbarSupportedContent").on('show.bs.collapse', function() {
    $('a.nav-link').click(function() {
        $("#navbarSupportedContent").collapse('hide');
    });
});
   
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 550) {
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky'); 
     }
  }
}
