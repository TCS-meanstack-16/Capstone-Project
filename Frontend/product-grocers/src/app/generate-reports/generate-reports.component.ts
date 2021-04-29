import { Component, OnInit } from '@angular/core';
import {OrderService} from '../services/order.service'
import {Order} from '../models/order.model'

@Component({
  selector: 'app-generate-reports',
  templateUrl: './generate-reports.component.html',
  styleUrls: ['./generate-reports.component.css']
})
export class GenerateReportsComponent implements OnInit {
  totalSpent?:any
  ordersPlaced?:any
  orders?:Array<Order>
  option: string | undefined;
  
  constructor(public ordService:OrderService) { }

  ngOnInit(): void {
    this.ordService.retrieveAllOrderDetails().subscribe(result=>this.orders=result);
  }

  GenerateReports(reportRef:any){
    if (reportRef.time == "daily"){
      this.totalSpent = 0
      this.ordersPlaced = 0;
      this.orders?.forEach(order => {
        var orderDate =  new Date(order.date).toISOString().slice(0, 10)
        if (orderDate == reportRef.date){
          this.totalSpent = this.totalSpent + order.total
          this.ordersPlaced += 1
        }
        
      })
    } else if (reportRef.time == "range"){
      this.totalSpent = 0
      this.ordersPlaced = 0;
      
      var startDate = new Date(reportRef.start)
      var endDate = new Date(reportRef.end)
      var date = new Date(startDate)
      var dates = []

      //range of dates
      while (date <= endDate){
        var newDate = date.setDate(date.getDate() + 1);
        date = new Date(newDate);
        dates.push(date)
      }
      
      this.orders?.forEach(order => {
        var orderDate =  new Date(order.date).toISOString().slice(0, 10)
        //check if range of dates are in orders
        if (!!dates.find(date => {return new Date(date).toISOString().slice(0, 10) == orderDate})){
          this.totalSpent = this.totalSpent + order.total
          this.ordersPlaced += 1
        }
      })
    }

    this.totalSpent = "Total spent: " + this.totalSpent
    this.ordersPlaced = "Orders placed: " + this.ordersPlaced
  }
}
