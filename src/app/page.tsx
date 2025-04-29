"use client";
import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Image from "next/image";
import Link from "next/link";


export default function Page() {

    return (

        <div className="MAIN flex  font-serif m-5 flexbox h-full mr-66 mt-17 ">
            <div className = "flex flex-col m-4">
                <p className="font-bold mb-1">Hey there! Im Rick </p>
                <p className="font-bold text-gray-400 mb-3">Miami, FL </p>

                <p className="mb-1">I am a student and aspiring software engineer.</p>
                <h1 className="font-bold mb-3 mt-6">Currently</h1>
                <a>Currently studying CS and Finance @ Florida State University</a>


                <h1 className="font-bold mb-3 mt-6">Contact Me!</h1>
                <a>Feel free to reach out on
                    <a> </a>
                    <Link href="https://www.linkedin.com/in/ricardo-furst/"
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer">
                            LinkedIn
                    </Link>
                </a>

            </div>

        </div>


    );
}




