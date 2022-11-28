import Image from 'next/image'
import React, { useState } from 'react'
import InputText from '../input-text/inputText'
import InputTextArea from '../input-text-area/inputTextArea';

function ContactMain(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  return (
    <div className={`h-full bg-${props.bgcolor} rounded-3xl py-16 px-4 md:px-20 w-full flex flex-col items-center justify-center relative`}>
        <span className='bg-blue-sky'></span>
        <div className='w-72 md:w-96 flex flex-col items-center justify-center gap-8'>
            <span className='text-blue font-bold text-4xl'>Contáctanos</span>
            <div className='grid grid-cols-4 w-fit gap-5'>
                <Image alt="Allqu & Michi" src='/static/icons/facebook-blue.svg' className='cursor-pointer' width={28} height={28}/>
                <Image alt="Allqu & Michi" src='/static/icons/instagram-blue-outline.svg' className='cursor-pointer' width={28} height={28}/>
                <Image alt="Allqu & Michi" src='/static/icons/tiktok-blue.svg' className='cursor-pointer' width={24.5} height={28}/>
                <Image alt="Allqu & Michi" src='/static/icons/whatsapp-blue-outline.svg' className='cursor-pointer' width={27.87} height={28}/>
            </div>
            <p className='text-white'>¿Te gustaría apoyar este proyecto o te gustaría contribuir con ideas para Allqu & Michi? Escríbenos</p>
            <form className='w-full grid md:grid-cols-2 gap-2'>
              <div className='nge-float-label md:col-span-1'>
                <InputText value={name}/>
                <label>Nombre</label>
              </div>
              <div className='nge-float-label md:col-span-1'>
                <InputText value={email}/>
                <label>E-mail</label>
              </div>
              <div className='nge-float-label md:col-span-2'>
                <InputText value={subject}/>
                <label>Asunto</label>
              </div>
              <div className='nge-float-label-textarea md:col-span-2'>
                <InputTextArea value={subject}/>
                <label>Mensaje</label>
              </div>
              <button type='submit' className='bg-blue rounded-2xl px-3 py-2 text-white w-full md:col-span-2'>Contactar</button>
            </form>
        </div>
        <div className='hidden md:block md:absolute md:bottom-0 md:left-4 '>
          <img alt="Allqu & Michi" src='/static/images/contact.png' width={250} height={40}/>
        </div>
        <div className='py-9'>
          <p className='text-white font-bold text-center'>"Hasta que uno no ha amado a un animal, parte de su alma permanece dormida." (France, Anatole).</p>
        </div>
        <div className='flex flex-col md:flex-row gap-3 items-center text-white'>
          <span>Powerder By</span>
          <a href="https://nogheric.com/" target={'_blank'} rel="noreferrer"><img className='cursor-pointer' alt="Allqu & Michi" src='/static/images/nogheric-white.png' width={120} height={40}/></a>
        </div>
    </div>
  )
}

export default ContactMain