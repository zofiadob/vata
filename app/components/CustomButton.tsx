'use client'
import Link from 'next/link';
import React from 'react'

interface Props {
  variant: "normal" | "outline",
  text: string,
  clickTo: string,
}

function CustomButton({ variant, text, clickTo }: Props) {

  let style;
  if (variant === 'outline') {
    style = 'border-white bg-white text-center text-main-violet'
  }

  return (
    <Link
      href={clickTo}
      className='p-4 w-full border-radiu rounded-2xl md:text-xl cursor-pointer font-bold transition 1s border-solid border-2 border-main-violet bg-white text-center text-main-violet hover:bg-light-violet hover:text-white after:opacity-0 after:bg-transparent hover:after:opacity-0'>
      {text}
    </Link>
  )
}

export default CustomButton