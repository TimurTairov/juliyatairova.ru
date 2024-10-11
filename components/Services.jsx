import Image from 'next/image'
import { MdOutlineLiveHelp } from 'react-icons/md'
import mainPng from '@/images/psy/7.png'
import img1 from '@/images/psy/8.png'
import img2 from '@/images/psy/9.png'
import img3 from '@/images/psy/11.png'
import img4 from '@/images/psy/13.png'
import img5 from '@/images/psy/6.png'
import img6 from '@/images/psy/5.png'
import img7 from '@/images/psy/4.png'
import img8 from '@/images/psy/15.png'

const Services = () => {
  return (
    <div id="services" className="bg-base-200 py-10 md:py-14 lg:py-16 xl:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center">
          <MdOutlineLiveHelp className="h-20 w-20 text-primary border-2 border-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-500" />
        </div>
        <h2 className="mt-5 w-full text-center text-3xl font-medium text-primary">
          Чем могу Вам помочь
        </h2>
        <div className="flex justify-center py-5">
          <Image
            src={mainPng}
            alt="psy"
            className="mt-5 border-s-8 border-e-8 p-4 border-primary size-72 md:size-96 rounded-full"
          />
        </div>

        <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 px-2">
          <li className="bg-violet-500 text-white flex items-center justify-between p-5 rounded-xl">
            <Image
              src={img5}
              alt="img"
              className="size-20 opacity-70 hover:opacity-100"
            />
            <p className="w-full p-3 md:text-lg text-right">
              Психологические травмы
            </p>
          </li>
          <li className="bg-violet-500 text-white flex p-5 rounded-xl">
            <Image
              src={img2}
              alt="img"
              className="size-20 opacity-70 hover:opacity-100"
            />
            <p className="w-full p-3 md:text-lg text-right">
              Эмоциональные зависимости
            </p>
          </li>
          <li className="bg-violet-500 text-white flex p-5 rounded-xl">
            <Image
              src={img3}
              alt="img"
              className="size-20 opacity-50 hover:opacity-100"
            />
            <p className="w-full p-3 md:text-lg text-right">
              Страхи, тревоги и фобии
            </p>
          </li>
          <li className="bg-violet-500 text-white flex p-5 rounded-xl">
            <Image
              src={img4}
              alt="img"
              className="size-20 opacity-70 hover:opacity-100"
            />
            <p className="w-full p-3 md:text-lg text-right">
              Обиды и разочарования
            </p>
          </li>
          <li className="bg-violet-500 text-white flex p-5 rounded-xl">
            <Image
              src={img1}
              alt="img"
              className="size-20 opacity-70 hover:opacity-100"
            />
            <p className="w-full p-3 md:text-lg text-right">
              Психологические напряжения
            </p>
          </li>
          <li className="bg-violet-500 text-white flex p-5 rounded-xl">
            <Image
              src={img6}
              alt="img"
              className="size-20 opacity-70 hover:opacity-100"
            />
            <p className="w-full p-3 md:text-lg text-right">
              Работа с ответственностью
            </p>
          </li>
          <li className="bg-violet-500 text-white flex p-5 rounded-xl">
            <Image
              src={img7}
              alt="img"
              className="size-20 opacity-70 hover:opacity-100"
            />
            <p className="w-full p-3 md:text-lg text-right">
              Любовь и отношения
            </p>
          </li>
          <li className="bg-violet-500 text-white flex p-5 rounded-xl">
            <Image
              src={img8}
              alt="img"
              className="size-20 opacity-70 hover:opacity-100"
            />
            <p className="w-full p-3 md:text-lg text-right">
              Любовь к себе. Принятие себя.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Services
