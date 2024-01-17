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
                (<textarea
                    className={style}
                    rows={5}
                    cols={80}
                    id={placeholder}
                    placeholder={placeholder}
                    onChange={(event) => { changeValue(event.currentTarget.value) }}
                    value={value} />) :
                (<div className='m-1'>
                    <input
                        className={style}
                        value={value}
                        required
                        id={placeholder}
                        placeholder={placeholder}
                        onChange={(event) => { changeValue(event.currentTarget.value) }} />
                </div>)
            }
        </>
    )
}
