import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import {Order} from '../../models/order.model' 

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.css']
})
export class CheckoutCartComponent implements OnInit {

  cart = [];
  ordr = {};
  orders?: any
  constructor(public usrService:UserService, public ordService:OrderService, public proService:ProductService ) { }

  ngOnInit(): void {

      var jsonString = sessionStorage.getItem('user1');
      var jsonObject = JSON.parse(jsonString);
      //console.log(jsonString);
      this.cart.push(jsonObject);
      console.log(this.cart[0]);
      this.ordService.retrieveAllOrderDetails().subscribe(result => this.orders = result);

  }

  checkout(){

    this.ordr['total'] = this.cart[0].total;
    this.ordr['userId'] = 2;
    this.ordr['products'] = this.cart[0].products;
    this.ordr['status'] = 'paid'; 
    console.log(this.ordr);
    //sessionStorage.setItem('user1',JSON.stringify(this.ordr));

    this.ordService.storeOrderDetailsInfo({_id: this.orders.length + 1, total: this.ordr['total'], userId: 2, products: this.ordr['products'], date: Date.now()});
    
    this.ordr['products'].forEach(item =>{
      this.proService.reduceQuantity({productId: item.productId, quantity: item.qty}).subscribe((result: string) => {
        console.log(result)
      }); 
    })

    console.log("order length " +this.orders.length)
    
    this.usrService.userOrderPurchase({
      order: {_id: this.orders.length + 1, total: this.ordr['total'], userId: 2, products: this.ordr['products'], date: Date.now()}, //gets order object,
    }).subscribe((result: string) => {
      console.log(result)
    }); 
    //console.log(this.cartItems);
  }

}
