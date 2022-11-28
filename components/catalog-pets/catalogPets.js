import React from 'react'

function CatalogPets() {

  let count = 0;

  const data = [
    {
      id:1,
      image: '/static/images/pet-catalog-1.png',
      name: 'Rex',
      age: 'Cachorro',
    },
    {
      id:2,
      image: '/static/images/pet-catalog-1.png',
      name: 'Leona',
      age: 'Cachorro',
    },
    {
      id:3,
      image: '/static/images/pet-catalog-1.png',
      name: 'Rex',
      age: 'Cachorro',
    },
    {
      id:4,
      image: '/static/images/pet-catalog-1.png',
      name: 'Rex',
      age: 'Cachorro',
    },
    {
      id:5,
      image: '/static/images/pet-catalog-1.png',
      name: 'Rex',
      age: 'Cachorro',
    },
    {
      id:6,
      image: '/static/images/pet-catalog-1.png',
      name: 'Rex',
      age: 'Cachorro',
    },
    {
      id:7,
      image: '/static/images/pet-catalog-1.png',
      name: 'Rex',
      age: 'Cachorro',
    },
    {
      id:8,
      image: '/static/images/pet-catalog-1.png',
      name: 'Rex',
      age: 'Cachorro',
    },
    {
      id:9,
      image: '/static/images/pet-catalog-1.png',
      name: 'Rex',
      age: 'Cachorro',
    },
    {
      id:10,
      image: '/static/images/pet-catalog-1.png',
      name: 'Rex',
      age: 'Cachorro',
    },
    {
      id:11,
      image: '/static/images/pet-catalog-1.png',
      name: 'Rex',
      age: 'Cachorro',
    },
    {
      id:12,
      image: '/static/images/pet-catalog-1.png',
      name: 'Rex',
      age: 'Cachorro',
    },
    {
      id:13,
      image: '/static/images/pet-catalog-1.png',
      name: 'Rex',
      age: 'Cachorro',
    },
    {
      id:14,
      image: '/static/images/pet-catalog-1.png',
      name: 'Rex',
      age: 'Cachorro',
    },
    {
      id:15,
      image: '/static/images/pet-catalog-1.png',
      name: 'Rex',
      age: 'Cachorro',
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
    <React.Fragment>
      <div className='h-full py-2 px-4 grid md:grid-cols-3 justify-center'>
        {
          data.map((item,i)=>(
            <div key={i} className={`nge-bg-image m-2 rounded-3xl overflow-hidden flex justify-center items-center hover:shadow-lg hover:bg-blue ${catalogFunc()}`}>
              <div className='nge-detail-image w-full grid grid-cols-2 justify-between items-end absolute bottom-0 transition duration-700 '>
                <div className='p-4 text-white'>
                  <p className='font-bold text-2xl'>{item.name}</p>
                  <p>{item.age}</p>
                </div>
                <div className='cursor-pointer bg-orange rounded-tl-3xl w-full h-14 rounded-br-3xl text-white flex items-center justify-center font-bold'>
                  Conóceme
                </div>
              </div>
              <img className='object-cover h-full w-full' src={item.image} alt='Allqu & Michi'/>
            </div>
          ))
        }
      </div>
    </React.Fragment>
  )
}

export default CatalogPets