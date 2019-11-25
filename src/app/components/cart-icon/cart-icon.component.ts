import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent implements OnInit {
  storeProduct: any = [];
  counter: number = 1;
  selectedProduct: any = [];
  actualAmount = 0;
  discountAmount = 0;
  totalAmount = 0;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.addProductToCart();
    this.calculateFinalAmount();
  }

  addProductToCart() {    
    this.productService.addProductToCart.subscribe(item => {
      for(var i = 0; i<item.length; i++) {
        if(item[i].counter == undefined) {
          item[i].counter = 1;
        }
      }
      this.selectedProduct = item;
    });

  }
  removeProduct(product) {
    this.selectedProduct.splice(this.selectedProduct.indexOf(product), 1);
    this.calculateFinalAmount();
  }
  minusOne(count, i) {
    if(count > 1) {
      this.selectedProduct[i].counter = count - 1;
    }
    this.calculateFinalAmount();
  }
  addOne(count, i) { 
    if(count == undefined) {
      count = 1;
    }
    this.selectedProduct[i].counter = count + 1;
    this.calculateFinalAmount();
  }

  calculateFinalAmount() {
    let selectedItem = this.selectedProduct;
    this.actualAmount = 0;
    this.discountAmount = 0;
    this.totalAmount = 0;

    for (let j = 0; j < selectedItem.length; j++) {
      var item = selectedItem[j];
      this.actualAmount = this.actualAmount + Math.floor(item.counter*(item.price*100)/(100-item.discount)); // Actual Price calculation
      // price after discount
      this.discountAmount = this.discountAmount + (item.counter*(Math.floor(item.counter*(item.price*100)/(100-item.discount))*item.discount/100));
      this.totalAmount = this.totalAmount + (item.counter*item.price); // Total Amount Payable
    }


  }
} 
