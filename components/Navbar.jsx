import { IoLogoWhatsapp } from 'react-icons/io'
import { FaTelegram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
      <nav className="max-w-screen-xl mx-auto navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost xl:hidden pr-1 md:pr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-7 md:w-7"
                fill="none"
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
              className="menu menu-sm md:menu-md lg:menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
                <a href="#contacts">Контакты</a>
              </li>
            </ul>
          </div>
          <a
            href="/"
            className="btn btn-ghost text-xs md:text-base text-primary flex flex-col p-0 md:p-2"
          >
            Психолог Юлия Таирова
          </a>
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
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
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
    </>
  )
}

export default Navbar
