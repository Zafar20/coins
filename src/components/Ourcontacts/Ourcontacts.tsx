import s from './Ourcontacts.module.scss'
import { location, time, phone, mail } from '@/utils/images'
import { useTranslations } from 'next-intl';
import Image from 'next/image';


const Ourcontacts = () => {
    
    const t = useTranslations('Ourcontacts');
    const t2 = useTranslations('Time');
    
    

    return (
        <section className={s.ourcontacts} id="section5">
            <div className="container">
                <div className={s.ourcontacts__box}>
                    <h2 className={s.ourcontacts__box_title}>{t('title')}</h2>
                         <div className={s.ourcontacts__box_list}>
                                <div  className={s.ourcontacts__box_item}>
                                  <div className={s.ourcontacts__box_item_img}>
                                      <Image width={20} height={20} src={mail} alt="" />
                                  </div>
                                  <a href={`mailto:tillaevdilshod1948@gmail.com`} className={s.ourcontacts__box_item_text}>tillaevdilshod1948@gmail.com</a>
                                </div>
                                <div  className={s.ourcontacts__box_item}>
                                  <div className={s.ourcontacts__box_item_img}>
                                      <Image width={20} height={20} src={time} alt="" />
                                  </div>
                                  <a href="tel:+998979951611"  className={s.ourcontacts__box_item_text}>+998979951611</a>
                                </div>
                     </div>    
                </div>
            </div>
        </section>
    )
}

export default Ourcontacts