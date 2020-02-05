export abstract class ProductCategory{
    
    protected imgPath = "img/";
    name:string="";
    abstract getImageUrl(): string;
}


export class SodaCategory extends ProductCategory{
    name = "Soda";
    getImageUrl(){
        return this.imgPath + "SodaCan.png";
    }
}

export class ChipsCategory extends ProductCategory{
    name = "Potato chips";
    getImageUrl(){
        return this.imgPath + "Chips.png";
    }
}

export class CandyCategory extends ProductCategory{
    name = "Candy";
    getImageUrl(){
        return this.imgPath + "Candy.png";
    }
}

export class CandyBarCategory extends ProductCategory{
    name = "Candy bar";
    getImageUrl(){
        return this.imgPath + "CandyBar.png";
    }
}