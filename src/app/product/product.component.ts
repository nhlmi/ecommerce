import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public name!: string;
  public price!: number;
  public previousPrice!: number;
  //public image!: 
  public isOnSale!: boolean;
  public quantity!: number;
  public add!: boolean;
  public minus!: boolean;

  ngOnInit(): void{
    this.name = 'book';
    this.price = 78;
    this.isOnSale = this.price <= this.previousPrice;
    this.quantity = 0;
  }

  addToCart(){
    this.quantity -= 1;
  }

  minusFromCart(){
    this.quantity += 1;
  }

}
