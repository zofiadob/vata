import React from 'react'

interface Props {
    text: string,
}

function Text({ text }: Props) {
    return (
        <div className='text-center md:text-left text-lg md:text-xl lg:text-2xl leading-snug'>{text}</div>
    )
}

export default Text