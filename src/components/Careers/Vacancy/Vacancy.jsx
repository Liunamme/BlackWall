import React from 'react'
import style from './Vacancy.module.scss'
import arrow1 from '/assets/media/other svg elements/Careers/arrow1.svg';
const Vacancy = ( {data} ) => {
  return (
    <div className={style.vacancy}>
        <h4>{data.specialization}</h4>
        <p className={style.vacancy_hardSkills}>
            {data.hardSkills.join(', ')}
        </p>
        <div className={style.vacancy_conditions}>
            {data.conditions.map((item, index) => (
                <p key={index}>
                    {item}
                </p>
            ))}
        </div>
        <div className={style.vacancy_textArrow}>
            <div className={style.vacancy_textArrow_text}>
                Apply now
            </div>
            <img src={arrow1} alt="here" className={style.vacancy_textArrow_arrow}/>
        </div>
    </div>
  )
}

export default Vacancy