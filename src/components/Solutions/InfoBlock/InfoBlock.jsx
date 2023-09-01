import React from 'react'
import style from './InfoBlock.module.scss'

const InfoBlock = ( { data, className } ) => {
  return (
    <div className={`${style.infoBlock} ${className}`}>
                <div className={style.infoBlock_header}>
                  <img src={data.header.icon} alt=' '/>
                  <h2>{data.header.text}</h2>
                </div>
                <div className={style.infoBlock_description}>
                  <p>{data.description}</p>
                </div>
                <ul className={style.infoBlock_list}>
                  {data.list.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                </ul>
                <p className={style.infoBlock_inDevelopment}>*in development</p>
    </div>
  )
}

export default InfoBlock