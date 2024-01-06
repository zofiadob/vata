'use client'
import { useState } from "react";
import arrowIcon from '../../public/arrow.svg'
import Image from "next/image";



export default function Carousel({ reviews }) {
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current !== 0) {
            setCurrent(current - 1)
        }
    };

    let nextSlide = () => {
        if (current !== reviews.length - 1) {
            setCurrent(current + 1)
        }
    };

    return (
        <div className="flex justify-center relative w-full slide">
            <div className='bg-white text-main-violet rounded-2xl py-6 px-6 lg:px-14 text-left w-2/3 max-w-2/3'>
                <div className='text-md font-bold md:text-xl lg:text-2xl mb-1 md:mb-4'>{reviews[current].owner}</div>
                <div className='text-sm md:text-md mb-4'>{reviews[current].desc}</div>
                <div className='text-xs text-light-violet text-right md:text-md'>{reviews[current].company}</div>
            </div>
            <div
                onClick={previousSlide}
                className="rotate-90 absolute left-0 top-16 ease-out duration-300 cursor-pointer hover:bg-white hover:bg-opacity-30 p-3 rounded-md"
            >
                <Image
                    src={arrowIcon}
                    alt="arrow left"
                    width={40}
                    height={40} />
            </div>
            <div
                onClick={nextSlide}
                className="-rotate-90 absolute right-0 top-16 ease-out duration-300 cursor-pointer hover:bg-white hover:bg-opacity-30 p-3 rounded-md"
            >
                <Image
                    src={arrowIcon}
                    alt="arrow right"
                    width={40}
                    height={40} />
            </div>
        </div>
    );
}