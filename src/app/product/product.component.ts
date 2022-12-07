
import { Component, EventEmitter, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  //encapsulation: ViewEncapsulation.None
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() public product!: Product;
  @Output() private quantityChange: EventEmitter<ProductQuantityChange> = new EventEmitter();


  constructor(){}

  increment(){
    this.quantityChange.emit({product: this.product, changeInQuantity: 1});
  }

  decrement(){
    if(this.product.cart > 0){
      this.quantityChange.emit({product: this.product, changeInQuantity: -1});
    }
  }


  //public quantities: Array<number> = [];

  //ngOnInit(): void{

    //this.product = new Product("book", 10, 20, 3);

   /*  this.quantities=[
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
      ,11, 12, 13, 14, 15, 16, 17, 18, 19, 20
    ];
 */
    /* this.name = 'book';
    this.price = 78;
    this.isOnSale = this.price <= this.previousPrice;
    this.quantity = 0; */
  //}

  /* addToCart(){
    this.quantity -= 1;
  }

  minusFromCart(){
    this.quantity += 1;
  } */

}
