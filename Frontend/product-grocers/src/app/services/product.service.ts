import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(public http: HttpClient) { }
  //post method 1st parameter url and 2nd parameter json data. 
  storeProductDetailsInfo(productRef: any) {
    this.http.post("http://localhost:9090/product/storeProductDetails", productRef, { responseType: "text" }).
      subscribe(result => console.log(result), error => console.log(error));
  }
  retrieveAllProductDetails(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:9090/product/allProductDetails")
  }

  retrieveProductById(id: any): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:9090/product/retrieveProductById/" + id)
  }

  //by default all HttpClient method return type is observable with json format data. 
  deleteProductById(id: any): any {
    return this.http.delete("http://localhost:9090/product/deleteProductById/" + id, { responseType: 'text' });
  }

  updateProduct(productRef: any): any {
    return this.http.put("http://localhost:9090/product/updateProduct", productRef, { responseType: 'text' })
  }

  reduceQuantity(productRef: any): any {
    return this.http.put("http://localhost:9090/product/reduceQuantity", productRef, { responseType: 'text' })
  }
  
}
