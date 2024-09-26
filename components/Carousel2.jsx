import Image from 'next/image'
import diplom1 from '../images/sertificates/diplom1.jpg'
import diplom2 from '../images/sertificates/diplom2.jpg'
import diplom3 from '../images/sertificates/diplom3.jpg'
import diplom4 from '../images/sertificates/diplom4.jpg'
import diplom5 from '../images/sertificates/diplom5.jpg'
import diplom6 from '../images/sertificates/diplom6.jpg'
import diplom7 from '../images/sertificates/diplom7.jpg'

const Carousel2 = () => {
  return (
    <div className="carousel rounded-box">
      <div className="carousel-item">
        <Image src={diplom1} alt="Burger" />
      </div>
      <div className="carousel-item">
        <Image src={diplom1} alt="Burger" />
      </div>
      <div className="carousel-item">
        <Image src={diplom1} alt="Burger" />
      </div>
      <div className="carousel-item">
        <Image src={diplom1} alt="Burger" />
      </div>
      <div className="carousel-item">
        <Image src={diplom1} alt="Burger" />
      </div>
      <div className="carousel-item">
        <Image src={diplom1} alt="Burger" />
      </div>
      <div className="carousel-item">
        <Image src={diplom1} alt="Burger" />
      </div>
    </div>
  )
}

export default Carousel2
