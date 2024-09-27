import Image from 'next/image'
import diploma from '@/images/1Diplom.svg'
import education from '@/images/1Education.svg'
import { TbSchool } from 'react-icons/tb'
import { GiDiploma } from 'react-icons/gi'

const Education = () => {
  return (
    <div
      id="education"
      className="hero bg-sky-50 px-2 flex items-center justify-center"
    >
      <div className="hero-content flex-col lg:flex-row-reverse my-10">
        <section>
          <div className="max-w-screen-xl mx-auto flex gap-10 flex-col xl:flex-row my-5">
            <div className="flex flex-col md:flex-row gap-5 lg:gap-10">
              <div className="flex justify-center">
                <TbSchool className="h-20 w-20 text-primary border-2 border-primary p-2 rounded-full" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-3xl text-center lg:text-start font-light text-primary">
                  Образование
                </h2>
                <ul>
                  <li className="mt-5 flex items-start">
                    <p className="font-light p-3 bg-violet-100 rounded-lg">
                      Междисциплинарный учебно-исследовательский центр (МУИЦ).
                      Факультет практической психологии, психотерапии и
                      социальной работы.
                    </p>
                  </li>
                  <li className="mt-5 flex items-start">
                    <p className="font-light p-3 bg-violet-100 rounded-lg">
                      Институт консультирования и системных решений.
                      Психокатализ: саморегуляция для здоровья и успеха.
                    </p>
                  </li>
                  <li className="mt-5 flex items-start">
                    <p className="font-light p-3 bg-violet-100 rounded-lg">
                      Курсы повышения квалификации: - здесь нужно подробно
                      расписать
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 lg:gap-10">
              <div className="flex justify-center">
                <GiDiploma className="h-20 w-20 text-primary border-2 border-primary p-2 rounded-full" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-3xl text-center lg:text-start font-light text-primary">
                  Дипломы
                </h2>
                <ul>
                  <li className="mt-5 flex items-start">
                    <p className="font-light p-3 bg-violet-100 rounded-lg">
                      Диплом практического психолога. Холистическая (целостная)
                      практическая психология.
                    </p>
                  </li>
                  <li className="mt-5 flex items-start">
                    <p className="font-light p-3 bg-violet-100 rounded-lg">
                      Удостоверение о повышении квалификации. Психокатализ:
                      саморегуляция для здоровья и успеха.
                    </p>
                  </li>
                  <li className="mt-5 flex items-start">
                    <p className="font-light p-3 bg-violet-100 rounded-lg">
                      Сертификат о прохождении курса: соматопсихология и
                      психокатализ.
                    </p>
                  </li>
                  <li className="mt-5 flex items-start">
                    <p className="font-light p-3 bg-violet-100 rounded-lg">
                      Сертификат о прохождении курса: трансфрмационная
                      психологическая игра "Подсказки Вселенной".
                    </p>
                  </li>
                  <li className="mt-5 flex items-start">
                    <p className="font-light p-3 bg-violet-100 rounded-lg">
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
