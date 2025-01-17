import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaFacebook, FaGithub} from 'react-icons/fa'
export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com" target='_blank'><FaGithub /></a>
        <a href="https://facebook.com" target='_blank'><FaFacebook /></a>
    </div>
  )
}
