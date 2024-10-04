import Image from 'next/image'
import img from '@/images/bottom6.png'
const BottomImg = () => {
  return (
    <div className="bg-base-200 pt-10 md:pt-14 lg:pt-16 xl:pt-20">
      <Image src={img} alt="img" className="w-full" />
    </div>
  )
}

export default BottomImg
