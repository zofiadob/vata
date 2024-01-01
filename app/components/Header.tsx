import React from 'react'

interface Props {
    text: string,
    align: "left" | "right",
}

function Header({ text, align }: Props) {

    const alignVariants ={
        left: 'md:text-left',
        right: 'md:text-right',
    }

    return (
        <h1 className={`text-4xl md:text-5xl text-center w-full ${alignVariants[align]} font-krona`}>{text}</h1>
    )
}

export default Header