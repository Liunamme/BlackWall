import React from 'react'
import style from './HorizontalLines.module.scss'

const HorizontalLines = ({className}) => {
  return (
    <div className={`${style.lines} ${className}`}>
        <div className={style.lines_line1}></div>
        <div className={style.lines_line2}></div>
        <div className={style.lines_line3}></div>
        <div className={style.lines_line4}></div>
        <div className={style.lines_line5}></div>
        <div className={style.lines_line6}></div>
        <div className={style.lines_line7}></div>
        <div className={style.lines_line8}></div>
    </div>
  )
}

export default HorizontalLines