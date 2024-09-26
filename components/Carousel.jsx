'use client'
import Image from 'next/image'
import ImageGallery from 'react-image-gallery'

const Carousel = () => {
  const settings = {
    showBullets: false,
    showIndex: false,
    slideDuration: 700,
    slideInterval: 3000,
    showFullscreenButton: true,
    lazyLoad: true,
    showThumbnails: false,
  }

  const images = [
    {
      original:
        'https://sun9-65.userapi.com/impg/fQWKSuUb5ac-LwPpMAUCePmH82YiBLWStdTYgQ/uq4k3Gq7lTc.jpg?size=2224x1556&quality=95&sign=8085fcb61189bebc35aec39b42fe39c7&type=album',
    },
    {
      original:
        'https://sun9-55.userapi.com/impg/j4kGx6ZuuRgZRK5INcs2Oi9lg9MyyG40FuQ0lg/TG9yfC7Wa3A.jpg?size=2192x1548&quality=95&sign=543ffd72efd6c9c292369b71cb48feb8&type=album',
    },
    {
      original:
        'https://sun9-12.userapi.com/impg/z-tbQj8AfKsufofZ4rXLR-xFr6fhNLABi4HZIg/oLAUzCOYaSs.jpg?size=2256x1564&quality=95&sign=6547d0a7577ea853e3445b6e681bfae5&type=album',
    },
    {
      original:
        'https://sun9-36.userapi.com/impg/6EHeipApXVDqQ_34mE6BrZ33zcRVHmYY5ZETog/qQQEGTfni7o.jpg?size=1280x989&quality=95&sign=3f48518f17f060bc2197eec41a2f762d&type=album',
    },
    {
      original:
        'https://sun9-77.userapi.com/impg/-dmWm4XKSPv_jxs9XRDya-JfAEcMgwS_-V5R_w/pTXoH4WaaL0.jpg?size=1280x905&quality=95&sign=f1c629e81f03a66c68f529f76f85a455&type=album',
    },
    {
      original:
        'https://sun9-14.userapi.com/impg/1__DFin83SWdaxKX251A1AGSJ6rW-pwh3eam8w/rvcdqlrCooM.jpg?size=907x1280&quality=95&sign=e31b038437d15f6b272c0aa7373b5d00&type=album',
    },
    {
      original:
        'https://sun9-77.userapi.com/impg/NhqXqeENERZzbejz9L9t93RA8ClDMNggqC4kYw/BJw1dRfaGtM.jpg?size=907x1280&quality=95&sign=76a4ef1a365a8196459bb5f683f8d916&type=album',
    },
    {
      original:
        'https://sun9-79.userapi.com/impg/81SWMAUR6S_LKW7CzDBwxH3US0BNzag3AZRLJg/kEL0b4n1ZbM.jpg?size=907x1280&quality=95&sign=f2803634176cc360406fc4e4e83b6fc8&type=album',
    },
    {
      original:
        'https://sun9-29.userapi.com/impg/HKtD0wbD0pmbk2rgDNm4bwLxn8K2J4sQUWQJzw/GFaVbMTDkos.jpg?size=907x1280&quality=95&sign=6fdc83aad9dc65be48cb4091afbac290&type=album',
    },
    {
      original:
        'https://sun9-42.userapi.com/impg/2RASUyZhPgrg1goIuZgLwOfRNsdAM4t4NjqKCQ/CWa0aO3xQvg.jpg?size=1280x905&quality=95&sign=3bb0adac3388268d933edd5a8c9e4650&type=album',
    },
    {
      original:
        'https://sun9-4.userapi.com/impg/p0E_h7kiKGlCn6dPjx3NcBWebEL26cogSB5L8A/9z0mx7KIdN8.jpg?size=1280x905&quality=95&sign=cf17a4575ce6b69efef66a8d5540532b&type=album',
    },
    {
      original:
        'https://sun9-77.userapi.com/impg/SLGPkkRUGgmXqYZYMry62HsgRNhvryHsO97NtQ/CQQtcBcboLc.jpg?size=1280x905&quality=95&sign=e8600ae27d095a4d5e476c02b574f162&type=album',
    },
  ]

  return (
    <div className="max-w-screen-xl mx-auto flex items-center justify-center">
      <div className="w-full">
        <ImageGallery items={images} {...settings} />
      </div>
    </div>
  )
}

export default Carousel
