'use client'
import s from './Form.module.scss'
import { useForm } from 'react-hook-form'
import CustomInput from '../UI/CustomInput'
import { formIcon1, formIcon2, formIcon3, formIcon4 } from '@/utils/images'
import { useTranslations } from 'next-intl';
import { toast } from 'react-toastify'
import { IForm } from '@/types/index'
import emailjs from 'emailjs-com';





const Form = () => {
  
  const t = useTranslations('Form');

  const {
    register, 
    formState: {
      isValid
    },
    handleSubmit, //
    reset,

  } = useForm<IForm>({
    mode: "onBlur"
  })

  const onSubmit = async (data: IForm) => {

    try {
      const result = await emailjs.send(
        'service_bobui8i', // замените на ваш Service ID
        'template_k0egp87', // замените на ваш Template ID
        {
          user_name: data.user_name,
          user_email: data.user_email,
          user_number: data.user_number,
          user_message: data.user_message
        },
        '5TsUuIrTCXNsLoVrI' // замените на ваш User ID
      );
      if (result.status === 200) {
        toast.success('Форма отправлена', {
          position: "top-right",
          autoClose: 1000,
        });
      }

    } catch (error: any) {
      console.error(error.message);
      
    }
    reset()
  }






  return (
    <section className={s.form}>
        <h2 className={s.form_title}>{t('title')}</h2>
        <div className={s.form_block}>
        <div className="container">
        <form className={s.form_box} onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            holder={t('name')}
            type="text"
            icon={formIcon1}
            register={register('user_name', {
              required: true,
            })}
          />
          <CustomInput
            holder={t('number')}
            type="number"
            icon={formIcon2}
            register={register('user_number', {
              required: true,
            })}
          />
          <CustomInput
            holder={t('email')}
            type="email"
            icon={formIcon3}
            register={register('user_email', {
              required: true,
            })}
          />
          <CustomInput
            holder={t('text')}
            type="text"
            icon={formIcon4}
            register={register('user_message', {
              required: true,
            })}
          />
          <button disabled={!isValid} className={s.form_btn}>{t('btn')}</button>
        </form>
      </div>
        </div>
   
    </section>


  )
}

export default Form