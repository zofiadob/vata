import React from 'react'

interface Props {
    text: string
}

function Header({ text }: Props) {
    return (
        <h1 className="text-4xl md:text-5xl text-center md:text-left font-krona">{text}</h1>
    )
}

export default Header