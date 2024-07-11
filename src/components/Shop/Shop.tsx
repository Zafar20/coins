import s from './Shop.module.scss'
import { useTranslations } from 'next-intl';
import { ussr, russian, kz } from '@/utils/images';
import Image from 'next/image';

const Shop = () => {
    
    
    const t = useTranslations('Shop');
    const t2 = useTranslations('Soon');
    
    
    const shopData = [
        {img: ussr, text: 'Юбилейные монеты СССР' },
        {img: kz, text: 'Юбилейные монеты Казахстана' },
        {img: russian, text: 'Юбилейные монеты Российской Федерации' },
    ]
    
    
  return (
    <>
        <section className={s.shop} id="section3">
            <div className="container">
                <div className={s.shop__box}>
                    <h2 className={s.shop__box_title}>{t('title')}</h2>
                         <div className={s.shop__box_list}>
                            <h2 className={s.shop__box_list_title}>{t2('title')}</h2>
                            {shopData.map((item) => (
                                <div key={item.text} className={s.shop__box_item}>
                                  <div className={s.shop__box_item_img}>
                                      <Image width={40} height={40} src={item.img.src} alt="" />
                                  </div>
                                  <p className={s.shop__box_item_text}>{item.text}</p>
                              </div>
                            ))}
                        </div>    
                </div>
            </div>
        </section>
    </>
  )
}

export default Shop