import React, { useState } from 'react'
import BurgerBtn from './BurgerBtn/BurgerBtn'
import Menu from './Menu/Menu'

const BurgerMenu = () => {
    const [active, setActive] = useState(false)
    
  return (
    <>
    <BurgerBtn active={active} setActive={setActive}/>
    <Menu active={active} setActive={setActive} />
    </>
  )
}

export default BurgerMenu