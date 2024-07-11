import s from './Publications.module.scss'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { coin } from '@/utils/images';

const Publications = () => {
    
    const t = useTranslations('Publications');
    const t2 = useTranslations('Soon');
    
    
    const publicationsData = [
        { 
            id: 1,
            title: "Краткое описание",
            text: "Описание для раскрытия дополнительных деталей",
            price: "150 ₽/шт",
            img: coin
        },
        { 
            id: 2,
            title: "Краткое описание",
            text: "Описание для раскрытия дополнительных деталей",
            price: "150 ₽/шт",
            img: coin
        },
        { 
            id: 3,
            title: "Краткое описание",
            text: "Описание для раскрытия дополнительных деталей",
            price: "150 ₽/шт",
            img: coin
        },
        { 
            id: 4,
            title: "Краткое описание",
            text: "Описание для раскрытия дополнительных деталей",
            price: "150 ₽/шт",
            img: coin
        },
    ]
    
    
  return (
    <section className={s.publications} id="section4">
    <div className="container">
        <div className={s.publications__box}>
            <h2 className={s.publications__box_title}>{t('title')}</h2>
                 <div className={s.publications__box_list}>
                    <h2 className={s.publications__box_list_title}>{t2('title')}</h2>
                    {publicationsData.map((item) => (
                      <div key={item.id} className={s.publications__box_item}>
                        <div className={s.publications__box_item_left}>
                            <h2 className={s.publications__box_item_left_title}>{item.title}</h2>
                            <p className={s.publications__box_item_left_text}>{item.text}</p>
                            <span className={s.publications__box_item_left_price}>{item.price}</span>
                            <button  className={s.publications__box_item_left_btn}>Купить</button>
                        </div>
                        <div className={s.publications__box_item_right}>
                          <img src={item.img.src} alt="" className={s.publications__box_item_right_img} />
                        </div>
                      </div>
                    ))}
             </div>    
        </div>
    </div>
   
   
</section>
  )
}

export default Publications