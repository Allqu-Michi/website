import React, { useEffect, useState } from 'react'

function Dropdown(props) {

    const [deploy, setDeploy] = useState(false);
    const [optionSelected, setOptionSelected] = useState(null);


    function selectOption(option) {
        setDeploy(!deploy);
        setOptionSelected(option)
    }

    useEffect(() => {
        let result = props.options.filter((e)=>
            props.valueDefault === e[props.value]
        )
        setOptionSelected(result[0])


    // document.addEventListener('click',e => {
    //     if(!document.getElementById('content-dropdown').contains(e.target)) {
    //         setDeploy(false);
    //     }
    // })
    }, []);

  return (
    <React.Fragment>
        <div className='relative cursor-pointer' id='content-dropdown'>
            <div onClick={() => setDeploy(!deploy)} className='nge-float-dropdown rounded-2xl outline-none pt-6 pb-1 px-4 h-full w-full'>
                <label>{props.placeholder}</label>
                <div>
                    {(optionSelected == null) ? 'Elija una opción' : optionSelected[props.name]}
                </div>
                <img className='absolute right-3 bottom-3 cursor-pointer' src="/static/icons/down-arrow.svg" alt="Allqu & Michi" width={10} height={7}/>
            </div>
            <div className={deploy ? 'shadow-xl absolute bg-gray-light px-4 py-4 rounded-3xl w-full top-14 duration-200 ease-in-out opacity-1 visible' : 'absolute bg-gray-light px-4 py-4 rounded-3xl w-full top-[-3%] duration-200 ease-in-out opacity-0 invisible'} id='dropdown-options'>
                <ol className='flex flex-col gap-1'>
                    {
                        props.options.map((item,index)=>(
                            <li key={index} onClick={() => selectOption(item)} className='cursor-pointer hover:bg-white px-2 py-2 rounded-xl'>
                                {item[props.name]}
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>

    </React.Fragment>
  )
}

export default Dropdown