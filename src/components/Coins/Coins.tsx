'use client'
import s from './Coins.module.scss'
import { useTranslations } from 'next-intl';
import { coin } from '@/utils/images';
import Modal from './Modal';
import { useState } from 'react';
import { tiynAll, allSum2018, allSum2001, allSum1997 } from '@/utils/images';



const Coins = () => {
    
    const t = useTranslations('Coins');
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentItem, setCurrentItem] = useState(null)
    
    const openModal = (item: any) => {
      setCurrentItem(item)
      setIsModalOpen(true)
    }
    
    const clodeModal = () => {
      setIsModalOpen(false)
    }
    
    
    const coinsData = [
        {
          id: 1,
          title: "Монеты образца 1994 года",
          info: [
            'Номинал 1, 3, 5, 10, 20 и 50 тийин',
            'Выпускались только один год',
            'Надписи на монетах на кириллице'
          ],
          img: tiynAll,
        },
        {
          id: 2,
          title: "Монеты образца 1997 года",
          info: [
            'Номинал 1, 5, 10 сум',
            'Чеканились с 1997 года по 2000 год',
            'Надписи на монетах на кириллице'
          ],
          img: allSum1997,
        },
        {
          id: 3,
          title: "Монеты образца 2000-2001 годов",
          info: [
            'Номинал 1, 5, и 10 сум',
            'Чеканились с 2000 года по 2001 год',
            'Надписи на монетах на латинице'
          ],
          img: allSum2001,
        },
        {
          id: 4,
          title: "Монеты образца 2018 года",
          info: [
            'Номинал 50, 100, 200 и 500 сум',
            'Чеканились только один год',
            'Надписи на монетах на латинице'
          ],
          img: allSum2018,
        },
    ]
    
    
  return (
    <>
         <section className={s.coins} id="section2">
            <div className="container">
                <div className={s.coins__box}>
                    <h2 className={s.coins__box_title}>{t('title')}</h2>
                         <div className={s.coins__box_list}>
                            {coinsData.map((item) => (
                              <div key={item.id} className={s.coins__box_item}>
                                <div className={s.coins__box_item_left}>
                                    <h2 className={s.coins__box_item_left_title}>{item.title}</h2>
                                    <ul className={s.coins__box_item_left_list}>
                                      {item.info.map((el,i) => (
                                        <li key={i} className={s.coins__box_item_left_li}>{el}</li>
                                      ))}
                                    </ul>
                                    <button onClick={() => openModal(item)} className={s.coins__box_item_left_btn}>Подробнее</button>
                                </div>
                                <div className={s.coins__box_item_right}>
                                  <img src={item.img.src} alt="" className={s.coins__box_item_right_img} />
                                </div>
                              </div>
                            ))}
                     </div>    
                </div>
            </div>
            {isModalOpen &&  <Modal currentItem={currentItem} clodeModal={clodeModal}/>}
           
        </section>
    </>
  )
}

export default Coins