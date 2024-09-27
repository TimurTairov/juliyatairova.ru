import foto from '../images/myfoto.jpg'
import Image from 'next/image'
import { TbRosetteDiscountCheckFilled } from 'react-icons/tb'
import { BiSolidDonateHeart } from 'react-icons/bi'

const Hero = () => {
  return (
    <div id="osebe" className="hero bg-base-200 px-2">
      <div className="hero-content flex-col lg:flex-row-reverse my-10">
        <Image
          src={foto}
          alt="Мое фото"
          className="max-w-xs xl:max-w-sm rounded-3xl shadow-xl shadow-slate-600"
        />
        <div className="mt-5 lg:mr-10">
          <div className="text-slate-500 text-xl lg:text-2xl font-light flex items-center justify-center gap-2">
            <h2>Юлия Таирова</h2>
            <TbRosetteDiscountCheckFilled className="text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl mt-5 font-light text-primary">
            Ваш личный психолог
          </h1>
          <h2 className="mt-5 lg:text-2xl flex items-center font-light">
            Решаю Ваши псхилогические проблемы. Сделаю Вашу жизнь счастливой и
            гармоничной.
          </h2>
          <div className="py-6 font-light text-base grid grid-cols-1 xl:grid-cols-2 gap-5">
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
          <div className="flex justify-center">
            <a
              href="whatsapp://send?phone=79670377183"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary xl:mt-5"
            >
              Записаться на консультацию
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
