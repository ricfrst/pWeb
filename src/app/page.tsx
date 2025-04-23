"use client";
import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Image from "next/image";
import fs from 'fs';
import path from 'path';
import remark from 'remark';
import html from 'remark-html';


export default async function Page() {

    return (

        <div className="MAIN flex border  flexbox h-full w-screen ">
            <div className = "m-4 flex justify-between">
                <h1>  Hey there! Im Rick,  an aspiring software engineer, and am currently studying CS and finance at Florida State University!  </h1>
            </div>

        </div>


    );
}




