import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddFundsComponent } from './add-funds/add-funds.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutCartComponent } from './cart/checkout-cart/checkout-cart.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';
import { EmployeeTicketComponent } from './employee-ticket/employee-ticket.component';
import { EmployeeComponent } from './employee/employee.component';
import { GenerateReportsComponent } from './generate-reports/generate-reports.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OrdersComponent } from './orders/orders.component';
import { AddProductComponent } from './product-components/add-product/add-product.component';
import { DeleteProductComponent } from './product-components/delete-product/delete-product.component';
import { RetrieveProductsComponent } from './product-components/retrieve-products/retrieve-products.component';
import { UpdateProductComponent } from './product-components/update-product/update-product.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { ReportsComponent } from './reports/reports.component';
import { SendRequestComponent } from './send-request/send-request.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { UserComponent } from './user/user.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'login-component'
  },
  {
    path: 'user', component:
      UserComponent,
    children: [
      { path: 'profile-info', component: ProfileInfoComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout-cart', component: CheckoutCartComponent },
      { path: 'add-funds', component: AddFundsComponent },
    ]
  },
  {
    path: 'employee', component:
      EmployeeComponent,
    children: [
      { path: 'send-requests', component: SendRequestComponent },
      { path: 'update-order', component: UpdateOrderComponent },
      { path: 'employee-ticket', component: EmployeeTicketComponent },
      { path: 'edit-employees', component: EditEmployeesComponent },

    ]
  },
  {
    path: 'admin', component:
      AdminComponent,
    children: [
      { path: 'retrieve-products', component: RetrieveProductsComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'delete-product', component: DeleteProductComponent },
      { path: 'update-product', component: UpdateProductComponent },
      { path: 'view-requests', component: ViewRequestsComponent },
      { path: 'delete-employee', component: DeleteEmployeeComponent },
      { path: 'generate-reports', component: GenerateReportsComponent },

      { path: 'add-employee', component: AddEmployeeComponent },
    ]
  },

  { path: 'sign-up', component: SignUpComponent },
  { path: 'raise-ticket', component: RaiseTicketComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'login-page', component: LoginPageComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  /*
  {
    path: 'user', component:
      UserComponent,
    children: [
      { path: 'profile-info', component: ProfileInfoComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'cart', component: CartComponent , outlet: 'sub'},
      { path: 'checkout-cart', component: CheckoutCartComponent },
      { path: 'add-funds', component: AddFundsComponent },
    ]
  }*/

  exports: [RouterModule]
})
export class AppRoutingModule { }
