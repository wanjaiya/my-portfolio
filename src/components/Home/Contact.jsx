import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#05113f] text-gray-300 flex justify-center items-center p-4'>
      
      <form action="https://getform.io/f/5c0416c9-a31f-400f-b771-eccf530ad504" method='POST' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#f3a755] text-center w-full'> Contact</p>
            <p className='text-grey-300 py-4'> Sumbit the form below or send me and email</p>
        </div>

        <input type='text' placeholder='Name' name='name' className='p-2 bg-[#ccd6f6]'/>

        <input type='email' placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6]' />

        <textarea name="message"  cols="30" rows="10" placeholder='Message' className='p-2 bg-[#ccd6f6]'></textarea>
        <button className='text-white border-2 hover:bg-[#f3a755] hover:border-[#f3a755] px-4 py-3 my-8 mx-auto flex items-center' >Get in touch</button>
      </form>
    </div>
  )
}

export default Contact
