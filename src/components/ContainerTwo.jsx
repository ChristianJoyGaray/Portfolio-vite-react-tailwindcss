import React from 'react'

export default function ContainerTwo() {
  return (
    <div>
        <div className="h-auto w-full bg-gray-900 flex flex-col items-center gap-4 overflow-hidden">
            <h6 className="text-white text-5xl font-bold font-montserrat mt-20 mb-12 translate-y-100 transition-opacity duration-500 transition-transform text-center element spans">&nbsp;<span className='text-blue-800'>Elevate your game in development,</span> <br />and watch your business soar</h6>
            <div className="flex w-full flex-row mb-24 justify-center translate-y-100 transition-opacity duration-500 transition-transform element">
                <div className="w-2/5 max-w-500px p-0 sm:p-4">
                    <h1 className="text-white font-montserrat m-0 text-2xl lg:text-3xl font-bold">FRONTEND <br /> DEVELOPMENT</h1>
                    <p className="text-white font-montserrat m-0">I am a Frontend Developer with a strong passion for crafting aesthetically pleasing and seamlessly functional web applications.</p>
                </div>
                <div className="w-2/5 max-w-500px p-0 sm:p-4">
                    <h2 className="text-white font-montserrat m-0 text-2xl lg:text-3xl font-bold">UI/UX <br /> DESIGN</h2>
                    <p className="text-white font-montserrat m-0">I am a UI/UX Designer with a profound enthusiasm for conceptualizing and creating visually engaging, user-friendly web applications.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
