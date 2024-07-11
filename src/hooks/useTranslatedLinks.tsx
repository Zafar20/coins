'use client'
import  { useState } from 'react'
import { useTranslations } from 'next-intl';

const useTranslatedLinks = () => {

    const t = useTranslations('Header')

    let pages = [
        { name: t('main'), url:'#section1' },
        { name: t('coins'), url:'#section2'},
        { name: t('market'), url:'#section3' },
        { name: t('publicates'), url:'#section4' },
        { name: t('contact'), url:'#section5' },
      ]

    const [links, setlinks] = useState(pages)

      return {
        links
      }
}

export default useTranslatedLinks