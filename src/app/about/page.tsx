"use client";
import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Image from "next/image";
import Link from "next/link";



export default function Page() {

    return (

        <div className="MAIN flex font-serif m-5 flexbox h-full mr-66 mt-17 ">
            <div className = "flex flex-col m-4">
                <p className="font-bold text-xl mb-1">About me</p>
                <p className="font-bold text-l text-gray-400 mb-3">A little about myself </p>

                <p className="font-bold text-l mb-3 mt-6">Florida State University </p>
                <a className = "whitespace-normal break-words w-[450px] leading-relaxed">I was admitted into FSU originally to
                    study finance, though halfway down the road I came to the realization that,
                    while I was interested in the coursework, that was not what I wanted to do for the rest
                    of my life. Thanks to my close friends and roommate,
                    I became interested in their CS coursework, and quickly began studying on my own.</a>

            </div>

        </div>


    );
}




