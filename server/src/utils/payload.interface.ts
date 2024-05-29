
// List of Available packages
export enum Packages {
    ValentinesBox = "Valentines Box",
    BirthdayBox = "Birthday Box",
    ClientGiftBox = "Client Gift Box"
}

export const AvailablePackages = {
    ValentinesBox : "Valentines Box",
    BirthdayBox : "Birthday Box",
    ClientGiftBox : "Client Gift Box"
}

// List of Available Products
export enum Products {
    RedRosesBouquet = "Red Roses Bouquet",
    Boxofchocolates = "Box of chocolates",
    LoveCard = "Love card",
    WomensPerfume = "Women's perfume",
    BirthdayCupcake = "Birthday cupcake",
    VisaGiftCard100 = "$100 Visa Gift Card",
    BirthdayCard = "Birthday card",
    BottleofWine = "Bottle of wine",
    FruitBasket = "Fruit basket",
    Pen = "Pen",
}

export type ListOfProducts = {
    [key in Products]?: number;
}

export type ListOfPackages = {
    [key in Packages]?: ListOfProducts
};

export interface LineItems {
    "lineItemId": number,
    "productId": string,
    "productName": string,
    "price": number
}

export interface Order {
    "orderId": number,
    "orderTotal": number,
    "orderDate": string,
    "shippingAddress": string,
    "customerName": string,
    "customerEmail": string,
    "lineItems": LineItems[]
}

export interface CustomerData {
    customerName: string;
    customerAddress: string;
    selectedPackages: Packages[];
}

export type ProductsToPick = {
    [key: string]: number
}

export type PackedOrder = {
    "Order Date": string,
    "Line Items": {
        [key: string]: string[]
    },
    "Ships To":{
        "Customer Name": string,
        "Address": string
    }
}

export type PackedLineItems = {
    [key: string]: string[]
}

export type PackedOrders = PackedOrder[];