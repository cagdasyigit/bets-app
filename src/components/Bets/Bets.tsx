import React, { useCallback, useContext } from 'react';
import { IData } from '../../providers/CheckoutProvider/types';
import { TableVirtuoso } from 'react-virtuoso';
import { CheckoutContext } from '../../providers/CheckoutProvider/CheckoutProvider';

interface BetsProps {
  bets: IData[];
  handleOnBetClick: (item: IData, selectedRatio: string) => void;
}

const Bets = ({ bets, handleOnBetClick }: BetsProps) => {
  const { list } = useContext(CheckoutContext);
  const selectedRates = list.map(
    (item) => `${item.betData.NID}-${item.selectedRatio}`
  );

  const ratioCell = useCallback(
    (bet: IData, ratio: string) => {
      return (
        <td
          onClick={() => handleOnBetClick(bet, ratio)}
          style={{
            cursor: 'pointer',
            backgroundColor: selectedRates.includes(`${bet.NID}-${ratio}`)
              ? 'yellow'
              : 'transparent',
          }}
        >
          {ratio}
        </td>
      );
    },
    [list]
  );

  return (
    <div className="bets-container">
      <TableVirtuoso
        style={{ height: 'calc(100vh - 60px)' }}
        totalCount={bets.length * 2}
        itemContent={(index: number) => {
          const bet = bets[index];
          return bet ? (
            <>
              {index % 2 === 0 ? (
                <>
                  <th>
                    {bet.D} {bet.DAY} {bet.LN}
                  </th>
                  <th>Yorumlar</th>
                  <th></th>
                  <th>1</th>
                  <th>x</th>
                  <th>2</th>
                  <th>{bet.OCG[5].OC[25].N}</th>
                  <th>{bet.OCG[5].OC[26].N}</th>
                  <th>H1</th>
                  <th>1</th>
                  <th>x</th>
                  <th>2</th>
                  <th>H2</th>
                  <th>{bet.OCG[2].OC[3].N}</th>
                  <th>{bet.OCG[2].OC[4].N}</th>
                  <th>{bet.OCG[2].OC[5].N}</th>
                  <th>Var</th>
                  <th>Yok</th>
                  <th>+99</th>
                </>
              ) : (
                <>
                  <td>
                    {bet.C} {bet.T} {bet.N}
                  </td>
                  <td>Yorumlar</td>
                  <td>{bet.OCG[1].MBS}</td>
                  {ratioCell(bet, bet.OCG[1].OC[0].O)}
                  {ratioCell(bet, bet.OCG[1].OC[1].O)}
                  <td></td>
                  {ratioCell(bet, bet.OCG[5].OC[25].O)}
                  {ratioCell(bet, bet.OCG[5].OC[26].O)}
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{bet.OCG[2].OC[3].O}</td>
                  <td>{bet.OCG[2].OC[4].O}</td>
                  <td>{bet.OCG[2].OC[5].O}</td>
                  <td></td>
                  <td></td>
                  <td>3</td>
                </>
              )}
            </>
          ) : (
            <></>
          );
        }}
      />
    </div>
  );
};

export default Bets;
