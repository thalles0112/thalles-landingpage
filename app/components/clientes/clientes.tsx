'use client'
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function Tecnologias(){
    
  
    const slider:any = useRef(null)
    const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })

    const tecnologias = [
        {
            name: 'Next Js',
            img: '/stacks/nextjs.png'    
        },
        {
            name: 'React JS',
            img: '/stacks/reactjs.png'    
        },
        {
            name: 'Django',
            img: '/stacks/django.png'    
        },
        {
            name: 'Redux',
            img: '/stacks/redux.png'    
        },
        {
            name: 'Tray',
            img: '/stacks/tray.png'    
        },
        {
            name: 'Loja integrada',
            img: '/stacks/li.png'    
        },
    ]
    
    useEffect(()=>{
        let elem = slider.current as unknown as HTMLDivElement
        let { width, height } = elem.getBoundingClientRect()
        if (slider.current) {
            setCarouselSize({
                width,
                height,
            })
        }
        console.log(carouselSize.width)
    },[])

    
    return(
        <div className="w-full flex justify-center">
            <div className="w-10/12">
                <h2>#Tecnologias que domino</h2>
                <ul className="flex overflow-x-scroll">
                    <div ref={slider} className="flex">
                        {tecnologias.map(tecnologia=>{
                            return(
                                <li key={tecnologia.name} className="w-80 h-80 mx-1 flex items-center flex-col justify-center ">
                                   <Image src={tecnologia.img} width={200} height={100} alt={tecnologia.name}/>
                                   
                                </li>
                            )
                        })}
                    </div>
                </ul>   
                
            </div>
            
        </div>
    )
}