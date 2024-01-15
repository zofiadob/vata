'use client'
import Link from 'next/link';
import React from 'react'

interface Props {
  variant: "normal" | "outline",
  text: string,
  clickTo: string,
}

function CustomButton({ variant, text, clickTo }: Props) {

  const style = variant === 'outline' ?
    'p-2 w-full rounded-2xl md:text-xl cursor-pointer font-bold transition 1s border-solid border-2 border-main-violet text-center after:bg-transparent border-white bg-white text-main-violet hover:bg-light-violet hover:text-white' :
    'p-2 w-full rounded-2xl md:text-xl cursor-pointer font-bold transition 1s border-solid border-2 border-main-violet text-center after:bg-transparent bg-main-violet text-white hover:bg-light-violet border-light-violet'

  return (
    <Link
      href={clickTo}
      className={style}>
      {text}
    </Link>
  )
}

export default CustomButton