import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
storeProduct: any = [];
productAddToCart: any = [];
searchProduct: any;
  constructor( private productService: ProductService) { 
    this.productService.shareData.subscribe(item => {
      this.searchProduct = item;
    });
    
  }

  ngOnInit() {
    this.productService.getProduct().subscribe(item => {      
      this.storeProduct = item;
    });
    this.sortLowToHigh();
    this.sortHighToLow();
    this.priceAfterDiscount();
    this.filterOnMinMaxValue();
  }

  sortLowToHigh () {
  this.productService.sortShareData.subscribe(item => { 
    this.storeProduct = item; // sort product low to high price
  });
};

sortHighToLow () {
  this.productService.sortHighToLow.subscribe(item => {
    this.storeProduct = item; // sort product high to low price
  });
};

priceAfterDiscount () {
  this.productService.afterDiscount.subscribe(item => {
    this.storeProduct = item; // show discount price
  });
};

addProductOnCart(item) {
  this.productAddToCart.push(item); // getting product and updating to service
  this.productService.getProductFromCart(this.productAddToCart);
}

filterOnMinMaxValue() {
  this.productService.maxValue.subscribe(item => {
    this.storeProduct = item; // filter product on price range
  });
}

}
