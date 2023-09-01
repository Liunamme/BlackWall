import React, { useState } from 'react'
import style from './Solutions.module.scss'
import Glitch from './Glitch/Glitch';
import TitleSquares from '../UI/TitleSquares/TitleSquares'
import Switch from './Switch/Switch';
import InfoBlock from './InfoBlock/InfoBlock';

import BBIcon from '/assets/media/icons/Solutions/BBIcon.svg';
import BWIcon from '/assets/media/icons/Solutions/BWIcon.svg';
import SCPIcon from '/assets/media/icons/Solutions/SCPIcon.svg';

import BBImg from '/assets/media/img/Solutions/BBImg.svg';
import BWImg from '/assets/media/img/Solutions/BWImg.svg';
import SCPImg from '/assets/media/img/Solutions/SCPImg.svg';


const Solutions = () => {
  const [toggle, setToggle] = useState(1)
  const solutionsData = [
    {header: {
      icon: BBIcon,
      text: `BLACK\nBRIDGE`,
    },
    description: `Cross-chain bridge for the instant\ntransfer of data and digital assets\nacross Ethereum, Polkadot and\nNear networks.`,
    list: [
      'Ultra-fast cross-chain transfers',
      'EVM, no-EVM and Layer-2 networks',
      'Fungible Tokens and NFTs support',
      'Custom tokens minting',
    ],
    img: BBImg,
  },
  {header: {
    icon: BWIcon,
    text: `BLACK\nWALLET`,
  },
  description: `Wallet with support for major\ncryptocurrencies and portfolio\ntracking out of the box.`,
  list: [
    '100+ cryptocurrencies in 25 blockchains',
    'Portfolio tracker with market data stream',
    'Advanced security and local key storage',
    'Built-in exchange',
  ],
  img: BWImg,
},
{header: {
  icon: SCPIcon,
  text: `SMART\nCONTRACT PACK`,
},
description: `Our author's package of smart\ncontract templates for Ethereum-like\n(Solidity) networks with best\npractices.`,
list: [
  'Implemented standards and code snippets',
  'Reusable, robust Solidity components',
  'Ready for audit and high-load scaling',
],
img: SCPImg,
},
  ]
  const leftSwipe = () => {
    if (toggle > 1) {
      setToggle(prev => prev - 1);
    }
  };
  
  const rightSwipe = () => {
    if (toggle < 3) {
      setToggle(prev => prev + 1);
    }
  };
  return (
    <div id='solutions' className={style.solutions}>
      <Glitch/>
      <div className={`${style.solutions_container} wrapper`}>
        <div className={style.solutions_leftSide} onClick={leftSwipe}>
          {solutionsData.map((item, index) => (
            index === (toggle - 1) ? (<img src={item.img} alt=' ' key={index}  className={`${style.fadeIn} ${index === (toggle - 1) ? style.active : ''}`}/>) : ''
          ))}
        </div>
        <div className={style.solutions_rightSide} onClick={rightSwipe}>
        <TitleSquares color='rgba(255, 255, 255, 0.5)' text='OUR SOLUTIONS' className={style.ts}/>
        <Switch toggle={toggle} setToggle={setToggle} />
        {solutionsData.map((item, index) => (
            index === (toggle - 1) ? (<InfoBlock data={item} key={index} className={`${style.fadeIn} ${index === (toggle - 1) ? style.active : ''}`}/>) : ''
          ))}
        </div>
      </div>
    </div>
  )
}

export default Solutions