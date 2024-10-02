import Image from 'next/image'
import diploma from '@/images/1Diplom.svg'
import education from '@/images/1Education.svg'
import { TbSchool } from 'react-icons/tb'
import { GiDiploma } from 'react-icons/gi'

const Education = () => {
  return (
    <div
      id="education"
      className="hero bg-base-200 px-2 flex items-center justify-center"
    >
      <div className="mx-auto max-w-7xl flex-col lg:flex-row-reverse md:my-10">
        <section>
          <div className="max-w-screen-xl mx-auto flex gap-10 flex-col xl:flex-row my-5">
            <div className="flex flex-col  gap-5 ">
              <div className="flex justify-center">
                <TbSchool className="h-20 w-20 text-primary border-2 border-primary p-2 rounded-full" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-3xl text-center font-medium text-primary">
                  Образование
                </h2>
                <ul>
                  <li className="mt-5 flex items-start">
                    <p className="font-light p-3 bg-primary-content rounded-lg">
                      Междисциплинарный учебно-исследовательский центр (МУИЦ).
                      Факультет практической психологии, психотерапии и
                      социальной работы.
                    </p>
                  </li>
                  <li className="mt-5 flex items-start">
                    <p className="font-light p-3 bg-primary-content rounded-lg">
                      Институт консультирования и системных решений.
                      Психокатализ: саморегуляция для здоровья и успеха.
                    </p>
                  </li>
                  <li className="w-full mt-5 flex items-start">
                    <p className="w-full font-light p-3 bg-primary-content rounded-lg">
                      Курсы повышения квалификации Евгении Баксан:
                      <br /> - обучение работе с метафорическими ассоциативными
                      картами с Евгенией Баксан
                      <br /> - обучение ведению трансформационной
                      психологической игры с Евгенией Баксан.
                    </p>
                  </li>
                  <li className="w-full mt-5 flex items-start">
                    <p className="w-full font-light p-3 bg-primary-content rounded-lg">
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
                <GiDiploma className="h-20 w-20 text-primary border-2 border-primary p-2 rounded-full" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-3xl text-center font-medium text-primary">
                  Дипломы
                </h2>
                <ul>
                  <li className="mt-5 flex items-start">
                    <p className="font-light p-3 bg-primary-content rounded-lg">
                      Диплом практического психолога. Холистическая (целостная)
                      практическая психология.
                    </p>
                  </li>
                  <li className="mt-5 flex items-start">
                    <p className="font-light p-3 bg-primary-content rounded-lg">
                      Удостоверение о повышении квалификации. Психокатализ:
                      саморегуляция для здоровья и успеха.
                    </p>
                  </li>
                  <li className="mt-5 flex items-start">
                    <p className="font-light p-3 bg-primary-content rounded-lg">
                      Сертификат о прохождении курса: соматопсихология и
                      психокатализ.
                    </p>
                  </li>
                  <li className="mt-5 flex items-start">
                    <p className="font-light p-3 bg-primary-content rounded-lg">
                      Сертификат о прохождении курса: трансфрмационная
                      психологическая игра "Подсказки Вселенной".
                    </p>
                  </li>
                  <li className="mt-5 flex items-start">
                    <p className="font-light p-3 bg-primary-content rounded-lg">
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
    </div>
  )
}

export default Education
