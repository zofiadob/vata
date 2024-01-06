'use client'
import { useState } from "react";
import arrowIcon from '../../public/arrow.svg'
import Image from "next/image";

interface Props {
    reviews: {
        owner: string,
        desc: string,
        company: string,
    }[]
}

export default function Carousel({ reviews }: Props) {
    const [current, setCurrent] = useState(0);
    const pointsArray = Array.apply(null, Array(reviews.length)).map(function (x, i) { return i; })

    const previousSlide = () => {
        if (current !== 0) {
            setCurrent(current - 1)
        }
    };

    const nextSlide = () => {
        if (current !== reviews.length - 1) {
            setCurrent(current + 1)
        }
    };

    const dotClick = (point: number) => {
        setCurrent(point)
    }

    return (
        <>
            <div className="flex justify-center relative w-full">
                <div className='bg-white text-main-violet rounded-2xl py-6 px-6 lg:px-14 text-left w-full md:w-2/3 max-w-2/3'>
                    <div className='text-md font-bold md:text-xl lg:text-2xl mb-1 md:mb-4'>{reviews[current].owner}</div>
                    <div className='text-sm md:text-md mb-4'>{reviews[current].desc}</div>
                    <div className='text-xs text-light-violet text-right md:text-md'>{reviews[current].company}</div>
                </div>
                <div
                    onClick={previousSlide}
                    className="rotate-90 absolute hidden md:block md:left-0 top-32 md:top-16 ease-out duration-300 cursor-pointer hover:bg-white hover:bg-opacity-30 p-3 rounded-md"
                >
                    <Image
                        src={arrowIcon}
                        alt="arrow left"
                        width={40}
                        height={40} />
                </div>
                <div
                    onClick={nextSlide}
                    className="-rotate-90 absolute hidden md:block -right-5 md:right-0 top-32 md:top-16 ease-out duration-300 cursor-pointer hover:bg-white hover:bg-opacity-30 p-3 rounded-md"
                >
                    <Image
                        src={arrowIcon}
                        alt="arrow right"
                        width={40}
                        height={40} />
                </div>
            </div>
            <div className="flex justify-center m-6 gap-6">
                {pointsArray.map(point => (
                    point === current ?
                        <div key={point} className="w-3 h-3 bg-white cursor-pointer rounded-lg"></div> :
                        <div key={point} onClick={() => dotClick(point)} className="w-3 h-3 bg-white bg-opacity-50 cursor-pointer rounded-lg"></div>
                ))}
            </div>
        </>
    );
}