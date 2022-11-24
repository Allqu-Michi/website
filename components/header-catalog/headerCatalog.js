import React, { useState } from 'react'
import Dropdown from '../dropdown/dropdown'

function HeaderCatalog() {
  const [valueCategoryPet, setValueCategoryPet] = useState();
  const [valueAgePet, setValueAgePet] = useState();
  const [valueSizePet, setValueSizePet] = useState();

  let categoryPets = [
    {
        id: 1,
        label: 'Perro' 
    },
    {
        id: 2,
        label: 'Gato' 
    },
    {
        id: 3,
        label: 'Todos' 
    }
  ];

  let agePets = [
    {
        id: 1,
        label: 'Cachorro' 
    },
    {
        id: 2,
        label: 'Joven' 
    },
    {
        id: 3,
        label: 'Adulto' 
    },
    {
        id: 4,
        label: 'Todos' 
    }
  ];

  let sizePets = [
    {
        id: 1,
        label: 'Pequeño' 
    },
    {
        id: 2,
        label: 'Grande' 
    },
    {
        id: 3,
        label: 'Muy Grande' 
    },
    {
        id: 4,
        label: 'Todos' 
    }
  ];

  return (
    <div className='h-full rounded-3xl pt-16 px-4 md:pt-20 md:h-fit'>
        <p className='text-blue font-bold text-4xl'>"El amor es una palabra de cuatro patas, ADOPTA"</p>
        <p className='text-orange'>Somos Allqu y Michi, y te ayudamos a encontrar a tu nuevo mejor amigo.</p>
        <div className='bg-gray-light rounded-xl p-4 grid md:grid-cols-3 gap-2'>
            <Dropdown 
            placeholder='Categoría' 
            name='label' 
            value='id' 
            options={categoryPets}
            valueDefault={valueCategoryPet}
            />
            <Dropdown 
            placeholder='Edad' 
            name='label' 
            value='id' 
            options={agePets}
            valueDefault={valueAgePet}
            />
            <Dropdown 
            placeholder='Tamaño' 
            name='label' 
            value='id' 
            options={sizePets}
            valueDefault={valueSizePet}
            />
        </div>
        {/* <button className='bg-blue text-white p-2 rounded-md' type="submit">FILTRAR</button> */}
    </div>
  )
}

export default HeaderCatalog