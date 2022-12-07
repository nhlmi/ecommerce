export class Product {

    constructor(
        public id: number,
        public name: string,
        public imageUrl: string,
        public price: number,
        //public previousPrice: number,
        public cart: number,
        public isOnSale: boolean = false
    ){}

    /* isOnSale(): boolean{
        return this.price <= this.previousPrice;
    } */
    
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
