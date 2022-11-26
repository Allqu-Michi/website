import Link from 'next/link';
import React, { useEffect, useRef } from 'react'

function BannerMain() {
  const ref = useRef(null);
  let value ;
  let sliders;

  const arrBanner = [
    {
      text: '“El amor es una palabras de cuatro patas, ADOPTA”',
      image:'/static/images/1-carousel.png'
    },
    {
      text: '"Errar es de humanos, perdonar es de perros."',
      image:'/static/images/2-carousel.png'
    },
    {
      text: '"Cuando todos los animales se hayan ido, el hombre morirá de soledad."',
      image:'/static/images/3-carousel.png'
    }
  ];

  useEffect(() => {
    sliders = [...ref.current.querySelectorAll('.slider-section-banner')];
    const interval =  setInterval(() => {
     changePosition(1);
   }, 8000);
   return () => clearInterval(interval); 
 },[ref]);

 function changePosition(change){
   const currentElement = Number(document.querySelector('.show-banner').dataset.id);
   value = currentElement;
   value += change;
   if(value === 0 || value === sliders.length+1) {
     value = value === 0 ? sliders.length : 1;
   }
   sliders[currentElement-1].classList.toggle('show-banner');
   sliders[value-1].classList.toggle('show-banner');
 }

  return (
    <div ref={ref} className='h-full rounded-3xl py-16 md:py-24 px-4 md:px-20 relative grid justify-center bg-orange'>
      {
        arrBanner.map((item,i)=>(
          <div key={i} data-id={i+1} className={`${(i==0) ? 'show-banner' : ''} transition duration-700 slider-section-banner grid md:grid-cols-2 col-start-1 col-end-1 row-start-1 row-end-1 text-white`}>
            <div className='flex flex-col items-center md:col-start-2 md:row-start-1'>
              <img id='image' src={item.image} alt='Allqu & Michi' width={550} height={289}/>
            </div>    
            <div className='flex flex-col gap-5 items-start md:col-start-1 md:row-start-1'>
              <div className='flex flex-col justify-center h-60 md:h-72'>
                <span className='text-3xl md:text-6xl font-bold' id='text'>{item.text}</span>
              </div>
              <span className='text-xl'>Somos Allqu y Michi, y te ayudamos a encontrar a tu nuevo mejor amigo.</span>
              <div className='flex flex-row gap-2.5'>
              <Link href="/catalog"><button type='submit' className='border-blue border-2 bg-blue rounded-2xl px-3 py-2'>¡Quiero Adoptar!</button></Link>
              <Link href="/"><button type='submit' className='border-blue border-2 text-blue rounded-2xl px-3 py-2'>Dar en Adopción</button></Link>
              </div>
            </div>
          </div>
        ))
      }
    </div>
    
  )
}

export default BannerMain