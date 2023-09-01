import React from 'react'
import style from './Home.module.scss'
import logo from '/assets/media/img/Home/logoBlack.svg';
import contactUs from '/assets/media/img/Home/contactUs.svg';
import PortfolioLink from './PortfolioLink/PortfolioLink';
import BurgerMenu from './BurgerMenu/BurgerMenu';


const Home = () => {
  return (
    <div id='home' className={style.home}>
        {/* <BurgerMenu /> */}
        <img src={logo} alt="BlackWallLogo" className={style.logo}/>
        <h1>BLACK WALL</h1>
        <div className={style.h4}>
            <h4>PROTOCOL RESEARCH • BLOCKCHAIN DEV • WEB3 APPS</h4>
        </div>
        <a href='#contact-us'>
            <img src={contactUs} alt="ContactUs" className={style.contactUs}/>
        </a>
        <PortfolioLink/>
    </div>
  )
}

export default Home