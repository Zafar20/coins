'use client'

import s from './Footer.module.scss'
import { Link } from '@/navigation'
import Image from 'next/image'
import { fb, insta, number, tw, vk, youtube, arrowUp } from '@/utils/images'
import { useTranslations } from 'next-intl';
import useTranslatedLinks from '@/hooks/useTranslatedLinks'
import { useLocale } from 'next-intl';



let socials = [
  {img: fb, url: '#'},
  {img: vk, url: '#'},
  {img: tw, url: '#'},
  {img: insta, url: '#'},
  {img: youtube, url: '#'},
]

const Footer = () => {


  const t = useTranslations('Header');
  const t2 = useTranslations('Time');
  let { links } = useTranslatedLinks()
  const lang = useLocale();

  const goUp = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  return (
    <>
      <footer className={s.footer}>
        <div className={s.footer__up} onClick={goUp}>
          <Image src={arrowUp} alt=""/>
        </div>
        <div className="container">
          <div className={s.footer__box}>
            
         
        <Link href="/" className={s.logo}>
          <Image src="/images/logo.png" alt="logo"  width={45} height={45}/>
          <div className={s.logo__info}>
            <h2 className={s.logo__info_title}>UZCOINS</h2>
            <p className={s.logo__info_description}>{t('logoText')}</p>
          </div>  
        </Link>
        <ul className={s.footer__list}  >
          {links.map((link) => {
          return <li key={link.name}   >
                <Link 
                  href={link.url}
                  className={s.footer__list_link}
                >
                  {link.name}
                </Link>
              </li>
           })}
        </ul>
        <div className={s.footer__info}>
          <div className={s.footer__info_top}>
            <div className={s.footer__info_top_icon}>
              <Image src={number} alt="" />
            </div>
            <div>
              
              <a href="tel:+998979951611" className={s.footer__info_top_phone}>+998979951611</a>
            </div>
          </div>
          <div className={s.footer__info_bottom}>
           {socials.map((el, i) => (
            <a key={i} href={el.url}  className={s.footer__info_bottom_link}>
              <Image src={el.img} alt="" />
            </a>
           ))}
          </div>
        </div>
        </div>
        </div>
      </footer>
    </>
  )
}

export default Footer