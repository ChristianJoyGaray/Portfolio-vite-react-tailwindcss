import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="w-full h-16 top-0 bg-gray-900 flex justify-between fixed backdrop-blur-md z-50 border-b border-gray-700">
        <img className="h-16 w-16 ml-2" src='/midnightCustomsLogo.png' alt='logo'/>
        <ul className="flex m-0 justify-end list-none">
           <a href="#home" className="flex items-center no-underline mr-3">   
            <li className=" h-full w-24 text-orange-50 font-montserrat flex items-center text-base pl-4 pr-4 justify-center">Home</li>
          </a>
          <a href="#projects" className="flex items-center no-underline mr-2">  
            <li className="h-full w-24 text-orange-50 font-montserrat flex items-center text-base pl-4 pr-4 justify-center">Projects</li>
          </a>
          <a href="#contacts" className="flex items-center no-underline mr-2">
            <li className="h-full w-24 text-orange-50 font-montserrat flex items-center text-base pl-4 pr-4 justify-center">Contacts</li>
          </a>
        </ul>
    </nav>
    </div>
  )
}
