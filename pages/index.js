import Head from 'next/head'
import React from 'react'

import NavbarMain from '../components/navbar-main/navbarMain';
import BannerMain from '../components/banner-main/bannerMain';
import AboutMain from '../components/about-main/aboutMain';
import BannerPetsMain from '../components/banner-pets-main/bannerPetsMain';
import ContactMain from '../components/contactMain/contactMain';
import BubbleWhatsapp from '../components/bubble-whatsapp/bubbleWhatsapp';

export default function Home(){
  return (
    <React.Fragment>
      <Head>
        <title>{process.env.NEXT_PUBLIC_NAME_PROJECT}</title>
        <meta name="description" content="ALLQU & MICHI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-full px-4'>
          <NavbarMain/> 
          <div className='pb-10 flex flex-col gap-10'>
            <BannerMain/>
            <AboutMain/>
            <BannerPetsMain/>
            <ContactMain bgcolor={'blue-sky'}/>
          </div>
      </div>
      <BubbleWhatsapp/>
    </React.Fragment>
  )
}
