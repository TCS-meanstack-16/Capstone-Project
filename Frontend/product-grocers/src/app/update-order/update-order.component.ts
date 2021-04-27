import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { UserService } from '../services/user.service';
import {Order} from '../models/order.model'

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {
  updateMsg?:string;
  orders?:Array<Order>
  userId = 0;
  total = 0;

  //Use order and user services
  constructor(public ordService:OrderService, public usrService:UserService) { }

  ngOnInit(): void {
    this.ordService.retrieveAllOrderDetails().subscribe(result=>this.orders=result);
  }

  //Updates order status and refunds total if cancelled (Still need to add reason to user order)
  updateOrder(orderRef:any){
    console.log(orderRef);
    
    //If order is set to cancelled, the userId and total amount from order is retrieved
    if (orderRef.status == "cancelled"){
     this.userId = Number(this.orders?.find(x => x._id === Number(orderRef.pid))?.userId)
     this.total = Number(this.orders?.find(x => x._id === Number(orderRef.pid))?.total)
      
     //We increment the funds by passing the userId and total to the backend where the total is added to the user's funds
      this.usrService.updateUserFundsById({userId: this.userId, total: this.total}).subscribe((result:string)=> {
        console.log(result)
      });
      console.log("A total of $"+this.total+" has been refunded to userId " + this.userId)
    }
    //The order status is updated
    this.ordService.updateOrder(orderRef).subscribe((result:string)=> {
      this.updateMsg=result;
    });
  }

}
