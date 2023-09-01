import React from 'react'
import style from './InfoBlock.module.scss'
import VerticalLinesGroup from '../Lines/VerticalLines/VerticalLinesGroup'
import logoBlack from '/assets/media/img/ContactUs/logoBlack.svg';

const InfoBlock = () => {
  return (
    <div className={style.info}>
                <VerticalLinesGroup className={style.linesGroup1}/>
                    <div className={style.info_logoText}>
                        <img src={logoBlack} alt='BLACK WALL'/>
                        <div className={style.info_logoText_text}>
                            <h4>BLACK WALL GROUP FZE</h4>
                            <p>C06, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates</p>
                            <p>+0 000 000 00 00</p>
                            <p>hello@blackwall.tech</p>
                        </div>
                    </div>
                <VerticalLinesGroup className={style.linesGroup2}/>
            </div>
  )
}

export default InfoBlock