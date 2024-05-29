
// List of products sold by Cozey

import { Packages, ListOfPackages, Products, AvailablePackages } from "./payload.interface";

export const availablePackages = {
    [AvailablePackages.ValentinesBox] : {
        // Product and Quantity for each line Item
        // Change the quantity if the each package has multiples of the same Item - Future use
        [Products.RedRosesBouquet]: 1,
        [Products.Boxofchocolates]: 1,
        [Products.LoveCard]: 1,
        [Products.WomensPerfume]: 1,
    },
    [AvailablePackages.BirthdayBox]: {
        [Products.BirthdayCupcake]: 1,
        [Products.VisaGiftCard100]: 1,
        [Products.BirthdayCard]: 1,
    },
    [AvailablePackages.ClientGiftBox]: {
        [Products.BottleofWine]: 1,
        [Products.FruitBasket]: 1,
        [Products.Pen]: 1,
    }

}