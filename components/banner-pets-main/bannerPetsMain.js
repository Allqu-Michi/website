import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

function BannerPetsMain() {
  const ref = useRef(null);

  const [data, setData] = useState([
    {
      name: 'Leona',
      age: '7 meses',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      cellphone: '+51 987 987 987',
      email: 'contacto@correo.com',
      address: 'Los Olivos, Plaza Norte',
      favorite: true,
      image: '/static/images/1-pet.png'
    },
    {
      name: 'Reiko',
      age: '5 meses',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      cellphone: '+51 987 987 987',
      email: 'contacto@correo.com',
      address: 'Los Olivos, Plaza Norte',
      favorite: false,
      image: '/static/images/2-pet.png'
    },
    {
      name: 'Kity',
      age: '1 año',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      cellphone: '+51 987 987 987',
      email: 'contacto@correo.com',
      address: 'Los Olivos, Plaza Norte',
      favorite: true,
      image: '/static/images/3-pet.png'
    }
  ]);

  let value ;
  let sliders;

  function validFavoriteIcon(favorite){
    if(favorite){
      return '/static/icons/heart-black.svg'
    }else{
      return '/static/icons/heart-gray-outline.svg'
    }
  }

  useEffect(() => {
     sliders = [...ref.current.querySelectorAll('.slider-section')];
     const interval =  setInterval(() => {
      changePosition(1);
    }, 5000);
    return () => clearInterval(interval); 
  },[ref,data]);

  function changePosition(change){
    const currentElement = Number(document.querySelector('.show').dataset.id);
    value = currentElement;
    value += change;
    if(value === 0 || value === sliders.length+1) {
      value = value === 0 ? sliders.length : 1;
    }
    sliders[currentElement-1].classList.toggle('show');
    sliders[value-1].classList.toggle('show');
  }

  function clickBefore(){
    changePosition(-1);
  }

  function clickNext(){
    changePosition(1);
  }

  return (
    <div ref={ref} className='h-full py-16 px-5 flex flex-col gap-6 items-center'>
      <span className='text-4xl font-bold text-blue text-center'>Conoce a tu futuro(a) mejor amigo(a)</span>
      <span>Mira todo nuestros peluditos <Link href='/catalog'><b>aqui</b></Link></span>
      <div className='grid grid-cols-bannerpets justify-between'>
        <div className='flex justify-start cursor-pointer' id='before' onClick={clickBefore}>
            <Image src='/static/icons/left.svg' alt='Allqu & Michi' width={15} height={35}/>
        </div>
        {
          data.map((item,i)=>(
            <section key={i} data-id={i+1} className={`${(i==0) ? 'show' : ''} transition duration-700 flex flex-row gap-4 justify-between slider-section show col-start-2 col-end-3 row-start-1 row-end-2`}>
            <div className='flex flex-col md:flex-row gap-5 md:gap-24 items-center'>
              <div className='h-60 w-60 md:h-80 md:w-80 bg-orange overflow-hidden rounded-3xl'>
                <img src={item.image} alt="Allqu & Michi" className="object-cover object-center"/>
              </div>
              <div className='bg-gray-light text-gray-dark rounded-3xl h-100 md:h-80 w-60 md:w-128 px-8 pt-8 pb-16 flex flex-col justify-between gap-5 relative'>
                <div className='flex flex-row justify-between'>
                  <div className='flex flex-col'>
                    <span className='font-bold text-3xl'>{item.name}</span>
                    <span>{item.age}</span>
                  </div>
                  <div className='cursor-pointer' onClick={()=>{
                    data[i].favorite = !data[i].favorite;
                    setData([...data]);
                  }}>
                    <Image src={validFavoriteIcon(item.favorite)} alt="Allqu & Michi" width={16.5} height={16.5}/>
                  </div>
                </div>
                <div>
                  {item.description}
                </div>
                <div className='flex flex-col'>
                  <span>{item.cellphone}</span>
                  <span>{item.email}</span>
                  <span>{item.address}</span>
                </div>
                <div className='hover:shadow-lg cursor-pointer bg-orange rounded-tl-3xl rounded-br-3xl absolute px-10 py-3 font-bold text-white bottom-0 right-0'>
                  Adóptame!
                </div>
              </div>
            </div>
          </section>
          ))
        }
        <div className='flex justify-end cursor-pointer' id='next' onClick={clickNext}>
            <Image src='/static/icons/right.svg' alt='Allqu & Michi' width={15} height={35}/>
        </div>
      </div>
    </div>
  )
}

export default BannerPetsMain