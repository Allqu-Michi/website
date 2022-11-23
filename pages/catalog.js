import Head from 'next/head'
import React from 'react'
import CatalogPets from '../components/catalog-pets/catalogPets';

import ContactMain from '../components/contactMain/contactMain';
import HeaderCatalog from '../components/header-catalog/headerCatalog';
import NavbarCatalog from '../components/navbar-catalog/navbarCatalog';

function Catalog() {
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
                <CatalogPets/>
                <ContactMain bgcolor={'orange'}/>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Catalog