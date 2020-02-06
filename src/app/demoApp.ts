import { VendingMachine, VendingMachineSize } from "./vendingMachine";

export class DemoApp{

    appName: string='';
    appVersion: string='';    
    machine: VendingMachine = new VendingMachine();

    constructor(){
        this.machine.size = VendingMachineSize.extraExtra;
       
    }
  
}