import React from 'react'

interface Props {
    value: string,
    changeValue: (arg0: string) => void,
    placeholder: string,
    longField?: boolean
}

export default function Input({ value, changeValue, placeholder, longField = false }: Props) {

    const style = 'text-dark-grey border border-dark-grey w-full px-5 py-2 rounded-xl'

    return (
        <>
            {longField ?
                (<textarea className={style} rows={5} cols={80} id="message" placeholder={placeholder} value={value} />) :
                (<div className='m-1'>
                    <input
                        className={style}
                        value={value}
                        placeholder={placeholder}
                        onChange={(event) => { changeValue(event.currentTarget.value) }} />
                </div>)
            }
        </>
    )
}
