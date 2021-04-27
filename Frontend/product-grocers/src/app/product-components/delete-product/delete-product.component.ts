import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  deleteMsg?:string;
  constructor(public proService:ProductService) { }

  ngOnInit(): void {
  }
  
  deleteById(id:any){
    console.log("id is "+id);
    this.proService.deleteProductById(id).subscribe((result:string)=> {
        this.deleteMsg=result;
    })
  }

}
