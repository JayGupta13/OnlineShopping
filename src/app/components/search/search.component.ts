import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    
  }

  onKey(event) {
    this.productService.updateData(event.target.value); //on Key Up search Product
  }
}
