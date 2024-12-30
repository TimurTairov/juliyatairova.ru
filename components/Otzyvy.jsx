import { TbPencilHeart } from 'react-icons/tb'
import { BiSolidPencil } from 'react-icons/bi'

const Otzyvy = () => {
  return (
    <div id="otzyvy" className="bg-base-200 py-10 md:py-14 lg:py-16 xl:py-20">
      <div className="flex justify-center">
        <BiSolidPencil className="h-20 w-20 text-primary border-2 p-1.5 border-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-500" />
      </div>
      <h2 className="mt-5 w-full text-center text-3xl font-medium text-primary">
        Отзывы
      </h2>
      <div className="flex justify-center px-2">
        <div className="mt-5 max-w-6xl flex flex-col">
          <p className="">
            Хочу выразить огромную благодарность Юле за её профессионализм и
            поддержку! Юля — изумительный специалист, с ней чувствуешь себя
            надёжно и комфортно. Лично для меня встреча с ней была практически
            спасением жизни) Мне очень нравится её индивидуальный подход, Юля
            работает с разными техниками и методами терапии и выбирает тот,
            который лучше всего подойдет в конкретной ситуации и конкретному
            человеку. Это позволяет решать какие-то внутренние вопросы без
            необходимости ходить на терапию годами с одной и той же нерешенной
            проблемой. И наша совместная работа действительно эффективна) Что
            для меня еще очень ценно, Юля по сути даёт мне в руки инструменты,
            разные техники самопомощи. Она не просто помогает решить внутреннюю
            проблему, но и учит выходить из сложной ситуации самостоятельно. Не
            создаёт зависимость внутреннего ребенка от взрослого психолога, а
            нежно помогает повзрослеть самому. Очень рекомендую её всем, кто
            ищет надежного, чуткого и профессионального психолога)
          </p>
          <p className="text-right">Ева</p>

          <iframe
            src="https://rutube.ru/play/embed/b5931df1ab7ab57132cb190181c86db4"
            frameBorder="0"
            allow="clipboard-write; autoplay"
            webkitAllowFullScreen
            mozallowfullscreen
            allowFullScreen
            className="mt-5 w-full h-96"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Otzyvy
