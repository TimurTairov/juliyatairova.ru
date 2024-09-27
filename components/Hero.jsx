import foto from '../images/myfoto.jpg'
import Image from 'next/image'
import { TbRosetteDiscountCheckFilled } from 'react-icons/tb'
import { FaClipboardCheck } from 'react-icons/fa'

const Hero = () => {
  return (
    <div id="osebe" className="hero bg-base-200 px-2">
      <div className="hero-content flex-col lg:flex-row-reverse md:my-10">
        <div>
          <Image
            src={foto}
            alt="Мое фото"
            className="max-w-40 md:max-w-60 lg:max-w-md rounded-3xl shadow-xl shadow-slate-600"
          />
          <div className="text-slate-600 text-xl font-light flex items-center justify-center gap-2 mt-5">
            <h2>Юлия Таирова</h2>
            <TbRosetteDiscountCheckFilled className="text-primary" />
          </div>
        </div>

        <div className="md:mt-5 lg:mr-10">
          <h1 className="mt-5 text-2xl md:text-4xl lg:text-7xl md:mt-5 text-primary font-semibold">
            Помощь психолога
          </h1>
          <div className="mt-3 md:mt-5 text-base lg:text-2xl flex items-start">
            <FaClipboardCheck className="shrink-0 text-primary mr-2 relative top-1" />
            <p>Решаю Ваши псхилогические проблемы</p>
          </div>
          <div className="mt-2 md:mt-5 text-base lg:text-2xl flex items-start">
            <FaClipboardCheck className="shrink-0 text-primary mr-2 relative top-1" />
            <p>Работаю на результат</p>
          </div>
          <div className="mt-2 md:mt-5 text-base lg:text-2xl flex items-start">
            <FaClipboardCheck className=" shrink-0 text-primary mr-2 relative top-1" />
            <p>Делаю жизнь людей счастливой и гармоничной</p>
          </div>

          <div className="flex justify-center mt-5">
            <a
              href="whatsapp://send?phone=79670377183"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary text-lg  xl:mt-5"
            >
              Записаться на консультацию
            </a>
          </div>
          <div className="py-6 font-light text-lg  lg:text-xl  grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
            <p className="p-3 bg-violet-100 rounded-lg">
              Cпециалист по психокатализу
            </p>
            <p className="p-3 bg-violet-100 rounded-lg">Игропрактик</p>
            <p className="p-3 bg-violet-100">Ведущая тренингов</p>
            <p className="p-3 bg-violet-100 rounded-lg">Автор техник по МАК</p>
            <p className="p-3 bg-violet-100 rounded-lg">
              Специалист по работе с метафорическими ассоциативными картами
              (МАК)
            </p>
            <p className="p-3 bg-violet-100">
              Ведущая 15 психологических трансформационных игр
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
