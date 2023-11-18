import React from 'react'

export default function ContainerFour() {
  return (
    <div>
      <div className="flex flex-col justify-center h-auto w-full bg-gray-900 relative overflow-hidden">
      <h4 className="text-white font-montserrat mt-20 mb-12 flex justify-center text-5xl font-bold">My&nbsp;<span className='text-blue-800'>Skills</span></h4>
      <div className="h-auto w-full flex justify-end flew-row element">
        <div className="flex items-center flex-col">
          <div className="h-4/5  w-full flex flex-col">
            <div className="flex items-center justify-center flex-col rounded-full bg-gray-800 h-32 w-32 mx-20">
              <img className="h-3/6 w-3/5" src="/html.png" alt="html-icon"/>
            </div>
            <p className="my-10 text-white font-montserrat text-center">HTML</p>
          </div>
          <div className="h-4/5  w-full flex flex-col">
            <div className="flex items-center justify-center flex-col rounded-full bg-gray-800 h-32 w-32 mx-20">
              <img className="h-3/6 w-3/5" src="/css.png" alt="css-icon"/>
            </div>
            <p className="my-10 text-white font-montserrat text-center">CSS</p>
          </div>
          <div className="h-4/5  w-full flex flex-col ">
            <div className="flex items-center justify-center flex-col rounded-full bg-gray-800 h-32 w-32 mx-20">
              <img className="h-3/6 w-3/5" src="/js.png" alt="javascript-icon"/>
            </div>
            <p className="my-10 text-white font-montserrat text-center">JAVASCRIPT</p>
          </div>
        </div>

        <div className="h-full w-1/2 flex justify-start">
          <div className="h-auto w-1/2">
            <div class="dropdown">
              <input type="checkbox" id="dropdown-toggle" className="dropdown-toggle invisible"/>
              <label for="dropdown-toggle" className=" leading-5 dropdown-label hover:cursor-pointer">
                <span className="float-right transition-transform duration-300 text-white text-lg arrow hover:cursor-pointer">&#11164;</span> HTML <br /> <span className="text-gray-400 text-xs ml-5">FreeCodeCamp</span>
              </label>
              <div className="max-h-0 overflow-hidden transition-max-height duration-400 text-white font-montserrat p-0 md:p-5 dropdown-content">
                <p className='pt-5'>Learned from FreeCodeCamp for 1 month.</p>  
              </div>
            </div>

            <div class="dropdown">
              <input type="checkbox" id="dropdown-toggle2" className="dropdown-toggle invisible"/>
              <label for="dropdown-toggle2" className=" leading-5 dropdown-label hover:cursor-pointer">
                <span className="float-right transition-transform duration-300 text-white text-lg arrow hover:cursor-pointer">&#11164;</span> CSS <br /> <span className="text-gray-400 text-xs ml-5">FreeCodeCamp</span>
              </label>
              <div className="max-h-0 overflow-hidden transition-max-height duration-400 text-white font-montserrat p-0 md:p-5 dropdown-content">
                <p className='pt-5'>Learned from FreeCodeCamp for 2 months.</p> 
              </div>
            </div>

            <div class="dropdown">
              <input type="checkbox" id="dropdown-toggle3" className="dropdown-toggle invisible"/>
              <label for="dropdown-toggle3" className=" leading-5 dropdown-label hover:cursor-pointer">  
                <span className="float-right transition-transform duration-300 text-white text-lg arrow hover:cursor-pointer">&#11164;</span> JAVASCRIPT <br /> <span className="text-gray-400 text-xs ml-5">Youtube</span>
              </label>
              <div className="max-h-0 overflow-hidden transition-max-height duration-400 text-white font-montserrat p-0 md:p-5 dropdown-content">
                <p className='pt-5'>Learned from YouTube for 3 months.</p> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
