
import { Order, ProductsToPick } from "./utils/payload.interface";
import { availablePackages } from './utils/products'


const logprefix = "src/packingProcess.ts";

// Function to run the Products Picking for the warehouse
// Input: List of Orders 
// Output example: { "Red Roses Bouquet": 1, "Birthday cupcake": 5 }

export const runPickingProcess = function (payload: Order[]) {
    try {

        const productsToPick: ProductsToPick = {};

        // Iterate through all the orders
        for (let i = 0; i < payload.length; i++) {

            // Go through each line item in each order
            payload[i].lineItems.forEach((eachLineItem) => {

                let packageName = eachLineItem.productName;
                let productsList = availablePackages[packageName];

                // Go through each individual product for a given package
                for (let [productName, count] of Object.entries(productsList)) {
                    if (!productsToPick[productName]) {
                        // Added count for future flexibility: 
                        // Example: If one valentine box has 2 boxes of chocolate instead of 1
                        productsToPick[productName] = count;  // or productsToPick[productName] = 1;
                    } else {
                        productsToPick[productName] += count; // or productsToPick[productName] += 1;
                    }
                }

            })
        }

        return productsToPick;

    } catch (err) {
        console.log(`Error in ${logprefix} :: `, err);
        return "Error in picking process..."
    }


}
