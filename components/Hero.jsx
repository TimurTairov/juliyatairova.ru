import foto from '../images/myfoto.jpg'
import Image from 'next/image'
import { TbRosetteDiscountCheckFilled } from 'react-icons/tb'
import { FaClipboardCheck } from 'react-icons/fa'
import MyAccordion from '@/components/MyAccordion'

const Hero = () => {
  return (
    <div id="osebe" className="hero bg-base-200 px-3">
      <div className="mt-10 flex mx-auto max-w-7xl flex-col lg:flex-row-reverse">
        <div className="flex flex-col items-center justify-center ">
          <Image
            src={foto}
            alt="Мое фото"
            className="max-w-40 md:max-w-60 lg:max-w-md rounded-3xl shadow-xl shadow-indigo-300"
          />
          <div className="max-w-40 md:max-w-60 lg:max-w-md text-slate-600 text-xl font-light flex items-center justify-center gap-2 mt-5">
            <h2 className="badge badge-primary p-2 md:p-3 hover:scale-150 transition-transform duration-700">
              Юлия Таирова
            </h2>
            <TbRosetteDiscountCheckFilled className="text-primary h-7 w-7" />
          </div>
        </div>

        <div className="mt-10 lg:mt-0 lg:mr-5 xl:mr-10 flex flex-col justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-7xl text-primary font-semibold text-center">
              Помощь психолога
            </h1>
            <div className="mt-3 md:mt-5 text-base lg:text-2xl flex items-start">
              <FaClipboardCheck className="shrink-0 text-primary mr-2 relative top-1 hover:scale-150 transition-transform duration-700" />
              <p>Десять лет успешной работы</p>
            </div>
            <div className="mt-2 md:mt-5 text-base lg:text-2xl flex items-start">
              <FaClipboardCheck className="shrink-0 text-primary mr-2 relative top-1 hover:scale-150 transition-transform duration-700" />
              <p>Работаю на результат</p>
            </div>
            <div className="mt-2 md:mt-5 text-base lg:text-2xl flex items-start">
              <FaClipboardCheck className=" shrink-0 text-primary mr-2 relative top-1 hover:scale-150 transition-transform duration-700" />
              <p>Помогаю людям быть счастливее</p>
            </div>
          </div>

          <div className="flex justify-center md:justify-start mt-5">
            <a
              href="https://wa.me/79670377183?text=Юлия+здравствуйте%2C+записываюсь+к+вам+на+бесплатную+консультацию."
              target="_blank"
              rel="noreferrer"
              className="glare-button btn text-center btn-primary rounded-full xl:mt-5 flex items-center text-xs md:text-lg lg:text-xl xl:text-3xl  hover:bg-white hover:text-primary transition-colors duration-700 px-3 md:px-6"
            >
              Запишитесь на бесплатную консультацию
            </a>
          </div>

          <div className="mt-6 font-light text-lg lg:text-xl  xl:text-2xl  grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
            <MyAccordion title={'Cпециалист по психокатализу'} id={1}>
              <p className="p-3 bg-indigo-100 text-base text-indigo-950 rounded-md">
                Психокатализ - это эффективный метод регуляции психического
                состояния, основанный на погружении внимания в телесные
                ощущения. Этот метод помогает быстро решать, сложные проблемы.
                Эффект заметен уже после первого сеанса.
              </p>
            </MyAccordion>
            <MyAccordion title={'Специалист по работе с МАК'} id={2}>
              <p className="p-3 bg-indigo-100 text-base text-indigo-950 rounded-xl">
                Метафорические ассоциативные карты (МАК)- это инструмент,
                помогающий погрузиться во внутренний мир и выразить чувства,
                страхи, ожидания, мечты, а также найти ответы на вопросы.
              </p>
            </MyAccordion>
            <MyAccordion title={'Ведущая тренингов'} id={3}>
              <p className="p-3 bg-indigo-100 text-base text-indigo-950 rounded-xl">
                Провожу следующие тренинг марафоны:
                <br />
                <br /> 1. С благодарностью к жизни
                <br /> 2. Позволь себе мечтать
                <br /> 3. Путь к цели
              </p>
            </MyAccordion>
            <MyAccordion title={'Игропрактик'} id={4}>
              <p className="p-3 bg-indigo-100 text-base text-indigo-950 rounded-xl">
                Провожу психологические трансформационные игры: <br />
                <br /> 1. Карта внутреннего мира
                <br /> 2. Подсказки Вселенной
                <br /> 3. Жизнь как дом
                <br /> 4. Живые чувства
                <br /> 5. Любовь и романтика
                <br /> 6. Раскрытие потенциала
                <br /> 7. Уверенность и смелость
                <br /> 8. Лучшее решение
                <br /> 9. Изобилие и деньги
                <br /> 10. Умиротворение и гармония
                <br /> 11. Здоровье и энергия
                <br /> 12. Свое окружение
                <br /> 13. Фокусировка на возможностях
              </p>
            </MyAccordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
