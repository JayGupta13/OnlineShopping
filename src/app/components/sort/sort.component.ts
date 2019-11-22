import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  sortedProducts: any = [];
  sortedHighToLowPrice: any = [];
  afterDiscountPrice: any = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProduct().subscribe(item => {      
      this.sortedProducts = item;
      this.sortedHighToLowPrice = item;
      this.afterDiscountPrice = item;
    });
    
  }

  priceLowToHigh() {
  this.sortedProducts = this.sortedProducts.sort((a: any, b: any) => {
        if (a.price < b.price) {
            return -1;
        }
    });
    
    this.productService.updateSortData(this.sortedProducts);
    console.log('Are' + this.sortedProducts)
}


    priceHighToLow () {
      this.sortedHighToLowPrice = this.sortedHighToLowPrice.sort((a: any, b: any) => {
        return b.price-a.price
    });

    this.productService.updateSortHighToLow(this.sortedHighToLowPrice);
    console.log('Are' + this.sortedHighToLowPrice)
    };

    discountPrice() {
      this.afterDiscountPrice = this.afterDiscountPrice.sort((a: any, b: any) => {
        if (a.discount < b.discount) {
            return -1;
        }
    //     if (a.discount > b.discount) {
    //       return 1;
    //   }
    //   if (a.discount == b.discount) {
    //     return 0;
    // }
    });
    
    this.productService.updateDiscount(this.afterDiscountPrice);
    console.log('Are' + this.afterDiscountPrice)
}
    }

