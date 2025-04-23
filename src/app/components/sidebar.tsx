import Image from "next/image";

export default function Sidebar(){
    return(
        <div className=" MAIN SIDE flex flex-col w-[33%] items-end mt-15">
            <div className="PFP flex flex-col m-4 gap-3 items-end ">
                <Image src={"/please.jpg"}
                       alt='pfp'
                       width="60"
                       height="60"
                       className="rounded-full"/>
                <a className="font-bold">Rick Furst</a>

            </div>
            <div role="tablist" className="tabs flex-col mt-3 tabs-border w-[45%] items-end">
                <a role="tab" className="tab">About</a>
                <a role="tab" className="tab">Portfolio</a>
                <a role="tab" className="tab tab-active">Reading List</a>
                <a role="tab" className="tab">Education</a>
            </div>
        </div>

    )

}