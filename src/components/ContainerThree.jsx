import React from 'react'

export default function ContainerThree() {
  return (
    <div>
       <div className="h-auto w-full bg-gray-900  flex items-center flex-col overflow-hidden" id="projects">
      <h3 className="text-white font-montserrat mt-20 mb-12 duration-500 text-center text-5xl font-bold element" >My&nbsp;<span className='text-blue-800'>Projects</span></h3>
      <div className="h-auto w-full flex gap-10 flex-row flex-wrap justify-center items-center mb-24 element">
        <div className="h-96 w-80 m-0  flex items-center justify-center rounded-3xl flex-col bg-gray-800">
          <div className="h-48 w-48   bg-transparent">
            <img className="h-full w-full object-cover rounded-2xl" src="/project-image.png" alt="project1-image" id="image"/>  
          </div>
          <div className="w-auto mx-auto flex justify-center -mt-5 text-white bg-gray-800 rounded-t-lg p-2.5 font-montserrat font-semibold">Project 1</div>
          <div className="mt-5 mb-0 w-4/5 text-white text-center  break-all font-montserrat">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>
        </div>
        <div className="h-96 w-80  flex items-center justify-center rounded-3xl flex-col bg-gray-800">
          <div className="h-48 w-48   bg-transparent">
            <img className="h-full w-full object-cover rounded-2xl" src="/project-image.png" alt="project1-image" id="image"/>  
          </div>
          <div className="w-auto mx-auto flex justify-center -mt-5 text-white bg-gray-800 rounded-t-lg p-2.5 font-montserrat font-semibold">Project 2</div>
          <div className="mt-5 mb-0 w-4/5 text-white text-center  break-all font-montserrat">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>
        </div>
        <div className="h-96 w-80  flex items-center justify-center rounded-3xl flex-col bg-gray-800">
          <div className="h-48 w-48   bg-transparent">
            <img className="h-full w-full object-cover rounded-2xl" src="/project-image.png" alt="project1-image" id="image"/>  
          </div>
          <div className="w-auto mx-auto flex justify-center -mt-5 text-white bg-gray-800 rounded-t-lg p-2.5 font-montserrat font-semibold">Project 3</div>
          <div className="mt-5 mb-0 w-4/5 text-white text-center  break-all font-montserrat">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>
        </div>
        </div>
        </div>
    </div>
  )
}
