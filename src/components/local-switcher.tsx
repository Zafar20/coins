'use client'
import { useRouter, } from 'next/navigation';
import { useLocale } from 'next-intl';
import {  useTransition, useState } from 'react';
import { arrow, ruFlag, uzFlag } from '@/utils/images';
import Image from 'next/image'
import {usePathname} from "@/navigation";



const languages = [
    { name: 'Русский', value: 'ru', img: ruFlag },
    { name: 'Ozbekcha', value: 'uz', img: uzFlag },
]

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false)
  const localActive = useLocale();
  let pathname = usePathname()

  let imgSrc = localActive == 'ru' ? ruFlag  : localActive == 'uz' ? uzFlag : ''
  let lang = localActive == 'ru' ? 'Русский'  : localActive == 'uz' ? 'Ozbekcha' : ''
  
  const changeLang = (value:string) => {
    const nextLocale = value
   
    const newPathname = `/${nextLocale}${pathname}`;
    if (typeof window !== 'undefined') {
      window.location.href = newPathname;
    }
    
    setIsOpen(false)

  }

  return (
  
    <>
        <div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
          <div className="dropdown__box">
          <Image src={imgSrc.src} alt="" width={28} height={20}/>
            <h2 className='dropdown__lang' >
                {lang}
            </h2>
            <Image src={arrow.src} alt="" width={13.5} height={7.5}/>
          </div>
            {isOpen && <ul className="dropdown__menu">
                {languages.map((lang) => (
                    <li onClick={() => changeLang(lang.value)} key={lang.name}>
                        {lang.name}
                    </li>
                ))}
            </ul>}
        </div>
    </>

    
  );
}
