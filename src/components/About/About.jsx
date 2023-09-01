import React from 'react'
import style from './About.module.scss'
import TitleSquares from '../UI/TitleSquares/TitleSquares'
import waveAndArrow from '/assets/media/other svg elements/About/waveAndArrow.svg';
import SpherePixels from './SpherePixels/SpherePixels';
import QuationBlock from './QuationBlock/QuationBlock';

const About = () => {
    const list = [
        {
            text: 'Next-gen tech solutions that simplify life and give access to financial system'
        },
        {
            text: 'Emphasis on customer centricity, user experience and transaction transparency'
        },
        {
            text: 'Using technology for the benefit of human values'
        },
        {
            text: 'Constant adaptation to changing circumstances and market requirements'
        },
]
    const BWIN = [
        {num: '14', text: `DEVELOPMENT\nTEAM MEMBERS`},
        {num: '8', text: `OPERATION\nTEAM MEMBERS`},
        {num: '23+', text: `HAPPY CLIENTS`},
        {num: '1.2M+', text: `TRANSACTIONS\nCOMPLETED`},
    ]
  return (
    <div id='about' className={style.about}>
        <div  className={style.about_background}></div>
        <div className={`${style.about_container}`}>
            <div className={style.about_firstTitle}>
                <TitleSquares color='rgba(255, 255, 255, 0.5)' text='OUR MISSION'/><span></span>
                <h2>
                    PROVIDE THE BEST USER EXPERIENCE FOR WORKING WITH WEB3 TECHNOLOGIES IN EVERYDAY LIFE.
                    <img src={waveAndArrow} alt=" " className={style.about_firstTitle_waveAndArrow}/>
                </h2>
            </div>
            <div className={style.about_secondSection}>
                <div className={style.about_secondTitle}>
                    <TitleSquares color='rgba(255, 255, 255, 0.5)' text='PRINCIPLES'/>
                    <ul>{list.map(item => (<li key={item.text}>{item.text}</li>))}</ul>
                </div>
                <SpherePixels className={style.spherePixels}/>
            </div>
            
            <div className={style.about_thirdSection}>
            <QuationBlock className={style.quationBlock}/>
            <div className={style.about_thirdTitle}>
                <TitleSquares color='rgba(255, 255, 255, 0.5)' text='BLACK WALL IN NUMBERS'/>
                <div className={style.about_thirdTitle_numbers}>
                    {BWIN.map(item => (
                        <div className={style.about_thirdTitle_numbers_number} key={item.text}>
                            <div className={style.about_thirdTitle_numbers_number_num}>{item.num}</div>
                            <div className={style.about_thirdTitle_numbers_number_text}>{item.text}</div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About