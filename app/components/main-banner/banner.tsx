import Image from "next/image";
import './style.css'
import Link from "next/link";

export default function HomeBanner(){
    return(
        <div id="inicio" className="flex justify-center banner-wrapper relative">
            <div className="bg-wrapper">
                <Image className="absolute right-0 bottom-0" src={'/assets/thalles-bom.png'} width={700} height={700} alt=""/>
                <Image className="fixedbg" src={'/assets/bg.jpg'} width={2200} height={500} alt=""/>
            </div>
            
           <div className="flex items-center h-full justify-between w-8/12 relative">
            <div className="banner-text-wrapper z-1">
                <h1 className="text-3xl font-bold">Thalles Oliveira</h1>
                <p className="text-xl font-light">
                    FullStack Web Developer especializado <br/>
                    em desenvolvimento frontend<br/>
                    ReactJS, NextJS e JavaScript
                </p>


                <Link href={"#contato"} className="flex justify-center w-fit items-center h-12 rounded-3xl px-8 mt-5 button-bg">
                    Contato
                </Link>
            </div>

            
            
            </div>
        </div>
    )
}