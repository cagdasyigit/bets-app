import React, { useContext } from 'react';
import { CheckoutContext } from '../../providers/CheckoutProvider/CheckoutProvider';
import './Checkout.scss';

const Checkout = () => {
  const { list } = useContext(CheckoutContext);
  const sum =
    list.length > 0
      ? list
          .map((item) => parseFloat(item.selectedRatio))
          .reduce((a, b) => a * b)
      : 0;

  return (
    <div className="checkout-container">
      <main>
        <ul>
          {list.map((listItem) => (
            <li key={listItem.betData.NID}>
              <span>{listItem.betData.OCG[1].MBS}&nbsp;</span>
              <span>-</span>
              <span>Kod: {listItem.betData.C}&nbsp;</span>
              <span>Maç: {listItem.betData.N}&nbsp;</span>
              <span>
                <b>Oran: {listItem.selectedRatio}</b>&nbsp;
              </span>
            </li>
          ))}
        </ul>
      </main>
      <footer>Toplam Tutar: {Math.round(sum * 100) / 100} TL</footer>
    </div>
  );
};

export default Checkout;
