import { FaVk } from 'react-icons/fa6'
import { FaTelegram } from 'react-icons/fa6'
import { FaWhatsappSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-100 text-base-content rounded p-10">
      <nav className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-4">
        <a
          href="#osebe"
          className="hover:text-indigo-600 hover:bg-gray-200 p-2 rounded-md"
        >
          О себе
        </a>
        <a
          href="#education"
          className="hover:text-indigo-600 hover:bg-gray-200 p-2 rounded-md"
        >
          Образование
        </a>
        <a
          href="#diplomy"
          className="hover:text-indigo-600 hover:bg-gray-200 p-2 rounded-md"
        >
          Дипломы
        </a>
        <a
          href="#services"
          className="hover:text-indigo-600 hover:bg-gray-200 p-2 rounded-md"
        >
          Чем погу помочь
        </a>
        <a
          href="#otzyvy"
          className="hover:text-indigo-600 hover:bg-gray-200 p-2 rounded-md"
        >
          Отзывы
        </a>
        <a
          href="#price"
          className="hover:text-indigo-600 hover:bg-gray-200 p-2 rounded-md"
        >
          Цены
        </a>
        <a
          href="#contacts"
          className="hover:text-indigo-600 hover:bg-gray-200 p-2 rounded-md"
        >
          Контакты
        </a>
      </nav>
      <nav>
        <div className="grid grid-cols-3 gap-4">
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
