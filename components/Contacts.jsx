import { FaPhoneVolume } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaTelegram } from 'react-icons/fa'
import { AiTwotoneMail } from 'react-icons/ai'
import { BsPhoneVibrate } from 'react-icons/bs'

const Contacts = () => {
  return (
    <div id="contacts" className="bg-base-200 py-10 md:py-14 lg:py-16 xl:py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center ">
        <div className="flex justify-center">
          <BsPhoneVibrate className="h-20 w-20 text-primary border-2 border-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-500" />
        </div>
        <h2 className="mt-5 w-full text-center text-3xl font-medium text-primary">
          Как со мной связаться
        </h2>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-col-4 gap-5">
          <div className="flex items-center">
            <IoLogoWhatsapp className="shrink-0 h-7 w-7 text-green-400 mr-2" />
            <a
              href="whatsapp://send?phone=79670377183"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-200 hover:bg-gray-300 px-4 py-3 rounded-md"
            >
              Написать мне в whatsapp
            </a>
          </div>
          <div className="flex items-center">
            <FaTelegram className="shrink-0 h-7 w-7 mr-2 text-sky-400" />
            <a
              href="https://t.me/juliya_tairova"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-200 hover:bg-gray-300 px-4 py-3 rounded-md"
            >
              Написать мне в телеграм
            </a>
          </div>
          <div className="flex items-center">
            <FaPhoneVolume className="shrink-0 h-7 w-7 mr-2 text-primary" />
            <a
              href="tel:+79670377183"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-200 hover:bg-gray-300 px-4 py-3 rounded-md"
            >
              Позвонить +79670377183
            </a>
          </div>
          <div className="flex items-center">
            <AiTwotoneMail className="shrink-0 h-7 w-7 mr-2 text-red-400" />
            <a
              href="mailto:juliav471@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-200 hover:bg-gray-300 px-4 py-3 rounded-md"
            >
              E-mail: juliav471@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
