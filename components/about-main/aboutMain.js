import React, { useEffect, useRef } from 'react'

function AboutMain() {
  const ref = useRef(null);
  let value ;
  let sliders;

  const data = [
    {
      text:'Te daremos más amor que tu ex. Lo prometemos por la garrita Codi y Mickaelho',
      image:'/static/images/1-about.png'
    },
    {
      text:'“Estamos muy contentos con la adopcion de Pantera, nos lleno la casa de alegria.”Familia de Pantera',
      image:'/static/images/2-about.png'
    },
    {
      text:'Hemos adoptado a Lucas hace unos dias y realmente no sabiamos lo importante que era para nuestros hijos, gracias. Familia de Lucas',
      image:'/static/images/3-about.png'
    }
  ];

  useEffect(() => {
    sliders = [...ref.current.querySelectorAll('.slider-section-about')];
    const interval =  setInterval(() => {
     changePosition(1);
   }, 5000);
   return () => clearInterval(interval); 
 },[ref]);

 function changePosition(change){
   const currentElement = Number(document.querySelector('.show-about').dataset.id);
   value = currentElement;
   value += change;
   if(value === 0 || value === sliders.length+1) {
     value = value === 0 ? sliders.length : 1;
   }
   sliders[currentElement-1].classList.toggle('show-about');
   sliders[value-1].classList.toggle('show-about');
 }

  return (
    <div ref={ref} className='h-fit w-full bg-gray text-white rounded-3xl py-16 px-4 md:px-20 grid justify-center gap-16'>
        <div className='md:col-start-2 md:row-start-1 w-full md:w-80 md:h-96 flex flex-col justify-center gap-8'>
          <div className='w-full flex flex-col gap-7'>
            <div className='text-4xl font-bold text-blue'>Sobre Nosotros:</div>
            <div>
              <p className='text-blue'>Allqu y Michi es un proyecto de <b>Nogheric</b> sin fines de lucro, el cual promueve la adopción de gatitos y perritos.</p>
              <p className='text-blue'>Tambien realizamos el trabajo de concientizar la realidad de los perros y gatos en estado de abandono :c, porque juntos podemos tener un mejor mundo para ellos y para nosotros.</p>
              <p className='text-blue'>¿Te gustaría conocer a los peluditos? Dale click.</p>
            </div>
            <div>
              <button type='submit' className='w-full bg-blue rounded-2xl px-3 py-2'>¡Quiero Adoptar!</button>
            </div>
          </div>
        </div>
        <div className='w-fit md:col-start-1 md:row-start-1 relative grid'>
          {
            data.map((item,i)=>(
              <div key={i} data-id={i+1} className={`${(i==0) ? 'show-about' : ''} transition duration-700 slider-section-about col-start-1 col-end-1 row-start-1 row-end-1`}>
                <img className='py-2' id='image-about' src={item.image} alt="Allqu & Michi" width={400} height={500}/>
                <div className='bg-orange p-4 rounded-3xl w-full md:w-80 md:absolute bottom-0 md:bottom-0 right-0'>
                  <p id='text-about'>{item.text}</p>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default AboutMain