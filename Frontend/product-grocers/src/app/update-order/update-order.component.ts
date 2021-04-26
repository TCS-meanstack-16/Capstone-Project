import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import {Order} from '../models/order.model'

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {
  updateMsg?:string;
  orders?:Array<Order>
  constructor(public ordService:OrderService) { }

  ngOnInit(): void {
    this.ordService.retrieveAllOrderDetails().subscribe(result=>this.orders=result);
  }
  updateOrder(orderRef:any){
    console.log(orderRef);
    this.ordService.updateOrder(orderRef).subscribe((result:string)=> {
      this.updateMsg=result;
    });
  }

}
