export type Order = {
    [itemName: string]: number;
};

export type LineItems = {
    [boxName: string]: string[];
};

export type Shipment = {
    "Order Date": string;
    "Line Items": LineItems;
    "Ships To": {
        "Customer Name": string;
        "Address": string;
    };
};

export type ShipmentList = Shipment[];

export type Inventory = {
    pickFromWarehouse: Order;
    packToShip: ShipmentList;
};
