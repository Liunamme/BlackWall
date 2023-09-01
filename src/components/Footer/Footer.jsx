import React from 'react'
import style from './Footer.module.scss'
import logoWhite from '/assets/media/img/Footer/logoWhite.svg';
import sphere from '/assets/media/img/Footer/sphere.svg';
import arrowsLeft from '/assets/media/img/Footer/arrowsLeft.svg';
import arrowsRight from '/assets/media/img/Footer/arrowsRight.svg';
import copr from '/assets/media/img/Footer/copr.svg';

const Footer = () => {
    const links = [
        {
            text: 'Home',
            path: '#home'
        },
        {
            text: 'About',
            path: '#about'
        },
        {
            text: 'Areas',
            path: '#areas'
        },
        {
            text: 'Solutions',
            path: '#solutions'
        },
        {
            text: 'Contact us',
            path: '#contact-us'
        },
        {
            text: 'Careers',
            path: '#careers'
        },
    ]
  return (
    <footer>
        <div className={`${style.content} wrapper`}>
            <img src={logoWhite} alt=" " />
            <div className={style.content_info}>
                <nav className={`${style.navigation}`}>
                    <ul className={style.navigation_links}>
                        {links.map(item => (
                        <li className={style.navigation_links_link} key={item.path}>
                            <a href={item.path}>{item.text}</a>
                        </li>
                        ))}
                    </ul>
                </nav>      
                <a href="mailto:Hello@blackwall.tech" className={style.content_info_email}>Hello@blackwall.tech</a>
            </div>
            <img src={sphere} alt=" "/>
        </div>
        <div className={style.content_copyright}>
            <img src={arrowsLeft} alt=" " className={style.content_copyright_arrowsLeft}/>
                <p>Black Wall Group FZE, Sharjah, 2023 <img src={copr} alt="Ⓒ" /></p>
            <img src={arrowsRight} alt=" " className={style.content_copyright_arrowsRight}/>
        </div>
    </footer>
  )
}

export default Footer