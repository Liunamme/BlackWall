import React from 'react'
import style from './ButtonOff.module.scss'

const ButtonOff = ( {setActive} ) => {
  return (
    <div className={style.btnClose} onClick={() => setActive(false)}>
      <span className={style.btnClose_line}></span>
      <span className={style.btnClose_line}></span>
    </div>
  )
}

export default ButtonOff