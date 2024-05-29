import { runPickingProcess } from '../../src/pickingProcess';
import { Order } from '../../src/utils/payload.interface';

describe('runPickingProcess', () => {
  // Test case for empty payload
  test('returns an empty object when provided an empty payload', () => {
    const result = runPickingProcess([]);
    expect(result).toEqual({});
  });

  // Test case for a single order with multiple line items
  test('correctly picks products for a single order with multiple line items', () => {
    const mockOrders: Order[] = [
        {
            orderId: 1021,
            orderTotal: 50,
            orderDate: "Sep 15th 2023",
            customerName: "John",
            customerEmail: "Jane@gmail.com",
            shippingAddress: "100 Dundas Street east",
            lineItems: [
                { 
                    lineItemId: 1,
                    productId: "101",
                    productName: "Birthday Box" ,
                    price: 50
                }
            ]
        }
      ];
    const result = runPickingProcess(mockOrders);
    expect(result).toEqual({ 
        'Birthday cupcake': 1,
        '$100 Visa Gift Card': 1,
        'Birthday card': 1
    });
  });

  // Test case for multiple orders with multiple line items
  test('correctly picks products for multiple orders with multiple line items', () => {
    const mockOrders: Order[] = [
        {
            orderId: 1021,
            orderTotal: 50,
            orderDate: "Sep 15th 2023",
            customerName: "John",
            customerEmail: "Jane@gmail.com",
            shippingAddress: "100 Dundas Street east",
            lineItems: [
                {
                    "lineItemId": 1,
                    "productId": "101",
                    "productName": "Valentines Box",
                    "price": 50
                },
                {
                    "lineItemId": 2,
                    "productId": "102",
                    "productName": "Birthday Box",
                    "price": 40
                }
            ]
        }
      ];
    const result = runPickingProcess(mockOrders);
    expect(result).toEqual({ 
        'Red Roses Bouquet': 1, 
        'Box of chocolates': 1,
        'Love card': 1,
        "Women's perfume": 1,
        'Birthday cupcake': 1,
        '$100 Visa Gift Card': 1,
        'Birthday card': 1
    });
  });

  test('should handle errors', () => {
    const mockOrders: Order[] = [
        {
            orderId: 1021,
            orderTotal: 50,
            orderDate: "Sep 15th 2023",
            customerName: "John",
            customerEmail: "Jane@gmail.com",
            shippingAddress: "100 Dundas Street east",
            lineItems: [
                { 
                    lineItemId: 1,
                    productId: "101",
                    productName: "Empty Box" ,
                    price: 50
                }
            ]
        }
      ];
    const result = runPickingProcess(mockOrders);
    expect(result).toEqual('Error in picking process...');
  });

});
