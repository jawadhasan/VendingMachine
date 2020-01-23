import { SodaCategory, ProductCategory, CandyCategory, CandyBarCategory, ChipsCategory } from "./productCategory";

export interface Product {
    name: string;
    price: number;
    category?: ProductCategory;
}

export class Initial implements Product {
    name = "Please select a product";
    price = 0;
}

export class CocaCola implements Product {
    name = "Coca-Cola";
    price = 2.30;
    category = new SodaCategory();
}

export class Fanta implements Product {
    name = "Fanta";
    price = 2.00;
    category = new SodaCategory();
}

export class Sprite implements Product {
    name = "Sprite";
    price = 1.05;
    category = new SodaCategory();
}

export class Peanuts implements Product {
    name = "Penuats";
    price = 2.00;
    category = new ChipsCategory();
}

export class Cashews implements Product {
    name = "Cashews";
    price = 2.00;
    category = new ChipsCategory();
}

export class Plain implements Product {
    name = "Plain";
    price = 1.50;
    category = new ChipsCategory();
}

export class Cheddar implements Product {
    name = "Cheddar";
    price = 2.05;
    category = new ChipsCategory();
}

export class Mints implements Product {
    name = "Mints";
    price = 2.20;
    category = new ChipsCategory();
}

export class Gummies implements Product {
    name = "Gummies";
    price = 1.90;
    category = new CandyCategory();
}

export class Hersey implements Product {
    name = "Hersey's";
    price = 1.30;
    category = new CandyBarCategory();
}

export class MilkyWay implements Product {
    name = "Milky Way";
    price = 1.80;
    category = new CandyBarCategory();
}