import { CocaCola, Product, Gummies, Hersey, MilkyWay, Fanta, Sprite, Peanuts, Cashews, Plain, Cheddar, Mints } from "./product";

export class ProductFactory{

    static getProduct(): Product{
        
        //you can also place logic to fetch products from a server, for instance.

        let random = Math.floor(Math.random() * 15);
        
        switch(random){
            case 0 : return new CocaCola();
            case 1: return new Fanta();
            case 2: return new Sprite();
            case 3: return new Peanuts();
            case 4: return new Cashews();
            case 5: return new Plain();
            case 6: return new Cheddar();
            case 7: return new Mints();
            case 8: return new Gummies();
            case 9: return new Hersey();
            case 10: return new MilkyWay();
            case 11: return new Cheddar();
            case 12: return new Mints();
            case 13: return new Gummies();
            case 14: return new Hersey();
            case 15: return new MilkyWay();
            default: return new CocaCola();
        }
    }
}