import Carousel from '@/components/Carousel'
import { TbSchool } from 'react-icons/tb'
import { GiDiploma } from 'react-icons/gi'

const Education = () => {
  return (
    <div
      id="education"
      className="hero bg-base-200 px-2 flex flex-col items-center justify-center py-10 md:py-14 lg:py-16 xl:py-20"
    >
      {/* <div className="w-full flex justify-end">
        <Image
          src={img1}
          alt="vector"
          className="w-1/2 relative right-0 top-0 opacity-50 z-0"
        />
      </div> */}
      <div className="mx-auto max-w-7xl flex-col lg:flex-row-reverse my-5 md:my-10">
        <section>
          <div className="max-w-screen-xl mx-auto flex gap-10 flex-col xl:flex-row my-5">
            <div className="flex flex-col gap-5 ">
              <div className="flex justify-center">
                <TbSchool className="h-20 w-20 text-primary border-2 border-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-500" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-3xl text-center font-medium text-primary">
                  Образование
                </h2>
                <ul>
                  <li className="w-full mt-5 flex items-start">
                    <p className="w-full p-5 bg-violet-500 text-white rounded-lg">
                      Междисциплинарный учебно-исследовательский центр (МУИЦ).
                      Факультет практической психологии, психотерапии и
                      социальной работы.
                    </p>
                  </li>
                  <li className="w-full mt-5 flex items-start">
                    <p className="w-full p-5 bg-violet-500 text-white  rounded-lg">
                      Институт консультирования и системных решений.
                      Психокатализ: саморегуляция для здоровья и успеха.
                    </p>
                  </li>
                  <li className="w-full mt-5 flex items-start">
                    <p className="w-full p-5 bg-violet-500 text-white  rounded-lg">
                      Курсы повышения квалификации Евгении Баксан:
                      <br /> - обучение работе с метафорическими ассоциативными
                      картами с Евгенией Баксан
                      <br /> - обучение ведению трансформационной
                      психологической игры с Евгенией Баксан.
                    </p>
                  </li>
                  <li className="w-full mt-5 flex items-start">
                    <p className="w-full p-5 bg-violet-500 text-white  rounded-lg">
                      Центр психологии и тренинга Марии Минаковой: <br />-
                      Работа психолога с темой "Поиск Предназначения"
                      <br />- "МАК. Универсальные техники и лучшие колоды"
                      <br />- "Экстренная помощь психолога в чрезвычайной
                      ситуации"
                      <br />- "Работа с темами: Любовь к себе. Принятие себя."
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex justify-center">
                <GiDiploma className="h-20 w-20 text-primary border-2 border-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-500" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-3xl text-center font-medium text-primary">
                  Дипломы
                </h2>
                <ul>
                  <li className=" mt-5 flex items-start">
                    <p className="w-full p-5 bg-violet-500 text-white  rounded-lg">
                      Диплом практического психолога. Холистическая (целостная)
                      практическая психология.
                    </p>
                  </li>
                  <li className="mt-5 flex items-start">
                    <p className="w-full p-5 bg-violet-500 text-white  rounded-lg">
                      Удостоверение о повышении квалификации. Психокатализ:
                      саморегуляция для здоровья и успеха.
                    </p>
                  </li>
                  <li className="mt-5 flex items-start">
                    <p className="w-full p-5 bg-violet-500 text-white  rounded-lg">
                      Сертификат о прохождении курса: соматопсихология и
                      психокатализ.
                    </p>
                  </li>
                  <li className="mt-5 flex items-start">
                    <p className="w-full p-5 bg-violet-500 text-white  rounded-lg">
                      Сертификат о прохождении курса: трансфрмационная
                      психологическая игра "Подсказки Вселенной".
                    </p>
                  </li>
                  <li className="mt-5 flex items-start">
                    <p className="w-full p-5 bg-violet-500 text-white  rounded-lg">
                      Сертификат о прохождении курса: работа с метафорическими
                      ассоциативными картами.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Carousel />
    </div>
  )
}

export default Education
