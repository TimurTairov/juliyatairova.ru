import { FaPhoneVolume } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaTelegram } from 'react-icons/fa'
import { AiTwotoneMail } from 'react-icons/ai'
import { BsPhoneVibrate } from 'react-icons/bs'

const Contacts = () => {
  return (
    <div id="contacts" className="md:mt-20 mb-10 bg-base-100">
      <div className="max-w-screen-xl mx-auto ">
        <div className="flex justify-center">
          <BsPhoneVibrate className="h-20 w-20 text-primary border-2 border-primary p-2 rounded-full" />
        </div>
        <h2 className="mt-10 w-full text-center text-3xl font-light text-primary">
          Как можно со мной связаться
        </h2>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-col-4 gap-10 mx-5 md:mx-10">
          <div className="flex items-center">
            <IoLogoWhatsapp className="shrink-0 h-7 w-7 text-green-400 mr-2" />
            <a
              href="whatsapp://send?phone=79670377183"
              target="_blank"
              rel="noreferrer"
              className="btn "
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
              className="btn"
            >
              Написать мне в телеграм
            </a>
          </div>
          <div className="flex items-center">
            <FaPhoneVolume className="shrink-0 h-7 w-7 mr-2 text-primary" />
            <p className="btn">Позвонить +79670377183</p>
          </div>
          <div className="flex items-center">
            <AiTwotoneMail className="shrink-0 h-7 w-7 mr-2 text-red-400" />
            <p className="btn">E-mail: juliav471@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
