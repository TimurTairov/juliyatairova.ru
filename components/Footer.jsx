import { FaVk } from 'react-icons/fa6'
import { FaTelegram } from 'react-icons/fa6'
import { FaWhatsappSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-100 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a href="#osebe">О себе</a>
        <a href="#education">Образование</a>
        <a href="#diplomy">Дипломы</a>
        <a href="#services">Чем погу помочь</a>
        <a href="#price">Цены</a>
        <a href="#contacts">Контакты</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="whatsapp://send?phone=79670377183"
            target="_blank"
            rel="noreferrer"
            className="btn h-16 w-16"
          >
            <FaWhatsappSquare className="shrink-0 h-8 w-8" />
          </a>
          <a
            href="https://t.me/juliya_tairova"
            target="_blank"
            rel="noreferrer"
            className="btn h-16 w-16"
          >
            <FaTelegram className="shrink-0 h-8 w-8" />
          </a>
          <a
            href="https://vk.com/id193984061"
            target="_blank"
            rel="noreferrer"
            className="btn h-16 w-16"
          >
            <FaVk className="shrink-0 h-8 w-8" />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  )
}

export default Footer
