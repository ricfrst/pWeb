import Image from "next/image";
import Link from "next/link";

export default function Sidebar(){
    return(
        <div className=" MAIN SIDE flex flex-col w-[30%] items-end mt-15">
            <div className="PFP flex flex-col m-4 gap-2 items-end">
                <Link href={"/"} className="transition-transform duration-300 hover:rotate-10"><Image src={"/please.jpg"}
                       alt='pfp'
                       width="60"
                       height="60"
                className="rounded-full cursor-pointer"/></Link>
                <a></a>
                <a className="font-bold text-white-500 hover:text-gray-500 transition-colors duration-300">Rick Furst</a>

            </div>
            <div role="tablist" className="tabs flex-col  w-[45%] items-end">
                <Link href="/about" role="tab" className="tab hover:text-white transition-colors duration-300">About</Link>
                <Link href="/portfolio" role="tab" className="tab">Portfolio</Link>
                <a role="tab" className="tab">Reading List</a>
                <a role="tab" className="tab">Education</a>
            </div>
        </div>

    )

}