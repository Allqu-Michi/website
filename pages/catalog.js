import Head from 'next/head'
import React from 'react'
import BubbleWhatsapp from '../components/bubble-whatsapp/bubbleWhatsapp';
import CatalogPets from '../components/catalog-pets/catalogPets';

import ContactMain from '../components/contactMain/contactMain';
import HeaderCatalog from '../components/header-catalog/headerCatalog';
import NavbarCatalog from '../components/navbar-catalog/navbarCatalog';

function Catalog(props) {
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
                <HeaderCatalog/>
                <CatalogPets pets={props.pets}/>
                <ContactMain bgcolor={'orange'}/>
            </div>
        </div>
        <BubbleWhatsapp/>
    </React.Fragment>
  )
}

// export async function getServerSideProps() {
//   console.log('entro aqui')
//   try {
//     const res = await fetch('https://dog.ceo/api/breed/hound/images/random/15')
//     const pets = await res.json()
//     return {
//       props:{
//         pets
//       }
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

export async function getStaticProps() {
  console.log('entro aqui')
  try {
    const res = await fetch('https://dog.ceo/api/breed/hound/images/random/15')
    const pets = await res.json()
    return {
      props:{
        pets
      }
    }
  } catch (error) {
    console.log(error)
  }
}



export default Catalog