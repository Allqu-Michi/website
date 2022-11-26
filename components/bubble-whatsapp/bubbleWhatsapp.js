import Image from 'next/image'
import React from 'react'

function BubbleWhatsapp() {
  
  function redirect(){
    window.open(`https://wa.me/`+process.env.NEXT_PUBLIC_CELLPHONE_WHATSAPP+`?text=¿Estás listo para conocer a tu nuevo amigo?`,'_blank')
  }

  function toggleChat(){
    document.getElementById('chat-whatsapp').classList.toggle('whatsapp-custom-open')
  }

  return (
    <React.Fragment>
      <div onClick={toggleChat} className='w-16 h-16 rounded-full fixed bottom-0 right-0 m-6 z-40 bg-green-whatsapp shadow-2xl shadow-gray-300 flex justify-center cursor-pointer'>
        <Image alt="Allqu & Michi" src='/static/icons/whatsapp-white-outline.svg' width={30} height={30}/>
      </div>
      <div id='chat-whatsapp' className='whatsapp-custom fixed right-0 bottom-20 m-6 z-50 rounded-3xl shadow-2xl shadow-gray-300 flex flex-col w-64 bg-white'>
        <div className='bg-green rounded-t-3xl flex gap-2 py-2 px-4 items-center header-whatsapp'>
          <img className='w-10 h-10 rounded-full' src="/static/images/avatar-whatsapp.png" alt='Allqu & Michi' width={40} height={40}/>
          <div className='text-white'>
            <div>
              {process.env.NEXT_PUBLIC_NAME_PROJECT}
            </div>
            <div className='text-xs'>
              Disponible
            </div>
          </div>
        </div>
        <div className="px-4 py-4 relative bg-[url('/static/images/background-whatsapp.png')]">
          <div className='absolute triangle-chat left-0'></div>
          <div className='flex flex-col bg-white rounded-lg p-3'>
            <div className='text-red'>
              {process.env.NEXT_PUBLIC_NAME_PROJECT}
            </div>
            <div className='text-sm'>
              ¿Estás listo para conocer a tu nuevo amigo?🐶🐱
            </div>
          </div>
        </div>
        <div onClick={redirect} className='rounded-b-3xl bg-green text-white py-2 px-4 flex justify-center items-center gap-2 cursor-pointer'>
          <span>Chatear</span> <Image alt="Allqu & Michi" src='/static/icons/whatsapp-white-outline.svg' width={15} height={15}/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BubbleWhatsapp