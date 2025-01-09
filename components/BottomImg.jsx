import Image from 'next/image'
import img from '@/images/bottom6.png'
import img1 from '@/images/vector.svg'
const BottomImg = () => {
  return (
    <div className="bg-base-200">
      <div className="flex justify-end">
        <Image src={img1} alt="spiral" className="w-1/2 opacity-50 z-0" />
      </div>
      <Image src={img} alt="img" className="w-full" />
    </div>
  )
}

export default BottomImg
