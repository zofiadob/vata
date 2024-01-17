'use client'
import React, { useState } from 'react'
import Input from './Input'
import checkIcon from '../../public/checkIcon.svg'
import Image from 'next/image';

function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")
    const [send, setSend] = useState(false)
    const [spinner, setSpinner] = useState(false)

    //simulation of sending message
    const submit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setSpinner(true);
        setTimeout(() => {
            setSend(true)
        }, 1500);
    }

    return (
        <form onSubmit={submit} className='grid grid-cols-1 bg-white gap-4 px-8 py-8 rounded-xl min-h-60'>
            {send ?
                (<div className='grid grid-col-1 text-center text-lg text-main-violet'>
                    <div className='flex justify-center'><Image src={checkIcon} alt="check icon" width={80} /></div>
                    <div>Message sended</div>
                </div>) :
                (<>
                    <Input value={name} changeValue={setName} placeholder="Name" />
                    <Input value={email} changeValue={setEmail} placeholder="Email" />
                    <Input value={message} changeValue={setMessage} placeholder="Message" longField={true} />
                    <div className='mt-5'>
                        <button
                            className='flex items-center justify-center p-2 w-full rounded-2xl md:text-xl cursor-pointer font-bold transition 1s border-solid border-2 text-center after:bg-transparent bg-main-violet text-white hover:bg-light-violet border-light-violet disabled:border-disabled-grey disabled:bg-disabled-grey'
                            type='submit'
                            disabled={spinner}
                        >
                            {spinner &&
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" viewBox="0 0 24 24">
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                </svg>}
                            Submit
                        </button>
                    </div>
                </>)}
        </form>
    )
}

export default Form