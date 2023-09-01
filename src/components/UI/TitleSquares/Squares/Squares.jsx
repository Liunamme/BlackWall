import React from 'react'
import style from './Squares.module.scss'

const Squares = ( {color} ) => {
  return (
    <div className={style.squares}>
        <div className={style.squares_square} style={{background: color}}></div>
        <div className={style.squares_square} style={{background: color}}></div>
        <div className={style.squares_square} style={{background: color}}></div>
        <div className={style.squares_square} style={{background: color}}></div>
    </div>
  )
}

export default Squares