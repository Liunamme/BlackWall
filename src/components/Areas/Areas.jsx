import React from 'react'
import style from './Areas.module.scss'
import TitleSquares from '../UI/TitleSquares/TitleSquares'
import arrow1 from '/assets/media/other svg elements/Areas/arrows/arrow1.svg';
import arrow2 from '/assets/media/other svg elements/Areas/arrows/arrow2.svg';
import arrow3 from '/assets/media/other svg elements/Areas/arrows/arrow3.svg';

const Areas = () => {
    const block = [
        {
            header: 'PROTOCOL\nRESEARCH', 
            text: `In-depth analytics on decentralized\nprotocols, blockchain networks\nand smart contracts.`
        },
        {
            header: 'BLOCKCHAIN DEVELOPMENT', 
            text: `Powerful development team with\nfirst-class expertise in cryptography\nand distributed systems.`
        },
        {
            header: 'WEB3\nAPPLICATIONS', 
            text: `Design, development, strategy of\ndecentralized applications for web\nand mobile platforms.`
        },
        {
            header: 'SMART-\nCONTRACTS', 
            text: `Code is law. Cloud computing and fog\nlogic are the first steps in the\nmodernization of economic relations.`
        },
        {
            header: 'INFRASTRUCTURE', 
            text: `Highly loaded, secure, scalable,\nnode-based engineering solutions.`
        },
    ]
  return (
    <div className={style.areas}>
        <div className={style.areas_background}></div>
        <div id='areas' className={style.areas_content}>
            <div className={style.areas_blocks}>
                <div className={style.areas_blocks_startBlock}>
                    <TitleSquares color='rgba(0, 0, 0, 1)' text='AREAS' className={style.ts}/>
                    <p>…where our knowledge and experience turn into superpowers</p>
                </div>
                {block.map(item => (
                    <div className={style.areas_blocks_block} key={item.header}>
                    <h4>{item.header}</h4>
                    <p>{item.text}</p>
                </div>

                ))}
                    <img src={arrow1} alt=" " className={style.areas_blocks_arrow1}/>
                    <img src={arrow2} alt=" " className={style.areas_blocks_arrow2}/>
                    <img src={arrow3} alt=" " className={style.areas_blocks_arrow3}/>
                    <img src={arrow2} alt=" " className={style.areas_blocks_arrow4}/>
                    <img src={arrow2} alt=" " className={style.areas_blocks_arrow5}/>
            </div>
        </div>
    </div>
  )
}

export default Areas