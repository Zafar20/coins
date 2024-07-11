'use client'
import LocalSwitcher from '../local-switcher'
import s from './Header.module.scss'
import Image from 'next/image'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl';
import useTranslatedLinks from '@/hooks/useTranslatedLinks'
import {  useState, useRef, useEffect } from 'react'



const Header = () => {

  const t = useTranslations('Header');
  let { links } = useTranslatedLinks()
  const [burger, setBurger] = useState(false)


  
  return (
    <>
      <header className={`${s.header}`} id="section1">
        <div className="container justify-between h100">
        <div  className={s.logo}>
          <Image src="/images/logo.png" alt="logo"  width={45} height={45}/>
          <div className={s.logo__info}>
            <h2 className={s.logo__info_title}>UZCOINS</h2>
            <p className={s.logo__info_description}>{t('logoText')}</p>
          </div>  
        </div>
        <div  onClick={() => setBurger(!burger)} className={`${s.header__btn} ${burger ? s.active : ''}`}>
          <div  className={s.header__btn_line}></div>
        </div>
        <div  className={`${s.header__left} ${burger ? `${s.active}` : ''}`}>
        <ul className={s.header__list}  >
          {links.map((link) => {
          return <li key={link.name}  >
                <Link 
                  href={link.url}
                  className={s.header__list_link}
                  onClick={() => setBurger(false)}
                >
                  {link.name}
                </Link>
              </li>
           })}
        </ul>
          <LocalSwitcher/>
        </div>
   
        </div>
      </header>
    </>
  )
}

export default Header