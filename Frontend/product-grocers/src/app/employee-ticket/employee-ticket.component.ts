import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';

@Component({
  selector: 'app-employee-ticket',
  templateUrl: './employee-ticket.component.html',
  styleUrls: ['./employee-ticket.component.css']
})
export class EmployeeTicketComponent implements OnInit {

  constructor(public ticketSer:TicketService) { }

  ngOnInit(): void {
  }

  unlockAccount(ticketID:any){
    this.ticketSer.resolveTicket(ticketID);
  }

  showTicket():Observable<Ticket[]>{
    return this.ticketSer.getTickets();
  }
}
