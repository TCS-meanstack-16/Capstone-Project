import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleCompComponent } from './example-comp/example-comp.component';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
//import { EmployeeTicketComponent } from './employee-ticket/employee-ticket.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { EditProjectsComponent } from './edit-projects/edit-projects.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';
import { ReportsComponent } from './reports/reports.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { SendRequestComponent } from './send-request/send-request.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdateProductComponent } from './product-components/update-product/update-product.component';
import { DeleteProductComponent } from './product-components/delete-product/delete-product.component';
import { AddProductComponent } from './product-components/add-product/add-product.component';
import { RetrieveProductsComponent } from './product-components/retrieve-products/retrieve-products.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleCompComponent,
    //EmployeeTicketComponent,
    LoginPageComponent,
    RaiseTicketComponent,
    EditProjectsComponent,
    ViewRequestsComponent,
    EditEmployeesComponent,
    ReportsComponent,
    CartComponent,
    OrdersComponent,
    ProfileInfoComponent,
    SendRequestComponent,
    UpdateOrderComponent,
    ViewTicketsComponent,
    SignUpComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    AddProductComponent,
    RetrieveProductsComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'retrieve-products', component: RetrieveProductsComponent},
      {path: 'add-product', component: AddProductComponent},
      {path: 'delete-product', component: DeleteProductComponent},
      {path: 'update-product', component: UpdateProductComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: 'view-tickets', component: ViewTicketsComponent},
      {path: 'employee-ticket', component: EmployeeTicketComponent},
      {path: 'raise-ticket', component: RaiseTicketComponent},
      {path: 'view-requests', component: ViewRequestsComponent},
      {path: 'send-requests', component: SendRequestComponent},
      {path: 'profile-info', component: ProfileInfoComponent},
      {path: 'orders', component: OrdersComponent},
      {path: 'cart', component: CartComponent},
      {path: 'reports', component: ReportsComponent},
      {path: 'edit-employees', component: EditEmployeesComponent},
      {path: 'login-page', component: LoginPageComponent},
      {path: 'update-order', component: UpdateOrderComponent}
    ]),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
