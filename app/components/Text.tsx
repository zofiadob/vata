import React from 'react'

interface Props {
    text: string,
}

function Text({ text }: Props) {
    return (
        <div className='text-lg'>{text}</div>
    )
}

export default Text