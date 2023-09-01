import React from 'react'
import style from './ContactUs.module.scss'
import HorizontalLines from './Lines/HorizontalLines/HorizontalLines'
import TitleSquares from '../UI/TitleSquares/TitleSquares'
import InfoBlock from './InfoBlock/InfoBlock'
import Form from './Form/Form'

const ContactUs = () => {
  return (
    <div id='contact-us' className={style.contactUs}>
        <HorizontalLines className={style.horizontalLines}/>
        <TitleSquares color='#000000' text='CONTACT US' className={style.ts}/>
        <div className={style.contactUs_form}>
            <Form/>
            <InfoBlock/>
        </div>
        
    </div>
  )
}

export default ContactUs