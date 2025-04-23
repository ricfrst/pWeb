import Image from "next/image";

export default function Navbar() {
    return (

        <div className="shadow-3xl w-full flex">

            <div className="PFP flex m-4 gap-3 items-center w-[30%]">
                <Image src={"/please.jpg"}
                       alt='pfp'
                       width="70"
                       height="70"
                       className="rounded-full"/>

                <p className="text-[30px] font-black"> Rick Furst </p>
            </div>

            <div className="INTRO w-[70%] flex flex-col  justify-center text-center">
                <p className="text-xl font-black"> Weston, FL </p>
                <p className="text-s font-semibold"> Feel free to contact me using ricardofurst06@gmail.com </p>
            </div>

        </div>

    )
}