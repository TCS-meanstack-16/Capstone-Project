import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-test-add-product',
  templateUrl: './test-add-product.component.html',
  styleUrls: ['./test-add-product.component.css']
})
export class TestAddProductComponent implements OnInit {
  deleteMsg?:string;
  updateMsg?:string;
  constructor(public proService:ProductService) { }

  ngOnInit(): void {
  }

  storeProduct(productRef:any){
    console.log(productRef);
    this.proService.storeProductDetailsInfo(productRef);
  }

  deleteById(id:any){
    console.log("id is "+id);
    this.proService.deleteProductById(id).subscribe((result:string)=> {
        this.deleteMsg=result;
    })
  }
  updatePrice(productRef:any){
    console.log(productRef);
    this.proService.updateProduct(productRef).subscribe((result:string)=> {
      this.updateMsg=result;
    });
  }

}
