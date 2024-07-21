import React, { useCallback, useContext, useEffect, useState } from 'react';
import './Bets.scss';
import useFetchData from '../../hooks/useFetchData';
import { CheckoutContext } from '../../providers/CheckoutProvider/CheckoutProvider';
import { IData } from '../../providers/CheckoutProvider/types';
import DataTable from '../DataTable';
import Checkout from '../Checkout';

const Bets = () => {
  const { fetch, loading, error } = useFetchData();
  const { addOrUpdateItem } = useContext(CheckoutContext);
  const [bets, setBets] = useState<IData[]>([]);

  useEffect(() => {
    if (!loading) {
      fetch().then((data) => setBets(data || []));
    }
  }, []);

  const handleOnBetClick = useCallback(
    (betData: IData, selectedRatio: string) => {
      addOrUpdateItem(betData, selectedRatio);
    },
    []
  );

  return error ? (
    <div>Üzgünüz ama bir hata meydana geldi.</div>
  ) : (
    <div className="home-container">
      <DataTable bets={bets} handleOnBetClick={handleOnBetClick} />
      <Checkout />
    </div>
  );
};

export default Bets;
