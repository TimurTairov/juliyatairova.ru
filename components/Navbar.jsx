import { IoLogoWhatsapp } from 'react-icons/io'
import { FaTelegram } from 'react-icons/fa'
import { FaPhoneVolume } from 'react-icons/fa6'
import { GiWatch } from 'react-icons/gi'
import { GiPhone } from 'react-icons/gi'
import { GiRotaryPhone } from 'react-icons/gi'

const Navbar = () => {
  return (
    <div className="bg-base-100 z-50">
      <nav className="max-w-screen-xl mx-auto navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost xl:hidden pl-1 pr-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 sm:h-7 sm:w-7 md:h-10 md:w-10"
                fill="text-primary"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md md:menu-md lg:menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#osebe">О себе</a>
              </li>
              <li>
                <a href="#education">Образование</a>
              </li>
              <li>
                <a href="#diplomy">Дипломы</a>
              </li>
              <li>
                <a href="#services">Чем погу помочь</a>
              </li>
              <li>
                <a href="#price">Цены</a>
              </li>
              <li>
                <a href="#contacts">Контакты</a>
              </li>
            </ul>
          </div>
          <div className="caveat-font btn h-16 flex justify-start">
            <a href="/" className="text-xl text-primary flex flex-col">
              Психолог
              <div className="badge text-xl badge-secondary p-3">
                Юлия Таирова
              </div>
            </a>
          </div>
        </div>
        <div className="navbar-center hidden xl:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#osebe">О себе</a>
            </li>
            <li>
              <a href="#education">Образование</a>
            </li>
            <li>
              <a href="#diplomy">Дипломы</a>
            </li>
            <li>
              <a href="#services">Чем погу помочь</a>
            </li>
            <li>
              <a href="#price">Цены</a>
            </li>
            <li>
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="hidden md:flex flex-col items-center">
            <div className="flex items-center">
              <GiRotaryPhone className="mr-1 font-medium" />
              <p>+79670377183</p>
            </div>
            <div className="w-full flex items-center">
              <GiWatch className=" shrink-0 mr-1" />
              <p className="text-sm w-full text-right">c 9:00 до 20:00</p>
            </div>
          </div>
          <a
            href="whatsapp://send?phone=79670377183"
            target="_blank"
            rel="noreferrer"
            className="btn h-16 w-16 ml-2"
          >
            <IoLogoWhatsapp className="h-16 w-16 text-green-400" />
          </a>
          <a
            href="https://t.me/juliya_tairova"
            target="_blank"
            rel="noreferrer"
            className="btn h-16 w-16 ml-2"
          >
            <FaTelegram className="h-16 w-16 text-sky-400" />
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
