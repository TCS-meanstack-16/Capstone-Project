import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.css']
})
export class CheckoutCartComponent implements OnInit {

  cart = [];
  ordr = {};
  constructor(public ordrSrvc: OrderService) { }

  ngOnInit(): void {

      var jsonString = sessionStorage.getItem('user1');
      var jsonObject = JSON.parse(jsonString);
      //console.log(jsonString);
      this.cart.push(jsonObject);
      console.log(this.cart[0]);

  }

  checkout(){

    this.ordr['total'] = this.cart[0].total;
    this.ordr['userId'] = 123;
    this.ordr['products'] = this.cart[0].products;
    this.ordr['status'] = 'paid'; 
    console.log(this.ordr);
    //sessionStorage.setItem('user1',JSON.stringify(this.ordr));

    this.ordrSrvc.storeOrderDetailsInfo(this.ordr);
    
    
    //console.log(this.cartItems);
  }

}
