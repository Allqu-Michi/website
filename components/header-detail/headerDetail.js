import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function HeaderDetail() {

    const router = useRouter();

  return (
    <React.Fragment>
        <div className='h-full rounded-3xl pt-16 px-4 md:pt-20 md:h-fit cursor-pointer flex flex-col gap-4 divide-y divide-orange md:w-[50%]' onClick={()=>router.back()}>
            <div className='flex flex-row gap-2'>
                <img src="/static/icons/left-orange.svg" alt="allqu & michi" width={15} height={35}/>
                <span className='text-orange'>Regresar al catálogo</span>
            </div>
            <div></div>
        </div>
    </React.Fragment>
  )
}

export default HeaderDetail