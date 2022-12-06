export class Product {

    constructor(
        public name: string,
        public price: number,
        public previousPrice: number,
        public cart: number
    ){}

    isOnSale(): boolean{
        return this.price <= this.previousPrice;
    }
    
    isAdd(){
        return this.cart -= 1;
    }

    isMinus(){
        return this.cart += 1;
    }

    isZero(): boolean{
        return this.cart == 0;
    }
}
