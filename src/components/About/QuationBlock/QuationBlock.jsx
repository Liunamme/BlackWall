import React from 'react'
import style from './QuationBlock.module.scss'
import circle from '/assets/media/img/About/Circle.svg';

const QuationBlock = ({ className }) => {
  return (
    <div className={`${className} ${style.quationblock}`}>
        <div className={style.quationblock_quoteTop}>“</div>
          <div className={style.quationblock_quotation}>
            Socioeconomic relations with decentralization technologies can become the norm for all of us, ridding society of intermediaries and giving access to public goods to a wider range of people.
          </div>   
        <div className={style.quationblock_quoteBot}>“</div>  
        <div className={style.quationblock_personQuotation}>
          <img src={circle} alt=" " className={style.quationblock_personQuotation_photo}/>
          <div className={style.quationblock_personQuotation_person}>
          <div className={style.quationblock_personQuotation_person_initials}>
            K.V.
          </div>
          <div className={style.quationblock_personQuotation_person_jobPosition}>
            CEO
          </div>
          </div>
        </div>
    </div>
  )
}

export default QuationBlock