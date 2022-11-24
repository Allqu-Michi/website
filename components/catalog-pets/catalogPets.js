import React from 'react'

function CatalogPets() {

  let count = 0;
  const data = [
    {
      id:1,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:2,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:3,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:4,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:5,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:6,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:7,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:1,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:2,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:3,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:4,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:5,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:6,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:7,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:1,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:2,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:3,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:4,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:5,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:6,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:7,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:1,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:2,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:3,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:4,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:5,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:6,
      image: '/static/images/pet-catalog-1.png'
    },
    {
      id:7,
      image: '/static/images/pet-catalog-1.png'
    },
  ]

  function catalogFunc(){
    let value = ''
    switch (count) {
      case 0:
          value = 'md:row-span-2'
        break;
      case 7:
        value = 'md:row-span-2'
        break;
      case 11:
        value = 'md:row-span-2'
        break;
    }
    if(count==14){
      count = 0;
    } else {
      count = count + 1;
    }
    return value;
  }

  return (
    <div className='h-full py-2 px-4 grid md:grid-cols-3 justify-center'>
      {
        data.map((item,i)=>(
          <div key={i} className={`m-2 rounded-3xl overflow-hidden flex justify-center items-center cursor-pointer hover:shadow-lg ${catalogFunc()}`}>
            <img className='object-cover h-full w-full' src={item.image} alt='Allqu & Michi'/>
          </div>
        ))
      }
    </div>
  )
}

export default CatalogPets