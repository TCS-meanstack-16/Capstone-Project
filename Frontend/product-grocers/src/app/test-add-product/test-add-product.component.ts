import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-test-add-product',
  templateUrl: './test-add-product.component.html',
  styleUrls: ['./test-add-product.component.css']
})
export class TestAddProductComponent implements OnInit {

  constructor(public proService:ProductService) { }

  ngOnInit(): void {
  }

  storeProduct(productRef:any){
    console.log(productRef);
    this.proService.storeProductDetailsInfo(productRef);
  }

}
