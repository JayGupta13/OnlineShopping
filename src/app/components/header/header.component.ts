import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
starImage = "./assets/starPic.jpg"
counter: number = 0;
storeProduct: any = [];
selectedProduct: any = [];

constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.productService.addProductToCart.subscribe(item => { 
      this.counter = item.length;
  });
  }
  navigateToCartPage() {
    this.router.navigateByUrl('/cart');
  }
}
