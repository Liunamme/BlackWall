import React from 'react'
import style from './Switch.module.scss'

const Switch = ( {toggle, setToggle} ) => {

  return (
    <div className={style.switch}>
       <div 
            className={`${style.switch_subSwitch} ${toggle === 1 ? style.active : ''}`}
            onClick={() => setToggle(1)}
        ></div>
       <div 
            className={`${style.switch_subSwitch} ${toggle === 2 ? style.active : ''}`}
            onClick={() => setToggle(2)}
        ></div>
        <div 
            className={`${style.switch_subSwitch} ${toggle === 3 ? style.active : ''}`}
            onClick={() => setToggle(3)}
        ></div>
    </div>
  )
}

export default Switch