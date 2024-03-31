import Image from "next/image";
import './style.css'
import Link from "next/link";

export default function HomeBanner(){
    return(
        <div className="flex justify-center banner-wrapper relative">
            <div className="bg-wrapper">
                <Image className="fixedbg desktop-only" src={'/assets/thallesnopc.jpeg'} width={2500} height={2200} alt=""/>
                <Image className="fixedbg mobile-only" src={'/assets/thallesnopcmobile.jpeg'} width={2500} height={2200} alt=""/>
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