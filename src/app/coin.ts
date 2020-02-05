export abstract class Coin {

    value: number;

    constructor(value: number){
        this.value = value;
    }

    abstract getImageUrl():string;
}

export class Quarter extends Coin{ 

    constructor(){
        super(.25);
    }

    getImageUrl (): string {
        return "img/Quarter.png";
    }
}

export class Dime extends Coin {   

    constructor(){
        super(.10);
    }
    getImageUrl (): string {
        return "img/Dime.png";
    }
}

export class Half extends Coin{
    constructor(){
        super(.5);
    }
    getImageUrl(): string {
        return "img/Half.png";
    }
}

export class Dollar extends Coin {

    constructor(){
        super(1);
    }
    getImageUrl(): string {
        return "img/Dollar.jpg";
    }
}