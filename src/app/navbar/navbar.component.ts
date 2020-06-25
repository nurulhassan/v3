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
    $(function() {
      var a = $(".nurul_name");
      $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        
        if (scroll >= 0) {
          a.removeClass("nurul_name").addClass("nurul_change");
        } else {
          a.removeClass("nurul_change").addClass("nurul_name");
        }
      });
    });
     $(function() {
      var a = $(".nurul_name");
      $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll <= 0) {
          a.removeClass("nurul_change").addClass("nurul_name");
        } else {
          a.removeClass("nurul_name").addClass("nurul_change");
        }
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
