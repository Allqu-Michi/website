import React, { useState } from 'react'

function InputText(props) {
    const [value, setValue] = useState(props.value);
    const onChange = event => {
        setValue(event.target.value)
    }
  return (
    <React.Fragment>
      <input id={props.id} 
        type='text' 
        value={value} 
        maxLength={props.maxLength}
        minLength={props.minLength}
        onChange={onChange} 
        className='rounded-2xl outline-none pt-6 pb-1 px-4 w-full h-full absolute text-blue' required/>
    </React.Fragment>
  )
}

export default InputText