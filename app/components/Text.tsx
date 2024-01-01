import React from 'react'

interface Props {
    text: string,
}

function Text({ text }: Props) {
    return (
        <div className='text-8'>{text}</div>
    )
}

export default Text