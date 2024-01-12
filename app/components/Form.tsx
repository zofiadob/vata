'use client'
import React, { useState } from 'react'
import Input from './Input'
import CustomButton from './CustomButton'

function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")

    return (
        <div className='grid grid-cols-1 bg-white gap-4 px-8 py-8 rounded-xl'>
            <Input value={name} changeValue={setName} placeholder="Name" />
            <Input value={email} changeValue={setEmail} placeholder="Email" />
            <Input value={message} changeValue={setMessage} placeholder="Message" longField={true} />
            <div className='mt-5'>
                <CustomButton variant={'normal'} text={'Submit'} clickTo={''} />
            </div>
        </div>
    )
}

export default Form