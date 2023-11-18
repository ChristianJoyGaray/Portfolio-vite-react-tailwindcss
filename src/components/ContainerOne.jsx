import React from 'react'
// import { faHand } from '@fortawesome/free-solid-svg-icons';


export default function ContainerOne() {
  return (
    <div>
      <div className="h-screen w-full bg-gray-900 flex flex-row items-center overflow-hidden" id="home">
        <div className="w-1/2 h-full flex flex-col mt-96">
            <h1 className="rounded-3xl m-5 ml-40 text-3xl font-montserrat w-fit max-w-367px leading-10 font-normal shadow-box transition-opacity transition-transform translateY-100 mt-1/4 p-1.2rem 1.7rem bg-gray-800 p-4 mt-1/4 element">Hello, I am <br /><span className="text-5xl font-bold">Christian Garay</span></h1>
            <h2 className="rounded-3xl m-0 ml-40 text-2xl font-montserrat max-w-367px leading-40 font-normal shadow-box transition-opacity transition-transform translateY-100 mt-2.5rem w-fit max-w-367px p-1.7rem line-h-2rem bg-gray-800 p-4 element">FRONT END DEVELOPER</h2>
        </div>
        <div className="avatar-image">
          <img className="flex h-auto w-auto absolute bottom-0 z-1" src="/avatar.png" alt="avatar"/>
        </div>  
      </div>
    </div>
  )
}
