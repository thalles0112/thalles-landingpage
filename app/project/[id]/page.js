'use client'
import { usePathname } from "next/navigation"
import Image from 'next/image'

export default function Project({}){
    const pathName = usePathname()
    
    return(
        <main className="page-height bg-gray-300 flex justify-center text-black">
            <div className="w-10/12 bg-white flex border-4 border-b-yellow-500 border-r-black border-l-black border-t-yellow-500 justify-center items-center flex-col">
                <p className="border p-2">Project ID: {pathName.split('/')[2]}</p>
                <div className="flex max-w-full">
                    <Image src={'/assets/truck.png'} width={200} height={50}/>
                    <Image src={'/assets/worker.gif'} className="" width={200} height={100}/>
                </div>
                
                <p className="font-bold">Ops, parece que essa página está em construção ainda 😐</p>
                <span className="text-sm text-gray-500">Estou desenvolvendo um CMS para integrar com essa LP, logo logo tem coisinha nova aqui</span>
            </div>
        </main>
    )
}