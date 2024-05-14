import React from 'react'
import "./header.css"
import ME from "../../assets/me.png"
import { CTA } from './CTA'
import { HeaderSocials } from './HeaderSocials'
export const Header = () => {
  return (
    <header>
        <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Abu Hosain</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
            <img src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>scrol down</a>
    </div>
    </header>
  )
}
