import { Order, PackedLineItems, PackedOrders } from "./utils/payload.interface";
import { availablePackages } from "./utils/products";

const logprefix = "src/packingProcess.ts";

// Function to run the Products Picking for the warehouse
// Input: List of Orders 
/*  Output Example

    [
        {
            "Order Date": "Sep 15th 2023",
                "Line Items": {
                    "Birthday Box": ["Birthday cupcake", "$100 Visa Gift Card", "Birthday card"]
                },
                "Ships To":{
                    "Customer Name": John,
                    "Address": 100 Dundas Street east
                }
        }
    ]

*/

export const runPackingProcess = function(payload: Order[]){
    try{

        const packedOrders: PackedOrders = [];

        // Iterate through all the orders
        for (let i = 0; i < payload.length; i++) {

            const lineItems: PackedLineItems = {};

            payload[i].lineItems.forEach((eachLineItem) => {

                let packageName = eachLineItem.productName;
                
                let productsList = availablePackages[packageName];
                lineItems[packageName] = [];
                for(const productName of Object.keys(productsList)){
                    console.log("Product Name : ", productName);
                    
                    lineItems[packageName].push(productName);
                }
                console.log("*********")

            });

            packedOrders.push({
                "Order Date": payload[i].orderDate,
                "Line Items": lineItems,
                "Ships To":{
                    "Customer Name": payload[i].customerName,
                    "Address": payload[i].shippingAddress
                }
            })

        }

        return packedOrders;

    }catch(err){
        console.log(`Error in ${logprefix} :: `, err);
        return "Error in packing process..."
    }
}