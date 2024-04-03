import Image from "next/image";
import './style.css'
import Link from "next/link";

export default function HomeBanner(){
    return(
        <div className="flex justify-center banner-wrapper relative">
            <div className="bg-wrapper">
                <Image className="absolute right-0 bottom-0" src={'/assets/thalles.png'} width={500} height={2200} alt=""/>
                <Image className="fixedbg" src={'/assets/wallbg.jpg'} width={2000} height={2200} alt=""/>
            </div>
            
           <div className="flex items-center h-full justify-between w-10/12 relative">
            <div className="banner-text-wrapper z-1">
                <p className="text-3xl font-light">
                    Desenvolvo sites<br/> 
                    bonitos, responsivos<br/>
                    e escaláveis que <br/>
                    <strong className="font-bold">geram resultados</strong>
                </p>


                <Link href={"#contato"} className="flex justify-center w-fit items-center h-12 rounded-3xl px-8 mt-5 button-bg">
                    Contato
                </Link>
            </div>

            
            
            </div>
        </div>
    )
}