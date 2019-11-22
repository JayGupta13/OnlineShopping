import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
storeProduct: any = [];
tempNewCartItems: any = [];
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
    this.productService.getProductFromCart().subscribe(item => {
      this.tempNewCartItems = item;
    });
    this.sortLowToHigh();
    this.sortHighToLow();
    this.priceAfterDiscount();
    this.filterOnMinMaxValue();

    // this.productService.updateSortData(this.storeProduct);
    // this.productService.sortShareData.subscribe(this.storeProduct);
  }

  sortLowToHigh () {
  this.productService.sortShareData.subscribe(item => {
    this.storeProduct = item;
  });
};

sortHighToLow () {
  this.productService.sortHighToLow.subscribe(item => {
    this.storeProduct = item;
  });
};


priceAfterDiscount () {
  this.productService.afterDiscount.subscribe(item => {
    this.storeProduct = item;
  });
};

addProductOnCart(item) {
  let tempArray = [];
  if(this.tempNewCartItems.length) {
    tempArray = this.tempNewCartItems;
  }
  tempArray.push(item);
  this.productService.setProductFromCart(tempArray);
}

filterOnMinMaxValue() {
  this.productService.maxValue.subscribe(item => {
    this.storeProduct = item;
  });
}

}
