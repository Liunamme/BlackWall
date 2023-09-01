import React from 'react'
import style from './BurgerBtn.module.scss'

const BurgerBtn = ({ active, setActive }) => {
  return (
    <div className={active ? `${style.burgerMenuBtn} ${style.active}` : style.burgerMenuBtn} onClick={() => setActive(prev => !prev)}>
        <span className={style.line}></span>
        <span className={style.line}></span>
        <span className={style.line}></span>
    </div>
  )
}

export default BurgerBtn