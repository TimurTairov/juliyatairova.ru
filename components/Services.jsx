import React from 'react'

const Services = () => {
  return (
    <div id="services" className="bg-base-100">
      <div className="max-w-screen-xl mx-auto my-10 ">
        <h2 className="w-full text-center text-3xl font-light text-primary">
          В каких вопросах могу Вам помочь
        </h2>
        <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 mx-5 md:mx-10 gap-5">
          <li className="">
            <p className="font-light p-3 bg-violet-100 rounded-lg">отношения</p>
          </li>
          <li className="">
            <p className="font-light p-3 bg-violet-100 rounded-lg">
              зависимости
            </p>
          </li>
          <li className="">
            <p className="font-light p-3 bg-violet-100 rounded-lg">
              психологические травмы
            </p>
          </li>
          <li className="">
            <p className="font-light p-3 bg-violet-100 rounded-lg">депрессии</p>
          </li>
          <li className="">
            <p className="font-light p-3 bg-violet-100 rounded-lg">фобии</p>
          </li>
          <li className="">
            <p className="font-light p-3 bg-violet-100 rounded-lg">страхи</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Services
