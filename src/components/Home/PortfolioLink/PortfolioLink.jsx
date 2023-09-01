import React from 'react'
import style from './PortfolioLink.module.scss'
import arrow from '/assets/media/img/Home/arrow.svg'

const PortfolioLink = () => {
  return (
    <a href="https://github.com/Liunamme/" target='_blank' className={style.portfolio}>
            <div className={style.portfolio__topText}>
                Build decentralized future by breaking down barriers
            </div>
            <div className={style.portfolio__textArrow}>
                <div className={style.portfolio__textArrow_text}>
                    See portfolio
                </div>
                <img src={arrow} alt="here" className={style.portfolio__textArrow_arrow}/>
            </div>
        </a>
  )
}

export default PortfolioLink