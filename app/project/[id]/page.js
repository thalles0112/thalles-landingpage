'use client'
import { usePathname } from "next/navigation"
import Image from 'next/image'

export default function Project({}){
    const pathName = usePathname()
    
    return(
        <main className="page-height flex justify-center text-black">
            <div className="w-10/12 bg-white flex border-4 border-red-500 justify-center items-center flex-col">
                <p className="border p-2">Project ID: {pathName.split('/')[2]}</p>
                <Image src={'/assets/worker.gif'} width={200} height={100}/>
                <p className="font-bold">Ops, parece que essa página está em construção ainda 😐</p>
                <span className="text-sm text-gray-500">Não conta pra ninguém, mas estou desenvolvendo um CMS para integrar com essa LP</span>
            </div>
        </main>
    )
}