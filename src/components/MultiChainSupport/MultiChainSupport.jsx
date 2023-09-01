import React from 'react'
import style from './MultiChainSupport.module.scss'
import TitleSquares from '../UI/TitleSquares/TitleSquares';

import ETH from '/assets/media/icons/crypto/ETH.svg';
import BNB from '/assets/media/icons/crypto/BNB.svg';
import SOL from '/assets/media/icons/crypto/SOL.svg';
import EOS from '/assets/media/icons/crypto/EOS.svg';
import XTZ from '/assets/media/icons/crypto/XTZ.svg';
import TRX from '/assets/media/icons/crypto/TRX.svg';
import ADA from '/assets/media/icons/crypto/ADA.svg';
import XRP from '/assets/media/icons/crypto/XRP.svg';
import DASH from '/assets/media/icons/crypto/DASH.svg';
import XMR from '/assets/media/icons/crypto/XMR.svg';
import LTC from '/assets/media/icons/crypto/LTC.svg';
import FLOW from '/assets/media/icons/crypto/FLOW.svg';
import ATOM from '/assets/media/icons/crypto/ATOM.svg';
import NEAR from '/assets/media/icons/crypto/NEAR.svg';
import DOT from '/assets/media/icons/crypto/DOT.svg';
import ALGO from '/assets/media/icons/crypto/ALGO.svg';
import XLM from '/assets/media/icons/crypto/XLM.svg';


const MultiChainSupport = () => {
  const coins = [
    {name: 'Ethereum', shortName: 'ETH', img: ETH, link: 'https://ethereum.org/' },
    {name: 'BNB Smart Chain', shortName: 'BNB', img: BNB, link: 'https://www.bnbchain.org/' },
    {name: 'Solana', shortName: 'SOL', img: SOL, link: 'https://solana.com/' },
    {name: 'EOS', shortName: 'EOS', img: EOS, link: 'https://eos.io/' },
    {name: 'Tezos', shortName: 'XTZ', img: XTZ, link: 'https://tezos.com/' },
    {name: 'Tron', shortName: 'TRX', img: TRX, link: 'https://tron.network/' },
    {name: 'Cardano', shortName: 'ADA', img: ADA, link: 'https://cardano.org/' },
    {name: 'Ripple', shortName: 'XRP', img: XRP, link: 'https://ripple.com/' },
    {name: 'Dash', shortName: 'DASH', img: DASH, link: 'https://www.dash.org/' },
    {name: 'Monero', shortName: 'XMR', img: XMR, link: 'https://www.getmonero.org/' },
    {name: 'Litecoin', shortName: 'LTC', img: LTC, link: 'https://litecoin.org/' },
    {name: 'Flow', shortName: 'FLOW', img: FLOW, link: 'https://www.onflow.org/' },
    {name: 'Cosmos', shortName: 'ATOM', img: ATOM, link: 'https://cosmos.network/' },
    {name: 'Near', shortName: 'NEAR', img: NEAR, link: 'https://near.org/' },
    {name: 'Polkadot', shortName: 'DOT', img: DOT, link: 'https://polkadot.network/' },
    {name: 'Algorand', shortName: 'ALGO', img: ALGO, link: 'https://www.algorand.com/' },
    {name: 'Stellar', shortName: 'XLM', img: XLM, link: 'https://www.stellar.org/' },
];

const groupedCoins = [];
let currentGroup = [];
let isEvenGroup = false;

coins.forEach((coin) => {
  currentGroup.push(coin);

  if (isEvenGroup ? currentGroup.length === 5 : currentGroup.length === 6) {
    groupedCoins.push([...currentGroup]);
    currentGroup = [];
    isEvenGroup = !isEvenGroup;
  }
});

// Добавляем оставшиеся элементы в последний подмассив, если есть
if (currentGroup.length > 0) {
  groupedCoins.push([...currentGroup]);
}

return (
  <div className={style.multiChainSupport}>
    <TitleSquares color='rgba(0, 0, 0, 1)' text='MULTI-CHAIN SUPPORT' className={style.ts}/>
    <div className={style.multiChainSupport_coins}>
      {groupedCoins.map((coinrow, rowIndex) => (
        <div key={`coinrow${rowIndex}`} className={style.multiChainSupport_coins_coinrow}>
          {coinrow.map((coin) => (
            <div key={coin.name} className={style.multiChainSupport_coins_coinrow_coin}>
              <img src={coin.img} alt={coin.shortName} />
              <h4>{coin.name}</h4>
              <a href={coin.link}>{coin.link}</a>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);
};

export default MultiChainSupport;