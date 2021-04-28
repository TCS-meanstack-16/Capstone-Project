import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})

export class CartListComponent implements OnInit {

  cartItems = [
    // {id: 1, productId: 1, productName: "test1", qty: 4, price:100},
    // {id: 2, productId: 3, productName: "test3", qty: 2, price:200},
    // {id: 3, productId: 2, productName: "test2", qty: 5, price:1200},
    // {id: 4, productId: 4, productName: "test4", qty: 7, price:4300},
  ];

  //const cartItems: Array<any>[] = [];
  //val: Product[];
  

  cartTotal = 0;

  constructor(private msgSrvc: MessengerService) { }

  ngOnInit(): void {
    //reading from the observable
    this.msgSrvc.getMsg().subscribe((product: Products) =>{ //BUG: product is of type unknown and is not getting typecasted to Class type Product
      this.addProductToCart(product);
    },error=>console.log(error));

    // this.msgSrvc.getDelMsg().subscribe((product: Products)=>{
    //   this.removeProductFromCart(product);
    // });
  }

  addProductToCart(product: Products){
    console.log(product);

    //initialize product exists
    let prodExists = false;

    //iterate to check if product exists
    for(let i in this.cartItems){
      //if exists, increment quantity
      if(this.cartItems[i].productId === product._id){
        console.log(i);
        this.cartItems[i].qty+=1;
        prodExists = true;
        break;
      }
    }

    //if no product found, add new entry to cart
    if(!prodExists){
      this.pushToCart(product);
    }

    this.cartTotal = 0;
    this.cartItems.forEach(item=>{
      this.cartTotal+=(item.qty*item.price);
    });
  }

  // removeProductFromCart(product: Products){
  //   //initialize product exists
  //   let prodExists = true;

  //   //iterate to check if product exists
  //   for(let i in this.cartItems){
  //     //if exists, increment quantity
  //     if(this.cartItems[i].productId === product._id){
  //       if(this.cartItems[i].qty>1){
  //         this.cartItems[i].qty-=1;
  //         break;
  //       }
  //       else{
  //         prodExists = false;
  //         this.cartItems.splice(Number(i),1);
  //       }
        
  //     }
  //   }
  // }

  pushToCart(product: Products){
    this.cartItems.push({
      //id: product.id,
      productId: product._id,
      productName: product.name,
      qty: 1,
      price: product.price
    });
  }

  checkout(){
    //sessionStorage.setItem('user',this.cartItems);
    var cartItemsJsonString = JSON.stringify(this.cartItems);
    console.log(cartItemsJsonString);
    sessionStorage.setItem('user', cartItemsJsonString);
    console.log(sessionStorage.getItem('user'));
    //console.log(this.cartItems);
  }
}
