import React from 'react'
import style from './Menu.module.scss'
import logo from '/assets/media/img/Home/Menu/logoWhite.svg';
import decorate from '/assets/media/other svg elements/Home/decorate.svg';
import Navigation from './Navigation/Navigation';

const Menu = ( {active, setActive} ) => {
  return (
    <div className={`${style.menu} ${active ? style.active : ''}`}>
        <img src={logo} alt="BlackWall" className={style.menu_logo}/>
        <img src={decorate} alt="BlackWall" className={style.menu_decorate}/>
        <Navigation setActive={setActive} />
        <a href="mailto:Hello@blackwall.tech" className={style.menu_email}>Hello@blackwall.tech</a>
    </div>
  )
}

export default Menu