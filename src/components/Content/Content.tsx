'use client';
import s from './Content.module.scss';
import { useLocale } from 'next-intl';
import Slider from '../Swiper/Slider';
import { useTranslations } from 'next-intl';

const Content = () => {

  const t = useTranslations('Content');


  return (
    <section className={s.content}>
      <div className="container h100">
        <div className={s.content__block}>
          <div className={s.content__block_left}>
            <h1 className={s.content__block_left_title}>{t('title')}</h1>
            <p className={s.content__block_left_text}>{t('text')}</p>
            <a  target="_blank" href="https://www.gazeta.uz/ru/2022/12/22/coin/" className={s.content__block_left_link}>{t('link')}</a>
          </div>
          <div className={s.content__block_right}>
            <Slider/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
