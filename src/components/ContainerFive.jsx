import React from 'react'

export default function ContainerFive() {
  return (
    <div>
          
    <div className="h-auto w-full bg-gray-900 overflow-hidden relative flex items-center flex-col" id="contacts">
      <h5 className="text-white font-montserrat mt-20 mb-12 flex justify-center text-5xl font-bold">LET'S WORK&nbsp;<span className='text-blue-800'>TOGETHER.</span></h5>
      <div className="flex justify-center items-center flex-col mb-10 gap-10 transform translate-y-100 transition-opacity duration-500 transition-transform w-64">
        <input className="bg-gray-800 rounded-lg font-montserrat text-white text-lg h-12 w-96 pl-2 border border-gray-600" type="text" placeholder="Your Name" name="name"/>
        <input className="bg-gray-800 rounded-lg font-montserrat text-white text-lg h-12 w-96 pl-2 border border-gray-600" type="email" placeholder="Your Email" name="email"/>
        <textarea  className="max-h-full h-48 w-96 bg-gray-800 rounded-lg font-montserrat text-white text-lg p-2 border border-gray-600" type="text" placeholder="Your Message" name="message"></textarea>
        <button className="text-white bg-blue-800 rounded-lg font-montserrat text-sm p-2 border border-gray-600 transition-all duration-300">Send Message</button>
      </div>
     
    </div>
    </div>
  )
}
