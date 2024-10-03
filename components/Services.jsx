import { MdOutlineLiveHelp } from 'react-icons/md'

const Services = () => {
  return (
    <div id="services" className="bg-base-200 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center">
          <MdOutlineLiveHelp className="h-20 w-20 text-primary border-2 border-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-500" />
        </div>
        <h2 className="mt-5 w-full text-center text-3xl font-medium text-primary">
          Чем могу Вам помочь
        </h2>
        <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 mx-5 md:mx-10 gap-5">
          <li className="">
            <p className="font-light p-3 bg-primary-content rounded-lg">
              Психологические травмы
            </p>
          </li>
          <li className="">
            <p className="font-light p-3 bg-primary-content rounded-lg">
              Эмоциональные зависимости
            </p>
          </li>
          <li className="">
            <p className="font-light p-3 bg-primary-content rounded-lg">
              Страхи, тревоги и фобии
            </p>
          </li>
          <li className="">
            <p className="font-light p-3 bg-primary-content rounded-lg">
              Обиды и разочарования
            </p>
          </li>
          <li className="">
            <p className="font-light p-3 bg-primary-content rounded-lg">
              Психологические напряжения
            </p>
          </li>
          <li className="">
            <p className="font-light p-3 bg-primary-content rounded-lg">
              Работа с ответственностью
            </p>
          </li>
          <li className="">
            <p className="font-light p-3 bg-primary-content rounded-lg">
              Любовь и отношения
            </p>
          </li>
          <li className="">
            <p className="font-light p-3 bg-primary-content rounded-lg">
              Любовь к себе. Принятие себя.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Services
