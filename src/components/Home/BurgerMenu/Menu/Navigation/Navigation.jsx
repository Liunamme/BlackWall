import React from 'react'
import style from './Navigation.module.scss'

const Navigation = ({setActive, className}) => {
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
    <nav className={`${style.navigation} ${className}`}>
        <ul className={style.navigation_links}>
            {links.map(item => (
            <li className={style.navigation_links_link} key={item.path}>
                <a href={item.path} onClick={() => setActive(false)}>{item.text}</a>
            </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navigation