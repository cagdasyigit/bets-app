import React, { useState } from 'react';
import { createContext } from 'react';
import { DataProviderProps, IData, IDataContext, IListItem } from './types';

export const CheckoutContext = createContext<IDataContext>({
  list: [],
  addOrUpdateItem: (betData: IData, selectedRatio: string): void => {
    throw new Error(
      `"addOrUpdateItem" function has not implemented. Item: ${betData}, Selected Ratio: ${selectedRatio}`
    );
  },
});

const CheckoutProvider = (props: DataProviderProps) => {
  const [list, setList] = useState<IListItem[]>([]);

  const addOrUpdateItem = (betData: IData, selectedRatio: string) => {
    setList((prev) => {
      const index = prev.findIndex(
        (listItem) => listItem.betData.NID === betData.NID
      );

      // Existing item
      if (index !== -1) {
        const newArr = [...prev];

        if (
          selectedRatio === prev[index]?.selectedRatio &&
          betData.NID === prev[index].betData.NID
        ) {
          // Remove item
          newArr.splice(index, 1);
        } else if (betData.NID === prev[index]?.betData.NID) {
          // Update item
          newArr[index].selectedRatio = selectedRatio;
        }

        return newArr;
      }

      // Add item
      return [...prev, { betData: betData, selectedRatio }];
    });
  };

  return (
    <CheckoutContext.Provider value={{ list, addOrUpdateItem }}>
      {props.children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;
