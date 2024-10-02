import foto from '../images/myfoto.jpg'
import Image from 'next/image'
import { TbRosetteDiscountCheckFilled } from 'react-icons/tb'
import { FaClipboardCheck } from 'react-icons/fa'
import MyAccordion from '@/components/MyAccordion'

const Hero = () => {
  return (
    <div id="osebe" className="hero bg-base-200 px-2">
      <div className="mt-10 flex mx-auto max-w-7xl flex-col lg:flex-row-reverse">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={foto}
            alt="Мое фото"
            className="max-w-40 md:max-w-60 lg:max-w-md rounded-3xl shadow-xl shadow-indigo-300"
          />
          <div className="text-slate-600 text-xl font-light flex items-center justify-center gap-2 mt-5">
            <h2 className="badge badge-primary">Юлия Таирова</h2>
            <TbRosetteDiscountCheckFilled className="text-primary" />
          </div>
        </div>

        <div className="lg:mr-10 flex flex-col justify-between">
          <h1 className="text-3xl md:text-4xl lg:text-7xl text-primary font-semibold">
            Помощь психолога
          </h1>
          <div className="mt-3 md:mt-5 text-base lg:text-2xl flex items-start">
            <FaClipboardCheck className="shrink-0 text-primary mr-2 relative top-1" />
            <p>Десять лет успешной работы</p>
          </div>
          <div className="mt-2 md:mt-5 text-base lg:text-2xl flex items-start">
            <FaClipboardCheck className="shrink-0 text-primary mr-2 relative top-1" />
            <p>Работаю на результат</p>
          </div>
          <div className="mt-2 md:mt-5 text-base lg:text-2xl flex items-start">
            <FaClipboardCheck className=" shrink-0 text-primary mr-2 relative top-1" />
            <p>Делаю жизнь людей счастливой и гармоничной</p>
          </div>

          <div className="flex justify-center md:justify-start mt-5">
            <a
              href="whatsapp://send?phone=79670377183"
              target="_blank"
              rel="noreferrer"
              className="glare-button btn btn-primary rounded-full xl:mt-5 flex items-center "
            >
              Записаться на консультацию в Whatsapp
            </a>
          </div>
          <div className="pt-6 font-light text-lg  lg:text-xl  grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
            <MyAccordion title={'Cпециалист по психокатализу'} id={1}>
              <p className="p-3 bg-primary-content rounded-lg">
                Cпециалист по психокатализу
              </p>
            </MyAccordion>
            <MyAccordion title={'Игропрактик'} id={2}>
              <p className="p-3 bg-primary-content rounded-lg">Игропрактик</p>
            </MyAccordion>
            <MyAccordion title={'Ведущая тренингов'} id={3}>
              <p className="p-3 bg-primary-content rounded-lg">
                Ведущая тренингов
              </p>
            </MyAccordion>
            <MyAccordion title={'Автор тихник МАК'} id={6}>
              <p className="p-3 bg-primary-content rounded-lg">
                Автор тихник МАК
              </p>
            </MyAccordion>
            <MyAccordion
              title={
                'Специалист по работе с метафорическими ассоциативными картами (МАК)'
              }
              id={4}
            >
              <p className="p-3 bg-primary-content rounded-lg">
                Специалист по работе с метафорическими ассоциативными картами
                (МАК)
              </p>
            </MyAccordion>
            <MyAccordion
              title={'Ведущая 15 психологических трансформационных игр'}
              id={5}
            >
              <p className="p-3 bg-primary-content rounded-lg">
                Ведущая 15 психологических трансформационных игр
              </p>
            </MyAccordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
