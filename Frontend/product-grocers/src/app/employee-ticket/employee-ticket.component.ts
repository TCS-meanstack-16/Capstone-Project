import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-employee-ticket',
  templateUrl: './employee-ticket.component.html',
  styleUrls: ['./employee-ticket.component.css']
})
export class EmployeeTicketComponent implements OnInit {

  tickets:any;

  constructor(public ticketSer:TicketService) { }

  ngOnInit(): void {
  }

  unlockAccount(ticketID: any) {
    this.ticketSer.resolveTicket(ticketID);
  }

  showTicket() {
    this.tickets = this.ticketSer.getTickets();
  }
}
