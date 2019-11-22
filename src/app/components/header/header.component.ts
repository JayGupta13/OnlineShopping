import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
count: number = 0;
storeProduct: any = [];
selectedProduct: any = [];

constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.productService.addProductToCart.subscribe(item => { 
        this.count = item.length;
    });
  }
  navigateToCartPage() {
    this.router.navigateByUrl('/cart');
  }


}
