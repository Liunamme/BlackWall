import React from 'react'
import style from './TitleSquares.module.scss'
import Squares from './Squares/Squares'

const TitleSquares = ( {color, text, className} ) => {
  return (
    <h3 className={className}><Squares color={color}/><span style={{color: color}}>{text}</span></h3>
  )
}

export default TitleSquares