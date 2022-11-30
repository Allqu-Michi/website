import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

function BannerPetsDetail() {
    const ref = useRef(null);
    const [data, setData] = useState({
        favorite:false,
        images:[
            {
                image: '/static/images/1-pet.png'
            },
            {
                image: '/static/images/2-pet.png'
            },
            {
                image: '/static/images/3-pet.png'
            },
            {
                image: '/static/images/2-pet.png'
            }
        ]
    });

    function validFavoriteIcon(favorite) {
        if (favorite) {
            return '/static/icons/heart-black.svg'
        } else {
            return '/static/icons/heart-gray-outline.svg'
        }
    }
    let value;
    let sliders;

    useEffect(() => {
        sliders = [...ref.current.querySelectorAll('.slider-section-detail')];
        // const interval = setInterval(() => {
        //     changePosition(1);
        // }, 5000);
        // return () => clearInterval(interval);
    }, [ref, data]);

    function changePosition(change) {
        const currentElement = Number(document.querySelector('.show-detail').dataset.id);
        value = currentElement;
        value += change;
        if (value === 0 || value === sliders.length + 1) {
            value = value === 0 ? sliders.length : 1;
        }
        sliders[currentElement - 1].classList.toggle('show-detail');
        sliders[value - 1].classList.toggle('show-detail');
    }

    function clickBefore() {
        changePosition(-1);
    }

    function clickNext() {
        changePosition(1);
    }

    function selectedImage(index) {
        const currentElement = Number(document.querySelector('.show-detail').dataset.id);
        value = currentElement;
        sliders[index].classList.toggle('show-detail');
        sliders[value-1].classList.toggle('show-detail');
    }

    return (
        <div ref={ref} className='h-full flex flex-col gap-6 items-center'>
            <div className='flex flex-col gap-3'>
            <div className='flex flex-col md:flex-row gap-5 md:gap-24 items-center'>
                <div className='grid grid-cols-1 '>
                    {/* <div className='flex justify-start cursor-pointer' id='before' onClick={clickBefore}>
                        <Image src='/static/icons/left.svg' alt='Allqu & Michi' width={15} height={35} />
                    </div> */}
                    {data.images.map((item, i) => (
                        <div key={i} data-id={i + 1} className={`${(i == 0) ? 'show-detail' : ''} transition duration-700 h-60 w-60 md:h-80 md:w-80 bg-orange overflow-hidden rounded-3xl slider-section-detail col-start-2 col-end-3 row-start-1 row-end-2`}>
                            <img src={item.image} alt="Allqu & Michi" className="object-cover object-center" />
                        </div>
                    ))}
                    {/* <div className='flex justify-end cursor-pointer' id='next' onClick={clickNext}>
                        <Image src='/static/icons/right.svg' alt='Allqu & Michi' width={15} height={35} />
                    </div> */}
                </div>
                <div className='bg-gray-light text-gray-dark rounded-3xl h-100 md:h-80 w-60 md:w-128 px-8 pt-8 pb-16 flex flex-col justify-between gap-5 relative'>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-col'>
                            <span className='font-bold text-3xl'>Leona</span>
                            <span>7 meses</span>
                        </div>
                        <div className='cursor-pointer' onClick={() => {
                            data.favorite = !data.favorite;
                            setData({...data});
                        }}>
                            <Image src={validFavoriteIcon(data.favorite)} alt="Allqu & Michi" width={16.5} height={16.5} />
                        </div>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                    </div>
                    <div className='flex flex-col'>
                        <span>999999999</span>
                        <span>nogheric@gmail.com</span>
                        <span>Lima, Los Olivos</span>
                    </div>
                    <div className='hover:shadow-lg cursor-pointer bg-orange rounded-tl-3xl rounded-br-3xl absolute px-10 py-3 font-bold text-white bottom-0 right-0'>
                        Adóptame!
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4 w-full justify-items-center'>
                {
                    data.images.map((item, i) => (
                        <div key={i} className='md:w-36 md:h-36 w-20 h-20 overflow-hidden rounded-3xl cursor-pointer hover:shadow-lg' onClick={()=>selectedImage(i)}>
                            <img src={item.image} alt="Allqu & Michi" className="object-cover object-center" />
                        </div>
                    ))
                }
            </div>
            </div>



        </div>
    )
}

export default BannerPetsDetail