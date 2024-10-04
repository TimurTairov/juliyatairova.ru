import { PiCurrencyRubFill } from 'react-icons/pi'

const Pricing = () => {
  return (
    <div id="price" className="bg-base-200 py-10 md:py-14 lg:py-16 xl:py-20">
      <div className="flex justify-center">
        <PiCurrencyRubFill className="h-20 w-20 text-primary border-2 border-primary p-1 rounded-full hover:bg-primary hover:text-white transition-colors duration-500" />
      </div>
      <h2 className="mt-5 w-full text-center text-3xl font-medium text-primary">
        Цены
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 xl:px-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 items-end md:gap-8">
        <div className="h-[30rem] flex flex-col justify-between rounded-2xl border border-primary p-3 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-6">
          <div>
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Light
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  <s className="mr-2">2500₽</s>0₽{' '}
                </strong>

                <span className="text-sm font-medium text-gray-700">
                  / за первичную диагностику
                </span>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="shrink-0 size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> Работа 1 на 1 </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="shrink-0 size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> 30 минут сессия </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="shrink-0 size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> Конфиденциальность </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="shrink-0 size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> Онлайн </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="shrink-0 size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700">1 бесплатное тестирование</span>
              </li>
            </ul>
          </div>

          <a
            href="https://wa.me/79670377183?text=Юлия+здравствуйте%2C+хочу+к+вам+на+бесплатную+консультацию."
            target="_blank"
            rel="noreferrer"
            className="glare-button btn text-center btn-primary rounded-full xl:mt-5 flex items-center text-xs md:text-lg lg:text-xl xl:text-3xl  hover:bg-white hover:text-primary transition-colors duration-700 px-3 md:px-6"
          >
            Записаться
          </a>
        </div>

        <div className="h-[30rem] flex flex-col justify-between rounded-2xl border border-primary p-3 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-6">
          <div>
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Standart
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  5000₽
                </strong>

                <span className="text-sm font-medium text-gray-700">
                  / за одну консультацию
                </span>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="shrink-0 size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> Работа 1 на 1 </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="shrink-0 size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> 1.5 часа сессия </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="shrink-0 size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> Конфиденциальность </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="shrink-0 size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> Онлайн или оффлайн </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="shrink-0 size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> Поддержка в чате </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="shrink-0 size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700">Тестирование</span>
              </li>
            </ul>
          </div>

          <a
            href="https://wa.me/79670377183?text=Юлия+здравствуйте%2C+записываюсь+к+вам+на+платную+консультацию."
            target="_blank"
            rel="noreferrer"
            className="glare-button btn text-center btn-primary rounded-full xl:mt-5 flex items-center text-xs md:text-lg lg:text-xl xl:text-3xl  hover:bg-white hover:text-primary transition-colors duration-700 px-3 md:px-6"
          >
            Записаться
          </a>
        </div>

        <div className="h-[30rem] flex flex-col justify-between rounded-2xl border border-primary p-3 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-6">
          <div>
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Pro
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  12000₽{' '}
                </strong>

                <span className="text-sm font-medium text-gray-700">
                  / за пакет из трех консультаций
                </span>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="shrink-0 size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> Работа 1 на 1 </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="shrink-0 size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> 1.5-2 часа сессия </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="shrink-0 size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> Конфиденциальность </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="shrink-0 size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> Онлайн или оффлайн </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="shrink-0 size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> Поддержка в чате </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="shrink-0 size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700"> Поддержка по телефону </span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="shrink-0 size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-gray-700">Тестирование</span>
              </li>
            </ul>
          </div>

          <a
            href="https://wa.me/79670377183?text=Юлия+здравствуйте%2C+записываюсь+к+вам+на+блок+из+трех+консультаций."
            target="_blank"
            rel="noreferrer"
            className="glare-button btn text-center btn-primary rounded-full xl:mt-5 flex items-center text-xs md:text-lg lg:text-xl xl:text-3xl  hover:bg-white hover:text-primary transition-colors duration-700 px-3 md:px-6"
          >
            Записаться
          </a>
        </div>
      </div>
    </div>
  )
}

export default Pricing
