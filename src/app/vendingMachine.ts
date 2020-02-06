import { Quarter, Dime, Half, Dollar, Coin } from "./coin";
import { CocaCola, Product, Initial } from "./product";
import { ProductFactory } from "./productFactory";


//The VendingMachine has to be flexible in terms of number of cells supported.
export enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12,
    extra = 15,
    extraExtra=33
}

export class Cell {

    //When instentiated a cell object, the cell should be tied to a product
    //we can use constructor to make passing of product compulsary
    constructor(public product: Product) {
    }

    //the cell object also has to contain a certain stock of the product, 
    //and an indicator that something is sold, which will be used to trigger the animation
    stock = ko.observable(3);
    sold = ko.observable(false);
}



export class VendingMachine {

    //People can insert multiple coins in the machine,
    //we, we have to keep track of total
    private paid = ko.observable(0);

    //this is not observableArray, coz we dont need that as we will read this array only in startup, 
    //so we are not going to update this array later, hence not making it observableArray.
    acceptedCoins: Coin[] = [new Quarter(), new Dime(), new Half(), new Dollar()];

    //lets add a [cells] field to the vending machine,it is ObservableArray
    cells = ko.observableArray();

    selectedCell = ko.observable(new Cell(new Initial()));

    canPay = ko.pureComputed(() => this.paid() - this.selectedCell().product.price >= 0);

    //I want this to be a write-only property, so I can only use the setter from outside the class    
    set size(givenSize: VendingMachineSize) {

        //first  I'll clear the cell's Observable array to make sure it's empty
        this.cells([]);
        for (let index = 0; index < givenSize; index++) {

            //we might change getProduct method later
            let product = ProductFactory.getProduct();
            //next, I will add a new [cell] to cells array
            this.cells.push(new Cell(product));
        }
    }

    select = (cell: Cell): void => {
        cell.sold(false);
        this.selectedCell(cell);
    }

    pay = (): void => {

        if (this.selectedCell().stock() < 1) {
            alert("sorry, we're out of them!");
            return;
        }
        let currentPayed = this.paid();
        this.paid(Math.round(((currentPayed - this.selectedCell().product.price) * 100)) / 100);
        let currentStock = this.selectedCell().stock();
        this.selectedCell().stock(currentStock - 1);
        this.selectedCell().sold(true);
    }


    //Insert Coin
    acceptCoin = (coin: Quarter): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.value);
    }
}