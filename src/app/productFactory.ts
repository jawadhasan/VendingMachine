import { CocaCola } from "./product";

export class ProductFactory{

    static getProduct(): CocaCola{

        //TODO: we will agument this later to return a random product.
        //you can also place logic to fetch products from a server, for instance.
        return new CocaCola();
    }
}