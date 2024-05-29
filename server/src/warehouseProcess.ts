
import { runPackingProcess } from "./packingProcess";
import { runPickingProcess } from "./pickingProcess";
import { CustomerData, Order, Packages, PackedOrders, ProductsToPick } from "./utils/payload.interface";
import orders from './utils/orders.json';

const logprefix = "src/warehouseProcess.ts";

export const runWarehouseProcesses = function (){
    try{

        // Loading previous day orders from JSON file
        const payload = orders;

        // Warehouse Picking process
            // Gets the list of products with the quantity
        const listOfProductsToPick: ProductsToPick | string = runPickingProcess(payload);

        // Warehouse Packing process
            // Gets the Prepared list of orders to Pack
        const listOfProductsToPack: PackedOrders | string = runPackingProcess(payload);

        // Returns the data for picking and packing operation
        return {
            pickFromWarehouse: listOfProductsToPick,
            packToShip: listOfProductsToPack
        }

    }catch(err){
        console.log(`Error in ${logprefix} :: `, err);
        return "Error in while running warehouse operations"
    }
}

function convertStringToEnum(str: string){
    switch (str) {
        case "Valentines Box":
            return Packages.ValentinesBox;
        case "Birthday Box":
            return Packages.BirthdayBox;
        case "Client Gift Box":
            return Packages.ClientGiftBox;
        default:
            return Packages.ValentinesBox;
    }
}