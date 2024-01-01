import React from 'react'

interface Props {
    text: string,
    align: "left" | "right",
}

function Header({ text, align }: Props) {

    const alignVariants = {
        left: 'md:text-left',
        right: 'md:text-right',
    }

    return (
        <h1 className={`text-3xl md:text-4xl lg:text-5xl text-center w-full ${alignVariants[align]} font-krona leading-tight`}>{text}</h1>
    )
}

export default Header