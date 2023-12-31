import React from 'react'

interface Props {
    variant: "normal" | "outline",
    text: string,
    func?: () => void,
}

function CustomButton({variant, text, func}: Props) {

    let style;
    if(variant === 'outline'){
        style = 'border-white bg-white text-center text-main-violet'
    }

  return (
    <div className='m-4 p-4 w-full border-radiu rounded-2xl cursor-pointer font-bold transition 1s border-solid border-2 border-main-violet bg-white text-center text-main-violet hover:bg-light-violet hover:text-white'>{text}</div>
  )
}

export default CustomButton