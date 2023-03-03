import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  @Input() productQuantity;
  constructor(private route: Router) { }

  ngOnInit(): void { }

  //navigate to cart
  navigateToCart() {
    this.route.navigate(['/cart']);
  }
}
