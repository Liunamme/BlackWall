import React from 'react'
import style from './VerticalLines.module.scss'
import VerticalLines from './VerticalLines'

const VerticalLinesGroup = ( {className} ) => {
  return (
    <div className={`${style.linesGroup} ${className}`}>
        <VerticalLines/>
        <VerticalLines/>
        <VerticalLines/>
        <VerticalLines/>
        <VerticalLines/>
        <VerticalLines/>
    </div>
  )
}

export default VerticalLinesGroup