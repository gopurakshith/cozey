import React from 'react';
import { Inventory } from '@/common/interfaces/APIData';
import styles from './OrderData.module.css';

interface Props {
  order: Inventory; 
}

const OrderDetails: React.FC<Props> = ({ order }) => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.title}>Pick From Warehouse:</h2>
        <ul className={styles.sublist}>
          {Object.entries(order.pickFromWarehouse).map(([item, quantity]) => (
            <li key={item} className={styles['sublist-item']}>
              {item}: {quantity}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>Pack To Ship:</h2>
        <div>
          {order.packToShip.map((shipment, index) => (
            <div key={index} className={styles['shipment-container']}>
              <h3 className={styles['shipment-title']}>Shipment {index + 1}</h3>
              <p className={styles['shipment-details']}>Order Date: {shipment["Order Date"]}</p>
              <p>Ships To:</p>
              <ul className={styles.sublist}>
                <li className={styles['sublist-item']}><span>&#8226;</span>Customer Name: {shipment["Ships To"]["Customer Name"]}</li>
                <li className={styles['sublist-item']}><span>&#8226;</span>Address: {shipment["Ships To"]["Address"]}</li>
              </ul>
              <p>Line Items:</p>
              <ul className={styles.sublist}>
                {Object.entries(shipment["Line Items"]).map(([boxType, items], subIndex) => (
                  <li key={boxType} className={styles['sublist-item']}>
                    <span>&#8226;</span>{boxType}:
                    <ul className={styles.subsublist}>
                      {items.map((item, subSubIndex) => (
                        <li key={subSubIndex} className={styles['subsublist-item']}>
                          <span>{subIndex + 1}.{subSubIndex + 1}</span>{item}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
