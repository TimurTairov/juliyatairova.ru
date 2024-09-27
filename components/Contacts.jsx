import { FaPhoneVolume } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaTelegram } from 'react-icons/fa'
import { AiTwotoneMail } from 'react-icons/ai'

const Contacts = () => {
  return (
    <div id="contacts">
      <div className="max-w-screen-xl mx-auto my-10 ">
        <h2 className="w-full text-center text-3xl font-light text-primary">
          Как можно со мной связаться
        </h2>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-col-4 gap-5 mx-5 md:mx-10">
          <div className="flex items-center">
            <FaPhoneVolume className="shrink-0 mr-2 text-primary" />
            <p>+79670377183</p>
          </div>
          <div className="flex items-center">
            <AiTwotoneMail className="shrink-0 mr-2 text-red-400" />
            <p>juliav471@gmail.com</p>
          </div>
          <div className="flex items-center">
            <IoLogoWhatsapp className="shrink-0 text-green-400 mr-2" />
            <a
              href="whatsapp://send?phone=79670377183"
              target="_blank"
              rel="noreferrer"
              className="text-primary"
            >
              Написать мне в whatsapp
            </a>
          </div>
          <div className="flex items-center">
            <FaTelegram className="shrink-0 mr-2 text-sky-400" />
            <a
              href="https://t.me/juliya_tairova"
              target="_blank"
              rel="noreferrer"
              className="text-primary"
            >
              Написать мне в телеграм
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
