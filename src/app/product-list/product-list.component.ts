
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';


@Component({
  selector: 'app-product-list',
  template: `
    <app-product-item [product]="product"
              (quantityChange)="onQuantityChange($event)"
              *ngFor="let product of products"></app-product-item>
              `,
  styles: []
})
export class ProductListComponent implements OnInit {
  public products: Array<Product> = [];

  constructor(){

  }

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        name: "test product - 1",
        imageUrl: "",
        price: 50,
        isOnSale: true,
        cart: 0
      },
      {
        id: 2,
        name: "test product - 2",
        imageUrl: "",
        price: 150,
        isOnSale: false,
        cart: 0
      },
      {
        id: 3,
        name: "test product - 3",
        imageUrl: "",
        price: 250,
        isOnSale: true,
        cart: 0
      }
    ];
  }

  onQuantityChange(change: ProductQuantityChange){
    const product = this.products.find(prod => {
      return change.product.id === prod.id;
    });

    //product?.cart += change.changeInQuantity;
  }



}
