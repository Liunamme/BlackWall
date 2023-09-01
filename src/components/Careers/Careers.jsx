import React from 'react'
import style from './Careers.module.scss'
import TitleSquares from '../UI/TitleSquares/TitleSquares'
import Vacancy from './Vacancy/Vacancy';
import arrows from '/assets/media/other svg elements/Careers/arrows.svg';
import arrow2 from '/assets/media/other svg elements/Careers/arrow2.svg';
import background from '/assets/media/img/Careers/background.svg';


const Careers = () => {
    const vacancies = [
        {specialization: 'SENIOR BLOCKCHAIN ENGINEER',
         hardSkills: ['Solana','Near','Rust',], 
         conditions: ['Sharjah / Remote','Full time / Part time']
        },
        {specialization: 'SENIOR BACKEND DEVELOPER',
         hardSkills: ['Wallet','Core','NodeJS',], 
         conditions: ['Sharjah — Full time','Remote — Contractor']
        },
        {specialization: 'MIDDLE FRONTEND DEVELOPER',
         hardSkills: ['React',], 
         conditions: ['Sharjah — Full time','Remote — Contractor']
        },
    ]
  return (
    <div className={`${style.careers} wrapper`}>
        <div className={style.careers_header} id='careers'>
            <TitleSquares color='#000000' text='WE ARE HIRING' className={style.ts}/>
            <img src={arrows} alt=" " />
        </div>
        <div className={style.careers_vacancies}>
            {vacancies.map((item, index) => (
                <a href="mailto:hr@blackwall.tech" key={index}><Vacancy data={item} key={index}/></a>
            ))}
            <img src={background} alt=' ' className={style.background}></img>
        </div>
        <div className={style.careers_contactsHR}>
            <p>We are always on the lookout for talented employees. Not enough experience or no vacancy here for you? That's okay, just send us your CV</p>
            <img src={arrow2} alt=" " />
            <a href="mailto:hr@blackwall.tech">HR@BLACKWALL.TECH</a>
        </div>
    </div>
  )
}

export default Careers