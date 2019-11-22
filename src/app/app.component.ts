import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularPractise_Project';
  searchProduct: any;
  @Output() sendInputValue = new EventEmitter();
  
ngOnInit() {
  }
  getSearchValues(value) {
    this.searchProduct = value;
    this.sendInputValue.emit(this.searchProduct);
    console.log('Product are ' + value + ' and ' + this.searchProduct);
    }
}
