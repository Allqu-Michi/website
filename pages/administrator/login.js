import Link from 'next/link';
import React, { useState } from 'react'

import InputText from '../../components/input-text/inputText.js';

function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <React.Fragment>
      <div className='bg-gray min-h-custom-administrator m-6 rounded-[50px] relative'>
        <div className='w-custom-administrator mt-4 mx-4  rounded-t-[50px] pb-32 py-8 px-8 flex flex-col justify-center items-center align-middle'>
          <div className='h-full'>

            <div className='flex justify-center md:items-center h-full'>
              <div className='grid md:grid-cols-2 md:grid-rows-1 justify-center md:gap-5 w-fit'>
                <div className='flex justify-center items-center h-full md:col-start-2 md:row-start-1'>
                  <img className='object-cover bottom-0 w-44 md:w-80' src="/static/gifts/GIF1.gif" alt="" />
                </div>
                <div className='flex flex-col justify-center  gap-4 w-[300px] m-auto md:col-start-1 md:row-start-1'>
                  <p className='text-3xl font-bold w-64'>Inicia sesión en {process.env.NEXT_PUBLIC_NAME_PROJECT}</p>
                  <div className='flex flex-col gap-4'>
                    <div className='nge-float-label'>
                      <InputText value={email} />
                      <label>E-mail</label>
                    </div>
                    <div className='nge-float-label'>
                      <InputText value={password} />
                      <label>Contraseña</label>
                    </div>
                  </div>
                  <p className='text-blue text-right'>¿Olvidaste tu contraseña?</p>
                  <button type="submit" className='bg-blue border-blue border-2 text-white rounded-2xl px-4 py-2 text-center w-full'>
                    Ingresar
                  </button>
                  <Link href={'/administrator/register'}><button type="submit" className='border-blue border-2 text-blue rounded-2xl px-4 py-2 text-center w-full'>
                    Crear una cuenta
                  </button></Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className='h-16 md:h-24  absolute bottom-0 flex justify-center  rounded-b-[50px] w-full overflow-hidden bg-[url("/static/images/texture-bottom.png")]'>
          <div className='text-xs rounded-tl-2xl rounded-tr-2xl bg-white w-fit absolute p-3 bottom-0 z-10'>
            {process.env.NEXT_PUBLIC_NAME_PROJECT} 2022 - Derechos reservados
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login