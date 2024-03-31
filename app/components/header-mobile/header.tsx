'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import Sidebar from "./sidebar";

export default function MobileHeader(){
    const [open, setOpen] = useState(false)

    function closer(){
        setOpen(false)
    }

    return(
        <nav className="mobile-only fixed bottom-0 nav-height w-full flex items-center justify-between bg-black px-5">
           <Sidebar closer={closer} open={open}/>
  
            <button onClick={()=>setOpen(true)} className="">
                <MdMenu size={34}/>
            </button>

            <Link className="" href={'#inicio'}>
                <Image src={'/assets/logo.svg'} width={80} height={106} alt="thalles oliveira"/>
            </Link>

           
        </nav>
    )
}