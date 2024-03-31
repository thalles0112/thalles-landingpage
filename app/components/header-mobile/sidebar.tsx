'use client'
import './style.css'
import { useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar({open, closer}:{open:boolean, closer: ()=>void}){
    const [isOpen, setOpen] = useState(open)
    useEffect(()=>{
        setOpen(open)
    },[open])

    function closeMenu(){
        setOpen(false)
        closer()
    }

    return(
        <div className={isOpen?'sidebar open':'sidebar closed'}>
            
            <button className='absolute bottom-12 right-5' onClick={closeMenu}>
                <IoMdClose size={24}/>
            </button>
           
               
                
                <ul className="flex flex-col items-start justify-evenly gap-y-5 w-10/12 mx-auto my-60 text-white">
                    <li onClick={closeMenu}>
                        <Link  href={'#'}>
                            Início
                        </Link>
                        <div className="underline active"></div>
                    </li>

                    <li onClick={closeMenu}>
                        <Link href={'#portifolio'}>
                            Portifólio
                        </Link>
                        <div className="underline"></div>
                    </li>

                    <li onClick={closeMenu}>
                        <Link href={'#sobre-mim'}>
                            Sobre mim
                        </Link>
                        <div className="underline"></div>
                    </li>

                    <li onClick={closeMenu}>
                        <Link href={'#stacks'}>
                            Tecnologias
                        </Link>
                        <div className="underline"></div>
                    </li>

                    <Link className="flex items-center h-12 rounded-3xl px-8 button-bg absolute bottom-10" href={'#contato'}>
                        Contato
                    </Link>
                </ul>

               
            
        </div>
    )
}