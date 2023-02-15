import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../interface/product.interface';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit{

  productArray!: Products[];


  constructor(private router: Router, private productService: ProductService) {  }

  ngOnInit(): void {
    this.getProductsList();
  }

  getProductsList() {
    this.productService.getProduct().subscribe({
      next: (product: any) => {
        this.productArray = product;
      },
      error: (error) => console.error(error),
      complete: () => console.info('complete')
    })
  }
}
