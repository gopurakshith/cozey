import { runPackingProcess } from '../../src/packingProcess';
import { Order } from '../../src/utils/payload.interface';

describe('runPackingProcess', () => {
  // Mock data for testing
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

  // Mock the available packages
  jest.mock('../../src/utils/products.ts', () => ({
    availablePackages: {
      'Birthday Box': {
        'Birthday cupcake': 1,
        '$100 Visa Gift Card':1,
        'Birthday card': 1
      }
    }
  }));

  it('should return packed orders with correct structure', () => {
    const result = runPackingProcess(mockOrders);

    expect(result).toEqual([
      {
        'Order Date': 'Sep 15th 2023',
        'Line Items': {
          'Birthday Box': ['Birthday cupcake', '$100 Visa Gift Card', 'Birthday card']
        },
        'Ships To': {
          'Customer Name': 'John',
          'Address': '100 Dundas Street east'
        }
      }
    ]);
  });

  it('should handle empty input array', () => {
    const result = runPackingProcess([]);

    expect(result).toEqual([]);
  });

  it('should handle errors', () => {

    mockOrders[0].lineItems[0].productName = "Empty Box";
    const result = runPackingProcess(mockOrders);

    expect(result).toBe('Error in packing process...');
  });
});
