import React, { useState } from 'react'
import Dropdown from '../../components/dropdown/dropdown';
import InputTextArea from '../../components/input-text-area/inputTextArea';
import InputText from '../../components/input-text/inputText'
import Switch from '../../components/switch/switch';

function Register() {

    const [genderOptions, setGenderOptions] = useState([
        {
            id: 'M',
            label: 'Masculino'
        },
        {
            id: 'F',
            label: 'Femenino'
        }
    ]);
    const [departmentOptions, setDepartmentOptions] = useState([
        {
            id: '1',
            label: 'Lima'
        },
        {
            id: '2',
            label: 'Trujillo'
        }
    ]);

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [principalCellphone, setPrincipalCellphone] = useState('');
    const [alternativeCellphone, setAlternativeCellphone] = useState('');
    const [genderSelected, setGenderSelected] = useState();
    const [departmentSelected, setDepartmentSelected] = useState();

    return (
        <React.Fragment>
            <div className='bg-gray min-h-custom-administrator m-6 rounded-[50px] relative'>
                <div className='w-custom-administrator mt-4 mx-4  rounded-t-[50px] pb-32 py-8 px-3 md:px-8 flex flex-col justify-center items-center'>
                    <div className='h-full md:w-[720px]'>

                        <p className='text-blue text-3xl font-bold'>Cuéntanos sobre ti</p>
                        <p className='text-blue'>Bríndanos tus datos para poder continuar y poder saber más ti.</p>
                        <div className='grid grid-cols-2 my-6 gap-3 md:gap-6'>
                            <div className='nge-float-label col-span-2 md:col-span-1'>
                                <InputText value={name} />
                                <label>Nombre</label>
                            </div>
                            <div className='nge-float-label col-span-2 md:col-span-1'>
                                <InputText value={lastName} />
                                <label>Apellido</label>
                            </div>
                            <div className='nge-float-label col-span-2 md:col-span-1'>
                                <InputText value={principalCellphone} />
                                <label>Celular Principal</label>
                            </div>
                            <div className='col-span-2 md:col-span-1 md:col-start-1 flex flex-row items-center gap-3'>
                                <p className='text-blue text-sm'>¿Este teléfono tiene WhatsApp?</p>
                                <Switch />
                            </div>
                            <div className='nge-float-label col-span-2 md:col-span-1 md:col-start-2 md:row-start-2'>
                                <InputText value={alternativeCellphone} />
                                <label>Celular Alternativo</label>
                            </div>
                            <div className='col-span-2 md:col-span-1 md:col-start-1'>
                                <Dropdown
                                    placeholder='Género'
                                    name='label'
                                    value='id'
                                    options={departmentOptions}
                                    valueDefault={departmentSelected}
                                />
                            </div>
                        </div>

                        <p className='text-blue text-3xl font-bold'>Dirección</p>
                        <p className='text-blue'>Lorem ipsum, lorem ipsum.... Lorem</p>
                        <div className='grid grid-cols-2 my-6 gap-3 md:gap-6'>
                            <div className='col-span-2 md:col-span-1'>
                                <Dropdown
                                    placeholder='Departamento'
                                    name='label'
                                    value='id'
                                    options={departmentOptions}
                                    valueDefault={genderSelected}
                                />
                            </div>
                            <div className='col-span-2 md:col-span-1'>
                                <Dropdown
                                    placeholder='Provincia'
                                    name='label'
                                    value='id'
                                    options={departmentOptions}
                                    valueDefault={genderSelected}
                                />
                            </div>
                            <div className='col-span-2 md:col-span-1'>
                                <Dropdown
                                    placeholder='Distrito'
                                    name='label'
                                    value='id'
                                    options={departmentOptions}
                                    valueDefault={genderSelected}
                                />
                            </div>
                            <div className='nge-float-label col-span-2 md:col-span-1'>
                                <InputText value={alternativeCellphone} />
                                <label>Dirección</label>
                            </div>
                            <div className='nge-float-label-textarea col-span-2'>
                                <InputTextArea />
                                <label>Referencia</label>
                            </div>
                            <div className='col-span-2'>
                                <button type="submit" className='bg-orange border-orange border-2 text-white rounded-2xl px-4 py-2 text-center w-full'>
                                    Unirme
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='h-16 md:h-24  absolute bottom-0 flex justify-center  rounded-b-[50px] w-full overflow-hidden bg-[url("/static/images/texture-bottom.png")]'>
                    <div className='text-xs rounded-tl-2xl rounded-tr-2xl bg-white w-fit absolute p-3 bottom-0 z-10'>
                        {process.env.NEXT_PUBLIC_NAME_PROJECT} 2022 - Derechos reservados
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Register