import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  storeProduct: any = [];
  productInPriceRange: any = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProduct().subscribe(item => {
      this.storeProduct = item;
    });
  }



  updatedMinMaxValue() {
    this.productInPriceRange = []
    let minValue = +(<HTMLInputElement> document.getElementById('priceMin')).value;
    let maxValue = +(<HTMLInputElement>document.getElementById('priceMax')).value;    
    for(let i=0; i<this.storeProduct.length; i++) {
      if(this.storeProduct[i].price >= minValue  && this.storeProduct[i].price <=maxValue) {
       
        this.productInPriceRange.push(this.storeProduct[i]);
        this.productService.getFilterProduct(this.productInPriceRange);
      }
    }
    
  }
  
}
