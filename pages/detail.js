import Head from 'next/head'
import React from 'react'
import BubbleWhatsapp from '../components/bubble-whatsapp/bubbleWhatsapp'
import ContactMain from '../components/contactMain/contactMain'
import NavbarCatalog from '../components/navbar-catalog/navbarCatalog'

function Detail() {
  return (
    <React.Fragment>
      <Head>
        <title>{process.env.NEXT_PUBLIC_NAME_PROJECT}</title>
        <meta name="description" content="ALLQU & MICHI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className='w-full px-4'>
          <NavbarCatalog/>
            <div className='pb-10 flex flex-col gap-10'>

                <ContactMain bgcolor={'orange'}/>
            </div>
        </div>
        <BubbleWhatsapp/>
    </React.Fragment>
  )
}

export default Detail